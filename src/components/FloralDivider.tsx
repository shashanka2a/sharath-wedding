export function FloralDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent w-24" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#d4af37]"
      >
        <path
          d="M12 2C12 2 10 6 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 6 12 2 12 2Z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M12 22C12 22 10 18 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15C14 18 12 22 12 22Z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M2 12C2 12 6 10 9 10C10.1046 10 11 10.8954 11 12C11 13.1046 10.1046 14 9 14C6 14 2 12 2 12Z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M22 12C22 12 18 10 15 10C13.8954 10 13 10.8954 13 12C13 13.1046 13.8954 14 15 14C18 14 22 12 22 12Z"
          fill="currentColor"
          opacity="0.6"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
      <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent w-24" />
    </div>
  );
}
