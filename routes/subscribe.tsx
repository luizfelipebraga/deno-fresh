import { FreshContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req: Request, ctx: FreshContext) {
    return await ctx.render();
  },

  async POST(req: Request, ctx: FreshContext) {
    const form = await req.formData();
    const email = form.get("email")?.toString();
    console.log("Email", email);

    const headers = new Headers();
    headers.set("location", "/thanks-for-subscribing");
    return new Response(form, {
      status: 303,
      headers,
    });
  },
};

export default function Subscribe() {
  return (
    <form method="post">
      <input type="email" name="email" value="" />
      <button type="submit">Subscribe</button>
    </form>
  );
}
