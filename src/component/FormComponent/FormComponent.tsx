
import { useForm } from "../../hooks/useHooks"

export const FormComponent = () => {

const {values,handleChange,resetForm} = useForm({
  email : '',
  nombre : '', 
  edad : 0

})

const {email, nombre, edad} =values;
  
const handleSubtmitForm = () =>{

  console.log(values)
}

const resetSubtmitForm = () =>{

  resetForm();
}
  
    return (
    <div>
        <div>
            <h2>FORMULARIO</h2>
        </div>

        <div style={{display : 'flex' , flexDirection : 'column' , gap : '2vh'}}>
            <input value={email} name="email" onChange={handleChange} type="email" placeholder="example@gmail.com" />
            <input value={nombre} name="nombre" onChange={handleChange} type="text" placeholder="Nombre" />
            <input value={edad} name="edad" onChange={handleChange} type="number" placeholder="Edad" />
        </div>

        <div>
            <button onClick={handleSubtmitForm}>Enviar</button>
            <button onClick={resetSubtmitForm}>Resetear</button>
        </div>



    </div>
  )
}
