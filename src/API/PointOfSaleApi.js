import { gql } from "apollo-boost";

export const PointOfSalesApi = gql`
    mutation login($login : UserLoginSchema!) {
      login (authentication : $login) {
        _id,
        role
      }
    }
`