import { Handlers, LayoutConfig, PageProps } from "$fresh/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

type Data = {
  results: string[];
  query: string;
  isLoggedIn: boolean;
};

export const config: LayoutConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
};

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("query") ?? "";
    const results = NAMES.filter((name) => name.toLowerCase().includes(query));
    const isLoggedIn = ctx.state.isLoggedIn as boolean;
    return ctx.render({ results, query, isLoggedIn });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query, isLoggedIn } = data;
  console.log(isLoggedIn);
  return (
    <div>
      <form>
        <input type="text" name="query" value={query} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((name, index) => <li key={index}>{name}</li>)}
      </ul>
    </div>
  );
}
