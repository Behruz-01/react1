import HomeBeetwenBtn from "../home-right-between-btn/home-right-between-btn";
import HomeBeetwenComment from "../home-right-between-comment.js/home-right-between-comment.js";
import "./home-right-beetwen.scss";
import arrow from "../../../assets/images/Path.svg";
import { Link } from "react-router-dom";
// import MainBtn from "../main-btn/main-btn";


const commentList = [
    {
        id:1,
        name:"Add tags for solution",
        btn:"Enhancement",
    },
    {
        id:2,
        name:"Add a dark theme option",
        btn:"Feature",
    },
    {
        id:3,
        name:"Q&A within the challenge hubs",
        btn:"Feature",
    },
    {
        id:4,
        name:"Allow image/video upload to feedback",
        btn:"Enhancement",
    },
    {
        id:5,
        name:"Ability to follow others",
        btn:"Feature",
    },
    {
        id:6,
        name:"Preview images not loading",
        btn:"Bug",
    }
]




const HomeBeetwen = () => {
    return (
        commentList.map(HomeNewBetween => (
            <div key={HomeNewBetween.id} className="wrapper__box">
            <div className="wrapper__carton">
                <button className="wrapper__btn-between">
                    122
                    <img className="wrapper__img-arrow" src={arrow} alt="" />
                </button>
    
                <div className="wrapper__wrap">
                    <Link to={"/edit"}>
                    <h3>
                        {HomeNewBetween.name}
                    </h3>
                    </Link>
                    <p>
                    Easier to search for solutions based on a specific stack.
                    </p>
    
                    <HomeBeetwenBtn>
                        
                    </HomeBeetwenBtn>
    
    
                    
    
                    
                </div>
            </div>
    
                <HomeBeetwenComment>
    
                </HomeBeetwenComment>
                
                
    
    
            </div>
        ))
    )
        
        


        

        
    
}

export default HomeBeetwen;
