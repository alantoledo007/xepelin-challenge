import { createGlobalStyle } from 'styled-components';
import PoppinsLight from '@/assets/fonts/Poppins/Poppins-Light.ttf';
import PoppinsRegular from '@/assets/fonts/Poppins/Poppins-Regular.ttf';
import PoppinsSemiBold from '@/assets/fonts/Poppins/Poppins-SemiBold.ttf';

const GlobalStyles = createGlobalStyle`
    
   
    @font-face {
        font-family: Poppins300;
        src: local('PoppinsLight'), url(${PoppinsLight}) format('truetype');
    }
    @font-face {
        font-family: PoppinsNormal;
        src: local('PoppinsRegular'), url(${PoppinsRegular}) format('truetype');
    }
    @font-face {
        font-family: Poppins600;
        src: local('PoppinsSemiBold'), url(${PoppinsSemiBold}) format('truetype');
    }
    
    * {
        box-sizing: border-box;
        padding:0;
        margin:0;
    }

    body {
        background-color: #141531;
        font-family: PoppinsNormal, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 1rem;
    }

    a {
        color: inherit;
        text-decoration: none;
        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

    b, strong {
        font-family: Poppins600
    }

    .route-wrapper {
        position: relative;
    }

    .route-wrapper > div {
        position: absolute;
    }

    textarea:focus, input:focus{
        outline: none;
    }
`;

export default GlobalStyles;
