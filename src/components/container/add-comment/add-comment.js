import { useEffect, useState } from "react";
import MainBtn from "../main-btn/main-btn"
import "./add-comment.scss";




const MAX_COUNT = 25;

const AddComment = () => {
    const [ textareaValue, setTextareaValue ] = useState("")
    const[message, setMessage] = useState("")
    const leftLettersCount = MAX_COUNT - textareaValue.length;
    const handleTextareaChange = (evt) => {
        if(MAX_COUNT - evt.target.value.length >= 0){
            setTextareaValue(evt.target.value)
        
        }
    }


    useEffect(() =>{
        if(leftLettersCount == 0){
            setMessage("boshqa kirita olmaysiz")
        }else{
            setMessage(" ")
        }
    },[textareaValue])
    

    

    return(
        <div className="edit__boxing">
            <form className="edit__form" action="#">
            <h2>Add Comment</h2>
            <textarea className="edit__text" value={textareaValue} onChange={handleTextareaChange} name="comment__body" id="" cols="30" rows="10" placeholder="Type your comment here"></textarea>
            <div className="edit__boxes">


            <div>
            <p>{MAX_COUNT - textareaValue.length} Characters left</p>
            <p>{message}</p>
            </div>
            <MainBtn>
            Post Comment
            </MainBtn>
            </div>
        </form>
        </div>
    )
}

export default AddComment;