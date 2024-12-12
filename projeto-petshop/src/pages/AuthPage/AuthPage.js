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
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white shadow-md rounded-md overflow-hidden max-w-4xl w-full">
        {/* Imagem */}
        <div className="hidden md:flex items-center justify-center bg-gray-200 w-1/2">
          <img
            src={auth}
            alt="background do authpage"
            className="h-full w-full"
          />
        </div>

        {/* Formulário */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FontAwesomeIcon icon={faPaw} /> Pet Shop
          </h2>
          <h3 className="text-xl font-semibold mb-6">
            {isLogin ? "Login" : "Registro"}
          </h3>

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-meuAzul"
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-meuAzul"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Senha
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-meuAzul"
              />
            </div>

            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Confirme sua senha
                </label>
                <input
                  type="password"
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-meuAzul"
                />
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-meuAzul text-white py-2 rounded-md font-medium hover:bg-blue-500 transition duration-200"
              >
                {isLogin ? "Entrar" : "Criar Conta"}
              </button>
            </div>
          </form>

          {/* Link para alternar entre login e registro */}
          <p className="text-center mt-4 pt-2">
            {isLogin ? (
              <>
                Não tem uma conta?{" "}
                <span
                  onClick={() => setIsLogin(false)}
                  className="text-meuAzul cursor-pointer"
                >
                  Criar conta
                </span>
              </>
            ) : (
              <>
                Já tem uma conta?{" "}
                <span
                  onClick={() => setIsLogin(true)}
                  className="text-meuAzul cursor-pointer"
                >
                  Entrar
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );

}

export default AuthPage;
