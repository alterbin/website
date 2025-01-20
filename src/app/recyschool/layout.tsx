import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { recyschoolMetaData } from '@/utils/static';
import { getMetadata } from '@/utils';

export const metadata: Metadata = getMetadata(recyschoolMetaData);

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return children;
}
