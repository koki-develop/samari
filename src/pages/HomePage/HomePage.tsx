import { usePosts } from "@/lib/post";
import { useActivePostGroup } from "@/lib/postGroup";
import { Box, Button, Loader } from "@mantine/core";
import PostList from "./PostList";
import PostListItem from "./PostListItem";

export default function HomePage() {
  const activePostGroup = useActivePostGroup();
  const { posts, isFetching, hasNextPage, fetchNextPage } = usePosts(
    activePostGroup?.name ?? null,
  );

  return (
    <Box className="flex flex-col gap-4 p-4">
      <PostList>
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </PostList>

      {isFetching && (
        <Box className="flex justify-center">
          <Loader type="dots" />
        </Box>
      )}

      {!isFetching && hasNextPage && (
        <Box className="flex justify-center">
          <Button onClick={() => fetchNextPage()}>もっと見る</Button>
        </Box>
      )}
    </Box>
  );
}
