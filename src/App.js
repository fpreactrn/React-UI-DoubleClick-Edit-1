import React, { useState } from 'react';
import Field from './Components/Field/field';
import Title from './Components/Title/title';
import './App.css';

const App = () => {

  const [firstName, setFirstName] = useState("Moiz");
  const [websiteName, setWebsiteName] = useState("Ciphertrick");
  const [firstNameInput, setFirstNameInput] = useState(false);
  const [websiteNameInput, setWebsiteNameInput] = useState(false);

  return (
    <div className = "Container">
      <div className = "Content">
        <Title>Double Click on the Name or Website to edit</Title>
        
        <Field value = {firstName} 
               inputChange = {(e) => setFirstName(e.target.value)}
               doubleClick = {() => setFirstNameInput(true)}
               blur = {() => setFirstNameInput(false)}
               active = {firstNameInput}>Enter your first name -</Field>

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






/* const Field = (props) => {
  return (
    <div className = "TextField">
      <div>{props.children}</div>
      <div onDoubleClick = {props.doubleClick} className = "Change">
          {props.active ? <input value = {props.initialValue} onChange = {props.inputChange} onBlur = {props.blur} autoFocus/> : props.initialValue}
      </div>
    </div>
  )
} */






{/* <LookName onDoubleClick = {() => onDoubleClickHandler(lookDetail)}>
  {isRenamingActive === lookDetail.LookID? 
      <LookInput value = {renameInput} 
          onChange = {onInputChangeHandler} 
          onBlur = {(event) => onTestBlurHandler(event, lookDetail)}
          onKeyDown = {(event) => onKeyDownHandler(event, lookDetail)}
          autoFocus
      />:
      <Name>
          {lookDetail.Lookname}
      </Name>
  }
</LookName>




const onInputChangeHandler = (event) => {
  if(event.target.value === " "){
      return;
  }
  if(event.target.value.length > 0 && !RegExpAlphaNumeric.test(event.target.value)){
      return;
  }
  if(looksThumb.some(look => look.Lookname === event.target.value && look.LookID !== isRenamingActive)){
      return;
  }
  if(event.target.value.length > 25){
      return;
  }
  setRenameInput(event.target.value);
}

// const onTestEventHandler = (event) => {
//     console.log(event);
//     console.log("focus gained");
// }

const onTestBlurHandler = async(event, lookDetail) => {
  console.log(lookDetail);

  const source = CancelToken.source();
  if(renameInput.length > 3 && renameInput !== lookDetail.Lookname){
      const response = await axios.put('/userprofileoperations/renamelook', {
          LookID: lookDetail.LookID,
          newLookName: renameInput
      }, {
          cancelToken: source.token
      });
      console.log(response)
      if(response.status === 200){
          const updatedLookThumb = looksThumb.map(look => {
              if(look.LookID === lookDetail.LookID){
                  return {
                      ...look,
                      Lookname: renameInput
                  }
              }else{
                  return look
              }
          });
          setLooksThumb(updatedLookThumb);
      }
  }

  setIsRenamingActive(null);
  setRenameInput('');
}

const onDoubleClickHandler = (lookDetail) => {
  
  setRenameInput(lookDetail.Lookname);
  setIsRenamingActive(lookDetail.LookID)
}

const onKeyDownHandler = (event, lookDetail) => {
  if(event.keyCode === 13){
      onTestBlurHandler(null, lookDetail)
  }
} */}








// const LookName = styled.div`
//     width: 100%;
//     max-height: 25%;
//     min-height: 25%;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     /* padding-left: 5px; */
//     font-family: 'Poppins', sans-serif;
//     /* border: 1px solid red; */
    
// `

// const LookInput = styled.input`
//     width: 90%;
//     height: 80%;
//     font-size: 16px;
//     text-align: center;
//     border: none;
//     outline: none;
//     /* border: 1px solid #51cc85; */
//     font-family: 'Poppins', sans-serif;
//     :focus{
//         -moz-box-shadow: 0 1px 8px #ccc;
//         -webkit-box-shadow: 0 1px 8px #ccc;
//         box-shadow: 0 1px 8px #ccc;
//         /* border: 1px solid #ccc; */
//         /* border-bottom: 1px solid #ccc; */
//     }
// `

// const Name = styled.div`
//     max-width: 90%;
//     text-align: left;
//     text-overflow: ellipsis;
//     overflow: hidden;
//     white-space: nowrap;
//     cursor: pointer;
// `