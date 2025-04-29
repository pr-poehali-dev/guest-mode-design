import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { CallOrderModal } from "./CallOrderModal";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="border border-yellow-primary text-yellow-primary rounded-full px-6 py-2 font-medium hover:bg-yellow-primary hover:text-black transition-colors"
          >
            ЗАКАЗАТЬ ЗВОНОК
          </button>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/certificates" className="main-nav-item">СЕРТИФИКАТЫ</NavLink>
            <NavLink to="/gallery" className="main-nav-item">ГАЛЕРЕЯ</NavLink>
            <NavLink to="/news" className="main-nav-item">НОВОСТИ</NavLink>
            <NavLink to="/articles" className="main-nav-item">СТАТЬИ</NavLink>
            <NavLink to="/reviews" className="main-nav-item">ОТЗЫВЫ</NavLink>
            <NavLink to="/about" className="main-nav-item">О НАС</NavLink>
          </nav>
        </div>
      </div>
      
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Поиск по сайту..."
              className="search-input"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <Search size={20} />
            </button>
          </div>
          
          <div className="ml-4 relative">
            <button className="flex items-center">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-yellow-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
      
      <CallOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;
