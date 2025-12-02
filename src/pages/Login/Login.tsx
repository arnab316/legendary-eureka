import FooterLogin from '@/components/Footer-login';
import HeaderLogin from '@/components/Header-login';
import LoginComponent from '@/components/Login';
import React from 'react';
import { Link } from 'react-router-dom'
const Login: React.FC = () => {
    return(
        <div>
            <HeaderLogin/>
             <LoginComponent/>
             
            <FooterLogin/>
        </div>
    )
}
export default Login;