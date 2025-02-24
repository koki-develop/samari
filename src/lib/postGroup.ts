import AngularIcon from "@/assets/icons/angular.svg";
import AwsIcon from "@/assets/icons/aws.svg";
import AzureIcon from "@/assets/icons/azure.svg";
import BitbucketIcon from "@/assets/icons/bitbucket.svg";
import CircleCIIcon from "@/assets/icons/circleci.svg";
import DjangoIcon from "@/assets/icons/django.svg";
import FirebaseIcon from "@/assets/icons/firebase.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import GitLabIcon from "@/assets/icons/gitlab.svg";
import GoIcon from "@/assets/icons/go.svg";
import GoogleCloudIcon from "@/assets/icons/google-cloud.svg";
import KotlinIcon from "@/assets/icons/kotlin.svg";
import KubernetesIcon from "@/assets/icons/kubernetes.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import NodejsIcon from "@/assets/icons/nodejs.svg";
import NuxtIcon from "@/assets/icons/nuxt.svg";
import PythonIcon from "@/assets/icons/python.svg";
import RailsIcon from "@/assets/icons/rails.svg";
import ReactIcon from "@/assets/icons/react.svg";
import RubyIcon from "@/assets/icons/ruby.svg";
import RustIcon from "@/assets/icons/rust.svg";
import SwiftIcon from "@/assets/icons/swift.svg";
import TerraformIcon from "@/assets/icons/terraform.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import VuejsIcon from "@/assets/icons/vuejs.svg";
import { useLocation, useSearchParams } from "react-router";

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

const _icons: Record<PostGroupName, string> = {
  // Development
  Bitbucket: BitbucketIcon,
  CircleCI: CircleCIIcon,
  GitHub: GitHubIcon,
  GitLab: GitLabIcon,
  // Cloud/Infrastructure
  AWS: AwsIcon,
  Azure: AzureIcon,
  Firebase: FirebaseIcon,
  "Google Cloud": GoogleCloudIcon,
  Kubernetes: KubernetesIcon,
  Terraform: TerraformIcon,
  // Libraries/Frameworks
  Angular: AngularIcon,
  Django: DjangoIcon,
  "Next.js": NextjsIcon,
  Nuxt: NuxtIcon,
  Rails: RailsIcon,
  React: ReactIcon,
  "Vue.js": VuejsIcon,
  // Programming
  Go: GoIcon,
  Kotlin: KotlinIcon,
  "Node.js": NodejsIcon,
  Python: PythonIcon,
  Ruby: RubyIcon,
  Rust: RustIcon,
  Swift: SwiftIcon,
  TypeScript: TypeScriptIcon,
};

const _getPostGroupIcon = (name: PostGroupName): string => {
  return _icons[name];
};

const _buildPostGroup = (id: string, name: PostGroupName): PostGroup => {
  return { id, name, icon: _getPostGroupIcon(name) };
};

// Development
export const bitbucket: PostGroup = _buildPostGroup("bitbucket", "Bitbucket");
export const circleci: PostGroup = _buildPostGroup("circleci", "CircleCI");
export const github: PostGroup = _buildPostGroup("github", "GitHub");
export const gitlab: PostGroup = _buildPostGroup("gitlab", "GitLab");
// Cloud / Infrastructure
export const aws: PostGroup = _buildPostGroup("aws", "AWS");
export const azure: PostGroup = _buildPostGroup("azure", "Azure");
export const firebase: PostGroup = _buildPostGroup("firebase", "Firebase");
export const googleCloud: PostGroup = _buildPostGroup(
  "google-cloud",
  "Google Cloud",
);
export const kubernetes: PostGroup = _buildPostGroup(
  "kubernetes",
  "Kubernetes",
);
export const terraform: PostGroup = _buildPostGroup("terraform", "Terraform");
// Libraries / Frameworks
export const angular: PostGroup = _buildPostGroup("angular", "Angular");
export const django: PostGroup = _buildPostGroup("django", "Django");
export const nextjs: PostGroup = _buildPostGroup("nextjs", "Next.js");
export const nuxt: PostGroup = _buildPostGroup("nuxt", "Nuxt");
export const rails: PostGroup = _buildPostGroup("rails", "Rails");
export const react: PostGroup = _buildPostGroup("react", "React");
export const vuejs: PostGroup = _buildPostGroup("vuejs", "Vue.js");
// Programming
export const go: PostGroup = _buildPostGroup("go", "Go");
export const kotlin: PostGroup = _buildPostGroup("kotlin", "Kotlin");
export const nodejs: PostGroup = _buildPostGroup("nodejs", "Node.js");
export const python: PostGroup = _buildPostGroup("python", "Python");
export const ruby: PostGroup = _buildPostGroup("ruby", "Ruby");
export const rust: PostGroup = _buildPostGroup("rust", "Rust");
export const swift: PostGroup = _buildPostGroup("swift", "Swift");
export const typescript: PostGroup = _buildPostGroup(
  "typescript",
  "TypeScript",
);

const _groups: Record<PostGroupName, PostGroup> = {
  // Development
  Bitbucket: bitbucket,
  CircleCI: circleci,
  GitHub: github,
  GitLab: gitlab,
  // Cloud / Infrastructure
  AWS: aws,
  Azure: azure,
  Firebase: firebase,
  "Google Cloud": googleCloud,
  Kubernetes: kubernetes,
  Terraform: terraform,
  // Libraries / Frameworks
  Angular: angular,
  Django: django,
  "Next.js": nextjs,
  Nuxt: nuxt,
  Rails: rails,
  React: react,
  "Vue.js": vuejs,
  // Programming
  Go: go,
  Kotlin: kotlin,
  "Node.js": nodejs,
  Python: python,
  Ruby: ruby,
  Rust: rust,
  Swift: swift,
  TypeScript: typescript,
};

export const getPostGroupByName = (name: PostGroupName): PostGroup => {
  return _groups[name];
};

export const getPostGroupById = (id: string): PostGroup | null => {
  for (const group of Object.values(_groups)) {
    if (group.id === id) {
      return group;
    }
  }

  return null;
};

export const useActivePostGroup = (): PostGroup | null => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  if (pathname !== "/") return null;

  const activeGroupId = searchParams.get("g");
  if (activeGroupId == null) return null;

  return getPostGroupById(activeGroupId);
};
