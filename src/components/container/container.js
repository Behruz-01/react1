import "./container.scss";

const Container = ({children, className = ""}) =>{
    console.log(className);
    return(
        <div className={`container ${className}`}>{children}</div>
    );
}

export default Container;