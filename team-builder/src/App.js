import React, {useState} from "react";
import MemberForm from "./components/MemberForm";
import Members from "./components/Members";
import './App.css';

const initialValues = [
    {
        name: "James Howlett",
        email: "Wolvie@claws.com",
        role: "Badass"
    },
    {
        name: "Scott Summers",
        email: "Slim@shades.com",
        role: " Uptight Badass"
    },
    {
        name: "Remy LeBeau",
        email: "cards@kabloom.com",
        role: "The slickest of the slick"
    }
]

const initialFormValues = {
    name: "",
    email: "",
    role: ""
}

function App() {
    const [membersList, setMembersList] = useState(initialValues);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [isToggled, setIsToggled] = useState(true);

    const updateForm = (inputName, inputValue) => {
        setFormValues({...formValues, [inputName]: inputValue})
    }

    const submitForm = () => {
        const newMember = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role
        }
        setMembersList([newMember, ...membersList]);
        setFormValues(initialFormValues);
        setIsToggled(!isToggled);
    }

    const onClick = () => {
        !isToggled ? setIsToggled(true) : setIsToggled(false)
    }

  return (
    <div className="App">
      <header className="App-header">
          {
              !isToggled && <MemberForm values={formValues} update={updateForm} submit={submitForm}/>
          }
        <Members membersList={membersList}/>
        <button onClick={onClick}>Add Member</button>
      </header>
    </div>
  );
}

export default App;
