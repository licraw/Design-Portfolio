import { ProjectCard } from "@/components";
import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    if (a.metadata.order !== undefined || b.metadata.order !== undefined) {
      return (
        (a.metadata.order ?? Number.MAX_SAFE_INTEGER) -
        (b.metadata.order ?? Number.MAX_SAFE_INTEGER)
      );
    }

    return (
      new Date(b.metadata.publishedAt ?? 0).getTime() -
      new Date(a.metadata.publishedAt ?? 0).getTime()
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          preview={post.metadata.preview}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
