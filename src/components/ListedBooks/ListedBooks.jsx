import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadBooks } from '../../utility/readbooklocalstorage';
import Book from '../Book/Book';
import { getWishBook } from '../../utility/wishlistlocalstorage';
export default function ListedBooks() {

  const [readBook , setReadBook]=useState([])
  const [wishBook , setWishBook]=useState([])

  const listedBooks = useLoaderData()

  useEffect(()=>{
    const storedReadBooks = getReadBooks();
    setReadBook(listedBooks.filter(book=> storedReadBooks.includes(book.bookId)));

  },[])

  useEffect(()=>{
    const storedWishBooks = getWishBook();
    setWishBook(listedBooks.filter(book=>storedWishBooks.includes(book.bookId)))
  },[])
  return (
    <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2 className='grid grid-cols-3 gap-3'>
        {
          readBook.map(book=><Book book={book}></Book>)
        }
      </h2>
    </TabPanel>
    <TabPanel>
      <h2 className='grid grid-cols-3 gap-3'>
        {
          wishBook.map(book=><Book book={book}></Book>)
        }
      </h2>
    </TabPanel>
  </Tabs>
  )
}
