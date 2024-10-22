import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../logo/logo.nutritech.png';
import logofundo from '../logo/logofundo.png';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

interface FormData {
  email: string;
  senha: string;
}

const Background = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${logofundo});
  background-size: cover;
  background-position: center;
  flex-direction: row; 
  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

const ContainerRightTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 5%;
  margin-right: 20%;

  @media (max-width: 1024px) {
    margin-right: 10%;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Logo = styled.img`
  width: 250px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 500px;
  padding: 10px;
  background: #7e5ec2;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  margin-top: 10%;
  margin-left: 25%; 

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1200px) {
    width: 25%;
    margin-left: 20px;
  }

  @media (max-width: 900px) {
    width: 40%;
    margin-left: 0;
    margin-top: 100px;
  }

  @media (max-width: 600px) {
    width: 80%;
    margin-top: 50px;
  }

  @media (max-width: 400px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const EmailLabel = styled.label`
  margin-top: 20px;
  font-weight: bold;
  color: black;
`;

const PasswordLabel = styled.label`
  margin-top: 10px;
  font-weight: bold;
  color: black;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 80%;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

const MainContent = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

const Button1 = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button2 = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const JustifiedText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #444;
  margin: 0;
`;

const BemVindo: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', senha: '' });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', { 
        email: formData.email, 
        senha: formData.senha 
      });

      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao efetuar o login. Tente novamente.');
    }
  };
  

  return (
    <Background>
      <ContainerLeft>
        <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans&display=swap" rel="stylesheet" />
        <h1>Login</h1>
        <EmailLabel>Email:</EmailLabel>
        <Input 
          type="email" 
          name="email"
          className="email-input" 
          value={formData.email}
          onChange={handleInputChange} 
        />
        <PasswordLabel>Senha:</PasswordLabel>
        <Input 
          type="password" 
          name="senha"
          className="password-input" 
          value={formData.senha}
          onChange={handleInputChange} 
        />
        <MainContent>
          <Button2 onClick={handleLogin}>Entrar</Button2>
        </MainContent>
      </ContainerLeft>

      <ContainerRightTitle>
        <Logo src={logo} alt="Logo NutriTech" />
        <JustifiedText>
          O MELHOR
          <br />
          PARA A SUA
          <br />
          SAÚDE!
        </JustifiedText>
        <Button1 onClick={() => navigate('/cadastro')}>COMECE JÁ</Button1>
      </ContainerRightTitle>
    </Background>
  );
};

export default BemVindo;
