import React from "react"

export default function Pad(props) {
    return (
        <button onClick={() => props.toggle(props.id)} className={props.on ? 'on' : undefined} style={{ backgroundColor: props.color }}></button>
    )
}