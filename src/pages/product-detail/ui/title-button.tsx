export const TitleButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-8 h-8 flex justify-center items-center cursor-pointer">
      {children}
    </button>
  );
};
