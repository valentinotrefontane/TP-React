import { useState } from "react"

export const ComponentCounter = () => {

    const[counter, setCounter] = useState<number>(0)

    const incremetar = () => {

        setCounter((prev) => prev+1)
    }

    const decrementar = () => {
        if(counter > 0 ){
            setCounter((prev) => prev-1)
    }
        
        
    }
  return (
    <div>

        <h2>Valor de Counter: {counter}</h2>
        <button onClick={incremetar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
    </div>
  )
}
