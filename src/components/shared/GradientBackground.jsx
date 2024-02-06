export default function GradientBackground({ children }) {
  return (
    <div className="bg-right-upper-gradient lg:bg-right-upper-lg bg-no-repeat bg-right-top">
      <div className="bg-left-upper-gradient lg:bg-left-upper-lg bg-no-repeat bg-[0_6%]">
        <div className="bg-left-lower-gradient lg:bg-left-lower-lg bg-no-repeat bg-[0_65%] lg:bg-[0_85%]">
          <div className="bg-right-lower-gradient lg:bg-right-lower-lg bg-no-repeat bg-[100%_92%]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
