import { createGlobalStyle } from "styled-components"

export const GloballStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@300;400;500;600&display=swap');

html {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.backGroundColor};
}

*, *::after, *::before {
    box-sizing: inherit;
}

body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
}
a, button {
    font-family: 'Poppins', sans-serif;
    
}
`
