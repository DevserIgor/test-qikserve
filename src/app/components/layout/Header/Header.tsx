'use client';

import HamburguerIcon from './HamburguerIcon/HamburguerIcon';
import * as S from './styles';

type itemMenu = {
  active: boolean;
  title: string;
};

type MenuItems = itemMenu[];

export const Header: React.FC = () => {
  const menuItems: MenuItems = [
    { title: 'Menu', active: true },
    { title: 'Entrar', active: false },
    { title: 'Contato', active: false }
  ];
  return (
    <S.WrapperHeader>
      {menuItems.map((value, item) => (
        <S.WrapperItemMenu
          key={item}
          className={`${value.active ? 'block' : 'hidden md:block'}`}
          active={`${value.active}`}
        >
          <S.ItemMenu>{value.title}</S.ItemMenu>
        </S.WrapperItemMenu>
      ))}
      <HamburguerIcon />
    </S.WrapperHeader>
  );
};
