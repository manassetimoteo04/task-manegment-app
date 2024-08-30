import { useSelector } from "react-redux";

export function useUser() {
  const { role, isLoading } = useSelector((state) => state.auth);
  return { isLoading, isAuth: role === "authenticated" };
}
