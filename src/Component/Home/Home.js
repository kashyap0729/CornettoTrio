import HomeChild from "./HomeChild";
import {useState} from 'react';

function Home(){
    let [arr,setArr]=useState([
        {
            title: "Shaun of the Dead",
            description: "A comedy-horror film directed by Edgar Wright, following Shaun, a man trying to turn his life around during a zombie apocalypse with a plan to save his loved ones.",
            image:"https://cdn.myportfolio.com/330c0cc38533cee866583a0a46c59805/50f8097af9cb1c93bf401f15_rw_1920.jpg?h=e376c7673047eb10269d5ca1c43028fd"
          },
          {
            title: "Hot Fuzz",
            description: "An action-comedy film directed by Edgar Wright, featuring Nicholas Angel, a skilled London cop reassigned to a seemingly quiet village with dark secrets.",
            image:"https://alternativemovieposters.com/wp-content/uploads/2015/04/garymarta_hotfuzz700.jpg"
          },
          {
            title: "The World's End",
            description: "A science fiction comedy film directed by Edgar Wright, centering around a group of friends attempting an epic pub crawl only to discover a sinister conspiracy.",
            image:"https://alternativemovieposters.com/wp-content/uploads/2015/04/garymarta_worldsend700.jpg"
          }
    ])
    function newArray(event){
        event.preventDefault();
        var newArr=arr.map(e=>{
            return {
                ...e,
                description:"Double"+e.description,

            }
        })
        setArr(newArr)
    }
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {arr.map(e=>{
            return(
            <HomeChild image={e.image} title={e.title} description={e.description}></HomeChild>
            )
        })}
       </div> 
    );
}
export default Home;