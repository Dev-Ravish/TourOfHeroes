import { Link } from "react-router-dom";

const HeroList = ({heroes, title}) => {
    // const blogs=props.blogs;
    return (
        <div className="hero-list"> 
            <h2>{title}</h2>
            {heroes.map((hero) => (
                <Link to={`/Heroes/${hero.id}`}>
                    <div className="hero-preview" key={hero.id}>
                        <h2>{hero.name}</h2>
                        <p>{hero.about}</p>
                    </div>
                </Link>
            ))}
        </div>
     );
}
 
export default HeroList;