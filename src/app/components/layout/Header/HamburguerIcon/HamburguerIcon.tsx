const HamburguerIcon: React.FC = () => {
  return (
    <div className="text-white block sm:hidden absolute pb-2 right-[21px] cursor-pointer">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </div>
  );
};

export default HamburguerIcon;
