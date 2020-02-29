import React, { useState } from 'react';
import FormItem from './FormItem';
import styled from 'styled-components';

const ButtonDiv = styled.div`
    text-align: right;
`

const Button = styled.button`
    margin: 0 0 0 5px
`

const CheckOk = styled.div`
    color: green;
    font-size: 1.5rem;
`

const CheckFalse = styled.div`
    color: red;
    font-size: 1rem;
`

const Content = () => {

    const [checkedName, setCheckedName] = useState(null);
    const [checkedEmail, setCheckedEmail] = useState(null);

    const inputs = document.querySelectorAll('input');
    const textarea = document.querySelector('textarea');

    const onReset = () => {
        inputs.forEach(input => {
            input.value = ''
        });
        textarea.value = '';
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (checkedEmail && checkedName) {
            if (checkedEmail.props.children.type && checkedName.props.children.type) {
                inputs.forEach(input => {
                    console.log(`${input.name}: ${input.value}`)
                });
                console.log(`${textarea.name}: ${textarea.value}`)
            }
        }
    };

    const checkItem = (e) => {
        const target = e.target;
        if (target.type === 'text') {
            return checkName(target.value);
        }
        if (target.type === 'email') {
            return checkEmail(target.value);
        }
    };

    const checkName = (value) => {
        if (value) {
            setCheckedName(<CheckOk><i className="fa fa-check-circle-o" aria-hidden="true"></i></CheckOk>)  
        } else {
            setCheckedName(<CheckFalse>Поле Имя не должно быть пустым</CheckFalse>)
        }
    };

    const checkEmail = (value) => {
        if (value.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !== -1) {
            setCheckedEmail(<CheckOk><i className="fa fa-check-circle-o" aria-hidden="true"></i></CheckOk>)  
        } else {
            setCheckedEmail(<CheckFalse>Формат почты example@gmail.com</CheckFalse>)
        }
    };

    let clazz = 'btn ';

    const checkButton = () => {
        if (checkedEmail && checkedName) {
            if (checkedEmail.props.children.type && checkedName.props.children.type) {
                clazz += 'btn-primary' 
            } else {
                clazz += 'btn-secondary'
            }
        } else {
            clazz += 'btn-secondary'
        }
    };

    checkButton();

    return (
        <div>
            <form
                onSubmit={(e) => onSubmit(e)}>
                <FormItem 
                    label={'Имя'}
                    type={'text'}
                    name={'Имя'}
                    placeholder={'Ваше имя'} 
                    checkItem={checkItem}
                    checked={checkedName}/>
                <FormItem
                    label={'E-mail'}
                    type={'email'}
                    name={'Email'}
                    placeholder={'Ваш E-mail'}
                    checkItem={checkItem}
                    checked={checkedEmail}/>
                <FormItem
                    label={'Сообщение'}
                    type={'text-area'}
                    name={'Сообщение'}
                    placeholder={'Ваше сообщение'}/>

                <ButtonDiv>
                    <Button 
                        type='reset' 
                        className='btn btn-secondary'
                        onReset={() => onReset()}>
                            Очистить</Button>
                    <Button 
                        type='submit' 
                        className={clazz}>
                            Отправить</Button>
                </ButtonDiv>                
            </form>
        </div>
    )
}

export default Content;