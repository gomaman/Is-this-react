import "./Navigation.css"
import NavigationLogo from "./NavigationLogo"
import SmallButton from "../Buttons/SmallButton"
import NavigationItem from "./NavigationItem"
// export const NAV_DATA = ["Studentams", "Programos", "Karjeros Centras", "IT Testas", "Apie mus", "Verslui", "Kontaktai"]
// export const NAV_LOGO_SRC = "https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg"


export function NavigationGenerator() {
    return (
        <header className="header">
            <nav className="navigation">
                <NavigationLogo
                    src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg"
                    href='/'
                    className="nav-logo"
                ></NavigationLogo>

                <ul>
                    <NavigationItem
                        href="/student"
                        text="Studentams"
                    ></NavigationItem>

                    <NavigationItem
                        href="/programs"
                        text="Programos"
                    ></NavigationItem>

                    <NavigationItem
                        href="/career"
                        text="Karjeros Centras"
                    ></NavigationItem>

                    <NavigationItem
                        href="/it-test"
                        text="IT testas"
                    ></NavigationItem>

                    <NavigationItem
                        href="/about-us"
                        text="About Us"
                    ></NavigationItem>

                    <NavigationItem
                        href="/contact-us"
                        text="Contact Us"
                    ></NavigationItem>

                    <NavigationItem
                        href="/news"
                        text="News"
                    ></NavigationItem>

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