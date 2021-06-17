/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyProfile
// ====================================================

export interface MyProfile_me {
  __typename: "User";
  id: number;
  name: string | null;
  email: string;
}

export interface MyProfile {
  me: MyProfile_me | null;
}
