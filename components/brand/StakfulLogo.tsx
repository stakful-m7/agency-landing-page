export function StakfulLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="4" y="6" width="20" height="4" rx="2" fill="currentColor" opacity="0.7" />
      <path
        d="M4 14h8c2 0 3 1 4 2s2 2 4 2h8v-4H20c-2 0-3 1-4 2s-2 2-4 2H4v-4z"
        fill="currentColor"
        opacity="0.85"
      />
      <rect x="4" y="22" width="24" height="4" rx="2" fill="currentColor" />
    </svg>
  );
}
