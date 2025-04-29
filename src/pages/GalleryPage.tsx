import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import Partners from "@/components/Partners";

const GalleryPage = () => {
  // Заглушки для изображений галереи
  const galleryImages = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=500&h=400",
    "https://images.unsplash.com/photo-1574328895266-4a7e60e2b2f6?q=80&w=500&h=400"
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 hidden md:block">
          <Sidebar />
        </div>
        
        <MainContent title="ГАЛЕРЕЯ">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {galleryImages.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={image} 
                      alt={`Галерея изображение ${index + 1}`} 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              
              <Partners />
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
};

export default GalleryPage;
