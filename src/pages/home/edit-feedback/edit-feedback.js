import { Link, useParams } from "react-router-dom";
import AddComment from "../../../components/container/add-comment/add-comment";
import Container from "../../../components/container/container";
import HomeBeetwen from "../../../components/container/home-right-beetwen/home-right-beetwen";
import ReplyComment from "../../../components/container/reply/reply";
import "./edit-btn.scss";

const EditFeedback = () => {

    // const {id} = useParams();

    return(
         <Container>
        <div className="edit">
            <div className="edit__top">
            <Link to={"/"}>
                go back 
            </Link>

            <button className="edit__btn">
            Edit Feedback
            </button>
            </div>

            <HomeBeetwen>

            </HomeBeetwen>


            <ReplyComment>
                
            </ReplyComment>


            <div>
                <AddComment>
                    
                </AddComment>
            </div>
        </div>
        </Container>
    )
}

export default EditFeedback;