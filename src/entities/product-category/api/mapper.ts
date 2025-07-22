import { ProductCategoryDTO } from "./dto";

export interface ProductCategory {
  name: string;
  slug: string;
}

export const toProductCategory = (dto: ProductCategoryDTO): ProductCategory => {
  // TODO: apply i18n
  const slugToName = {
    beauty: "화장품",
    fragrances: "향수",
    furniture: "가구",
    groceries: "식품",
    "home-decoration": "홈데코",
    "kitchen-accessories": "주방용품",
    laptops: "노트북",
    "mens-shirts": "남성 셔츠",
    "mens-shoes": "남성 신발",
    "mens-watches": "남성 시계",
    "mobile-accessories": "모바일 액세서리",
    motorcycle: "오토바이",
    "skin-care": "스킨케어",
    smartphones: "스마트폰",
    "sports-accessories": "스포츠 액세서리",
    sunglasses: "선글라스",
    tablets: "태블릿",
    tops: "상의",
    vehicle: "차량",
    "womens-bags": "여성 가방",
    "womens-dresses": "여성 드레스",
    "womens-jewellery": "여성 귀걸이",
    "womens-shoes": "여성 신발",
    "womens-watches": "여성 시계",
  };

  return {
    slug: dto.slug,
    name: slugToName[dto.slug as keyof typeof slugToName] || dto.name,
  };
};
