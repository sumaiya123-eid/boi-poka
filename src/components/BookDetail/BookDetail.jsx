import { useLoaderData, useParams } from "react-router-dom"
import { addReadBooks } from "../../utility/readbooklocalstorage";
import { addWishBook } from "../../utility/wishlistlocalstorage";


export default function BookDetail() {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const bookDetail = useLoaderData();
    const book = bookDetail.find(book => book.bookId === id)
    const handleRead = (id)=>{
      addReadBooks(id)
    }
    const handleWish=(id)=>{
      addWishBook(id)
    }
  return (
    <div>
      <img className="w-[300px]" src={book.image} alt="" />
     <div className="mt-8 flex gap-6">
     <button onClick={()=>handleRead(id)} className="btn btn-outline btn-info">Read</button>
     <button onClick={()=>handleWish(id)} className="btn btn-outline btn-success">Wishlist</button>
     </div>
    </div>
  )
}
