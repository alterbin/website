import { metaData as staticMetaData } from './static';

export function wipAlert() {
  // eslint-disable-next-line no-alert
  alert('WIP :)');
}

export function getMetadata(metaData = staticMetaData) {
  return {
    title: metaData.title,
    description: metaData.description,
    openGraph: {
      title: metaData.title,
      description: metaData.description,
      url: metaData.url,
      siteName: metaData.siteName,
      type: 'website',
      images: [{
        url: metaData.image,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      site: metaData.twitterHandle || undefined,
      creator: metaData.twitterHandle || undefined,
      images: metaData.image,
    },
  };
}
