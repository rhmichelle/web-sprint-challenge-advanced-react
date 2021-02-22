// write your custom hook here to control your checkout form
import { useState } from 'react';
 
const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

const useForm = (initialValue) => {

    const [values, setValues] = useState(initialValue);

    const handleChanges = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  };

    const handleSubmit = (event) => {
    event.preventDefault();
    alert(values.firstName);
    console.log("Success");
  };
    
        return [values, handleChanges, handleSubmit];
}
 export default useForm;