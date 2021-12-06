import React from 'react';
import styled from 'styled-components'
import {Input} from '../elements/elementsIndex'

function App() {
  return (
    <BackImg>
      <Wrap>
        <Input></Input>
      </Wrap>
    </BackImg>
  );
}

const BackImg = styled.div`
  background-color: #eee;
`

const Wrap = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  height: 100%;
  min-height: 100vh;
  margin:0 auto;
  position: relative;
`

export default App;
 