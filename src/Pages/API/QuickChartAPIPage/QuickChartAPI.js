import { type } from "@testing-library/user-event/dist/type"
import { useEffect, useState } from "react"
import Container from "../../../components/Containers/Container"

function QuickChart() {

    const [boringClick, setBoringClick] = useState(false)
    const [boringData, setBoringData] = useState('')
    const [buttonClicked, setButtonClicked] = useState(false)

    useEffect(() => {
        if (buttonClicked)
            fetch(`http://www.boredapi.com/api/activity`)
                .then((res) => res.json())
                .then((boredDataInformation) => {
                    setBoringData(boredDataInformation);
                });
    }, [boringClick, buttonClicked]);


    const generateBoring = (event) => {
        event.preventDefault()

        setBoringClick(!boringClick)
        setButtonClicked(true)
    }


    return (
        <Container>
            <h1>NEBUS GRAF</h1>
            <button onClick={generateBoring}>Bored?</button>

            {buttonClicked && 
            (<div>
                <ul>
                    <li>Activity: {boringData.activity}</li>
                    <li>Type: {boringData.type}</li>
                    <li>Participants: {boringData.participants}</li>
                    <li>Price: {boringData.price}</li>
                </ul>
            </div>)}

        </Container>

    )
}


export default QuickChart