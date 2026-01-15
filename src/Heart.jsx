export default function Heart(props) {
    let isFilled = props.isFilled ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png' : 'https://www.svgrepo.com/show/335086/heart-outline.svg';
    return (
        <button onClick={props.handleClick} aria-pressed={isFilled ? 'my Fav' : 'not my type'}><img src={isFilled} alt="heart icon" width={15} /></button>
    )
}