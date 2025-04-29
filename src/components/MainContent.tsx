import { ReactNode } from "react";

interface MainContentProps {
  title?: string;
  children: ReactNode;
}

export const MainContent = ({ title, children }: MainContentProps) => {
  return (
    <div className="p-6 flex-1 overflow-auto">
      {title && <h1 className="text-4xl font-bold mb-8 text-center">{title}</h1>}
      {children}
    </div>
  );
};

export default MainContent;
