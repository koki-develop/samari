import type { PostGroup } from "./postGroup";

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
