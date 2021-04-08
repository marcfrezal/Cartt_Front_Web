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