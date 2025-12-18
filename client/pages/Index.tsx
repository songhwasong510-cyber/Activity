import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - hidden on mobile by default */}
      <div className={`fixed lg:relative z-30 lg:z-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-300`}>
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Mobile menu button */}
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed top-4 left-4 z-10 w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5H17M3 10H17M3 15H17" stroke="#1D293D" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="max-w-[1206px] mx-auto p-4 sm:p-6">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 sm:px-5 py-4 mb-6 rounded-lg border border-[#BEDBFF] bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] shadow-sm">
            <div className="relative w-[38px] h-[38px] flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.2605 6.77334L17.055 7.24474C16.9047 7.58985 16.4274 7.58985 16.2769 7.24474L16.0715 6.77334C15.7053 5.93281 15.0456 5.26359 14.2224 4.89749L13.5893 4.61594C13.2471 4.46369 13.2471 3.96559 13.5893 3.81335L14.187 3.54754C15.0313 3.17201 15.7028 2.47803 16.0628 1.60894L16.2738 1.09953C16.4208 0.744493 16.9112 0.744493 17.0582 1.09953L17.2692 1.60894C17.6292 2.47803 18.3007 3.17201 19.145 3.54754L19.7426 3.81335C20.0849 3.96559 20.0849 4.46369 19.7426 4.61594L19.1096 4.89749C18.2864 5.26359 17.6268 5.93281 17.2605 6.77334ZM18.3327 16.6666V8.88209C17.8113 9.06634 17.2504 9.16659 16.666 9.16659C15.7553 9.16659 14.9014 8.92309 14.166 8.49767V14.1666H12.4993V8.33325H13.9012C12.5539 7.43749 11.666 5.90573 11.666 4.16659C11.666 3.58219 11.7663 3.02122 11.9505 2.49992H2.49935C2.03912 2.49992 1.66602 2.87302 1.66602 3.33325V16.6666C1.66602 17.1268 2.03912 17.4999 2.49935 17.4999H17.4993C17.9596 17.4999 18.3327 17.1268 18.3327 16.6666ZM5.83268 10.8333H7.49935V14.1666H5.83268V10.8333ZM9.16602 5.83325H10.8327V14.1666H9.16602V5.83325Z" fill="white"/>
                </svg>
              </div>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-text-primary">나의 활동</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
            <StatCard
              icon={<InboxUnarchiveIcon />}
              title="오늘 사용한 입력 토큰 수"
              value="100"
            />
            <StatCard
              icon={<InboxArchiveIcon />}
              title="오늘 사용된 출력 토큰 수"
              value="100"
            />
            <StatCard
              icon={<ArchiveStackIcon />}
              title="오늘 처리된 요청 수"
              value="200"
            />
            <AgentTopCard />
          </div>

          {/* Conversation List */}
          <div className="border border-neutral-200 rounded-lg shadow-sm">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-5 py-4 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <div className="w-[30px] h-[30px] flex items-center justify-center rounded flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.49935 2.5H17.4993C17.9596 2.5 18.3327 2.8731 18.3327 3.33333V16.6667C18.3327 17.1269 17.9596 17.5 17.4993 17.5H2.49935C2.03912 17.5 1.66602 17.1269 1.66602 16.6667V3.33333C1.66602 2.8731 2.03912 2.5 2.49935 2.5ZM16.666 6.0316L10.0592 11.9483L3.33268 6.01328V15.8333H16.666V6.0316ZM3.7589 4.16667L10.0509 9.71833L16.2502 4.16667H3.7589Z" fill="#1447E6"/>
                  </svg>
                </div>
                <h2 className="text-sm sm:text-base font-bold text-text-primary">오늘의 대화 목록</h2>
                <span className="text-sm sm:text-base font-bold text-primary-600">10</span>
              </div>
              <div className="flex items-center gap-1 px-2 sm:px-3 py-1.5 border border-neutral-200 rounded shadow-sm">
                <span className="text-xs sm:text-sm text-text-tertiary">2025.12.12 (수)</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M6.75 0.75V2.25H11.25V0.75H12.75V2.25H15.75C16.1642 2.25 16.5 2.58579 16.5 3V15C16.5 15.4142 16.1642 15.75 15.75 15.75H2.25C1.83579 15.75 1.5 15.4142 1.5 15V3C1.5 2.58579 1.83579 2.25 2.25 2.25H5.25V0.75H6.75ZM15 8.25H3V14.25H15V8.25ZM5.25 3.75H3V6.75H15V3.75H12.75V5.25H11.25V3.75H6.75V5.25H5.25V3.75Z" fill="#1D293D"/>
                </svg>
              </div>
            </div>

            {/* Conversation Items */}
            <div className="p-3 sm:p-4 space-y-2.5">
              <ConversationItemExpanded />
              <ConversationItemCollapsed number={2} title="이번 주 받은 메일 요약해서 알려줘" />
              <ConversationItemCollapsed number={3} title="우리 회사 휴가 규정에 대해 간략하게 알려줘" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="border border-neutral-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-start gap-3 mb-4 sm:mb-6">
        <div className="w-[38px] sm:w-[52px] h-[38px] sm:h-[52px] flex items-center justify-center rounded-lg flex-shrink-0">
          {icon}
        </div>
        <div className="text-xs sm:text-sm font-bold text-text-primary leading-tight flex-1 pt-1 sm:pt-1.5">
          {title}
        </div>
      </div>
      <div className="text-2xl sm:text-[30px] font-bold text-text-primary leading-[1.33]">{value}</div>
    </div>
  );
}

function AgentTopCard() {
  return (
    <div className="border border-neutral-200 rounded-lg p-4 shadow-sm">
      <div className="text-xs sm:text-sm font-bold text-text-primary mb-3 sm:mb-4">오늘 사용된 에이전트 TOP 3</div>
      <div className="space-y-2">
        <AgentItem number={1} label="내부 문서 검색" color="primary" />
        <AgentItem number={2} label="메일 발신" color="secondary-02" />
        <AgentItem number={3} label="메일 수신" color="secondary-01" />
      </div>
    </div>
  );
}

function AgentItem({ number, label, color }: { number: number; label: string; color: string }) {
  const bgColors = {
    primary: "bg-primary-50",
    "secondary-02": "bg-secondary-02-050",
    "secondary-01": "bg-secondary-01-050",
  };
  const textColors = {
    primary: "text-primary-600",
    "secondary-02": "text-secondary-02-600",
    "secondary-01": "text-secondary-01-600",
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`flex items-center justify-center w-[23px] h-5 rounded-md ${bgColors[color as keyof typeof bgColors]} px-1.5 flex-shrink-0`}>
        <span className={`text-xs sm:text-sm font-bold ${textColors[color as keyof typeof textColors]}`}>{number}</span>
      </div>
      <span className="text-xs sm:text-sm text-text-secondary">{label}</span>
    </div>
  );
}

function ConversationItemExpanded() {
  return (
    <div className="border border-neutral-200 rounded-lg bg-neutral-20 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 px-3 py-2.5 bg-white border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-[21px] h-5 rounded-xl bg-primary-50 px-1.5 flex-shrink-0">
            <span className="text-sm font-bold text-[#193CB8]">1</span>
          </div>
          <span className="text-sm text-text-primary">오늘 일정 알려줘</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold text-neutral-outlined-color border border-neutral-200 rounded hover:bg-neutral-50">
            대화 이어가기
          </button>
          <div className="w-px h-4 bg-neutral-200 hidden sm:block"></div>
          <div className="flex items-center gap-1 px-1.5 py-1 border border-primary-outlined rounded-md">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666ZM8.00065 13.3333C10.9462 13.3333 13.334 10.9455 13.334 7.99992C13.334 5.0544 10.9462 2.66659 8.00065 2.66659C5.05513 2.66659 2.66732 5.0544 2.66732 7.99992C2.66732 10.9455 5.05513 13.3333 8.00065 13.3333ZM8.66732 7.99992H11.334V9.33325H7.33398V4.66658H8.66732V7.99992Z" fill="#1447E6"/>
            </svg>
            <span className="text-xs text-primary-600">오전 09:27</span>
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-neutral-50 flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6.22119L4.5 10.7212L5.5575 11.7787L9 8.34369L12.4425 11.7787L13.5 10.7212L9 6.22119Z" fill="#45556C"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="p-3 sm:p-5 space-y-4 sm:space-y-5">
        {/* User Message */}
        <div className="flex justify-end gap-1.5">
          <div className="flex flex-col items-end gap-1.5">
            <div className="bg-primary-50 rounded-[26px_2px_26px_26px] px-4 sm:px-5 py-3 sm:py-3.5 max-w-[85%] sm:max-w-none">
              <span className="text-sm text-neutral-900">나의 이번 주 일정 조회해줘</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs text-text-tertiary">오전 09:27</span>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-neutral-50">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.24985 4.5V2.25C5.24985 1.83579 5.58564 1.5 5.99985 1.5H14.9998C15.4141 1.5 15.7498 1.83579 15.7498 2.25V12.75C15.7498 13.1642 15.4141 13.5 14.9998 13.5H12.7498V15.7493C12.7498 16.1639 12.4124 16.5 11.9948 16.5H3.00499C2.58794 16.5 2.25 16.1665 2.25 15.7493L2.25195 5.25065C2.25202 4.83608 2.58948 4.5 3.00706 4.5H5.24985ZM3.75181 6L3.75014 15H11.2498V6H3.75181ZM6.74985 4.5H12.7498V12H14.2498V3H6.74985V4.5Z" fill="#45556C"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Agent Response */}
        <div className="flex gap-2 sm:gap-2.5">
          <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5">
            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="gradient1" x1="12" y1="0" x2="12" y2="20.9983" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#003EC3"/>
                  <stop offset="1" stopColor="#0091FF"/>
                </linearGradient>
              </defs>
              <path d="M14.6736 0C14.8592 0 15.0415 0.0483065 15.2008 0.138257C15.3601 0.229872 15.4931 0.3598 15.5834 0.518046L23.867 14.8884C23.954 15.04 24 15.2099 24 15.3848C24 15.558 23.954 15.7296 23.867 15.8812L21.2164 20.4803C21.126 20.6369 20.9947 20.7685 20.8337 20.8601C20.6744 20.9517 20.4921 21 20.3066 21H3.6918C3.50623 21 3.32394 20.9517 3.16464 20.8601C3.00534 20.7685 2.87231 20.6369 2.78199 20.4803L0.133023 15.8812C0.0459835 15.7296 0 15.558 0 15.3848C0 15.2115 0.0459835 15.04 0.133023 14.8884L8.41494 0.518046C8.50527 0.361466 8.63829 0.229872 8.79759 0.138257C8.95689 0.0466407 9.13918 0 9.32476 0H14.6736ZM6.24223 15.8745C6.24223 15.8745 9.60887 13.5791 11.9984 13.5791C14.3878 13.5791 17.7545 15.8745 17.7545 15.8745L11.9984 5.73348L6.24223 15.8745Z" fill="url(#gradient1)"/>
            </svg>
          </div>
          <div className="flex flex-col gap-1.5 flex-1 min-w-0">
            <div className="bg-neutral-100 rounded-[2px_26px_26px_26px] px-4 sm:px-5 py-3 sm:py-3.5">
              <div className="text-xs sm:text-sm text-neutral-900 whitespace-pre-line break-words">
이번 주 일정은 다음과 같습니다.

## 📆 **일정 개요**
- 총 일정 : 2개
- 총 시간 : 총 2.0시간

## 11월 25일 (화)
- **10:30 ~ 11:30 | AgentGO3.0 요구사항정의서 2차 리뷰**
  - 참석자: 김민수(minsu@example.com), 이지은(jiun@example.com), 최영호(youngho@example.com)
  - 장소: Microsoft Teams 모임
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-neutral-50">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.24985 4.5V2.25C5.24985 1.83579 5.58564 1.5 5.99985 1.5H14.9998C15.4141 1.5 15.7498 1.83579 15.7498 2.25V12.75C15.7498 13.1642 15.4141 13.5 14.9998 13.5H12.7498V15.7493C12.7498 16.1639 12.4124 16.5 11.9948 16.5H3.00499C2.58794 16.5 2.25 16.1665 2.25 15.7493L2.25195 5.25065C2.25202 4.83608 2.58948 4.5 3.00706 4.5H5.24985ZM3.75181 6L3.75014 15H11.2498V6H3.75181ZM6.74985 4.5H12.7498V12H14.2498V3H6.74985V4.5Z" fill="#45556C"/>
                </svg>
              </button>
              <span className="text-xs text-text-tertiary">오전 09:27</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConversationItemCollapsed({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 px-3 py-2.5 border border-neutral-200 rounded-lg bg-white hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-2 min-w-0">
        <div className="flex items-center justify-center w-[23px] h-5 rounded-xl bg-primary-50 px-1.5 flex-shrink-0">
          <span className="text-sm font-bold text-[#193CB8]">{number}</span>
        </div>
        <span className="text-sm text-text-primary truncate">{title}</span>
      </div>
      <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
        <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold text-neutral-outlined-color border border-neutral-200 rounded hover:bg-neutral-50">
          대화 이어가기
        </button>
        <div className="w-px h-4 bg-neutral-200 hidden sm:block"></div>
        <div className="flex items-center gap-1 px-1.5 py-1">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <path d="M8.00065 14.6666C4.31875 14.6666 1.33398 11.6818 1.33398 7.99992C1.33398 4.31802 4.31875 1.33325 8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666ZM8.00065 13.3333C10.9462 13.3333 13.334 10.9455 13.334 7.99992C13.334 5.0544 10.9462 2.66659 8.00065 2.66659C5.05513 2.66659 2.66732 5.0544 2.66732 7.99992C2.66732 10.9455 5.05513 13.3333 8.00065 13.3333ZM8.66732 7.99992H11.334V9.33325H7.33398V4.66658H8.66732V7.99992Z" fill="#1447E6"/>
          </svg>
          <span className="text-xs text-primary-600 whitespace-nowrap">오전 09:27</span>
        </div>
        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-neutral-50 flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6.22119L4.5 10.7212L5.5575 11.7787L9 8.34369L12.4425 11.7787L13.5 10.7212L9 6.22119Z" fill="#45556C"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

function InboxUnarchiveIcon() {
  return (
    <div className="relative w-[38px] h-[38px]">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[7px] top-[7px]">
        <path d="M16.666 2.5L18.3327 5.83333V16.6667C18.3327 17.1269 17.9596 17.5 17.4993 17.5H2.49935C2.03912 17.5 1.66602 17.1269 1.66602 16.6667V5.83627L3.33268 2.5H16.666ZM9.99935 8.33333L6.66602 11.6667H9.16602V15H10.8327V11.6667H13.3327L9.99935 8.33333ZM15.636 4.16667H4.36268L3.53018 5.83333H16.4693L15.636 4.16667Z" fill="white"/>
      </svg>
    </div>
  );
}

function InboxArchiveIcon() {
  return (
    <div className="relative w-[38px] h-[38px]">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[7px] top-[7px]">
        <path d="M3.33268 2.5H16.666L18.3327 5.83333V16.6667C18.3327 17.1269 17.9596 17.5 17.4993 17.5H2.49935C2.03912 17.5 1.66602 17.1269 1.66602 16.6667V5.83627L3.33268 2.5ZM10.8327 11.6667V8.33333H9.16602V11.6667H6.66602L9.99935 15L13.3327 11.6667H10.8327ZM16.4693 5.83333L15.6359 4.16667H4.36315L3.53055 5.83333H16.4693Z" fill="white"/>
      </svg>
    </div>
  );
}

function ArchiveStackIcon() {
  return (
    <div className="relative w-[38px] h-[38px]">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-[7px] top-[7px]">
        <path d="M3.33333 4.16667H16.6667V2.5H3.33333V4.16667ZM16.6667 7.5H3.33333V5.83333H16.6667V7.5ZM7.5 10.8333H12.5V9.16667H17.5V16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667V9.16667H7.5V10.8333Z" fill="white"/>
      </svg>
    </div>
  );
}
