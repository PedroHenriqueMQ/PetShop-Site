import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";
import auth from "../../assets/images/backgrounds/auth.PNG";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const checkUserExists = async (email) => {
    try {
      const response = await axios.post("/api/auth/check-user", { email });
      return response.data.exists;
    } catch (error) {
      console.error("Erro ao verificar usuário:", error);
      setErrorMessage("Erro ao verificar usuário. Tente novamente.");
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }

    if (isLogin) {
      // Login
      const userExists = await checkUserExists(email);
      if (!userExists) {
        setErrorMessage("Usuário não encontrado. Registre-se primeiro.");
      } else {
        alert("Login bem-sucedido!"); 
      }
    } else {
      // Registro
      const userExists = await checkUserExists(email);
      if (userExists) {
        setErrorMessage("Usuário já cadastrado. Faça login.");
      } else {
        alert("Registro bem-sucedido!");
      }
    }
  };

}

export default AuthPage;
