import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Novo estado para a mensagem de erro
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("a senha tem que conter 8 digitos");
    } else if (password === "12345678" && username === "visita") {
      history('/adm');
    } else {
      alert("ERRO NO LOGIN")
      setError("email ou senha incorretos"); // Exibe mensagem de erro
    }
  };

  return (
    <div id='container'>
      <h1 >FAÇA SEU LOGIN</h1>
      
      <div onSubmit={handleSubmit}>
        <div label="" className='label'>
          <h1>Username</h1>
          <input className='input' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div label="" className='label'>
          <h1>Password</h1>
          <input type='password' className='input' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
        {error && <p>{error}</p>} {/* Renderiza a mensagem de erro, se houver */}
          <button id='btn' type="primary" htmlType="submit" onClick={handleSubmit} >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;