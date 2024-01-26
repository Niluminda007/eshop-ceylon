import Header from "@/components/Header/Header";

type HomeLayOutProps = {
  children: React.ReactNode;
};

const HomeLayOut = ({ children }: HomeLayOutProps) => {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <Header />
      {children}
    </div>
  );
};
export default HomeLayOut;
