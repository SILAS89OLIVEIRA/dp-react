import React, { useState } from "react";
import {  useHistory } from 'react-router-dom';
import "./Login.css";
import api from '../../api';
import { Input, Button, Label} from 'reactstrap';


const Login = (props) => {
   
    const [usu_login, setLogin] = useState('');
    const [usu_senha, setSenha] = useState('');
   
    const history = useHistory();
    

   async function handleLogin(e){
        e.preventDefault();

        try {
const response = await api.get(`erp_usuarios/${usu_login}/${usu_senha}`);
//console.log(response.data[0].codigofab[0].for_cod) 

localStorage.setItem('usu_login', response.data[0].usu_login)
localStorage.setItem('usu_senha', response.data[0].usu_senha)
localStorage.setItem('for_cod', response.data[0].codigofab[0].for_cod)
     
history.push('/vendaestoque')
} catch (err) {
alert('falha')
        }
        
    }

    
    return (
    <div className="root2">
        <form onSubmit={handleLogin}>
        <div id="loginSistem" className="container"> 
            <div className="row">
                <div id="formLogin" >
                    <h2 id="headerLogin" className="text">FORNECEDORES</h2>
                </div>
            </div>
            <div className="row1">
                <div id="nome">
                    <Input className="form" type="text" placeholder=" " value={usu_login} onChange={e => setLogin(e.target.value)}></Input>
                    <Label id="label1" className="label-nome">Usuário:</Label>
                </div>
                <div id="senha">
                    <Input className="form" type="text" placeholder=" " value={usu_senha} onChange={e => setSenha(e.target.value)}></Input>
                    <Label id="label1" className="label-nome">Senha:</Label>
                </div>
            </div>

            <div className="row3">
                <div className="btn">
                    <Button id="form-login" className="efeito efeito-1" type="submit">LOGIN</Button>
                </div>
            </div>  
        </div> </form>
    </div>
    )
}

export default Login;