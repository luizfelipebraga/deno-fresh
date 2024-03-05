import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const timeFmt = new Intl.RelativeTimeFormat("en-US"); //

type Props = {
  target: string;
};

export default function Countdown({ target }: Props) {
  const targetDate = new Date(target);
  const now = useSignal(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      if (now.value > targetDate) {
        clearInterval(timer);
      }
      now.value = new Date();
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  const secondsLeft = Math.floor(
    (targetDate.getTime() - now.value.getTime()) / 1000,
  );

  if (secondsLeft <= 0) {
    return <span>🎉</span>;
  }

  return <span>{timeFmt.format(secondsLeft, "seconds")}</span>;
}
