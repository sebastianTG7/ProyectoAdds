'use client';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { forwardRef } from 'react';

export type LinkProps = NextLinkProps & {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
  return <NextLink ref={ref} {...props} />;
});

export default Link;
