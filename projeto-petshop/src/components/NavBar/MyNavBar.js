import {
    faPaw,
    faShoppingCart,
    faUser,
    faBars,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  
  function MyNavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
  
    const cartItems = [
      { id: 1, name: "Ração para Cachorro", price: "R$ 49,90", quantity: 1 },
      { id: 2, name: "Tigela para Gato", price: "R$ 29,90", quantity: 2 },
      { id: 3, name: "Bolinha de Tênis", price: "R$ 19,90", quantity: 3 },
    ];
  
    return (
      <header className="fixed z-50 w-full bg-white shadow-md">
        <div className="flex justify-between items-center py-4 px-6 md:px-10 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPaw} />
            <span className="font-bold text-lg">Pet Shop</span>
          </div>
  
          {/* Menu Principal */}
          <nav className="hidden md:flex gap-8">
            {[
              { name: "Início", path: "/" },
              { name: "Loja", path: "/loja" },
              { name: "Sobre nós", path: "/sobre" },
              { name: "Agendamento", path: "/agendamento" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="relative font-medium text-meuPreto transition-all duration-300 group hover:text-meuAzul"
              >
                <span className="absolute left-0 bottom-[-5px] w-full h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                <span className="relative pb-2 group-hover:translate-y-1 transition-transform duration-300">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
  
          {/* Ícones do Usuário */}
          <div className="hidden md:flex items-center gap-8 relative">
            {/* Ícone do Perfil */}
            <div
              className="relative cursor-pointer"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            >
              <FontAwesomeIcon icon={faUser} />
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-50">
                  <Link
                    to="/auth"
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
  
            {/* Carrinho */}
            <div
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </div>
  
          {/* Menu Mobile */}
          <div className="md:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className="cursor-pointer text-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
  
        {/* Menu Responsivo */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col items-center gap-4">
              {[
                { name: "Início", path: "/" },
                { name: "Loja", path: "/loja" },
                { name: "Sobre nós", path: "/sobre" },
                { name: "Agendamento", path: "/agendamento" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-meuAzul font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
  
        {/* Aba Lateral do Carrinho */}
        {isCartOpen && (
          <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transition-transform transform translate-x-0">
            <div className="p-4 flex flex-col h-full">
              <h2 className="text-lg font-bold mb-4">Seu Carrinho</h2>
              <div className="flex-1 overflow-y-auto">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center mb-4 border-b pb-2"
                  >
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        {item.quantity} x {item.price}
                      </p>
                    </div>
                    <p className="font-medium">{item.price}</p>
                  </div>
                ))}
              </div>
              <button
                className="bg-meuAzul text-white py-2 rounded-md mt-4 w-full hover:bg-blue-500"
                onClick={() => setIsCartOpen(false)}
              >
                Fechar Carrinho
              </button>
            </div>
          </div>
        )}
      </header>
    );
  }
  
  export default MyNavBar;
  