import { useEffect, useState } from "react"
import Book from "../Book/Book"


export default function Books() {
    const [books , setBooks] = useState([])
    useEffect(()=>{
        fetch("./booksData.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
  return (
    <div> 
        <h3 className="font-bold text-xl text-center mt-10">
        Books : {books.length}</h3>
        <div className="grid grid-cols-3 gap-3 mt-10">
        {
            books.map(book=><Book book={book}></Book>)
        }
        </div>
        
        </div>
  )
}
