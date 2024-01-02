import { w, W } from 'windstitch';

export const WrapperHeader = w.header(
  `
  bg-[var(--nav-background-color)] 
  flex items-center justify-center px-3
  w-full bg-gron h-[64px] z-20 relative
  md:h-[52px] md:items-end
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);

export const WrapperItemMenu = w.div(
  `
  flex items-center justify-center
  md:w-[149px] text-center md:uppercase
  md:border-b-[5px] border-[var(--nav-background-color)]
`,
  {
    variants: {
      active: {
        true: `
          md:border-[var(--background-color)]
        `,
        false: `hidden`
      }
    },
    defaultVariants: {
      active: 'false'
    },
    compoundVariants: [],
    defaultProps: {}
  }
);

export const ItemMenu = w.h1(
  `
  text-lg font-weight-[500]
  text-white pb-2 
  tracking-[0.75px]
  leading-[21.09px]
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type WrapperHeaderProps = W.Infer<typeof WrapperHeader>;
export type WrapperItemMenuProps = W.Infer<typeof ItemMenu>;
export type ItemMenuProps = W.Infer<typeof ItemMenu>;
