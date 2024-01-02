import { MenuItem as MenuItemType } from '@/@types';
import * as S from './styles';
import { useFormatPrice } from '@/hooks/useFormatPrice';

export const MenuItem: React.FC<MenuItemType> = ({
  name,
  description,
  price,
  images
}) => {
  const formatPrice = useFormatPrice();
  const priceFormatted = formatPrice(price);

  return (
    <S.WrapperMenuItem>
      <S.WrapperTitleItem>
        <S.TitleItem>{name}</S.TitleItem>
        {description && <S.Description>{description}</S.Description>}
        <span className="text-lg">{priceFormatted}</span>
      </S.WrapperTitleItem>
      {images && (
        <S.WrapperImage>
          <S.Image src={images[0].image} alt={name} />
        </S.WrapperImage>
      )}
    </S.WrapperMenuItem>
  );
};
