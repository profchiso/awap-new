import { Link } from 'react-router-dom';
import ScrollToTop from "../../Hooks/ScrollToTop";

export default function FooterRowThree() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="text-center text-xs pb-5 flex flex-wrap gap-4 justify-center">
        <div className="py-2 pr-1">Ⓒ AWESUMEDGE 2021 </div>
        <div className="py-2">  <Link to="/terms" className="text-white hover:text-white hover:underline"> TERMS {`&`} CONDITIONS</Link> </div>
        <div className="py-2"><ScrollToTop><Link to="/privacy" className="text-white hover:text-white hover:underline"> PRIVACY POLICY</Link></ScrollToTop> </div>
      </div>
    </div>
  );
}
