import "./Navigation.css"
import NavigationLogo from "./NavigationLogo"
import SmallButton from "../Buttons/SmallButton"
import NavigationItem from "./NavigationItem"
// export const NAV_DATA = ["Studentams", "Programos", "Karjeros Centras", "IT Testas", "Apie mus", "Verslui", "Kontaktai"]
// export const NAV_LOGO_SRC = "https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg"


export function NavigationGenerator() {

    const NAV_ITEMS = [
        {
            href: "/student",
            text: "Studentams"
        },

        {
            href: "/programs",
            text: "Programos"
        },

        {
            href: "/career",
            text: "Karjeros Centras"
        },

        {
            href: "/it-test",
            text: "IT testas"
        },

        {
            href: "/about-us",
            text: "About Us"
        },

        {
            href: "/contact-us",
            text: "Contact Us"
        },

        {
            href: "/news",
            text: "News"
        },
    ]
    return (
        <header className="header">
            <nav className="navigation">
                <NavigationLogo
                    src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg"
                    href='/'
                    className="nav-logo"
                ></NavigationLogo>
                <ul>
                    {NAV_ITEMS.map(({ href, text }, index) => (
                        <NavigationItem
                            key={index}
                            href={href}
                            text={text}
                        ></NavigationItem>
                    ))}

                    <li>
                        <SmallButton
                            text="Skambinti"
                            href="+3700012345"
                        ></SmallButton>
                    </li>

                </ul>
            </nav>
        </header>
    )



}

export default NavigationGenerator