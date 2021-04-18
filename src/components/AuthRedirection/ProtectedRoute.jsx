import { useEffect } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router';

export default function ProtectedRoute({isAuthenticated, authenticationPath, redirectPath, setRedirectPath, ...routeProps}) {
  const currentLocation = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setRedirectPath(currentLocation.pathname);
    }
  }, [isAuthenticated, setRedirectPath, currentLocation]);

  if(isAuthenticated && redirectPath === currentLocation.pathname) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: isAuthenticated ? redirectPath : authenticationPath }} />;
  }
};