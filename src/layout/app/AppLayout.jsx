import { Outlet } from "react-router-dom";
import Footer from '../../components/home/restaurant/Footer';
import NavBar from '../../components/core/NavBar';


function AppLayout() {
  return (
    <>  
      <header>
         <NavBar />
      </header>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;