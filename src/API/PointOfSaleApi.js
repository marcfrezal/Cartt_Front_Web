import { gql } from "apollo-boost";

export const StoreService = gql`
    query getStores() {
      getStores() {
        _id,
        name,
        calendar,
        brand,
        location
      }
    }
`