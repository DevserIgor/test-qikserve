export type MenuState = {
  loading: boolean;
  error: string;
  menu: Menu;
};

export type Menu = {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Section[];
};

type Section = {
  id: number;
  name: string;
  description: string | null;
  position: number;
  visible: number;
  images: Image[];
  items: MenuItem[];
};

type Image = {
  id: number;
  image: string;
};

type MenuItem = {
  id: number;
  name: string;
  description: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  images: Image[];
  available: boolean;
  modifiers?: Modifier[];
};

type Modifier = {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItem[];
};

type ModifierItem = {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  qty?: number;
  available: boolean;
};
