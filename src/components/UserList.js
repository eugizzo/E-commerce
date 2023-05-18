import React, { useEffect } from 'react';
import { fetchUser } from '../store/store';
import { useDispatch,useSelector } from 'react-redux';
import {allUsers,addUser,removeUser}  from '../reducer/userSlice';
import { faker} from '@faker-js/faker';
const UserList = () => {
    const dispatch = useDispatch();
const all=useSelector(allUsers )

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

const deleteUserHandle=()=>{
    dispatch(removeUser())
}
    return (

        <div className="overflow-x-auto">
         
  <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
    <div className="h-full">
      {/* Table */}
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Customers</h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Email</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Company</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Action</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
      {all.map((user)=>{

return(
      
                <tr key={user.id}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                      <img
                      className="rounded-full"
                      src={ faker.image.avatar()}
                      width={40}
                      height={40}
                      alt="Avatar"
                    />
                    </div>
                      <div className="font-medium text-gray-800">{user.name}</div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{user.email}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-green-500">{user.company.name}</div>
                  </td>
                  <button type='submit' className="bg-red-600 p-2 py-2 rounded-xl text-white"onClick={deleteUserHandle}> Delete</button>
                </tr>
            )})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

 
  );
}

export default UserList;
