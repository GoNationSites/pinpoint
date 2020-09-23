// globalStyles.js
import { createGlobalStyle } from "styled-components"

// this needs to be imported into gatsby.
// at the moment the export in ssr and groswer files isn't taking this export

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Aleo:wght@300;400;700&family=Raleway:wght@300;400;500;600;700;800;900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Aleo:wght@300;400;700&display=swap');

html,
body {
  font-family: "Raleway", sans-serif;
  overflow-x: hidden;
  font-weight: 600;
  color:green;
  margin: 0!important;
}

body {
    margin: 0;
}

img {
  object-fit: cover;
  width: 100%;
}
`

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const theme = {
  primary: `#D50032`,
  secondary: `#009CDE`,
  third: "#00BB7E",
  tertiary: `rgb(202, 54, 37)`,
  dark: `#231f20`,
  light: `#F7F7F7`,
  text: `#1E242B`,
  glass: `#5C666F`,
  light2: `#D0D2D3`,
  pink: "#C7579A",

  //optional extras but not really used yet
  sizes: {
    XXS: `0.25rem`,
    XS: `0.5rem`,
    S: `0.75rem`,
    M: `1rem`,
    L: `1.25rem`,
    XL: `1.5rem`,
    XXL: `2rem`,
    XXXL: `4rem`,
  },
  fonts: {
    bodyFont: `"Raleway", sans-serif;`,
    headingFont: `"Aleo", cursive;`,
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    desktopL: "1440px",
  },
  custom: {
    navHeight: "95.88px",
    navHeightDesktop: "200px",
  },
}
