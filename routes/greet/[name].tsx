import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Ola mundo");
    return resp;
  },
};

export default function Greet(props: PageProps) {
  return <div>oi {props.params.name}</div>;
}
