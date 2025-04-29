import { ChevronRight } from "lucide-react";

interface CategoryItem {
  id: number;
  name: string;
  hasChildren: boolean;
}

const categories: CategoryItem[] = [
  { id: 1, name: "КИРПИЧ / ГАЗОБЛОК", hasChildren: true },
  { id: 2, name: "ПЛИТЫ ПЕРЕКРЫТИЯ", hasChildren: true },
  { id: 3, name: "ГИДРОИЗОЛЯЦИЯ", hasChildren: true },
  { id: 4, name: "УТЕПЛИТЕЛЬ", hasChildren: false },
  { id: 5, name: "КРОВЛЯ", hasChildren: true },
  { id: 6, name: "ОКНА / ДВЕРИ", hasChildren: true },
  { id: 7, name: "ОТДЕЛ МАТЕРИАЛЫ", hasChildren: false },
  { id: 8, name: "ПРОЧЕЕ", hasChildren: true },
];

export const Sidebar = () => {
  return (
    <div className="bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold">ГОСТЕВОЙ ВХОД</h2>
      </div>
      
      <ul className="pb-4">
        {categories.map((category) => (
          <li key={category.id}>
            <a href="#" className="category-item">
              {category.name}
              {category.hasChildren && <ChevronRight size={20} />}
            </a>
          </li>
        ))}
      </ul>
      
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-center space-x-4 mt-4">
          <img 
            src="https://cdn.poehali.dev/files/3513f980-ed82-4979-85a8-fd7b352a816f.jpg" 
            alt="Логотип партнера" 
            className="h-12 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
