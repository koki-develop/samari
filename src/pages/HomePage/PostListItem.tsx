import type { Post } from "@/lib/post";
import { extractHostname } from "@/lib/util";
import { Accordion, Anchor, Box, Text, Title } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

export type PostListItemProps = {
  post: Post;
};

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <Accordion.Item className="last:border-b-0" value={post.id}>
      <Accordion.Control>
        {/* source name */}
        <Box className="flex items-center gap-1">
          <img className="size-4 object-contain" src={post.group.icon} alt="" />
          <Text c="gray" size="sm">
            {post.source}
          </Text>
        </Box>
        {/* title */}
        <Title order={3} size="h4">
          {post.title}
        </Title>
        {/* headline */}
        <Text c="dark" size="sm">
          {post.headline}
        </Text>
      </Accordion.Control>

      <Accordion.Panel>
        <Box className="flex flex-col gap-2">
          {/* content */}
          <Text c="dark" size="sm">
            {post.content}
          </Text>
          {/* url */}
          <Box className="flex">
            <Anchor
              className="flex items-center"
              size="sm"
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconExternalLink className="size-4" />
              {extractHostname(post.url)}
            </Anchor>
          </Box>
        </Box>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
