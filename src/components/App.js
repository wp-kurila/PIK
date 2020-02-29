import React from 'react';
import Header from './Header';
import Content from './Content';
import styled from 'styled-components'

const Div = styled.div`
    background-color: #ffffff;
    width: 70%;
    margin: 10% auto 0;
    padding: 20px;
    border-radius: 5px;
`

const App = () => {

    return (
        <Div>
            <Header />
            <Content />
        </Div>
    )
}

export default App;