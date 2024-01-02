import { w, W } from 'windstitch';

export const WrapperSearch = w.div(
  `
  bg-[var(--background-color)]
  md:bg-transparent
  relative p-4
  sm:px-6
  md:px-0
  md:container 
  md:mx-auto
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);

export const InputSearch = w.input(
  `
  w-full pl-10 h-[40px] rounded-[7.29px] border-[0.91px] border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 font-roboto text-base font-normal leading-[18.24px] tracking-normal text-left
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);

export type WrapperSearchProps = W.Infer<typeof WrapperSearch>;
