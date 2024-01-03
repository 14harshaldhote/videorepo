import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Welcome } from "./pages/Welcome";
import { Update } from "./pages/Update";
import { Menu } from "./Menu";


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Menu />}></Route>
<Route path="Register" element={<Register />}></Route>
<Route path="login" element={<Login />}></Route>
<Route path="Welcome" element={<Welcome />}></Route>
<Route path="Update" element={<Update />}></Route>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
