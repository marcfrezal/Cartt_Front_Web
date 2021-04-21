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

export const GETALLUSERS = gql`
            query users {
                users {
                _id, 
                role, 
                email, 
                firstname,
                lastname,
                phone
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

export const CREATEUSER = gql`
            mutation createUser($user : UserCreateSchema!) {
                createUser(user : $user) {
                _id, 
                role, 
                email, 
                birthDate,
                firstname,
                lastname,
                phone
                } 
            }`

export const SUPPUSER = gql`
            mutation createUser($user : UserSchema) {
                updateUser(user : $user) {
                _id, 
                role, 
                email, 
                firstname,
                lastname,
                phone
                } 
            }`
