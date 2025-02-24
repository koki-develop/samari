import { usePosts } from "@/lib/post";
import { Box } from "@mantine/core";
import PostList from "./PostList";
import PostListItem from "./PostListItem";

export default function HomePage() {
  const { posts } = usePosts(null); // TODO: get from query params

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
