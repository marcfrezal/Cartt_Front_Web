import { gql } from "apollo-boost";

export const GETALLSTORES = gql`
                    query getStores {
                        getStores {
                        name,
                        location {
                            country,
                            city,
                            adress1,
                            postcode
                        },
                        }
                    }`

export const GETALLSTORESFORCOUNTING = gql`
query getStores {
    getStores {
        _id
    }
}`