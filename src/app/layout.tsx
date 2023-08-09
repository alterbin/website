import '../../public/fonts/GeneralSans_Complete/Fonts/WEB/css/general-sans.css'
import '../../public/fonts/TrenchSlab_Complete/Fonts/WEB/css/trench-slab.css'

import '../../public/css/bootstrap.min.css'
import '../../public/css/colors.css'
import '../../public/scss/main.scss'
import '../../public/scss/main.scss'

import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import generateColorsCss from '@/utils/colors'
import { Metas } from '@/components/shared/metas'
import { metaData } from '@/utils/static'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: metaData.siteName,
  description: metaData.description,
  openGraph: {
    ...metaData,
    type: "website",
    images: [{
      url: metaData.image,
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: `@${metaData.url}`,
    creator: `@${metaData.siteName}`,
    images: metaData.image
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Metas>
        <style>{generateColorsCss()}</style>
      </Metas>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
