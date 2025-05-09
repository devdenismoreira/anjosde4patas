import { Header } from "../header";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer";

export function Layout() {
   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
         }}
      >
         <Header />
         <div style={{ height: "100%", flex: 1 }}>
            <Outlet />
         </div>
         <Footer />
      </div>
   );
}
