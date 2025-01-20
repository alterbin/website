import config from './config';

export const metaData = {
  siteName: 'Alterbin',
  title: 'Alterbin',
  description: 'Alterbin provides creative and innovative initiatives to transform waste for a suitable future.',
  image: `${config.SITE_URL}/media/landing.png`,
  keywords: 'Waste disposal, Repurposing, Solid waste management, Waste collection, Environmental waste management, Trash disposal, Waste reduction, Waste management services, Sustainable waste management, Residential waste management, Green waste management, Municipal waste management, Waste management company, Waste management solutions, Waste management and repurposing, Waste management best practices, Waste management guidelines',
  url: config.SITE_URL,
  geo: {
    placeName: 'Lagos',
    position: '6.5474147;3.3639306',
    region: 'NG',
  },
};

export const recycathonMetaData = {
  ...metaData,
  siteName: 'Alterbin | Recycathon',
  title: 'Alterbin | Recycathon',
  description: 'A competitive solution aimed at addressing waste management challenges and encouraging creative solutions to the issue.',
};
