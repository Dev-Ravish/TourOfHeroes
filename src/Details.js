import { useState } from "react";
import { useParams } from "react-router-dom"
import useFetch from "./useFetch";
const Details = () => {

    const {id} = useParams();
    const {heroes:hero, isPending, error} = useFetch('http://localhost:8000/Heroes/'+id);
    const [isChanging, setIsChanging] = useState(true);
    const [name, setName] = useState('');

    const handleChange = ()=>{
        setIsChanging(false);
    }

    const rename = (id)=>{
        fetch("http://localhost:8000/Heroes/"+id, { 
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(
                {
                    "name": name
                }
            )
        });
    }
    return ( 
        <div className="hero-details">
            {error && <div>{error}</div>}
            {isPending && <div>loading...</div>}
            {hero && (
                <article>
                    <h1>{ hero.name }</h1>
                    <img src={`${hero.image}`} alt ="hel"/>
                    <h3>{hero.comment}</h3>
                </article>
            )}
            {isChanging && <button className="changeButton" onClick={handleChange}>Change Name</button>}

            {!isChanging && (
            <div>
                <form>
                    <label>Change my name from {hero.name} to - </label>
                    <input 
                        type="text" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button className="changeButton" onClick={()=>rename(hero.id)}>Change</button>
                </form>
            </div>)}           
        </div>
     );
}
 
export default Details;
