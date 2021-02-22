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

export const useForm = (key, initialValue) => {
 const [value, setValues] = useState(initialValue);

 const handleChanges = (event) => {
     console.log(event);
    setValues({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccessMessage(true);
  };
    
 return [value, handleChanges, handleSubmit];
}
