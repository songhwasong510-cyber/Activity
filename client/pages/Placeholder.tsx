import Sidebar from "@/components/Sidebar";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5V7H9V5H11ZM11 9V15H9V9H11Z" fill="#1447E6"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-text-primary mb-3">{title}</h1>
          <p className="text-text-secondary mb-6">
            {description || "이 페이지는 아직 준비 중입니다. 곧 완성될 예정이니 조금만 기다려 주세요!"}
          </p>
          <p className="text-sm text-text-tertiary">
            추가 기능이 필요하시다면 계속해서 요청해 주세요.
          </p>
        </div>
      </div>
    </div>
  );
}
