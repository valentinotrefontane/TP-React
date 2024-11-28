import { FC } from 'react'

interface IPropsMiPrimerComponente{
    text : string,
    color : string,
    fontSize? : number
}



export const MiPrimerComponente :FC<IPropsMiPrimerComponente>  = ({
    text, 
    color,
    fontSize
}) => {
  return (
    <div style={{color : `${color}`, fontSize : `${fontSize || 1}rem`}}>
        <p></p>
        {text}
    </div>
  )
}
