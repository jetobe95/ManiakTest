import {createContext} from 'react';

const defaultValue:any = {
  isLoading: true,
  isSignout: false,
  userToken: null,
  signIn(){},
  signOut(){}
};

export const AuthContext = createContext(defaultValue);
