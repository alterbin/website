import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { recycathonMetaData } from '@/utils/static';
import { getMetadata } from '@/utils';

export const metadata: Metadata = getMetadata(recycathonMetaData);

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return children;
}
