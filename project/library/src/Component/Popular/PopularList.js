import React, { useState } from "react";  
import axios from 'axios';  
import { Card, Button } from 'react-bootstrap';
import "./PopularList.css";  
import Modal from "react-modal";

function Popular() {  
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  
 
    axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=AIzaSyDQfceMVLzrKegjreG5O7JrPngWxDz55Xw&maxResults=30")  
        .then(data => {  
            console.log(data.data.items);  
            setResult(data.data.items);  
        })      

 function KnowMore ()  {
     const [modalIsOpen, setModalIsOpen] = useState(false);
 }      

 return (
    <div className="containerb">  
    <div className="cell">  
        {result.map(book => (  
            <div className="col-sm-3">  
                <Card className="Card">  

                    <Card.Img className="img" variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'} alt={book.title} />  
                    <Card.Body>  
                        <h5 className="card-title">{book.volumeInfo.title}</h5>  
                       
                        <h2> Modal title</h2>
                        <p> Modal Body</p>
                        <div>
                           
                        </div>
                       
                    </Card.Body>  
                </Card>  
            </div>  
        ))}  
    </div>  
</div>  
 )}      
export default Popular