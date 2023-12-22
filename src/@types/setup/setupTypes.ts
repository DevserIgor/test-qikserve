import { Menu, Restaurant, ThemeColors } from '../';

export type AppInitialState = {
  loading: boolean;
  error: string;
  globalState: {
    restaurant: Restaurant;
    theme: ThemeColors;
    menu: Menu;
  };
};
