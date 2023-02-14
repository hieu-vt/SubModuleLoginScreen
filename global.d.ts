declare module '@handler' {
  export type LoginBody = {
    username: string;
    password: string;
  };
  export type LoginResponse = {
    token?: string;
    error?: string;
  };
  export function login(body: LoginBody): Promise<LoginResponse>;
  export function onSetToken(token: string): void;
}
