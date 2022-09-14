import { useEffect, useState } from "react";

export function useCheckServer() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    fetch("http://178.70.100.2:3000/users")
      .then((res) => {
        setIsConnected(true);
      })
      .catch(() => {
        setIsConnected(false);
      });
  }, []);

  return {
    serverIsConnected: isConnected,
  };
}
