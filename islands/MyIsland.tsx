import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
};

export default function MyIsland(props: Props) {
  const count = useSignal(0);

  const handleClick = () => {
    count.value += 1;
  };

  return (
    <div>
      Counter is at {count}. <button onClick={handleClick}>Increment</button>
      {props.children}
    </div>
  );
}
