import { json } from "react-router-dom";

const getReadBooks = ()=>{
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        const storedBooksParse =JSON.parse(storedBooks);
        return storedBooksParse;
    }
    return [];
}

const saveReadBook = (storedBooks2)=>{
  const storedBooksStr = JSON.stringify(storedBooks2);
  localStorage.setItem("books",storedBooksStr)
}

const addReadBooks = (id)=>{
    const storedBooks2 = getReadBooks();
    if(storedBooks2.includes(id)){
        alert("already exist")
    }
    else{
        storedBooks2.push(id);
        saveReadBook(storedBooks2);
    }
}

export {addReadBooks,getReadBooks}