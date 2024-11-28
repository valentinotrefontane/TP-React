import { ChangeEvent, useState } from "react"


//interface egnerica
interface FormValue{
    [key: string]: string | number
}

export const useForm =<T extends FormValue> (initialValues : T)=> {

    const [values, setValues] = useState<T>(initialValues)

    const handleChange = (event : ChangeEvent<HTMLInputElement>) =>{

        const {value, name} = event.target;
        
        setValues({...values, [`${name}`]: value})
       
    
      }

      const resetForm = ()=> {

            setValues(initialValues)

      }

      return{

        values,
        handleChange,
        resetForm,
      }

}