import { Fragment } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { SidebarProvider } from "./context/SidebarContext";
import Sections from "./components/Sections/Sections";

function App() {
  return (
    <SidebarProvider>
      <Fragment>
        <Header />
        <Sidebar />
        <Sections />
      </Fragment>
    </SidebarProvider>
  );
}

export default App;
