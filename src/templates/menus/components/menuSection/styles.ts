import { w, W } from 'windstitch';

export const WrapperMenuSections = w.div(
  `
  w-full px-0
  p-5
`,
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
    defaultProps: {}
  }
);

export type WrapperMenuSectionsProps = W.Infer<typeof WrapperMenuSections>;
