export type LoginBody = {
  username: string;
  password: string;
};
export type LoginResponse = {
  token?: string;
  error?: string;
};

export function login(body: LoginBody) {
  return new Promise<LoginResponse>(rs => {
    rs({ token: body.username });
  });
}

export function onSetToken(token: string) {
  console.log('From sub module', token);
}
