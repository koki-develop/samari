import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Loader,
  Text,
  Title,
} from "@mantine/core";
import { IconHeadphones } from "@tabler/icons-react";
import clsx from "clsx";
import { useAtom } from "jotai";
import { useMemo } from "react";
import ApplePodcastsIcon from "@/assets/icons/apple-podcasts.svg";
import SpotifyIcon from "@/assets/icons/spotify.svg";
import { isPlayingPodcastAtom } from "@/atoms/podcast";
import { usePodcast, usePosts } from "@/lib/post";
import { useActivePostGroup } from "@/lib/postGroup";
import { groupBy } from "@/lib/util";
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
  const { cast } = usePodcast();
  const { posts, isFetching, hasNextPage, fetchNextPage } = usePosts(
    activePostGroup?.name ?? null,
  );
  const [, setIsPlayingPodcast] = useAtom(isPlayingPodcastAtom);

  const postsGroupedByDate = useMemo(() => {
    return groupBy(posts, (post) => {
      return post.timestamp.toLocaleDateString();
    });
  }, [posts]);

  const title = useMemo(() => {
    if (activePostGroup) {
      return `${activePostGroup.name} | SAMARI`;
    }
  }, [activePostGroup]);

  return (
    <Box className="flex flex-col p-4 pb-28">
      <Box className={clsx("flex justify-center", activePostGroup && "hidden")}>
        <Card
          className="mb-4 flex w-full flex-col items-center gap-3 px-8 sm:w-3/4 md:w-4/5 lg:w-1/2"
          withBorder
        >
          <Box className="flex flex-col items-center">
            <Text
              size="lg"
              fw="bold"
              classNames={{ root: "flex items-center" }}
            >
              <IconHeadphones className="mr-1 size-5" />
              SAMARI Podcast
            </Text>
            <Text size="sm">最近要約された記事を音声で紹介</Text>
          </Box>

          {cast && (
            <Box className="flex w-full flex-col items-end">
              <Text c="gray" size="sm">
                {cast.createdAt.toLocaleDateString()}に配信
              </Text>
              {/** biome-ignore lint/a11y/useMediaCaption: there is no caption available */}
              <audio
                className="w-full"
                src={cast.mp3Url}
                controls
                onPlay={() => setIsPlayingPodcast(true)}
                onPause={() => setIsPlayingPodcast(false)}
              />
            </Box>
          )}

          <Box className="flex flex-col items-center gap-1">
            <Text c="gray" size="sm">
              過去の配信
            </Text>
            <Box className="flex gap-2">
              <Anchor
                href="https://podcasts.apple.com/podcast/samari-podcast/id1858742598"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ApplePodcastsIcon}
                  className="size-7"
                  title="Apple Podcasts"
                  alt="Apple Podcasts"
                />
              </Anchor>
              <Anchor
                href="https://open.spotify.com/show/0tRiLhIRG9gQjNPHRfPPa4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={SpotifyIcon}
                  className="size-7"
                  alt="Spotify"
                  title="Spotify"
                />
              </Anchor>
            </Box>
          </Box>
        </Card>
      </Box>

      {activePostGroup && (
        <Box className="flex items-center gap-2 pb-4 sm:pb-0">
          <title>{title}</title>
          <img src={activePostGroup.icon} alt="" className="size-8" />
          <Title order={1} size="h2">
            {activePostGroup.name}
          </Title>
        </Box>
      )}

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
