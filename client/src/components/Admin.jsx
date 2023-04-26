import React from "react";

function Admin() {
  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto py-4">
          <h1 className="text-3xl font-bold text-gray-900">Recipe Dashboard</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto py-6">
        <div className="flex flex-wrap -mx-2">

          {/* Recipe list */}
          <div className="w-full lg:w-1/2 px-2">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Your Recipes</h2>

            {/* Recipe cards */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1509560724934-332aee803a88" alt="" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Pasta Carbonara</h3>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor augue vel massa vehicula, eget pulvinar massa bibendum. Sed pellentesque tincidunt faucibus. Nullam elementum est sed quam auctor, a auctor quam bibendum.</p>
                    <div className="flex mt-4">
                      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">Approve</button>
                      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Deny</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544025162-d766942659a0" alt="" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Chocolate Chip Cookies</h3>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor augue vel massa vehicula, eget pulvinar massa bibendum. Sed pellentesque tincidunt faucibus. Nullam elementum est sed quam auctor, a auctor quam bibendum.</p>
                    <div className="flex mt-4">
                      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">Approve</button>
                      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Deny</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more recipe cards here... */}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/2 px-2">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Actions</h2>
          </div>
          </div>
          </main>
          </div>


          );
          };
        export default Admin;


   


