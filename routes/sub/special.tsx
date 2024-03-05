import { LayoutConfig } from "$fresh/server.ts";

export const config: LayoutConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
};

export default function MyPage() {
  return <p>Hello world</p>;
}
