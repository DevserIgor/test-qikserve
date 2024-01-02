import { w, W } from 'windstitch';

export const WrapperMenu = w.div(
  `
  sm:bg-[var(--background-color)]
  md:bg-transparent
  lg:bg-transparent
  md:container 
  md:mx-auto
  md:flex 
  md:gap-4
  md:align-start
  md:h-auto
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type WrapperMenuProps = W.Infer<typeof WrapperMenu>;

export const WrapperContainerMenu = w.div(
  `
  bg-[var(--background-color)]
  sm:px-6 md:lg:px-8
  md:shadow-lg 
  sm:w-full md:w-2/3 lg:w-2/3
  md:h-auto
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type WrapperContainerMenuProps = W.Infer<typeof WrapperContainerMenu>;

export const WrapperContainerCartResume = w.div(
  `
  hidden bg-[var(--background-color)] 
  p-4 shadow-lg
  md:flex md:flex-row
  md:w-1/3 lg:w-1/3 xl:w-1/3z
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type WrapperContainerCartResumeProps = W.Infer<
  typeof WrapperContainerCartResume
>;

export const WrapperCartResume = w.div(
  `
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);
export type WrapperCartResumeProps = W.Infer<typeof WrapperCartResume>;
