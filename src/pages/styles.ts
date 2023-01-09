import { styled } from '@/styles';

export const Flex = styled(`div`, {
  display: `flex`,
});

export const Button = styled(`button`, {
  border: 0,
  appearance: `none`,
  cursor: `pointer`,

  transition: `background 0.2s`,
  fontWeight: `bold`,

  $$shadowColor: ``,

  variants: {
    color: {
      primary: {
        backgroundColor: `$primary`,
        color: `#fff`,
      },
      shape: {
        backgroundColor: `$shape`,
        color: `#fff`,
      },
    },
    size: {
      small: {
        padding: `$16 $32`,
      },
      full: {
        padding: `$16 $32`,
        flex: 1,
      },
    },
    radius: {
      default: {
        borderRadius: `$default`,
      },
      full: {
        borderRadius: `$full`,
      },
    },
    shadow: {
      true: {
        boxShadow: `0 0 8px $$shadowColor`,
      },
    },
    outlined: {
      true: {
        boxShadow: `0 0 2px $$shadowColor`,
      },
    },
  },
  compoundVariants: [
    {
      color: `primary`,
      shadow: true,
      css: {
        // boxShadow: `0 0 8px $colors$primary`, // Encadeamento caso não funcione
        $$shadowColor: `$$colors$primary`,
        background: `transparent`,
      },
    },
    {
      color: `shape`,
      outlined: true,
      css: {
        // boxShadow: `0 0 8px $colors$primary`, // Encadeamento caso não funcione
        $$shadowColor: `$$colors$shape`,
        background: `transparent`,
      },
    },
  ],
  defaultVariants: {
    color: `primary`,
    size: `small`,
    radius: `default`,
    // shadow: `true`,
    outlined: `true`,
  },
});
