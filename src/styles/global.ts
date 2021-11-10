import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    html, body{
        max-width: 100vw;
        max-height: 100vh;
    }

    button {
        cursor: pointer;
        background: none;
        border: none;

        &:focus {
            outline: none;
        }
    }

    a {
        text-decoration: none;
    }

    svg, svg path {
        margin: 0;
    }

    :root {
        //colors
        --color-primary:    #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary:  #EB5757;
        --grey-0:           #F5F5F5;
        --grey-100:         #E0E0E0;
        --grey-300:         #828282;
        --grey-600:         #333333;
        --negative:         #E60000;
        --warning:          #FFCD07;
        --success:          #168821;        
        --information:      #155BCB;
        //font
        --Heading1:         700 26px sans-serif;
        --Heading2:         700 22px sans-serif;
        --Heading3:         700 18px sans-serif;
        --Headline:         400 16px sans-serif;
        --Body:             400 14px sans-serif;
        --Body-600:         600 14px sans-serif;
        --Caption:          400 12px sans-serif;
    }
`;
