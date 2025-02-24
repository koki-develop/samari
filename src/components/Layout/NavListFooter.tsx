import { Anchor, Box, Text } from "@mantine/core";
import { version } from "package.json";
import { Link } from "react-router";

export default function NavListFooter() {
  return (
    <Box className="flex flex-col items-center justify-center gap-2 py-8 sm:py-4">
      <Box className="flex flex-col items-center">
        <Text c="gray" size="xs">
          &copy; 2024
        </Text>
        <Text c="gray" size="xs">
          SAMARI v{version}
        </Text>
      </Box>
      <Anchor
        href={process.env.BUN_PUBLIC_CONTACT_FORM_URL}
        c="gray"
        size="sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        お問い合わせ
      </Anchor>
      <Anchor
        href={process.env.BUN_PUBLIC_FEATURE_REQUEST_FORM_URL}
        c="gray"
        size="sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        機能要望
      </Anchor>
      <Anchor
        href="https://koki.me"
        c="gray"
        size="sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        運営者
      </Anchor>
      <Anchor c="gray" size="sm" component={Link} to="/privacy">
        プライバシーポリシー
      </Anchor>
    </Box>
  );
}
