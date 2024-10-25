import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // TEXTS
        'title-purple': '#4F2989',
        // SURFACES
        fondoBlanco: '#FFFFFF',
        fondoGris: '#F2F2F2',
        fondoLila: '#C8BCF6',
        shadowBlue: '#81D1FF',
        grisNavBar: '#F6F4FE',
        moradoTop: '#E0DAFAE5',

        moradoPrincipal: '#916CE6',
        moradoLight: '#C8BCF6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Poppins: 'Poppins',
        PlayfairDisplay: 'PlayfairDisplay',
      },
    },
  },
  plugins: [],
};
export default config;
