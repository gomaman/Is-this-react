import "./Navigation.css"
import NavigationLogo from "./NavigationLogo"
import SmallButton from "../Buttons/SmallButton"
import NavigationItem from "./NavigationItem"
import { NAV_ITEMS } from "../Config/Config"
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
                    {NAV_ITEMS.map((item, index) => (
                        <NavigationItem
                            key={index}
                            item={item}
                        ></NavigationItem>
                    ))}

                    <li className="nav-item">
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