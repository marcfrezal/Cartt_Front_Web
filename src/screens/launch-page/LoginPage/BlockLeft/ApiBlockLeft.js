import { gql } from "apollo-boost";

export const LOGIN = gql`
    mutation login($login : UserLoginSchema!) {
      login (authentication : $login) 
    }
`