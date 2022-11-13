import { useEffect, useState } from "react";

export function useCheckServer() {
  const [isConnected, setIsConnected] = useState(false);
  
  useEffect(() => {
    fetch("http://127.0.0.1:55000/users")
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
