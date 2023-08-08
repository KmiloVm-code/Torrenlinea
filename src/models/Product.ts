export interface Product {
  id:                    number;
  name:                  string;
  slug:                  string;
  permalink:             string;
  date_created:          Date;
  date_created_gmt:      Date;
  date_modified:         Date;
  date_modified_gmt:     Date;
  type:                  Type;
  status:                Status;
  featured:              boolean;
  catalog_visibility:    CatalogVisibility;
  description:           string;
  short_description:     string;
  sku:                   string;
  price:                 string;
  regular_price:         string;
  sale_price:            string;
  date_on_sale_from:     null;
  date_on_sale_from_gmt: null;
  date_on_sale_to:       null;
  date_on_sale_to_gmt:   null;
  on_sale:               boolean;
  purchasable:           boolean;
  total_sales:           number;
  virtual:               boolean;
  downloadable:          boolean;
  downloads:             any[];
  download_limit:        number;
  download_expiry:       number;
  external_url:          string;
  button_text:           string;
  tax_status:            TaxStatus;
  tax_class:             string;
  manage_stock:          boolean;
  stock_quantity:        null;
  backorders:            Backorders;
  backorders_allowed:    boolean;
  backordered:           boolean;
  low_stock_amount:      null;
  sold_individually:     boolean;
  weight:                string;
  dimensions:            Dimensions;
  shipping_required:     boolean;
  shipping_taxable:      boolean;
  shipping_class:        string;
  shipping_class_id:     number;
  reviews_allowed:       boolean;
  average_rating:        string;
  rating_count:          number;
  upsell_ids:            any[];
  cross_sell_ids:        any[];
  parent_id:             number;
  purchase_note:         string;
  categories:            Category[];
  tags:                  any[];
  images:                Image[];
  attributes:            Attribute[];
  default_attributes:    any[];
  variations:            number[];
  grouped_products:      any[];
  menu_order:            number;
  price_html:            string;
  related_ids:           number[];
  meta_data:             MetaDatum[];
  stock_status:          StockStatus;
  has_options:           boolean;
  _links:                Links;
  quantity:              number;
}

export interface Links {
  self:       Collection[];
  collection: Collection[];
}

export interface Collection {
  href: string;
}

export interface Attribute {
  id:        number;
  name:      string;
  position:  number;
  visible:   boolean;
  variation: boolean;
  options:   string[];
}

export enum Backorders {
  No = "no",
}

export enum CatalogVisibility {
  Visible = "visible",
}

export interface Category {
  id:   number;
  name: Name;
  slug: Slug;
}

export enum Name {
  Accesorios = "Accesorios",
  Audio = "Audio",
  Smartwatch = "Smartwatch",
}

export enum Slug {
  Accesorios = "accesorios",
  Audio = "audio",
  Smartwatch = "smartwatch",
}

export interface Dimensions {
  length: string;
  width:  string;
  height: string;
}

export interface Image {
  id:                number;
  date_created:      Date;
  date_created_gmt:  Date;
  date_modified:     Date;
  date_modified_gmt: Date;
  src:               string;
  name:              string;
  alt:               string;
}

export interface MetaDatum {
  id:    number;
  key:   Key;
  value: ValueClass | string;
}

export enum Key {
  AvadaPostViewsCount = "avada_post_views_count",
  AvadaPostViewsCountTodayDate = "avada_post_views_count_today_date",
  AvadaTodayPostViewsCount = "avada_today_post_views_count",
  Fusion = "_fusion",
}

export interface ValueClass {
  slider_visibility:                    SliderVisibility;
  slider_type:                          Backorders;
  wooslider:                            string;
  page_title_bar:                       BgRepeat;
  bg_full?:                             Backorders;
  main_padding?:                        MainPadding;
  content_bg_full?:                     Backorders;
  bg_repeat?:                           BgRepeat;
  container_hundred_percent_animation?: string;
  content_bg_repeat?:                   BgRepeat;
}

export enum BgRepeat {
  Default = "default",
}

export interface MainPadding {
  top:    string;
  bottom: string;
}

export enum SliderVisibility {
  SmallVisibilityMediumVisibilityLargeVisibility = "small-visibility,medium-visibility,large-visibility",
}

export enum Status {
  Publish = "publish",
}

export enum StockStatus {
  Instock = "instock",
}

export enum TaxStatus {
  Taxable = "taxable",
}

export enum Type {
  Simple = "simple",
  Variable = "variable",
}