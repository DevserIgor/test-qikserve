import { w, W } from 'windstitch';

export const WrapperMenuItem = w.div(
  `
  flex justify-between items-center py-2
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type WrapperMenuItemProps = W.Infer<typeof WrapperMenuItem>;

export const WrapperTitleItem = w.div(
  `
  flex flex-col justify-center items-start
  gap-2
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type WrapperTitleItemProps = W.Infer<typeof WrapperTitleItem>;

export const TitleItem = w.h2(
  `
  font-medium text-base leading-[18.75px]

`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type TitleItemProps = W.Infer<typeof TitleItem>;

export const Description = w.p(
  `
  font-light text-base leading-[18.75px] text-[var(--color-text-secondary)]
  pr-5
  line-clamp-2
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type DescriptionProps = W.Infer<typeof Description>;

export const WrapperImage = w.div(
  `
  w-[128px] h-[85px]
  flex justify-center items-center
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);

export const Image = w.img(
  `
  min-h-[85px] min-w-[128px]
  h-[85px] w-[128px] mb-3 object-cover 
  rounded-[4px]
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type ImageProps = W.Infer<typeof Image>;
