/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signup
// ====================================================

export interface signup_signup_user {
  __typename: "User";
  id: number;
  email: string;
  name: string | null;
}

export interface signup_signup {
  __typename: "AuthPayload";
  user: signup_signup_user | null;
  token: string | null;
}

export interface signup {
  signup: signup_signup | null;
}

export interface signupVariables {
  name?: string | null;
  email: string;
  password: string;
}
