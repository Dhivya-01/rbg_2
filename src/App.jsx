// import { Outlet } from "react-router-dom";
// import "./App.css";
// import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>RBG.AI</title>
        <meta 
          name="description" 
          content="Delivering Human-Machine Loop for Accelerating Data-Driven Machine Learning Workflows."
        />
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;