import { createGlobalStyle } from "styled-components"

export const GloballStyle = createGlobalStyle`

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
