import { FreshContext } from "$fresh/server.ts";

interface State {
  isLoggedIn: boolean;
}

export async function handler(
  _req: Request,
  ctx: FreshContext<State>,
): Promise<Response> {
  ctx.state.isLoggedIn = true;
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
}
