import Counter from "./Counter"

function Results (props) {
    console.log(props)
    return (
        <ul>
            <li>{props.result}</li>
        </ul>
    )
}


export default Results