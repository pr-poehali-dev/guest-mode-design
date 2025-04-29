import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import Partners from "@/components/Partners";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 hidden md:block">
          <Sidebar />
        </div>
        
        <MainContent title="О НАС">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-base mb-4">
                Проект создан студентами ЮФУ в рамках учебной инициативы.
              </p>
              <p className="text-base mb-4">
                С древнейших времен и до наших дней возведение зданий остается неотъемлемой частью человеческой деятельности, что делает материалы для строительства и отделки постоянно актуальными. Сегодня индустрия ремонта и архитектуры требует не только высоких стандартов качества продукции, но и разнообразия ассортимента — это гарантирует безопасность, экологичность, устойчивость конструкций и многолетнюю эксплуатацию объектов
              </p>
              <p className="text-base mb-8">
                Неважно, какой проект вам предстоит реализовать: профессионально подобранные материалы и высококвалифицированные специалисты помогут создать дом для безопасного проживания, энергоэффективности и сохранения эстетики вашего пространства на десятилетия. Инновационные решения в этой сфере позволяют сочетать практичность с современными стандартами комфорта.
              </p>
              
              <div className="flex justify-center mb-8">
                <img 
                  src="https://via.placeholder.com/500x100?text=ИКИТ" 
                  alt="Институт Компьютерных Технологий" 
                  className="h-20 w-auto object-contain"
                />
              </div>
              
              <Partners />
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
};

export default AboutPage;
