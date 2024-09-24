import { useState } from 'react';
import { updateUser } from '../app/utils';

export default function UpdateUserForm() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [favNumber, setFavNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const tx = await updateUser(id, name, favNumber);
      console.log('Transaction:', tx);
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  return (
    <div className="w-full mt-6 max-w-md mx-auto border border-black rounded-lg overflow-hidden bg-white text-black">
      <div className="p-4 border-b border-black">
        <h2 className="text-2xl font-bold">updateUser</h2>
      </div>
      <form className="p-4" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-black mb-1">
              ID
            </label>
            <input
              id="id"
              type="text"
              placeholder="enter ID"
              className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="enter Name"
              className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="favNumber" className="block text-sm font-medium text-black mb-1">
              Fav Number
            </label>
            <input
              id="favNumber"
              type="text"
              placeholder="favNumber"
              className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              value={favNumber}
              onChange={(e) => setFavNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Update User
          </button>
        </div>
      </form>
    </div>
  );
}