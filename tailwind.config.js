/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
            whiteSmoke: '#f3f3f3',
            yinMnBlue: '#3D5A80',
            airForceBlue: '#6B8EAD',
            powderBlue: '#98C1D9',
            columbiaBlue: '#C6DAE6',
            burntSienna: '#EE6C4D',
            darkerBurntSienna: 'rgb(238, 90, 55)',
            gunmetal: '#293241',
            lapisLazuli: '#49678C',
            prussianBlue: '#223347',
            gradientStart: '#243B55',
            gradientEnd: '#141E30',
            footer: '#0B1321',
            projectCardGradientStart: '#536976',
            projectCardGradientEnd: '#292E49',


            cardBackground: 'rgba(243, 243, 243, 0.05)',
        },
        boxShadow: {
            'card': '0px 4px 14px 3px rgba(0, 0, 0, 0.25)'

        },
        
    },
    fontFamily: {
        'sans': ['Questrial'],
        'body': ['Questrial']
    }
  },
  plugins: [],
}
