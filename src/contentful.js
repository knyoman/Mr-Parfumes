/**
 * Contentful CMS Configuration
 * 
 * Konfigurasi client untuk mengambil data dari Contentful CMS.
 */

import { createClient } from 'contentful';

// Contentful client configuration
const client = createClient({
  space: 'acwojfocngb7',
  accessToken: 'unbiNuXHOzGd7FR4Skry3D__T_a7mKFSor5ia2baj3E',
});

export default client;
