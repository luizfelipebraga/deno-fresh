import { defineLayout } from "$fresh/server.ts";

async function loadData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

export default defineLayout(async (req, ctx) => {
  const data = await loadData();
  const getFirst = data[0];

  return (
    <div>
      <div>{getFirst.title}</div>
      <ctx.Component />
    </div>
  );
});
