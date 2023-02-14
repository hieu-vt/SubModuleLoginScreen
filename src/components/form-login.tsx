import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { Button } from './button';
import { Input } from './input';
import { Text } from './text';

import { FormLoginType } from '../model/authentication';
import { FormLoginProps } from '../type';

export const FormLogin = ({ onSubmit }: FormLoginProps) => {
  // state
  const formMethod = useForm<FormLoginType>({
    mode: 'all',
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
