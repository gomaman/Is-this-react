import './Container.css'

function Container(props) {
    console.log()
    return (
        <div className="container">
            {props.children}
        </div>
    )

}


export default Container