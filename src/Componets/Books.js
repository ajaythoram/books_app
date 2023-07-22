import React, { useEffect, useState } from "react";
import axios from "axios";
const Books = ()=>{

    const [books,setBooks] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response1 = await axios.get(
                    'https://www.googleapis.com/books/v1/volumes?q=harry+potter'
                );
                const response2 = await axios.get(
                    'https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes'
                  );
                  const combinedData = [
                    ...response1.data.items,
                    ...response2.data.items,
                  ];
          
                  setBooks(combinedData);
          
            }
            catch (error){
                console.log("Error fetching books:",error)
            }
        };
        fetchData();
    },[]);


    return(
        <div>
                      <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
        {book.volumeInfo.imageLinks?.thumbnail && (
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        )}
      </div>
      ))}
    </div>
        </div>
    )
}
export default Books;