import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const { isSignedIn } = useUser();

  if (!isSignedIn) return <Navigate to="/login" />;
  return children;
}
