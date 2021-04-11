import { gql } from "apollo-boost";


export const GETALLBRANDSFORCOUNTING = gql`
query getBrands {
    getBrands {
        _id
    }
}`