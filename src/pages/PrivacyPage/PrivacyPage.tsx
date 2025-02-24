import { Container, Title } from "@mantine/core";
import Markdown from "react-markdown";

const content = `
### アクセス解析ツール

運営者は、お客様のアクセス解析のために、「Googleアナリティクス」を利用しています。Googleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。Cookieを無効にすれば、これらの情報の収集を拒否することができます。詳しくはお使いのブラウザの設定をご確認ください。Googleアナリティクスについて、詳しくは以下からご確認ください。

- [Terms of Service | Google Analytics – Google](https://marketingplatform.google.com/about/analytics/terms/jp/)

### プライバシーポリシーの変更

運営者は、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。
`.trim();

export default function PrivacyPage() {
  return (
    <Container classNames={{ root: "py-4" }}>
      <title>プライバシーポリシー - SAMARI</title>
      <Title order={1} size="h2">
        プライバシーポリシー
      </Title>
      <Markdown>{content}</Markdown>
    </Container>
  );
}
