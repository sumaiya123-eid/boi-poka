import { list } from "postcss"
import { Link } from "react-router-dom"


export default function Book({book}) {
    const {bookId, image , bookName ,author , category ,tags}=book
  return (
 <Link to={`/books/${bookId}`}>
  <div className="card p-6 border">
    <figure>
      <img className="h-[300px] w-full object-fit"
        src={image}/>
    </figure>
    <div className="space-y-3">
      <h2 className="card-title">
        {
            tags.map(tag=><button className="btn btn-xs">{tag}</button>)
        }
      </h2>
      <p>{bookName}</p>
      <p><small>By:{author}</small></p>
      <div className="flex justify-between items-center">
        <p><small>{category}</small></p>
        <p><small>5.00</small></p>
      </div>
    </div>
  </div></Link>
  )
}
