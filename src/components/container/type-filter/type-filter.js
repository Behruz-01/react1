import TypeBadge from "../type-badge/type-badge";
import "./type-filter.scss";



const typeList = [
    {
        id:1,
        name:"ALL",
    },

    {
        id:4,
        name:"AU",
    },

    {
        id:3,
        name:"UX",
    },

    {
        id:2,
        name:"Enhancement",
    },

    {
        id:5,
        name:"Bug",
    },
    {
        id:6,
        name:"Feature",
    },

]



const TypeFilter = () =>{
    return(
        <form action="#" className="type-filter">
            {typeList.map(type => (

            <label key={type.id}  className="type-filter__label">
                <input className="visually-hidden type-filter__radio " type="radio" name="type" />
                <TypeBadge className="type-filter__styled-radio">{type.name}</TypeBadge>
            </label>
            ))}
            {/* <label  className="type-filter__label">
                <input className="visually-hidden type-filter__radio " type="radio" name="type" />
                <TypeBadge className="type-filter__styled-radio">UI</TypeBadge>

            </label>
            <label  className="type-filter__label">
                <input className="visually-hidden type-filter__radio " type="radio" name="type" />
                <TypeBadge className="type-filter__styled-radio">UX</TypeBadge>

            </label>


            <label  className="type-filter__label">
                <input className="visually-hidden type-filter__radio " type="radio" name="type" />
                <TypeBadge className="type-filter__styled-radio">Enhancement</TypeBadge>

            </label>

            <label  className="type-filter__label">
                <input className="visually-hidden type-filter__radio " type="radio" name="type" />
                <TypeBadge className="type-filter__styled-radio">Bug</TypeBadge>

            </label>

            <label  className="type-filter__label">
                <input className="visually-hidden type-filter__radio " type="radio" name="type" />
                <TypeBadge className="type-filter__styled-radio">Feature</TypeBadge>

            </label> */}
        </form>
    )
}

export default TypeFilter;