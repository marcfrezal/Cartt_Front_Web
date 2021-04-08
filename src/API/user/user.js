import { gql } from "apollo-boost";

export const ME = gql`
            query custom_me {
                me {
                    _id,
                    firstname,
                    lastname,
                    role,
                    email,
                    birthDate,
                    phone,
                }
            }`

export const UPDATEUSER = gql`
            mutation updateUser($user : UserUpdateSchema!) {
                updateUser(user : $user) {
                _id, 
                role, 
                email, 
                firstname,
                lastname,
                phone
                } 
            }`