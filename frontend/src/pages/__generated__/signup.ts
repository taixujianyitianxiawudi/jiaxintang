/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignUp
// ====================================================

export interface SignUp_signup_user {
  __typename: "User";
  id: number;
  email: string;
  name: string | null;
}

export interface SignUp_signup {
  __typename: "AuthPayload";
  user: SignUp_signup_user | null;
  token: string | null;
}

export interface SignUp {
  signup: SignUp_signup | null;
}

export interface SignUpVariables {
  name?: string | null;
  email: string;
  password: string;
}
