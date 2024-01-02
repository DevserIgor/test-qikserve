export type Section = {
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

export type MenuItem = {
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

export type CarouselItemProps = Pick<Section, 'id' | 'name' | 'images'> & {
  selected: boolean;
  onSelected: () => void;
};

export type SectionSelectedProps = {
  items: CarouselItemProps[]; // Use o tipo correto para os itens
  onItemSelected: (itemId: number) => void; // Adicione um parâmetro para identificar o item selecionado
};
