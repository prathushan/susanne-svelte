import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const config = {
  projectId: 'd28l9drw', 
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
};


export const client = createClient(config);
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);