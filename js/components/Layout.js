import React, { useState, useEffect } from 'react';

const Layout = () => {

    const [Value, setValue] = useState([]);
    const [Result, setResult] = useState([]);
    const [Numbers, setNumbers] = useState([]);
    const [A, setA] = useState([0]);
    const [B, setB] = useState([0]);

    useEffect(() => {
        Calculation();
    }, [A, B],);

    const Reset = () => {
        setA(0);
        setB(0);
        setResult("");
        setValue("");
        setNumbers("")
    }

    const handleValue = (cyfra) => {
            setValue(prevstate => [prevstate +  cyfra]);
    }

    const Calculation = () => {
        // console.log("Licze")

        const addition = () => {
            return A + B;
        }

        const subtraction = () => {
            return A - B;
        }

        const production = () => {
            return A * B;
        }

        const division = () => {
            return A / B;
        }

        const procent = () => {
            return (A * B) /100;
        }

        const potega = () => {
            return Math.pow(A, B);
        }

        const calculate = () => {
            setResult("")
            setA(0)
            setB(0)
            let sign = 0;
            if (Value.length>0) {
                setNumbers(Value[0].split(" "))
                // console.log("wykonano split")
                // console.log(Numbers)
            }
            sign = Numbers[1]
            setA(parseFloat(Numbers[0]),);
            setB(parseFloat(Numbers[2]),);
            // console.log(sign)
            // console.log(A)
            // console.log(B)

            switch (sign) {
                case '+':
                    setResult(addition());
                    // setValue(Result);
                    break;
                case '-':
                    setResult(subtraction());
                    // setValue(Result);
                    break;
                case '*':
                    setResult(production());
                    // setValue(Result);
                    break;
                case '/':
                    setResult(division());
                    // setValue(Result);
                    break;
                case '%':
                    setResult(procent());
                    // setValue(Result);
                     break;
                case 'pow':
                    setResult(potega());
                    // setValue(Result);
                    break;
            }
        }
            calculate();
    }


    return (
        <>
            <div className="container main">
                <h1 className="title">Kalkulator</h1>
                    <p className="expression" >{Value} = {isNaN(Result) ? <span style={{color: "red"}}>Wrong Input!</span>  : <span>{Result}</span>} </p>
                <table>
                    <tbody>
                         <tr>
                            <td><button className="Reset" title="Kasuj" onClick={Reset}>C</button></td><td><button className="dzialanie" title="Potega" onClick={() => handleValue(" pow ")}>x<sup>y</sup></button></td><td><button className="dzialanie" title="Procent" onClick={() => handleValue(" % ")}>%</button></td><td><button className="dzialanie" title="Dzielenie" onClick={() => handleValue(" / ")}>/</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => handleValue("1")}>1</button></td><td><button onClick={() => handleValue("2")}>2</button></td><td><button onClick={() => handleValue("3")}>3</button></td><td><button className="dzialanie" title="Mnozenie" onClick={() => handleValue(" * ")}>*</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => handleValue("4")}>4</button></td><td><button onClick={() => handleValue("5")}>5</button></td><td><button onClick={() => handleValue("6")}>6</button></td><td><button className="dzialanie" title="Odejmowanie" onClick={() => handleValue(" - ")}>-</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => handleValue("7")}>7</button></td><td><button onClick={() => handleValue("8")}>8</button></td><td><button onClick={() => handleValue("9")}>9</button></td><td><button className="dzialanie" title="Dodawanie" onClick={() => handleValue(" + ")}>+</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => handleValue("-")}>-</button></td><td><button onClick={() => handleValue("0")}>0</button></td><td><button onClick={() => handleValue(".")}>,</button></td><td><button className="Wynik" title="Wynik" onClick={() => Calculation()}>=</button></td>
                        </tr>
                    </tbody>
                </table>
                <p className="Stopka"><span>Instrukcja: </span> Przed każdym nowym działaniem skasuj wynik przyciskiem "C"</p>
            </div>
        </>
        )
}

export default Layout;