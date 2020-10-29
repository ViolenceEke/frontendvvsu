import React from "react"
import Login from "./containers/login.jsx";
import { useCookies } from 'react-cookie';
import { Main } from "./features/page/organism/main"
import { AddForm } from "./features/page/molecules/add-form"
import { EditForm } from "./features/page/molecules/edit-form"
import { useState } from 'react';
import "./button.css";
import "./index.css";
import "./windows.css";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const [cookies, setCookie] = useCookies();
  async function handleSubmit(e: any){
    e.preventDefault();
    const data: any = await fetch('http://localhost:4000/', {method:'POST',mode: 'cors',headers: {'Content-Type': 'application/json'},body: JSON.stringify({ username, password })}).then((data) => data.text())
    if (JSON.parse(data).success){
    setCookie('userADMIN', JSON.parse(data).key, { path: '/', maxAge:1000*60*60*24*30});
    }
  }
  function handleChange(e: any) {
    console.log(e.target.value);
  }
  return cookies.userADMIN ? (
    <>
      <Main />
      <AddForm />
      <EditForm />
    </>
    ) : (<Login />)
}

export default App