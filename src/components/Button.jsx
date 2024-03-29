import React from 'react'
import './Button.css'

export default props => {
    // let classes = 'button'
    // classes += props.operation ? 'operation' : ''
    return (
        <button onClick={e => props.click && props.click(props.label)} className={`button 
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}`
        }>{props.label}
        </button>
    )
}