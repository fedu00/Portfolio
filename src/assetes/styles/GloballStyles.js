import { createGlobalStyle } from 'styled-components';

export const GloballStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Cormorant+Garamond:wght@300;400&display=swap');

html {
    box-sizing: border-box;
    background-color: #F0F0F0;
}

*, *::after, *::before {
    box-sizing: inherit;
}

body {
    margin: 0;
    font-family: 'Barlow', sans-serif;
}
a, button {
    font-family: 'Barlow', sans-serif;
    
}
`;
