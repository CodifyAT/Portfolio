import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar'
interface LayoutProps {
  children: ReactNode; // Specify the type of children
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
        <Navbar />
        <main>{children}</main>
    </div>
  )
}

export default Layout