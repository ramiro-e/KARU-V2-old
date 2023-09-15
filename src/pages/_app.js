import { useRouter } from "next/router";
import "../app/globals.css";
import Header from "../components/partials/Header";
import Sidebar from "../components/admin/partials/Sidebar";
import ImagePreloader from '../components/partials/ImagePreloader';


const App = ({ Component, pageProps }) => {
  
  const route = useRouter()
  console.log(route.pathname != '/admin')
  return (
    <div>
      <ImagePreloader />
      {route.pathname != '/admin' && <Header/>}
      {route.pathname == '/admin' && <Sidebar/>}
      <Component {...pageProps} />
    </div>
  );
};

export default App;


