import useFetch from './useFetch'
import HeroList from "./HeroList";
const Heroes = () => {
    const {heroes, isPending, error} = useFetch('http://localhost:8000/heroes');
    return ( 
        <div className="heroes">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {heroes && <HeroList heroes={heroes} title = 'Here you see the list of HEROES from all the universe!!'/>}   
        </div>
     );
}
 
export default Heroes;