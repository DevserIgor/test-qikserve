import { w, W } from 'windstitch';

export const WrapperCarrouselItem = w.div(
  `
  cursor-pointer p-4 flex flex-col items-center justify-center
  border-b-2 
`,
  {
    variants: {
      active: {
        true: `
          border-[var(--primary-color)]
        `,
        false: `
          border-transparent`
      }
    },
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);

export const Image = w.img(
  `
  h-20 w-20 md:h-24 md:w-24 rounded-full mb-3 object-cover 
`,
  {
    variants: {
      active: {
        true: `
          ring-2 ring-[var(--primary-color)] border-2 shadow-lg
        `,
        false: `
          opacity-75 hover:opacity-100 hover:shadow-md
        `
      }
    },
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);

export const NameItem = w.span(
  `
  text-sm md:text-md font-semibold  
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type WrapperCarrouselItemProps = W.Infer<typeof WrapperCarrouselItem>;
export type ImageProps = W.Infer<typeof Image>;
export type NameItemProps = W.Infer<typeof Image>;
