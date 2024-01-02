import { MenuItem as MenuItemType } from '@/@types';
import { FaChevronDown } from 'react-icons/fa';
import {
  Title,
  TitleSection,
  WrapperIcon,
  WrapperItems,
  WrapperMenuSectionItems
} from './styles';
import { MenuItem } from '../menuItem/MenuItem';

type MenuSectionProps = {
  id: number;
  title: string;
  items: MenuItemType[];
  isOpen: boolean;
  onClickArrows: (id: number) => void;
};

export const MenuSectionItems: React.FC<MenuSectionProps> = ({
  id,
  title,
  items,
  isOpen,
  onClickArrows
}) => {
  return (
    <WrapperMenuSectionItems>
      <TitleSection>
        <Title>{title}</Title>
        <WrapperIcon isOpen={`${isOpen}`} onClick={() => onClickArrows(id)}>
          <FaChevronDown />
        </WrapperIcon>
      </TitleSection>
      <WrapperItems isOpen={`${isOpen}`}>
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </WrapperItems>
    </WrapperMenuSectionItems>
  );
};
