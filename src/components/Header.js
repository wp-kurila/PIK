import React from 'react';
import styled from 'styled-components'

const H2 = styled.h2`
    text-align: center;
    margin: 0 0 30px;
`

const Header = () => {

    return (
        <div>
            <H2>Необходимо заполнить форму</H2>
        </div>
    )
}

export default Header;