import { CarouselItemProps } from '@/@types';
import React from 'react';
import * as S from './styles';

const CarouselItem: React.FC<Omit<CarouselItemProps, 'id'>> = ({
  name,
  images,
  selected,
  onSelected
}) => {
  return (
    <S.WrapperCarrouselItem
      role="button"
      tabIndex={0}
      onClick={onSelected}
      onKeyDown={onSelected}
      active={`${selected}`}
    >
      <S.Image active={`${selected}`} src={images[0].image} alt={name} />

      <S.NameItem>{name}</S.NameItem>
    </S.WrapperCarrouselItem>
  );
};

export default CarouselItem;
