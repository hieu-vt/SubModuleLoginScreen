import React from 'react';

import { Block, Screen } from '@components';
import { login, onSetToken } from '@handler';
import { FormLoginType } from '@model/authentication';

import { FormLogin } from './components/form-login';

const Login = () => {
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

export default Login;
