export default function UserPage(props: any) {
  console.log(props);

  return <div>{props.params.user_id}</div>;
}
