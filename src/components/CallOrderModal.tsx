import { X } from "lucide-react";
import { useState } from "react";

interface CallOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallOrderModal = ({ isOpen, onClose }: CallOrderModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white p-6 rounded-md w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-center mb-6">ЗАКАЗАТЬ ЗВОНОК</h2>
        
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="ФАМИЛИЯ ИМЯ:"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-200 rounded-md px-3 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-primary"
            />
          </div>
          
          <div>
            <input
              type="tel"
              placeholder="НОМЕР ТЕЛЕФОНА:"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-200 rounded-md px-3 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-primary"
            />
          </div>
          
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="agree" className="text-sm text-gray-500">
              Нажимая кнопку "Отправить", я даю своё согласие на обработку моих персональных данных в соответствии с ФЗ от 27.07.2006 № 152-ФЗ "О персональных данных
            </label>
          </div>
          
          <div className="border border-gray-200 rounded-md p-3 flex items-center">
            <input
              type="checkbox"
              id="robot"
              className="mr-2"
            />
            <label htmlFor="robot" className="mr-4">I'm not a robot</label>
            <div className="ml-auto">
              <img 
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                alt="reCAPTCHA" 
                className="h-8 w-auto" 
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-yellow-primary text-black font-medium py-3 rounded-md hover:bg-yellow-secondary transition-colors"
          >
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </div>
  );
};
