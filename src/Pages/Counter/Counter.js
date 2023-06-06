import '../Counter/Counter.css'
import { useState } from "react"
import Container from "../../components/Containers/Container"

function Counter() {
    const initialValue = 5
    const [count, setCount] = useState(initialValue)
    const [grades, setGrades] = useState([])

    const plus1Handler = () => setCount(prevState => (prevState + 1))
    const plus2Handler = () => setCount(prevState => (prevState + 2))
    const plus5Handler = () => setCount(prevState => (prevState + 5))
    const minus1Handler = () => setCount(prevState => (prevState - 1))
    const minus2Handler = () => setCount(prevState => (prevState - 2))
    const minus5Handler = () => setCount(prevState => (prevState - 5))
    const resetHandler = () => setCount(5)
    const changeHandler = event => setCount(event.target.valueAsNumber)


    const addGradeHandler = () => {
        setGrades(prevState => {
            const newState = [count, ...prevState]
            return newState
        })
    }

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
                <button onClick={minus1Handler} disabled={count <= 1}>-1</button>

                <input defaultValue={count} type='number' max="10" min="1" onChange={changeHandler} />

                <button onClick={plus1Handler} disabled={count >= 10}>+1</button>
                <button onClick={plus2Handler} disabled={count >= 9}>+2</button>
                <button onClick={plus5Handler} disabled={count >= 6}>+5</button>
            </div>

            <div className='control'>
                <button onClick={resetHandler}>Reset</button>
                <button onClick={addGradeHandler}>Add Grade</button>
            </div>

            <div className='grades-list-wrapper'>
                <h4>{grades && grades.length > 0 ? `Grades:` : `No grades`}</h4>

                {grades && grades.length > 0 && (
                    <ul>
                        {grades.map((grade, index) => (
                            <li className='grade-item' key={index}>
                                <span className='grade'>{grade}</span>
                                <button
                                    onClick={() => {
                                        setGrades(prevState => {
                                            return prevState.toSpliced(index,1)
                                            const newState = [...prevState]
                                            newState.splice(index, 1)
                                            return newState
                                        })
                                    }}
                                    className='small'>x</button>
                            </li>
                        ))}
                    </ul>
                )}

            </div>

        </Container>


    )

}


export default Counter