import fs from "node:fs";
import path from "node:path";

import { Column, Media, Row, Text } from "@once-ui-system/core";
import styles from "./Figure.module.scss";
import { getImageSize } from "./imageSize";

export type FigureItem = {
  src: string;
  alt: string;
  label?: string;
};

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"];

function isVideo(src: string) {
  return VIDEO_EXTENSIONS.some((extension) => src.toLowerCase().endsWith(extension));
}

/** Media handles YouTube URLs itself, but needs an explicit ratio to reserve space. */
function isEmbed(src: string) {
  return /^https?:\/\/(www\.)?(youtube\.com|youtu\.be|player\.vimeo\.com)\//.test(src);
}

/**
 * Case-study media is only rendered when the asset actually exists in `public/`.
 * Slots waiting on supplied media (the Fender recordings) stay silent instead of
 * rendering a broken image.
 */
function assetExists(src: string) {
  if (!src.startsWith("/")) return true; // remote embeds are always rendered

  return fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

function Frame({ src, alt, ratio }: { src: string; alt: string; ratio?: string }) {
  // Media plays .mp4 as a silent loop and embeds YouTube itself; neither can be
  // measured from disk, so they fall back to 16:9 unless a ratio is given.
  if (isVideo(src) || isEmbed(src)) {
    return (
      <Media
        radius="m"
        border="neutral-alpha-medium"
        aspectRatio={ratio ?? "16 / 9"}
        alt={alt}
        src={src}
      />
    );
  }

  // Media collapses to zero height without an explicit ratio, so derive it from
  // the file rather than repeating dimensions in every MDX figure.
  const size = getImageSize(src);

  return (
    <Media
      enlarge
      radius="m"
      border="neutral-alpha-medium"
      sizes="(max-width: 768px) 100vw, 1088px"
      aspectRatio={ratio ?? (size ? `${size.width} / ${size.height}` : undefined)}
      alt={alt}
      src={src}
    />
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <Text variant="body-default-xs" onBackground="neutral-weak" marginTop="8">
      {children}
    </Text>
  );
}

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  /** Override the aspect ratio, e.g. "4 / 3". Needed only for video. */
  ratio?: string;
}

export function Figure({ src, alt, caption, ratio }: FigureProps) {
  if (!assetExists(src)) return null;

  return (
    <Column className={styles.breakout} marginTop="24" marginBottom="32">
      <Frame src={src} alt={alt} ratio={ratio} />
      {caption && <Caption>{caption}</Caption>}
    </Column>
  );
}

interface FigureRowProps {
  items: FigureItem[];
  caption?: string;
  columns?: number;
}

export function FigureRow({ items, caption, columns = 2 }: FigureRowProps) {
  const available = items.filter((item) => assetExists(item.src));
  if (available.length === 0) return null;

  return (
    <Column className={styles.breakout} marginTop="24" marginBottom="32">
      <Row
        className={styles.grid}
        style={{ "--figure-columns": String(columns) } as React.CSSProperties}
        fillWidth
        gap="16"
      >
        {available.map((item) => (
          <Column key={item.src} gap="8">
            <Frame src={item.src} alt={item.alt} />
            {item.label && (
              <Text variant="label-default-xs" onBackground="neutral-weak">
                {item.label}
              </Text>
            )}
          </Column>
        ))}
      </Row>
      {caption && <Caption>{caption}</Caption>}
    </Column>
  );
}
