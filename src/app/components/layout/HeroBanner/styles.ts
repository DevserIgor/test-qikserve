import { w, W } from 'windstitch';

export const WrapperHeroBanner = w.div(
  `
  bg-hero-banner
  bg-cover bg-center
  h-[150px] w-full
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);

export type WrapperHeroBannerProps = W.Infer<typeof WrapperHeroBanner>;
