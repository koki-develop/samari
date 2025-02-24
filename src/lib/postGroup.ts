import AngularIcon from "@/assets/angular.svg";
import AwsIcon from "@/assets/aws.svg";
import AzureIcon from "@/assets/azure.svg";
import BitbucketIcon from "@/assets/bitbucket.svg";
import CircleCIIcon from "@/assets/circleci.svg";
import DjangoIcon from "@/assets/django.svg";
import FirebaseIcon from "@/assets/firebase.svg";
import GitHubIcon from "@/assets/github.svg";
import GitLabIcon from "@/assets/gitlab.svg";
import GoIcon from "@/assets/go.svg";
import GoogleCloudIcon from "@/assets/google-cloud.svg";
import KotlinIcon from "@/assets/kotlin.svg";
import KubernetesIcon from "@/assets/kubernetes.svg";
import NextjsIcon from "@/assets/nextjs.svg";
import NodejsIcon from "@/assets/nodejs.svg";
import NuxtIcon from "@/assets/nuxt.svg";
import PythonIcon from "@/assets/python.svg";
import RailsIcon from "@/assets/rails.svg";
import ReactIcon from "@/assets/react.svg";
import RubyIcon from "@/assets/ruby.svg";
import RustIcon from "@/assets/rust.svg";
import SwiftIcon from "@/assets/swift.svg";
import TerraformIcon from "@/assets/terraform.svg";
import TypeScriptIcon from "@/assets/typescript.svg";
import VuejsIcon from "@/assets/vuejs.svg";

export type PostGroupName =
  // Development
  | "Bitbucket"
  | "CircleCI"
  | "GitHub"
  | "GitLab"
  // Cloud/Infrastucture
  | "AWS"
  | "Azure"
  | "Firebase"
  | "Google Cloud"
  | "Kubernetes"
  | "Terraform"
  // Libraries/Frameworks
  | "Angular"
  | "Django"
  | "Next.js"
  | "Nuxt"
  | "Rails"
  | "React"
  | "Vue.js"
  // Programming
  | "Go"
  | "Kotlin"
  | "Node.js"
  | "Python"
  | "Ruby"
  | "Rust"
  | "Swift"
  | "TypeScript";

export type PostGroup = {
  id: string;
  name: PostGroupName;
  icon: string;
};

/*
 * Development
 */

export const bitbucket: PostGroup = {
  id: "bitbucket",
  name: "Bitbucket",
  icon: BitbucketIcon,
} as const;

export const circleci: PostGroup = {
  id: "circleci",
  name: "CircleCI",
  icon: CircleCIIcon,
} as const;

export const github: PostGroup = {
  id: "github",
  name: "GitHub",
  icon: GitHubIcon,
} as const;

export const gitlab: PostGroup = {
  id: "gitlab",
  name: "GitLab",
  icon: GitLabIcon,
} as const;

/*
 * Cloud / Infrastructure
 */

export const aws: PostGroup = {
  id: "aws",
  name: "AWS",
  icon: AwsIcon,
} as const;

export const azure: PostGroup = {
  id: "azure",
  name: "Azure",
  icon: AzureIcon,
} as const;

export const firebase: PostGroup = {
  id: "firebase",
  name: "Firebase",
  icon: FirebaseIcon,
} as const;

export const googleCloud: PostGroup = {
  id: "google-cloud",
  name: "Google Cloud",
  icon: GoogleCloudIcon,
} as const;

export const kubernetes: PostGroup = {
  id: "kubernetes",
  name: "Kubernetes",
  icon: KubernetesIcon,
} as const;

export const terraform: PostGroup = {
  id: "terraform",
  name: "Terraform",
  icon: TerraformIcon,
} as const;

/*
 * Libraries / Frameworks
 */

export const angular: PostGroup = {
  id: "angular",
  name: "Angular",
  icon: AngularIcon,
} as const;

export const django: PostGroup = {
  id: "django",
  name: "Django",
  icon: DjangoIcon,
} as const;

export const nextjs: PostGroup = {
  id: "nextjs",
  name: "Next.js",
  icon: NextjsIcon,
} as const;

export const nuxt: PostGroup = {
  id: "nuxt",
  name: "Nuxt",
  icon: NuxtIcon,
} as const;

export const rails: PostGroup = {
  id: "rails",
  name: "Rails",
  icon: RailsIcon,
} as const;

export const react: PostGroup = {
  id: "react",
  name: "React",
  icon: ReactIcon,
} as const;

export const vuejs: PostGroup = {
  id: "vuejs",
  name: "Vue.js",
  icon: VuejsIcon,
} as const;

/*
 * Programming
 */

export const go: PostGroup = {
  id: "go",
  name: "Go",
  icon: GoIcon,
} as const;

export const kotlin: PostGroup = {
  id: "kotlin",
  name: "Kotlin",
  icon: KotlinIcon,
} as const;

export const nodejs: PostGroup = {
  id: "nodejs",
  name: "Node.js",
  icon: NodejsIcon,
} as const;

export const python: PostGroup = {
  id: "python",
  name: "Python",
  icon: PythonIcon,
} as const;

export const ruby: PostGroup = {
  id: "ruby",
  name: "Ruby",
  icon: RubyIcon,
} as const;

export const rust: PostGroup = {
  id: "rust",
  name: "Rust",
  icon: RustIcon,
} as const;

export const swift: PostGroup = {
  id: "swift",
  name: "Swift",
  icon: SwiftIcon,
} as const;

export const typescript: PostGroup = {
  id: "typescript",
  name: "TypeScript",
  icon: TypeScriptIcon,
} as const;
