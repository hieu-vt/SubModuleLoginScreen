import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { Button, Text } from '@components';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormLoginType } from '@model/authentication';
import { loginValidation } from '@validate/login';

import { Input } from './input';

import { FormLoginProps } from '../type';

export const FormLogin = ({ onSubmit }: FormLoginProps) => {
  // state
  const formMethod = useForm<FormLoginType>({
    mode: 'all',
    resolver: zodResolver(loginValidation),
  });

  // func
  const onSubmitKey = () => {
    formMethod.handleSubmit(onSubmit)();
  };
  // render
  return (
    <FormProvider {...formMethod}>
      <Text text="Login from submodule" />
      <Input<FormLoginType> name={'email'} label={'Email'} />
      <Input<FormLoginType> name={'password'} label={'Password'} />

      <Button preset="primary" text={'Submit'} onPress={onSubmitKey} />
    </FormProvider>
  );
};
