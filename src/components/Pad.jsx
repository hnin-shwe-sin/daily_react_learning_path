import React from "react"

export default function Pad(props) {
    let [toggle, setToggle] = React.useState(props.on);
    function handleToggle() {
        setToggle(prev => !prev);
    }

    return (
        <button onClick={props.toggle} className={toggle ? 'on' : undefined} style={{ backgroundColor: props.color }}></button>
    )
}