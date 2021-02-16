import React, { useState } from 'react';
import Field from './Components/Field/field';
import Title from './Components/Title/title';
import './App.css';

const App = () => {

  // const [firstName, setFirstName] = useState("Moiz");
  const [firstNames, setFirstNames] = useState([{ text: "Learn React", id: "1" }, { text: "Find a React Job", id: "2" }]);
  const [websiteName, setWebsiteName] = useState("Ciphertrick");
  const [firstNamesInput, setFirstNamesInput] = useState(false);
  const [websiteNameInput, setWebsiteNameInput] = useState(false);

  return (
    <div className = "Container">
      <div className = "Content">
        <Title>Double Click on the Name or Website to edit</Title>
        
        {
          firstNames.map((firstName, index) => (
              <div key={index}> 
                <Field value = {firstName.text} 
                  inputChange = {(e) => setFirstNames(e.target.value)}
                  doubleClick = {() => setFirstNamesInput(true)}
                  blur = {() => setFirstNamesInput(false)}
                  active = {firstNamesInput}>Enter your first name -</Field>
              </div>
          ))}

        <Field value = {websiteName} 
               inputChange = {(e) => setWebsiteName(e.target.value)}
               doubleClick = {() => setWebsiteNameInput(true)}
               blur = {() => setWebsiteNameInput(false)}
               active = {websiteNameInput}>Enter your website name -</Field>
      </div>
    </div>
  );
}

export default App;

{/* <Field value = {firstName} 
inputChange = {(e) => setFirstName(e.target.value)}
doubleClick = {() => setFirstNameInput(true)}
blur = {() => setFirstNameInput(false)}
active = {firstNameInput}>Enter your first name -</Field> */}