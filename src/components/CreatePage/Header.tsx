// import React from 'react';
// import { Bell, Search, Menu } from 'lucide-react';

// interface HeaderProps {
//   onMenuClick: () => void;
// }

// const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
//   return (
//     <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
//       <div className="flex items-center justify-between">
//         <button
//           className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//           onClick={onMenuClick}
//         >
//           <span className="sr-only">Open sidebar</span>
//           <Menu className="h-6 w-6" />
//         </button>

//         {/* <div className="flex-1 max-w-xl mx-4">
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Search className="h-5 w-5 text-gray-400" />
//             </div>
//             <input
//               type="text"
//               className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//               placeholder="Search for projects..."
//             />
//           </div>
//         </div> */}

//         <div className="flex items-center space-x-4">
//           {/* <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
//             <Bell className="h-6 w-6" />
//           </button> */}
//           {/* <div className="relative">
//             <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//               <img
//                 className="h-8 w-8 rounded-full"
//                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                 alt="User profile"
//               />
//             </button>
//           </div> */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header