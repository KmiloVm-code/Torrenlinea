export interface Category {
  id:          number;
  name:        string;
  slug:        string;
  parent:      number;
  description: string;
  display:     string;
  image:       Image | null;
  menu_order:  number;
  count:       number;
  _links:      Links;
}

export interface Links {
  self:       Collection[];
  collection: Collection[];
}

export interface Collection {
  href: string;
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