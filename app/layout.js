// import { Inter } from 'next/font/google'
// import { useState } from 'react'
// import './globals.css'
// import Navbar from './components/navigation/navbar'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//           <Navbar className={`w-full `} changeVisibility={changeVisibility} isHeaderVisible={isHeaderVisible}></Navbar>
//           {children}
//         </body>
//     </html>
//   )
// }

// import { Inter } from 'next/font/google';
// import { useState } from 'react';
// import './globals.css';
// import Navbar from './components/navigation/navbar';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

// export default function RootLayout({ children }) {
//   const [isHeaderVisible, changeVisibility] = useState(false);

//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar className="w-full" changeVisibility={changeVisibility} isHeaderVisible={isHeaderVisible} />
//         {/* Pass the state and function to children as needed */}
//         {React.Children.map(children, child => 
//           React.cloneElement(child, { changeVisibility, isHeaderVisible })
//         )}
//       </body>
//     </html>
//   );
// }

// Use client - This marks the component as a Client Component
'use client'
import React from 'react';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import './globals.css';
import Navbar from './components/navigation/navbar';
import Menu from './components/navigation/menu';
import { HeaderVisibilityProvider } from './HeaderVisibilityContext.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        
        <HeaderVisibilityProvider>
          <Navbar/>
          <Menu/>
          {/* Your layout structure */}
          {children}
        </HeaderVisibilityProvider>
      </body>
    </html>
  );
}
