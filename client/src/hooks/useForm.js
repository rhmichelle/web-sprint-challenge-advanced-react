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

const useForm = (key, initialValue) => {


    const [firstName, setValues] = useState("");

    const handleChanges = (event) => {
    setValues(event.target.value);
  };

    const handleSubmit = (event) => {
    event.preventDefault();
    alert(firstName);
    console.log("Success");
  };
    
        return [firstName, handleChanges, handleSubmit];
}
 export default useForm;