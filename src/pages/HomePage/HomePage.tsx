import { usePosts } from "@/lib/post";
import { useActivePostGroup } from "@/lib/postGroup";
import { groupBy } from "@/lib/util";
import { Badge, Box, Button, Loader } from "@mantine/core";
import { useMemo } from "react";
import PostList from "./PostList";
import PostListItem from "./PostListItem";

const today = new Date();
const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

const getDateText = (dateISOString: string) => {
  if (dateISOString === today.toLocaleDateString()) return "今日";
  if (dateISOString === yesterday.toLocaleDateString()) return "昨日";
  return dateISOString;
};

export default function HomePage() {
  const activePostGroup = useActivePostGroup();
  const { posts, isFetching, hasNextPage, fetchNextPage } = usePosts(
    activePostGroup?.name ?? null,
  );

  const postsGroupedByDate = useMemo(() => {
    return groupBy(posts, (post) => {
      return post.timestamp.toLocaleDateString();
    });
  }, [posts]);

  return (
    <Box className="flex flex-col p-4 pb-28">
      {Object.entries(postsGroupedByDate).map(([date, posts]) => (
        <Box key={date} className="flex flex-col gap-4">
          <Box className="sticky top-[68px] flex justify-center">
            <Badge className="shadow" size="lg" variant="outline" bg="white">
              {getDateText(date)}
            </Badge>
          </Box>

          <Box className="pb-4">
            <PostList>
              {posts.map((post) => (
                <PostListItem key={post.id} post={post} />
              ))}
            </PostList>
          </Box>
        </Box>
      ))}

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
