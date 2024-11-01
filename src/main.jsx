import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesToRead from './components/PagesToRead/PagesToRead';
import BookDetail from './components/BookDetail/BookDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "listedbooks",
        loader:()=>fetch('/booksData.json'),
        element:<ListedBooks></ListedBooks>,
      },
      {
        path: "pagestoread",
        element:<PagesToRead></PagesToRead>
      },
      {
        path: "books/:bookId",
        loader:()=>fetch('/booksData.json'),
        element:<BookDetail></BookDetail>
      },
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
