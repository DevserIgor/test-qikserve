import { w, W } from 'windstitch';

export const WrapperMenuSectionItems = w.div(
  `
  pt-4
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type WrapperMenuSectionItemsProps = W.Infer<
  typeof WrapperMenuSectionItems
>;

export const TitleSection = w.div(
  `
  w-full flex-row
  flex items-center justify-between
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type TitleSectionProps = W.Infer<typeof TitleSection>;

export const Title = w.h1(
  `
  font-medium
  text-2xl mb-3
  leading-[28.13px]
  tracking-[0.5px]

`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type TitleProps = W.Infer<typeof Title>;

export const WrapperIcon = w.span(
  `
  transition-transform duration-500 ease-in-out
`,
  {
    variants: {
      isOpen: {
        true: `transform rotate-180`,
        false: ``
      }
    },
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type WrapperIconProps = W.Infer<typeof WrapperIcon>;

export const WrapperItems = w.div(
  `
  overflow-hidden transition-all duration-500 ease-in-out
`,
  {
    variants: {
      isOpen: {
        true: ` max-h-max-content opacity-100`,
        false: `max-h-0 opacity-0`
      }
    },
    defaultVariants: {
      isOpen: 'false'
    },
    compoundVariants: [],
    defaultProps: {}
  }
);
export type WrapperItemsProps = W.Infer<typeof WrapperItems>;
