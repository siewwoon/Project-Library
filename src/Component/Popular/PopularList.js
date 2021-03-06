import React, { useState } from "react";  
import axios from 'axios';  
import { Card, Button } from 'react-bootstrap';
import "./PopularList.css";  
import Modal from "react-modal";
import Heart from "react-heart";



function Popular() {  
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  
 
    axios.get("https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=AIzaSyDQfceMVLzrKegjreG5O7JrPngWxDz55Xw&maxResults=30")  
        .then(data => {  
            console.log(data.data.items);  
            setResult(data.data.items);  
        })      

 
     const [modalIsOpen, setModalIsOpen] = useState(false);



 return (
    <div className="containerb">  
    <div className="cell">  
        {result.map(book => (  
            <div className="col-sm-3">  
                <Card className="Card">  

                    <Card.Img className="img" variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'} alt={book.title} />  
                    <Card.Body>  
                        <h5 className="card-title">{book.volumeInfo.title}</h5>  
                        <Heart />
                        <Button className="btn btn-primary"  onClick={() => setModalIsOpen(true)}>Know more</Button> 
                        <Modal isOpen ={modalIsOpen}> 
                        <h2> {book.volumeInfo.description}</h2>
                        <div>
                            <Button onClick={() => {
                                    return setModalIsOpen(false);
                                }}>Close</Button>
                        </div>
                        </Modal>
            
                    </Card.Body>  
                </Card>  
            </div>  
        ))}  
    </div>  
</div>  
 )}      
export default Popular