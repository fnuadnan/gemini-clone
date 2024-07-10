import { useEffect, useRef } from "react";

const useMsgEnd = (messages: string) => {
  const msgEnd = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (msgEnd.current) {
      msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return msgEnd;
};

export default useMsgEnd;
