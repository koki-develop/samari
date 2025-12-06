import {
  IconBook2,
  IconBrain,
  IconCloud,
  IconCode,
  type IconProps,
  IconSourceCode,
} from "@tabler/icons-react";
import type { ReactNode } from "react";
import {
  angular,
  anthropic,
  aws,
  azure,
  bitbucket,
  circleci,
  django,
  firebase,
  github,
  gitlab,
  go,
  googleCloud,
  kotlin,
  kubernetes,
  nextjs,
  nodejs,
  nuxt,
  openai,
  type PostGroup,
  python,
  rails,
  react,
  ruby,
  rust,
  swift,
  terraform,
  typescript,
  vuejs,
} from "./postGroup";

export type PostGroupCategory = {
  name: string;
  icon: ReactNode;
  groups: PostGroup[];
};

const iconProps: IconProps = {
  className: "text-gray-600",
  size: 20,
};

export const postGroupCategories: PostGroupCategory[] = [
  {
    name: "Development",
    icon: <IconSourceCode {...iconProps} />,
    groups: [bitbucket, circleci, github, gitlab],
  },
  {
    name: "AI",
    icon: <IconBrain {...iconProps} />,
    groups: [anthropic, openai],
  },
  {
    name: "Cloud / Infrastructure",
    icon: <IconCloud {...iconProps} />,
    groups: [aws, azure, firebase, googleCloud, kubernetes, terraform],
  },
  {
    name: "Libraries / Frameworks",
    icon: <IconBook2 {...iconProps} />,
    groups: [angular, django, nextjs, nuxt, rails, react, vuejs],
  },
  {
    name: "Programming",
    icon: <IconCode {...iconProps} />,
    groups: [go, kotlin, nodejs, python, ruby, rust, swift, typescript],
  },
] as const;
