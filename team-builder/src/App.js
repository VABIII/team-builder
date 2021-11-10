import React, {useState} from "react";
import MemberForm from "./components/MemberForm";
import Members from "./components/Members";
import './App.css';

const initialValues = []
console.log(initialValues);

const initialFormValues = {
    name: "",
    email: "",
    role: ""
}


function App() {
    const [membersList, setMembersList] = useState(initialValues);
    const [formValues, setFormValues] = useState(initialFormValues);
    console.log(formValues)
    console.log(membersList)

    const updateForm = (inputName, inputValue) => {
        // console.log(inputValue);
        setFormValues({...formValues, [inputName]: inputValue})

    }

    const submitForm = () => {
        const newMember = {
            name: formValues.name,
            email: formValues.email,
            role: formValues.role
        }
        setMembersList([newMember, ...membersList]);
        setFormValues(initialFormValues);
    }

  return (
    <div className="App">
      <header className="App-header">
        <MemberForm values={formValues} update={updateForm} submit={submitForm}/>
      </header>
    </div>
  );
}

export default App;
