import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setonlineStatus(false);
    });
    window.addEventListener("offline", () => {
      setonlineStatus(true);
    });
  }, []);

  return onlineStatus;
};
export default useOnlineStatus;
