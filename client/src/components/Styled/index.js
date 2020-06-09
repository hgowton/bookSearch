import React from 'react';
import styled from "styled-components";

export const Jumbo = styled.div `
background-color: #1F6CC7;
text-align: center;
color: white;
margin-bottom: 1rem;
`
export const Header1 = styled.h1 `
font-family: 'Fira Sans Condensed', sans-serif;
`

export const Header3 = styled.h3 `
font-family: 'Open Sans Condensed', sans-serif;
`
export const Subtitle = styled.h3 `
font-family: 'Open Sans Condensed', sans-serif;
color: white;
text-shadow: 0px 0px 3px black;
`

export const Wrapper = styled.section `
background-color: #1e6cc7;
text-align: center;
padding: 0.5rem;
margin: 1rem`

export const ImageWrapper = styled.div `
width: 100%;
height: 150px;
overflow: hidden;
position: relative;
`
export const Image = styled.img `
height: 100%;
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
`

export const Title = styled.p `
color: #1e6cc7;
font-size: 1.8rem;
font-family: 'Roboto Condensed', sans-serif;
margin-bottom: -.5rem;`

export const BookImage = styled.img `
display: block;
margin-left: auto;
margin-right: auto;
`

export const View = styled.button `
float: right;
background-color: #1e6cc7;
padding: 5px;
margin: 2px;
border-radius: 8px;
color: white;
text-decoration: none;
width: 75px;

&:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 3px 3px gray;
}
`
export const Search = styled.button `
float: right;
background-color: green;
font-size: 1.3rem;
padding: 5px;
margin: 2px;
border-radius: 5px;
color: white;
text-decoration: none;

&:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 3px 3px gray;
}
`

export const Save = styled.button `
float: right;
background-color: #146028;
padding: 5px;
margin: 2px;
border-radius: 8px;
color: white;
text-decoration: none;
width: 75px;

&:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 3px 3px gray;
}
`

export const ALink = styled.a `
text-decoration: none;

&:link, :hover, :active, :visited {
    text-decoration: none;
    color: white;
    text-shadow: 0px 0px 2px black;
}
`