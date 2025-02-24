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

export const getPostGroup = (name: PostGroupName): PostGroup => {
  return _groups[name];
};
