import { fetchCurrentUser, validateToken } from '@/lib/actions/user.actions';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

type AppContext = {
  isLoggedIn: boolean;
  currentUser: User;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isError } = useQuery({
    queryKey: ['validateToken'],
    queryFn: validateToken,
  });

  const { data: currentUser } = useQuery({
    queryKey: ['getUser'],
    queryFn: fetchCurrentUser,
  });

  return (
    <AppContext.Provider value={{ isLoggedIn: !isError, currentUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context as AppContext;
};
