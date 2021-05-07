const severalLetters = ['Co-Founder Loppy', 'Loppy Web' ]

export const pages = [
  {
    //Loppy Mobile
    id: 0,
    title: severalLetters[0],
    titleArray: severalLetters[0].split(""),
    left: '-200vw',
    year: "Developed in 1230",
    idLogo: 0,
    img: {
      size: {width: 375, scale: 'transform: scale(1)'},
    },
    mainColor:"#E89924",
    slug: "cofounder",
    src: "https://www.consultantsdei.com/",
    bgFill: 'background-image: linear-gradient( 76.8deg,  rgba(16,1,58,1) 3.6%, rgba(36,31,98,1) 90.4% )',
  },

  { 
    //Loppy Web
    id: 1,
    title: severalLetters[1],
    titleArray: severalLetters[1].split(""),
    left: '-120vw',
    year: "Developed in 2020",
    idLogo: 1,
    img: {
      size: {width: 200, scale: 'transform: scale(1)'}
    },
    mainColor:"#2288BC",
    slug: "loppyweb",
    src: "https://motocentromadrid.netlify.app/",
    bgFill: 'background-image: linear-gradient( 109.6deg,  rgba(204,228,247,1) 11.2%, rgba(237,246,250,1) 100.2% );',
  },

]
