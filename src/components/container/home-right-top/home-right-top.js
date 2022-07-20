import { Link } from "react-router-dom";
import rasm from "../../../assets/images/logo.svg"
import HomeTopBtn from "../home-right-top-btn/home-right-top-btn";
import "./home-right-top.scss";

const HomeRighttop = () => {
    
    return(
        <div className="wrapper__top">
            <div className="wrapper__boxing">
                <a className="wrapper__logo" href="#">
                    <img src={rasm} alt="asdasd" />
                </a>

            
                <p className="wrapper__text">
                6 Suggestions
                </p>
                <p className="wrapper__texts">
                Sort by : Most Upvotes
                </p>
            </div>

            <Link to={"/create"}>
                 <HomeTopBtn>
                
                </HomeTopBtn>
            </Link>
        </div>
    )
}


export default HomeRighttop;