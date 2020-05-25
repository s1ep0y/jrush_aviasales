import React from 'react';
import '@csstools/normalize.css';
import styled from 'styled-components';
import Filter from './Filter';
import Output from './Output';
import companyLogo from '../img/logo.png';

const BodyWrapper = styled.div`
text-align: center;
display: flex;
justify-content: center;
flex-direction: row;
`;

const HeaderWraper = styled.div`
padding: 35px 0px;
display: flex;
justify-content: center;
`;

const AppStyler = styled.div`
background: #F3F7FA;
font-family: "Open Sans", sans-serif;
`;

function App() {
  return (
    <AppStyler>
      <HeaderWraper>
        <img src={companyLogo} alt="Our Logo (plane)" />
      </HeaderWraper>
      <BodyWrapper>

        <Filter />
        <Output />
      </BodyWrapper>
    </AppStyler>
  );
}

export default App;
