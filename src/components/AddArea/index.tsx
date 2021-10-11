import * as C from './styles'
import { useState, KeyboardEvent } from 'react'

type Props = {
    onEnter: (taskName: String) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setinputText] = useState(``);

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ``){
            onEnter(inputText);
            setinputText(``);
        }
    }

    return (
        <C.Container>
            <div className='image'>➕</div>
            <input
                type= 'text'
                placeholder = 'Adicionar tarefa'
                value = {inputText}
                onChange = {e=>setinputText(e.target.value)}
                onKeyUp = {handleKeyUp}
            ></input>
        </C.Container>
    )
}