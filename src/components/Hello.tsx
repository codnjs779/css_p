import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import { I18nextProvider, FormattedString } from "i18Lib";
const Hello = () => {
    //case 1 : 객체들 공통으로 name을 가지고 있고 age는 선별적으로 가짐.(optional parameter)
    const player : {
        name:string,
        age?:number,
    } = {
        name:"chae_won",
    }

    //case 2 : alias type 정의
    type Player = {
        name:string,
        age?:number,
    }

    const jane : Player = {
        name:'mini'
    }

    const mini: Player = {
        name:'lynn',
        age:20
    }

    //case 3 : function
    function playerMaker(name:string, age:number) : Player {
        return {
            name:name,
            age:age
        }
    }
    const nico = playerMaker('chae', 202020);

    //case 4 : readOnly
    type Cookies = {
        readonly name:string,
        age?:number,
    }

    function deliCookies(name:string, age:number) : Cookies {
        return {
            name:name,
            age:age,
        }
    }

    const allCookies = deliCookies('choco', 500);
    // deliCookies.name = 'mintChoco'
// obj 변경 불가! - readOnly 항목

    // case 5 : 특정 위치에 특정 타입이 있어야 할 때 - tuple
    const position: [string, number, boolean] = ["nico", 1, true];
    // const position: readonly [string, number, boolean] = ["nico", 1, true];

    // case 6 : 어떤 타입인지 알지 못할 경우 unknown
    let a:unknown;

    if(typeof a === 'number'){
        let b = a + 1
    }
    if(typeof a === 'string'){
        let b = a.toUpperCase();
    }
    // case 7  아무것도 return 하지 않는 함수의 경우 void
    // case 8 : 함수에 타입 만들기 -> call signature
    type Add = (a:number, b:number) => number;
    const add:Add = (a,b) => a + b;

    // case 9 : 오버로딩 overloading
    // 9-1인자가 옵셔널 타입을 가질 경우
    type Multiple = {
        (a: number, b:number) : number
        (a: number, b:string) : number
    }
    const minus: Multiple = (a, b) => {
        if(typeof b === 'string') return a
        return a + b
    }

    // 주로 이런 경우에 많이 사용 됨.
    type Config = {
        path: string,
        state: object
    }

    type Push = {
        (path:string):void
        (config:Config):void
    }

    const push: Push = (config) => {
        if(typeof config === 'string') {
            console.log(config)
        }
        else {
            console.log(config.path)
        }
    }

    //9-2 인자의 갯수가 다를 때
    type DiffEle = {
        (a:number, b:number) : number
        (a:number, b:number, c:number) : number,
    }

    const diff:DiffEle = (a,b,c?:number) => {
        return a + b
    }



    // case 10 : 다형성 multiple
    // 확실한 타입을 알지 못 할 때 사용


    return (
        <>
            <div>
                hello
            </div>
        </>

    );
};

export default Hello;