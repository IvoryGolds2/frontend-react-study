import React from 'react';
import styled, { ThemeProvider } from "styled-components";

const theme = {
  white: '#fff',
  black: '#000',
  bodyBg: '#f4f5f6',
  grayBg: '#dfdfdf',
  disabled: '#f7f7f7',
  gray100: '#f1f1f1',
  gray200: '#eee',
  gray300: '#ccc',
  gray400: '#aaa',
  gray500: '#999',
  gray600: '#777',
  gray700: '#555',
  gray800: '#333',
  gray900: '#111',
  blue: '#41a1ea',
  indigo: '#727cf5',
  purple: '#6b5eae',
  pink: '#ff679b',
  red: '#f05b5b',
  orange: '#fd7e14',
  yellow: '#ffbc00',
  green: '#0acf97',
  teal: '#02a8b5',
  cyan: '#39afd1',
};

const Wrapper = styled.div `
  width: 500px;
  height: 500px;
  background-color: ${props => props.pink ? 'pink' : '#c2e0fdec'};
  font-size: large;
`;

const Btn = styled.button`
  background-color: ${props => props.pink ? '#ff46c8' : '#30beff'};
  border-radius: 20px;
  width: 300px;
  height: 100px;
  margin: 50px;
`;

function MyStyle(props) {
  return (
  <ThemeProvider theme={theme}>
    <Wrapper pink={true}>
      <div>안녕</div>
      <Btn pink={false}>귀여운 버튼</Btn>
    </Wrapper>
  </ThemeProvider>
  );
}

export default MyStyle;