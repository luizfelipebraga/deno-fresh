import { LayoutConfig, PageProps } from "$fresh/server.ts";
import MyIsland from "../islands/MyIsland.tsx";
import NestedIsland from "../islands/NestedIsland.tsx";

export const config: LayoutConfig = {
  skipInheritedLayouts: true,
};

export default function Page(props: PageProps) {
  return (
    <MyIsland>
      <NestedIsland foo="Hello World" />
    </MyIsland>
  );
}
