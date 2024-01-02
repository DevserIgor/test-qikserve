import { Menu } from '@/@types';
import { WrapperMenuSections } from './styles';
import { MenuSectionItems } from '../menuSectionItems/MenuSectionItems';
import { useState } from 'react';

type MenuSectionProps = {
  sections: Pick<Menu, 'sections'>['sections'];
};
type OpenState = {
  [key: number]: boolean;
};

export const MenuSections: React.FC<MenuSectionProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState<OpenState>({});

  const handleClickedArrows = (id: number) => {
    setIsOpen({ ...isOpen, [id]: !isOpen[id] });
  };

  return (
    <WrapperMenuSections>
      {sections.map((section) => (
        <MenuSectionItems
          key={section.id}
          id={section.id}
          title={section.name}
          items={section.items}
          isOpen={isOpen[section.id]}
          onClickArrows={handleClickedArrows}
        />
      ))}
      <button className="mt-4 text-indigo-600 hover:underline">
        View allergy information
      </button>
    </WrapperMenuSections>
  );
};
