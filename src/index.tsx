import React from 'react';

import { login, onSetToken } from '@handler';

import { Block } from './components/block';
import { FormLogin } from './components/form-login';
import { Screen } from './components/screen';
import { FormLoginType } from './model/authentication';

export const Login = () => {
  // func
  const handleSubmit = async (data: FormLoginType) => {
    await login({ username: data.email, password: data.password });
    onSetToken('Hello-React-Native');
  };

  // render
  return (
    <Block block paddingTop={0} paddingHorizontal={15}>
      <Screen
        bottomInsetColor="transparent"
        scroll
        style={{ paddingVertical: 0, paddingHorizontal: 10 }}
        backgroundColor={'transparent'}>
        <FormLogin onSubmit={handleSubmit} />
      </Screen>
    </Block>
  );
};
