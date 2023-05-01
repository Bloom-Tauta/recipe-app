// import { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// function DropdownMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
     
//       <button
//   className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 p-3 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600"
//   onClick={toggleDropdown}
//     >
//        <FaBars className="w-4 h-4" />
//    </button>  

//       {isOpen && (
//         <div className="absolute top-12 right-0 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
//           <Link
//             to="/favorite-recipes"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             Favorite Recipes
//           </Link>
//           <Link
//             to="/addrecipeform"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             Add Recipe
//           </Link>
//           <Link
//             to="/about"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             About
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DropdownMenu;
//  import { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// function DropdownMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         className="flex items-center justify-center w-12 h-12 p-3 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600"
//         onClick={toggleDropdown}
//       >
//         <FaBars className="w-6 h-6" />
//        </button>

//       {isOpen && (
//         <div className="fixed top-14 right-0 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
//           <Link
//             to="/favorite-recipes"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             Favorite Recipes
//           </Link>
//           <Link
//             to="/addrecipeform"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             Add Recipe
//           </Link>
//           <Link
//             to="/about"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             About
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default DropdownMenu;
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function DropdownMenu({ logout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center w-12 h-12 p-3 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600"
        onClick={toggleDropdown}
      >
        <FaBars className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed top-14 right-0 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <Link
            to="/favorite-recipes"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Favorite Recipes
          </Link>
          <Link
            to="/addrecipeform"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Add Recipe
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            About
          </Link>
          <button
            className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;


