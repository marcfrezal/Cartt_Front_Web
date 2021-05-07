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

export const SETSTORELOCATION = gql`
                                    mutation setStoreLocation($location : LocationCreateSchema, $idStore : Float!) {
                                        setStoreLocation (location : $location, idStore : $idStore) {
                                        _id,
                                        location {
                                            _id,
                                            city, 
                                            adress1, 
                                            country, 
                                            postcode
                                        }, 
                                        name
                                        }
                                    }` 
