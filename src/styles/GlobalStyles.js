import { createGlobalStyle } from 'styled-components';
import {Colors} from "./styles"

const GlobalStyle = createGlobalStyle`
	/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
	*/

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		scroll-behavior: smooth;
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		color: ${Colors.black};
		vertical-align: baseline;
		line-height: 175%;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		background-color: ${Colors.background};
		font-family: 'Poppins', sans-serif;
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	hr{
        width: 100%;
        border: 1px solid ${Colors.grey};
    }
	a{
		text-decoration: none;
	}

	::-webkit-scrollbar{
    	width: 10px;	
	}
	::-webkit-scrollbar-track{
		background: ${Colors.black};
	}
	::-webkit-scrollbar-thumb{
		background: ${Colors.darkGrey};
		border-radius: 2px;
		transition: all 0.2s ease-in-out;
	}
	::-webkit-scrollbar-thumb:hover{
		background: ${Colors.primary};
	}
`;
 
export default GlobalStyle;