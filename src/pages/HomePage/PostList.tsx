import { Accordion, Paper } from "@mantine/core";
import type { ReactNode } from "react";

export type PostListProps = {
  children: ReactNode;
};

export default function PostList({ children }: PostListProps) {
  return (
    <Paper className="overflow-hidden" withBorder>
      <Accordion multiple>{children}</Accordion>
    </Paper>
  );
}
