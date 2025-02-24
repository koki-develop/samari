import { useInfiniteQuery } from "@tanstack/react-query";
import {
  type QueryDocumentSnapshot,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore/lite";
import { firestore } from "./firebase";
import type { PostGroup, PostGroupName } from "./postGroup";

export type Post = {
  id: string;
  group: PostGroup;

  url: string;
  source: string;
  title: string;

  headline: string;
  content: string;

  timestamp: Date;
};

type GetPostsParams = {
  group: PostGroupName | null;
  after: QueryDocumentSnapshot | null;
};

const _getPosts = async (
  params: GetPostsParams,
): Promise<{
  posts: Post[];
  next: QueryDocumentSnapshot | null;
}> => {
  const count = 30;

  const postsCollection = collection(firestore, "posts");
  const postsQuery = query(
    postsCollection,
    where("status", "==", "SUMMARIZED"),
    limit(count),
    ...(params.group ? [where("group", "==", params.group)] : []),
    orderBy("timestamp", "desc"),
    ...(params.after ? [startAfter(params.after)] : []),
  );

  const snapshot = await getDocs(postsQuery);
  const posts = snapshot.docs.map((doc) => {
    const data = doc.data();
    const post: Post = {
      id: doc.id,
      group: data.group,

      url: data.url,
      source: data.source,
      title: data.title,

      headline: data.summarized_headline,
      content: data.summarized_content,

      timestamp: data.timestamp.toDate(),
    };
    return post;
  });

  return {
    posts,
    next:
      snapshot.docs.length === count ? (snapshot.docs.at(-1) ?? null) : null,
  };
};

export const usePosts = (group: PostGroupName | null) => {
  const { data, error, ...values } = useInfiniteQuery({
    queryKey: ["posts", group],
    gcTime: 60 * 30 * 1000,
    initialPageParam: null as QueryDocumentSnapshot | null,
    queryFn: async ({ pageParam }) => {
      const { posts, next } = await _getPosts({ group, after: pageParam });
      return { posts, next };
    },
    getNextPageParam: (lastPage) => lastPage.next,
    select: (data) => data.pages.flatMap((page) => page.posts),
  });

  return {
    ...values,
    posts: data ?? [],
  };
};
