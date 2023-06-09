import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {createContext, default as React, useEffect, useState} from 'react';
import {BASE_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = () => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/jwt-auth/v1/token`, {
        username,
        password,
      })
      .then(res => {
        console.log(res.data);
        let userInfo = res.data;
        setUserInfo(userInfo);
        setUserToken(userInfo.data.token);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        AsyncStorage.setItem('userToken', userInfo.data.token);
      })
      .catch(e => {
        console.log(`Login error ${e}`);
      });
    // setUserToken('dk');
    // AsyncStorage.setItem('userToken', 'dk');
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userInfo = await AsyncStorage.getItem('userInfo');
      let userToken = await AsyncStorage.getItem('userToken');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }
      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log(`isLogged in error ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{login, logout, isLoading, userToken, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
