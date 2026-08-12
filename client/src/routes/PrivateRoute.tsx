import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Loading } from "../components/Loading";

export const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loading label="Verificando sessão..." />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
