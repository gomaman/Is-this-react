import "./SmallButton.css"
function SmallButton (props) {
    let {text, href} = props
    return (
        <a className="small-button" href={href}> {text.toUpperCase()} </a>
        )
}


export default SmallButton