import { gql } from "apollo-boost";

export const GETALLSTORES = gql`
                    query getStores {
                        getStores {
                        name,
                        brand {
                            name
                        }
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

export const CREATESTORE = gql`
                    mutation createStore($mystore : StoreCreateSchema!) {
                        createStore (store : $mystore) {
                            _id, 
                            name,
                            brand {
                                name,
                                _id
                            },
                        }
                    }`

export const SUPPSTORE = gql`
                    mutation removeStore ($idStore : Float! ) {
                        removeStore (idStore : $idStore) {
                        name
                        }
                    }`
