import fs from "node:fs";
import path from "node:path";

type Size = { width: number; height: number };

const cache = new Map<string, Size | null>();

function readPngSize(buffer: Buffer): Size | null {
  const isPng = buffer.length > 24 && buffer.readUInt32BE(0) === 0x89504e47;
  if (!isPng) return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function readJpegSize(buffer: Buffer): Size | null {
  if (buffer.length < 4 || buffer.readUInt16BE(0) !== 0xffd8) return null;

  let offset = 2;
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    // Start-of-frame markers carry the dimensions; DHT/DAC/RST/SOS do not.
    const isStartOfFrame =
      marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;

    if (isStartOfFrame) {
      return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
    }

    offset += 2 + buffer.readUInt16BE(offset + 2);
  }

  return null;
}

/**
 * Intrinsic size of an image in `public/`, read straight from the file header so
 * figures can declare an aspect ratio without hardcoding dimensions in MDX.
 */
export function getImageSize(src: string): Size | null {
  if (cache.has(src)) return cache.get(src) ?? null;

  let size: Size | null = null;
  try {
    const filePath = path.join(process.cwd(), "public", src.replace(/^\//, ""));
    const handle = fs.openSync(filePath, "r");
    try {
      const buffer = Buffer.alloc(Math.min(65536, fs.fstatSync(handle).size));
      fs.readSync(handle, buffer, 0, buffer.length, 0);
      size = readPngSize(buffer) ?? readJpegSize(buffer);
    } finally {
      fs.closeSync(handle);
    }
  } catch {
    size = null;
  }

  cache.set(src, size);
  return size;
}
