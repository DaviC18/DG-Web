// biome-ignore assist/source/organizeImports: <component>
import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
