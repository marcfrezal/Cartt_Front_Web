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
                    currentBrand { _id, name }
                }
            }`