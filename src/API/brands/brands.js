import { gql } from "apollo-boost";

export const GETALLBRANDS = gql`
                                query getBrands {
                                    getBrands {
                                        _id,
                                        name,
                                        description,
                                        stores {
                                                _id,
                                                name,
                                                location {
                                                    country,
                                                    city,
                                                    adress1,
                                                    postcode
                                                },
                                                brand {
                                                    name
                                                }
                                        },
                                    }
                                }`

export const UPDATEBRAND = gql`
                                mutation updateBrand ($myBrand : BrandUpdateSchema!) {
                                    updateBrand (brand : $myBrand) {_id, name, description}
                                }`

export const SUPPBRAND = gql`
                            mutation removeBrand ($idBrand : Float!) {
                                removeBrand (idBrand : $idBrand) {
                                _id,
                                }
                            }`

export const CREATEBRAND = gql`
                                mutation createBrand($myBrand : BrandCreateSchema!) {
                                    createBrand (brand : $myBrand) {
                                    _id, 
                                    name
                                    }
                                }`

export const GETALLBRANDSFORCOUNTING = gql`
                            query getBrands {
                                getBrands {
                                    _id
                                }
                            }`
