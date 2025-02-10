import { createGlobalStyle } from "styled-components";
import InterTtf from "./inter/Inter-VariableFont_opsz,wght.ttf";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url(${InterTtf}) format('truetype');
    }
`;

export default FontStyles;
