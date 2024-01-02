import { w, W } from 'windstitch';

export const WrapperCarouselSection = w.div(
  `
  w-full flex items-center justify-center
  gap-6 px-4
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);

export type WrapperCarouselSectionItemProps = W.Infer<
  typeof WrapperCarouselSection
>;
