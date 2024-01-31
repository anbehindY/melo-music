import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="bg-right-upper-gradient lg:bg-right-upper-lg bg-no-repeat bg-right-top">
      <div className="bg-left-upper-gradient lg:bg-left-upper-lg bg-no-repeat bg-[0_6%]">
        <div className="bg-left-lower-gradient lg:bg-left-lower-lg bg-no-repeat bg-[0_65%] lg:bg-[0_85%]">
          <div className="bg-right-lower-gradient lg:bg-right-lower-lg bg-no-repeat bg-[100%_92%]">
            <Navigation />
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
