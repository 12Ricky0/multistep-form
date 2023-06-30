import React, { useState, useReducer } from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
import CompletedForm from "./Completed";



export const initialState = {
  name: '',
  email: '',
  phone: '',
  monthly: true,
  plan: 'Arcade',
  yearly: false,
  addon1: true,
  addon2: true,
  addon3: false,
};

export const reducer = (state, action) => {

  switch (action.type) {
    case 'update_field':
      return { ...state, [action.field]: action.value };

    case 'year_select':
      return {
        ...state,
        monthly: action.monthly,
        yearly: action.yearly,
      };

    case 'plan_select':
      return {
        ...state,
        plan: action.payload
      };

    case 'pick_addon1':
      return {
        ...state,
        addon1: action.payload,
      };
    case 'pick_addon2':
      return {
        ...state,
        addon2: action.payload,
      };
    case 'pick_addon3':
      return {
        ...state,
        addon3: action.payload
      };

    case 'reset_fields':
      return initialState;

    default:
      return state;
  }
};

function App() {

  const [step, setStep] = useState(1);
  const [state, dispatch] = useReducer(
    reducer, initialState
  );

  localStorage.setItem('selectedPlan', state.yearly);
  localStorage.setItem('name', state.name);
  localStorage.setItem('plan', state.plan);
  localStorage.setItem('addon1', state.addon1);
  localStorage.setItem('addon2', state.addon2);
  localStorage.setItem('addon3', state.addon3);

  const [errors, setErrors] = useState({});


  const isValidEmail = (email) => {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  };

  const isValidPhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const validateForm = () => {
    const errors = {};
    if (!state.name) {
      errors.name = 'This field is required';
    }
    if (!state.email) {
      errors.email = 'This field is required';
    } else if (!isValidEmail(state.email)) {
      errors.email = 'Enter a valid Email';
    }
    if (!state.phone) {
      errors.phone = 'This field is required';
    } else if (!isValidPhone(state.phone)) {
      errors.phone = '10 digits expected';
    }
    return errors;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: 'update_field', field: name, value });
  };

  const handleNextStep = () => {

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', state);

    } else {
      setErrors(validationErrors);
      return false;
    }


    setStep((prevStep) => prevStep + 1);
    console.log('Form submitted:', state);
    console.log(localStorage.getItem("selectedPlan"))

  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSwitchChange = (e) => {


    dispatch({
      type: 'year_select',
      yearly: e.target.checked,
      monthly: !e.target.checked,
    });

  }

  const handleSubmit = () => {
    setStep((prevStep) => prevStep + 1);
  };



  switch (step) {
    case 1:
      return (
        <FormOne
          onClick={handleNextStep}
          onChange={handleInputChange}
          name={state.name}
          email={state.email}
          phone={state.phone}
          nameError={errors.name}
          phoneError={errors.phone}
          emailError={errors.email}
        />
      )

    case 2:
      return (
        <FormTwo
          onClick={handlePreviousStep}
          onMouseDown={handleNextStep}
          onChange={handleSwitchChange}
          checked={state.yearly}
          arcSelected={(() => { dispatch({ type: "plan_select", payload: "Arcade" }) })}
          advSelected={(() => { dispatch({ type: "plan_select", payload: "Advanced" }) })}
          proSelected={(() => { dispatch({ type: "plan_select", payload: "Pro" }) })}

        />
      )

    case 3:
      return (
        <FormThree
          onClick={handlePreviousStep}
          onMouseDown={handleNextStep}
          osChecked={state.addon1}
          lsChecked={state.addon2}
          cpChecked={state.addon3}
          onlineService={((e) => { dispatch({ type: "pick_addon1", payload: e.target.checked }) })}
          largStorage={((e) => { dispatch({ type: "pick_addon2", payload: e.target.checked }) })}
          custProfile={((e) => { dispatch({ type: "pick_addon3", payload: e.target.checked }) })}
        />
      )
    case 4:
      return (
        <FormFour
          onClick={handlePreviousStep}
          onSubmit={handleSubmit}
          onMouseDown={(() => { setStep(2) })}
        />
      )

    case 5:
      return (
        <CompletedForm />
      )

    default:
      return
    // code block
  }




}

export default App;
