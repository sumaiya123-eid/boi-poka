
import books from '../../books.jpg'
export default function Banner() {
  return (
    <div className="hero bg-[#1313130D] rounded-lg">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src={books}
        className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold mb-6">Books to freshen up <br />your bookshelf </h1>
        <button class="btn bg-[#23BE0A] text-white font-bold">Success</button>
      </div>
    </div>
  </div>
  )
}
