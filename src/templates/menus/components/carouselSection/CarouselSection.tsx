import React, { useState } from 'react';
import CarouselItem from '../carouselItem/CarrouselItem';
import { SectionSelectedProps } from '@/@types';
import { WrapperCarouselSection } from './styles';

export const CarouselSection: React.FC<SectionSelectedProps> = ({
  items,
  onItemSelected
}) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleSelected = (itemId: number) => {
    setSelectedItem(itemId);
    onItemSelected(itemId);
  };

  return (
    <WrapperCarouselSection>
      {items.map((item) => (
        <>
          <CarouselItem
            key={item.id}
            name={item.name}
            images={item.images}
            selected={selectedItem === item.id}
            onSelected={() => handleSelected(item.id)}
          />
        </>
      ))}
    </WrapperCarouselSection>
  );
};
