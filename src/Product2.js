import React,{useState,useEffect} from 'react'
import info from "./info"

const Product = () => {
    
    const[items , setItems] = useState();
   
useEffect(() => {
const fetchout = async ()=>{
    const res = fetch('https://fakestoreapi.com/products')
    const data= await res.json()
console.log(data);
}

fetchout()
}, [])

  return (
    <div className='main'>
        <div className='header'>
            <h2>100% FRESH , JUICY AND TASTY</h2>
        </div>
        <div className='filters'> 
        {/* <button onClick={()=>FindFish('FISH')} > FISH</button>
        <button onClick={()=>FindFish('Egg')}> Egg</button>
        <button onClick={()=>FindFish('CHICKEN')}> CHICKEN</button>
        <button onClick={()=>FindFish('GOAT')}> GOAT</button>
        <button onClick={All}> All</button>
        </div> */}
        </div>
        /*
        <div className='product'>
            {
                items.map((elem)=>{
                    const {id,name,quan,prize,img,description,type} = elem;
                    return(
                        <div className='card'>
                <div className='img'>
                <img src={img} alt='xyz'></img>
                </div>
                <div className='descrip'>
                    <h2>{name}</h2>
                    <h3>type :{type} </h3>
                    <h3>{quan} <span> <button className='addbtn'>add</button></span></h3>
                    <h3>PRICE: Rs {prize}</h3>
                    <br/>
                    <h5>Description : {description}</h5>                    
                </div>
            </div>
                    )
                })
            }
               
                    
        </div>
    
    </div>
  )
}

export default Product