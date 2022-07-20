import { useState } from "react";
import { Link } from "react-router-dom";
import AddTodo from "../../components/container/add-todo/add-todo";
import Container from "../../components/container/container";
import Count from "../../components/container/count/count";
import HomeBelow from "../../components/container/home-left-below/home-left-below";
import HomeLeftInto from "../../components/container/home-left-top/home-left-top";
import HomeBeetwen from "../../components/container/home-right-beetwen/home-right-beetwen";
import HomeRighttop from "../../components/container/home-right-top/home-right-top";
import Todos from "../../components/container/todos/todos";
import TypeFilter from "../../components/container/type-filter/type-filter";

import "./home.scss";

const Home = () =>{

     



     const values = useState(
        [
            {
                id:1,
                name : "ovqat piwirmoq",
            },
            {
                id:2,
                name : "ovqat yeyiw",
            },
            {
                id:3,
                name : "ovqat tawiw",
            },
        ] 

    );

    const todos = values[0]
    const setTodos = values[1]
   



    return(
        <main className="home">
            <Container className="home__container">
            <div className="home__left">
            <HomeLeftInto>
                
             </HomeLeftInto>

             <TypeFilter>

             </TypeFilter>

             <HomeBelow>

             </HomeBelow>

        <Count>

        </Count>

        <Link to={"/misol"}>misol sahifasi</Link>

        

            </div>


            <div className="home__right wrapper">
                <HomeRighttop>

                </HomeRighttop>

                <HomeBeetwen>
                    
                </HomeBeetwen>


                <div>

                <AddTodo todos={todos} setTodos={setTodos}>

                </AddTodo>

                <Todos todos={todos}>

                </Todos>
            </div>
            </div>


            
            </Container>
        </main>
    )
}

export default Home;