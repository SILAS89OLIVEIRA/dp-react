import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/login/Login';
import VendaEstoque from './components/vendaEstoque/VendaEstoque';

export default function Routes (){
    return(
     <BrowserRouter>
 
         <Route path="/" exact component={Login} /> 
         <Route path="/vendaestoque" component={VendaEstoque} /> 
    
     </BrowserRouter>
    );
}