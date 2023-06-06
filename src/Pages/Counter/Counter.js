import '../Counter/Counter.css'
import { useState } from "react"
import Container from "../../components/Containers/Container"
function Counter() {

    const [count, setCount] = useState(5)
    const plus1Handler = () => { setCount(count + 1) }
    const plus2Handler = () => { setCount(count + 2) }
    const plus5Handler = () => { setCount(count + 5) }
    const minus1Handler = () => { setCount(count - 1) }
    const minus2Handler = () => { setCount(count - 2) }
    const minus5Handler = () => { setCount(count - 5) }
    const resetHandler = () => { setCount(5) }
    const submitHandler = () => {console.log(count)}


    let H3Color = ''

    if (count < 5) {
        H3Color = 'red'
    } else if (count > 5) {
        H3Color = 'green'
    }

    return (
        <Container>
            <h3 style={{ color: H3Color }}>{count}</h3>

            <div className='counter'>
                <button onClick={minus5Handler} disabled={count < 5}>-5</button>
                <button onClick={minus2Handler} disabled={count <= 1}>-2</button>
                <button onClick={minus1Handler} disabled={count <= 0}>-1</button>
                <button onClick={plus1Handler} disabled={count >= 10}>+1</button>
                <button onClick={plus2Handler} disabled={count >= 9}>+2</button>
                <button onClick={plus5Handler} disabled={count >= 6}>+5</button>
            </div>

            <div className='control'>
                <button onClick={resetHandler}>Reset</button>
                <button onClick={submitHandler}>Submit</button>
            </div>
        </Container>
    )

}


export default Counter