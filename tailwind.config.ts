import type { Config } from 'tailwindcss';

const config: Config = {
  experimental: {
    optimizeUniversalDefaults: true
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        '5': '5px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
        '30': '30px',
        '35': '35px',
        '40': '40px',
        '45': '45px',
        '50': '50px',
        '55': '55px',
        '60': '60px',
        '65': '65px',
        '70': '70px',
        '75': '75px',
        '80': '80px',
        '85': '85px',
        '90': '90px',
        '95': '95px',
        '100': '100px'
      }
    }
  }
};
export default config;
