const getWishBook=()=>{
    const storedWishBook = localStorage.getItem('wish-books')
    if(storedWishBook){
        const storedWishBookParse = JSON.parse(storedWishBook)
        return storedWishBookParse
    }
    return [];
}

const saveWishBooks=(storedWishBook2)=>{
  const storedWishBookStr = JSON.stringify(storedWishBook2)
  localStorage.setItem("wish-books",storedWishBookStr)
}

const addWishBook = (id)=>{
    const storedWishBook2 =getWishBook();
    if(storedWishBook2.includes(id)){
        alert("already exist")
    }
    else{
        storedWishBook2.push(id)
        saveWishBooks(storedWishBook2)
    }
}

export {addWishBook ,getWishBook}