function NavigationItem(props) {
    const {text, href} = props
    if(text, href) {
        return (
            <li>
                 <a href={href}>{text}</a>
            </li>
        )
    }
}


export default NavigationItem