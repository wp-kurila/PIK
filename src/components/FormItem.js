import React, { useState } from 'react';
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0 20px;
    font-size: 1.1rem;
`

const Label = styled.label`
    width: 12%;
    text-align: right;
    margin: 0 10px 0 0;
`

const Input = styled.input`
    margin: 0 10px 0 0;
    width: 50%;  
`

const TextArea = styled.textarea`
    margin: 0 10px 0 0;
    width: 50%;
    resize: none;
`

const FormItem = ({label, type, name, placeholder, checkItem, checked}) => {

    const changeArea = (e) => {
        const target = e.target
        if (target.value === '') {
            target.style.height = '62px';
        }
        if (target.scrollTop > 0) {
            target.style.height = target.scrollHeight + 'px';
        }
    };

    return (
        <Div>
            <Label>{label}</Label>
            {
                type === 'text-area' ? (
                    <TextArea
                        name={name}
                        className='form-control'
                        placeholder={placeholder}
                        onChange={e => changeArea(e)}/>
                ) : (
                    <Input
                        type={type}
                        name={name} 
                        className='form-control'
                        placeholder={placeholder}
                        onChange={e => checkItem(e)}/> 
                    )
            }
            {checked ? checked : null}
        </Div>
    )
}

export default FormItem;