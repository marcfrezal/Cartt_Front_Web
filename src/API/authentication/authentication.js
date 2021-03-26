import { gql } from "apollo-boost";

export const LOGOUT= gql`
        mutation logout {
            logout
        }  
    `


export const LOGIN = gql`
    mutation login($login : UserLoginSchema!) {
      login (authentication : $login) {
            _id,
            role
            }
        }
    `