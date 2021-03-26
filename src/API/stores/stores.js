import { gql } from "apollo-boost";

export const GETALLSTORES = gql`
            query getStores {
                getStores {
                    _id,
                    name,
                    calendar,
                    brand {
                        name
                    }
                }
            }`