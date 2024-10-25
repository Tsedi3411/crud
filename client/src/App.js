
import AddUser from './AddUser/AddUser';
import './App.css';
import User from './getUSer/User';
import {createBrowserRouter,  RouterProvider } from 'react-router-dom'

function App() {

  const route = createBrowserRouter([
     {
      path: "/",
      element: <User />
     } ,
     {
      path:"/add",
      element:<AddUser />
     }
  ]);


  return (
    <div className="App">
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
