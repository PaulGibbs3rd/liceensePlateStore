import React, { useState, useEffect, ChangeEvent } from 'react';

// Define types
interface State {
  name: string;
  abbreviation: string;
}

interface CheckoutFormState {
  firstname: string;
  lastname: string;
  street: string;
  city: string;
  zip: string;
  zipValid: boolean;
  state: string;
  cc: string;
  email: string;
  emailValid: boolean;
}

export function CheckoutForm() {
  const [formState, setFormState] = useState<CheckoutFormState>({
    firstname: '',
    lastname: '',
    street: '',
    city: '',
    zip: '',
    zipValid: false,
    state: '',
    cc: '',
    email: '',
    emailValid: false,
  });

  const [states, setStates] = useState<State[]>([]);

  // Fetch the list of states
  useEffect(() => {
    fetch('api/states')
      .then((response) => response.json())
      .then((data) => setStates(data))
      .catch((error) => console.error('Error fetching states:', error));
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const checkZipCodeValidity = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isValid = event.target.validity.valid;
    setFormState((prevState) => ({
      ...prevState,
      zip: value,
      zipValid: isValid,
    }));
  };

  const checkEmailValidity = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Simple email regex
    setFormState((prevState) => ({
      ...prevState,
      email: value,
      emailValid: isValid,
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('http://localhost:8000/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    });
  };

  const inputFields = [
    {
      name: "firstname",
      placeholder: "First name",
      type: "text",
      required: true,
      value: formState.firstname,
      onChange: handleChange as (event: ChangeEvent<HTMLInputElement>) => void,
      col: "col-lg-6",
    },
    {
      name: "lastname",
      placeholder: "Last name",
      type: "text",
      required: true,
      value: formState.lastname,
      onChange: handleChange as (event: ChangeEvent<HTMLInputElement>) => void,
      col: "col-lg-6",
    },
    {
      name: "street",
      placeholder: "Street",
      type: "text",
      required: true,
      value: formState.street,
      onChange: handleChange as (event: ChangeEvent<HTMLInputElement>) => void,
      col: "col-lg-6",
    },
    {
      name: "city",
      placeholder: "City",
      type: "text",
      required: true,
      value: formState.city,
      onChange: handleChange as (event: ChangeEvent<HTMLInputElement>) => void,
      col: "col-lg-6",
    },
    {
      name: "zip",
      placeholder: "Zip",
      type: "text",
      required: true,
      value: formState.zip,
      onChange: checkZipCodeValidity as (event: ChangeEvent<HTMLInputElement>) => void,
      col: "col-lg-6",
      pattern: "[0-9]{5}",
      additionalContent: !formState.zipValid && (
        <div className="alert alert-danger">Please enter a 5-digit zipcode</div>
      ),
    },
    {
      name: "state",
      type: "select",
      required: true,
      value: formState.state,
      onChange: handleChange as (event: ChangeEvent<HTMLSelectElement>) => void,
      col: "col-lg-6",
      options: states.map((state) => ({
        value: state.abbreviation,
        label: state.name,
      })),
    },
    {
      name: "email",
      placeholder: "Email",
      type: "text",
      required: true,
      value: formState.email,
      onChange: checkEmailValidity as (event: ChangeEvent<HTMLInputElement>) => void,
      col: "col-lg-6",
      pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
      additionalContent: !formState.emailValid && (
        <div className="alert alert-danger">Please enter a valid email address</div>
      ),
    },
    {
      name: "cc",
      placeholder: "Credit card number",
      type: "password",
      required: true,
      value: formState.cc,
      onChange: handleChange as (event: ChangeEvent<HTMLInputElement>) => void,
      col: "col-lg-6",
    },
  ];

  return (
    <div>
      {inputFields.map((field, index) => (
        <div className="row" key={index}>
          <div className={field.col}>
            {field.additionalContent}
            <div className="input-group">
              {field.type === "select" ? (
                <select
                  className="form-control"
                  name={field.name}
                  required={field.required}
                  value={field.value}
                  onChange={field.onChange as (event: ChangeEvent<HTMLSelectElement>) => void}
                >
                  <option value="">Select a state</option>
                  {field.options?.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  className="form-control"
                  placeholder={field.placeholder}
                  name={field.name}
                  required={field.required}
                  value={field.value}
                  onChange={field.onChange as (event: ChangeEvent<HTMLInputElement>) => void}
                  pattern={field.pattern}
                />
              )}
            </div>
          </div>
        </div>
      ))}
      <br />
    </div>
  );
}
