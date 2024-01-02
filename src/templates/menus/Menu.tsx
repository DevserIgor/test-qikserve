'use client';
import React, { useContext } from 'react';
import { AppContext } from '@/providers/appContextProvider';
import { CarouselSection } from '@/templates/menus/components/carouselSection/CarouselSection';
import { CarouselItemProps } from '@/@types';
import { MenuSections } from './components/menuSection/MenuSection';
import * as S from './styles';

const Menu: React.FC = () => {
  const { state } = useContext(AppContext);

  const { globalState } = state;
  const menu = globalState?.menu;
  const sections = menu?.sections;

  if (!sections || sections.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <S.WrapperMenu>
      <S.WrapperContainerMenu>
        <CarouselSection
          items={sections as unknown as CarouselItemProps[]}
          onItemSelected={(section) => console.log(section)}
        />
        <MenuSections sections={sections} />
      </S.WrapperContainerMenu>

      <S.WrapperContainerCartResume>
        <S.WrapperCartResume>
          <h1>Carrinho</h1>
        </S.WrapperCartResume>
      </S.WrapperContainerCartResume>
    </S.WrapperMenu>
  );
};

export default Menu;
