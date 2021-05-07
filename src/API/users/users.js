import { gql } from "apollo-boost";

export const ME = gql`
            query custom_me {
                me {
                    _id,
                    firstname,
                    lastname,
                    email,
                    birthDate,
                    phone,
                    brands {
                        _id,
                        name
                    },
                    currentBrand {
                        _id, name
                    }
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
                    phone,
                    currentBrand {
                        _id, 
                        name
                    },
                    brands {
                        _id, 
                        name
                    },

                } 
            }`

export const UPDATEUSER = gql`
            mutation updateUser($user : UserUpdateSchema!) {
                updateUser(user : $user) {
                _id, 
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

export const LINKUSER = gql 
                            `mutation linkUserWithBrand($idUser : String!, $idBrand : Float!) {
                                linkUserWithBrand (idUser : $idUser, idBrand : $idBrand) {
                                    _id
                                }
                            }`

export const SWITCHUSER = gql
                        `mutation switch($idUser : String!, $idBrand : Float!) {
                            switchBrand(idUser : $idUser, idBrand : $idBrand) {
                              email,
                            }
                          }`