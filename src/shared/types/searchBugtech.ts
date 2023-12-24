export interface BugtechSearchType {
  category?: Category;
  expert_reviews?: ExpertReviews;
  main?: Main;
  review?: BugtechSearchTypeReview;
  seo?: SEO;
  _id?: string;
  imid?: number;
  status?: Status;
  attributes?: Attribute[];
  primary_variant?: number;
  variants?: Variant[];
  __v?: number;
  tags?: string[];
  updatedAt?: Date;
  attributext?: { [key: string]: string };
}

export interface Attribute {
  title?: string;
  values?: string[];
  _id?: string;
}

export interface Category {
  L1?: L1;
  L2?: string;
  L3?: string;
  L4?: string;
}

export enum L1 {
  Computer = "computer",
  Laptop = "laptop",
  Mobile = "mobile",
}

export interface ExpertReviews {
  technical_properties?: TechnicalProperties;
  attributes?: any[];
  description?: string;
  short_review?: string;
  admin_rates?: any[];
  review_sections?: ReviewSection[];
}

export interface ReviewSection {
  title?: string;
  sections?: Section[];
  _id?: string;
}

export interface Section {
  template?: Template;
  text?: string;
  _id?: string;
  image?: string;
}

export enum Template {
  Image = "image",
  ImageText = "image-text",
  Text = "text",
  TextImage = "text-image",
}

export interface TechnicalProperties {
  advantages?: any[];
  disadvantages?: any[];
}

export interface Main {
  rating?: MainRating;
  dkp?: string;
  sku?: string;
  uri?: string;
  title_fa?: string;
  title_en?: string;
  short_desc?: string;
  long_desc?: string;
  brand?: BrandEnum;
  images?: string[];
}

export enum BrandEnum {
  Apple = "apple",
  Asus = "asus",
  Lenovo = "lenovo",
  Samsung = "samsung",
}

export interface MainRating {
  rate?: number;
  count?: number;
}

export interface BugtechSearchTypeReview {
  description?: string;
}

export interface SEO {
  title?: string;
  description?: string;
  markup_schema?: Array<PurpleMarkupSchema[] | FluffyMarkupSchema>;
}

export interface PurpleMarkupSchema {
  "@context"?: string;
  "@type"?: PurpleType;
  itemListElement?: ItemListElement[];
}

export enum PurpleType {
  BreadcrumbList = "BreadcrumbList",
}

export interface ItemListElement {
  "@type"?: ItemListElementType;
  position?: number;
  name?: string;
  item?: ItemClass | string;
}

export enum ItemListElementType {
  ListItem = "ListItem",
}

export interface ItemClass {
  "@type"?: ItemType;
  "@id"?: string;
}

export enum ItemType {
  Brand = "Brand",
  Corporation = "Corporation",
}

export interface FluffyMarkupSchema {
  "@context"?: string;
  "@type"?: FluffyType;
  name?: string;
  alternateName?: null | string;
  image?: string[];
  description?: string;
  mpn?: number;
  sku?: number;
  category?: string;
  brand?: BrandClass;
  offers?: Offers;
  aggregateRating?: AggregateRating;
  review?: MarkupSchemaReview;
}

export enum FluffyType {
  Product = "Product",
}

export interface AggregateRating {
  "@type"?: string;
  ratingValue?: number;
  reviewCount?: number;
}

export interface BrandClass {
  "@type"?: ItemType;
  name?: Name;
  url?: string;
  "@id"?: string;
}

export enum Name {
  اپل = "اپل",
  ایسوس = "ایسوس",
  سامسونگ = "سامسونگ",
  لنوو = "لنوو",
}

export interface Offers {
  "@type"?: OffersType;
  priceCurrency?: PriceCurrency;
  price?: number;
  itemCondition?: string;
  availability?: string;
}

export enum OffersType {
  Offer = "Offer",
}

export enum PriceCurrency {
  Irr = "IRR",
}

export interface MarkupSchemaReview {
  "@type"?: string;
  author?: string;
  datePublished?: Date;
  reviewBody?: string;
  name?: string;
  reviewRating?: ReviewRating;
}

export interface ReviewRating {
  "@type"?: string;
  bestRating?: number;
  ratingValue?: number;
  worstRating?: number;
}

export enum Status {
  Marketable = "marketable",
  Pending = "pending",
  Review = "review",
}

export interface Variant {
  price?: Price;
  shipment_methods?: ShipmentMethods;
  color?: Color;
  id?: number;
  rank?: number;
  rate?: number;
  seller?: Seller;
  warranty?: string;
  other_description?: any[];
  _id?: string;
}

export interface Color {
  title?: string;
  hex_code?: string;
}

export interface Price {
  priceRef?: PriceRef;
  discount_percent?: number;
  is_incredible?: boolean;
  is_promotion?: boolean;
  marketable_stock?: number;
  order_limit?: number;
  selling_price?: number;
  rrp_price?: number;
}

export interface PriceRef {
  rule?: Rule;
  id?: string;
  shop_names?: string[];
}

export enum Rule {
  Dkp = "dkp",
  Trb = "trb",
}

export interface Seller {
  id?: number;
  title?: string;
  code?: string;
  url?: string;
  rating?: SellerRating;
  properties?: Properties;
  stars?: number;
  registration_date?: string;
}

export interface Properties {
  is_trusted?: boolean;
  is_official?: boolean;
  is_roosta?: boolean;
  is_new?: boolean;
}

export interface SellerRating {
  total_rate?: number;
  total_count?: number;
  commitment?: number;
  no_return?: number;
  on_time_shipping?: number;
}

export interface ShipmentMethods {
  description?: Description;
  providers?: any[];
}

export enum Description {
  موجوددرانبارفروشندهوشاپسو = "موجود در انبار فروشنده و شاپسو",
}
