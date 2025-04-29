import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import Partners from "@/components/Partners";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 hidden md:block">
          <Sidebar />
        </div>
        
        <MainContent>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h1 className="text-4xl font-bold mb-6">Добро пожаловать!</h1>
              <p className="text-lg text-gray-700 mb-4">
                Наш сайт предоставляет широкий выбор строительных материалов для вашего проекта.
                Воспользуйтесь навигацией слева для выбора нужной категории или перейдите в галерею,
                чтобы ознакомиться с нашими работами.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Если у вас есть вопросы, не стесняйтесь заказать обратный звонок, и наши специалисты
                проконсультируют вас по любым вопросам.
              </p>
              
              <Partners />
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
};

export default Index;
