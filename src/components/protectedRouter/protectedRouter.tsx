import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux";

interface ProtectedRouterProps {
  element: ReactElement;
}

export function ProtectedRouter({
  element,
}: ProtectedRouterProps): ReactElement<ProtectedRouterProps> {
  const userState = useSelector((state: RootState) => state.user);

  return userState.user?.id ? element : <Navigate to="/" />;
}
