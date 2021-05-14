import { gql } from "apollo-boost";

export const GETMYCARDS = gql`query cards {
                                getCards {
                                _id
                                creationDate
                                amount
                                amountRemainding,
                                allowedBrands {
                                    name,
                                    stores {
                                    name
                                    }
                                }
                                }
                            }`
