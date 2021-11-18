import { gql } from "apollo-boost";

export const GETALLBRANDS = gql`
  query getBrands {
    getBrands {
      _id
      name
      description
      stores {
        _id
        name
        location {
          country
          city
          adress1
          postcode
        }
        brand {
          name
        }
      }
      image
      status
    }
  }
`;

export const UPDATEBRAND = gql`
  mutation updateBrand($myBrand: BrandUpdateSchema!) {
    updateBrand(brand: $myBrand) {
      _id
      name
      description
      status
    }
  }
`;

export const SUPPBRAND = gql`
  mutation removeBrand($idBrand: Float!) {
    removeBrand(idBrand: $idBrand) {
      _id
    }
  }
`;

export const CREATEBRAND = gql`
  mutation createBrand($myImg: Upload, $myBrand: BrandCreateSchema!) {
    createBrand(content: $myImg, brand: $myBrand) {
      _id
      name
    }
  }
`;

export const GETALLBRANDSFORCOUNTING = gql`
  query getBrands {
    getBrands {
      _id
    }
  }
`;

export const UPLOADIMG = gql`
  mutation uploadBrandImage($content: Upload, $idBrand: Float!) {
    uploadBrandImage(content: $content, idBrand: $idBrand) {
      _id
      image
    }
  }
`;

export const SET_BRAND_THEME = gql`
  mutation setBrandTheme($theme: ObjectAny, $idBrand: Float!) {
    setBrandTheme(theme: $theme, idBrand: $idBrand) {
      _id
      name
      description
      categories
      status
      domain
      theme
      image
    }
  }
`;

export const GET_BRAND = gql`
  query getBrand($idBrand: Float!) {
    getBrand(idBrand: $idBrand) {
      _id
      name
      description
      categories
      status
      domain
      theme
      image
      stores {
        _id
        name
        location {
          country
          city
          adress1
          postcode
        }
      }
    }
  }
`;
