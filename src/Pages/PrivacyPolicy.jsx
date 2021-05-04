import HeaderRowOne from "../components/Header/HeaderRowOne";
import Footer from "../components/Footer/Footer";
import Privacy from "../components/Footer/Privacy";
import useWindowDimensions from "../Hooks/UseWindowDimension";
import MobileHeader from "../components/Header/MobileHeader";

export default function PrivacyPolicy() {
  const { width } = useWindowDimensions();
  return (
    <div>
      {width > 640 ? (
        <div className="shadow py-005">
          <HeaderRowOne />
        </div>
      ) : (
        <div className="block bg-blueOne pb-6 pl-2 sm:hidden">
          <MobileHeader />
        </div>
      )}
      <Privacy />
      <Footer />
    </div>
  );
}
