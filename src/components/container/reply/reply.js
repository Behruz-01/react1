import oval from "../../../assets/images/Oval.png";

import "./reply.scss";

const ReplyComment = () => {
    return(
        <div className="wrapper__reply replyes">
            <h2>
                 4 Comments
            </h2>

            <div className="replyes__box">
                <img src={oval} alt="oval" width={40} height={40}/>

                <div className="replyes__boxing">
                    <div className="replyes__wrap">
                        <div>
                             <h3 className="replyes__title">
                                    Elijah Moss
                            </h3>
                        <p>@hexagon.bestagon</p>
                    </div>

                        <a className="replyes__link" href="">reply</a>
                    </div>

                    
                    <p>
                    Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
                    </p>
                </div>
            </div>





            <div className="replyes__box">
                <img src={oval} alt="oval" width={40} height={40}/>

                <div className="replyes__boxing">
                    <div className="replyes__wrap">
                        <div>
                             <h3 className="replyes__title">
                                    Elijah Moss
                            </h3>
                        <p>@hexagon.bestagon</p>
                    </div>

                        <a className="replyes__link" href="">reply</a>
                    </div>

                    
                    <p>
                    Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.
                    </p>
                </div>
            </div>




            <div className="replyes__box replyes__div">
                <img src={oval} alt="oval" width={40} height={40}/>

                <div className="replyes__boxing replyes__wrapper">
                    <div className="replyes__wrap">
                        <div>
                             <h3 className="replyes__title">
                                    Elijah Moss
                            </h3>
                        <p>@hexagon.bestagon</p>
                    </div>

                        <a className="replyes__link" href="">reply</a>
                    </div>

                    
                    <p>
                    @annev1990  Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.
                    </p>
                </div>
            </div>



            
        </div>



        
    )
}

export default ReplyComment;