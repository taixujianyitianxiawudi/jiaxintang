/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user {
  __typename: "User";
  id: number;
}

export interface Login_login {
  __typename: "AuthPayload";
  user: Login_login_user | null;
  token: string | null;
}

export interface Login {
  login: Login_login | null;
}

export interface LoginVariables {
  email: string;
  password: string;
}
