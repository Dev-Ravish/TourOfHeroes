// import { useState, useEffect } from "react";
// import Heroes from "./Heroes";
import HeroList from "./HeroList";
import useFetch from "./useFetch";

const Dashboard = () => {
    
    const {heroes, isPending, error} = useFetch('http://localhost:8000/Heroes');
    return (    
        <div className="dashboard">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {heroes && <HeroList heroes={heroes.filter((hero)=>hero.profile === 'Best')} title = 'Here are the list of our top 4 heroes'/>}             
        </div>
     );
}
 
export default Dashboard;