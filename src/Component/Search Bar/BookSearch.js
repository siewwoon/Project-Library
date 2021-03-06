import React, { useState } from "react";  
import axios from 'axios';  
import { Card, Button } from 'react-bootstrap';
import "./BookSearch.css";
import Modal from "react-modal";
import Heart from "react-heart";



const apiKey = "AIzaSyDQfceMVLzrKegjreG5O7JrPngWxDz55Xw";

function BookSearch() {  
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  

  
    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    }  
    function handleSubmit(event) {  
        event.preventDefault();  
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=30")  
            .then(data => {  
                console.log(data.data.items);  
                setResult(data.data.items);  
            })  
    }  

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (  
        <form onSubmit={handleSubmit}>  
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="col-12 col-md-3 col-xl-3">  
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />  
                    </div>  
                    <div className="ml-auto">  
                        <input type="submit" value="Search" className="btn btn-primary search-btn" />  
                    </div>  
                </div>  
            </div>  
            <div className="container">  
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
        </form>  
  
    )  
}  
  
export default BookSearch