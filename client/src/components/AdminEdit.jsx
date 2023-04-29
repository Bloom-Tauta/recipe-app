import React,{useState,useEffect} from "react";


function AdminEdit(){

    const [admin, setAdmin] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
      fetch("/adminme", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, []);
    const handleUpdate = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch(`/admins/${admin.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        });
        const data = await response.json();
        console.log("Success:", data);
        setAdmin({ ...admin, name, email }); // update the state
        setIsUpdating(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const handleCancel = () => {
      setIsUpdating(false);
      setName(admin.name);
      setEmail(admin.email);
    };
    return(
        <div>
            <form onSubmit={handleUpdate} className="mx-auto my-10 max-w-lg">
<div className="mb-4">
  <label htmlFor="name" className="block text-gray-600 font-bold mb-2">
    Name
  </label>
  <input
    type="text"
    id="name"
    name="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<div className="mb-6">
  <label htmlFor="email" className="block text-gray-600 font-bold mb-2">
    Email
  </label>
  <input
    type="email"
    id="email"
    name="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  />
</div>
<div className="flex items-center justify-between">
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Save
  </button>
  <button
    type="button"
    onClick={handleCancel}
    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Cancel
  </button>
</div>
</form>
        </div>
    )
}
export default AdminEdit;