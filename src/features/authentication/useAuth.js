import { useSelector } from "react-redux";

export function useAuth() {
  const { role, isLoading } = useSelector((state) => state.auth);
  return { isAuthenticaded: role === "authenticated", isLoading };
}
