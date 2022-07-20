import { Link } from "react-router-dom";
import oval from "../../../assets/images/Ovals.svg";

import Container from "../../../components/container/container";
import HomeTopBtn from "../../../components/container/home-right-top-btn/home-right-top-btn";
import TypeBadge from "../../../components/container/type-badge/type-badge";
import "./create.scss";





const addSection = [
    {
      id: 1,
      title: "Feedback Title",
      span: " Add a short, descriptive headline",
      input: <input type="text" required className="add__input" />,
    },
    {
      id: 2,
      title: "Category",
      span: "Choose a category for your feedback",
      input: (
        <select className="add__input">
          <option value="1">
            {/* <TypeBadge>Feature</TypeBadge> */}
            <TypeBadge>Feature</TypeBadge>
          </option>
          <option value="2">
            {/* <TypeBadge>UI</TypeBadge> */}
            <TypeBadge>UI</TypeBadge>
          </option>
          <option value="3">
            {/* <TypeBadge>UX</TypeBadge> */}
            <TypeBadge>UX</TypeBadge>
          </option>
          <option value="4">
            {/* <TypeBadge>Enhancement</TypeBadge> */}
            <TypeBadge>Enhancement</TypeBadge>
          </option>
          <option value="5">
            {/* <TypeBadge>Bug</TypeBadge> */}
            <TypeBadge>Bug</TypeBadge>
          </option>
        </select>
      ),
    },
    {
      id: 3,
      title: "Feedback Detail",
      span: "Include any specific comments on what should be improved, added, etc.",
      input: <input type="text" className="add__input add__input--comments" />,
    },
  ];









const CreateFeedBack = () => {
    return(
       <Container>

        


<div className="create">
            <Link className="create__links" to={"/"}>
                 go back
            </Link>

            <div className="create__box">

                <img className="create__image" src={oval} alt="add" />
                

                <h2>
                Create New Feedback
                </h2>

                <form className="create__form" action="#">

                    {addSection.map((todo) => (
                        <div key={todo.id}>
                        <h3 className="create__title">{todo.title}</h3>
                        <span className="create__span">{todo.span}</span>
                        <div className="create__input create__input--mod">{todo.input}</div>
                      </div>
                    ))}

                    
                        
                            {/* <h3>Category</h3>
                            <p>Choose a category for your feedback</p>
                        

                         <input className="create__input" type="text" /> */}
                    


                    {/* <label htmlFor="">
                        <h3>Category</h3>
                        <p>Choose a category for your feedback</p>
                    </label>

                    <select className="create__input" placeholder="Feature" name="" id="">
                        <option value="">Feature</option>
                        <option value="">UI</option>
                        <option value="">UX</option>
                        <option value="">Enhancement</option>
                        <option value="">Bug</option>
                        
                    </select> */}


                    {/* <label htmlFor="">
                            <h3>Category</h3>
                            <p>Choose a category for your feedback</p>
                        </label>

                         <textarea className="create__input create__input--mod" type="text" /> */}

                        <div className="create__wrapper">
                        <button className="create__btn">
                            cancel
                        </button>


                         <HomeTopBtn>

                         </HomeTopBtn>
                        </div>
                </form>
            </div>
        

        </div>
        

       </Container>
    )
}


export default CreateFeedBack;






