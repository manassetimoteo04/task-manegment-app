import { useEffect, useState } from "react";
import { getUserImageName } from "../services/apiHelpers";

export function useGetUserImg(userId) {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function getUser() {
      const data = await getUserImageName(userId);
      setUser(data);
    }
    getUser();
  }, [userId]);
  return [user];
}
