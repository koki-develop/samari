import { usePosts } from "@/lib/post";
import { useActivePostGroup } from "@/lib/postGroup";
import { Box } from "@mantine/core";
import PostList from "./PostList";
import PostListItem from "./PostListItem";

export default function HomePage() {
  const activePostGroup = useActivePostGroup();
  const { posts } = usePosts(activePostGroup?.name ?? null);

  return (
    <Box className="p-4">
      <PostList>
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </PostList>
    </Box>
  );
}
