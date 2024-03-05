import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type Props = {
  valueFoo: number;
};

function loadFooValue(): Promise<string> {
  return Promise.resolve("HelloWorld");
}

export const handler: Handlers<Props> = {
  async GET(_req: Request, ctx: FreshContext) {
    const valueFoo = await loadFooValue();
    return ctx.render({ valueFoo });
  },
};

export default function MyPage({ data }: PageProps<Props>) {
  const { valueFoo } = data;
  console.log(valueFoo);
  return <p>foo is {valueFoo}</p>;
}
