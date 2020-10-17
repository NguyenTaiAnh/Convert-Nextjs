import React from 'react'

const Child:React.FC<IProps> = props =>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}

interface IProps{
    title:string;
}

interface IState{

}

export default Child;