function NavigationLogo(props) {
    const { href, src, className } = props
    if(href || src) {
        return (
            <a href={href}><img className={className} src={src}></img></a>
        )
    }
}

export default NavigationLogo