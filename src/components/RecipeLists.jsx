import { useState,useEffect } from "react"
import {fetchData} from "../service";



function RecipeLists() {
    const [recipeData,SetRecipeData]=useState([]);
    const [recipe,setRecipe]=useState("pizza");
    const [searchTeam,setSearchTeam]=useState("");
    const handleRecipeSearch=(e)=>{
        setSearchTeam(e.target.value);
    }
   

    const handlefatch=(query)=>{
        fetchData(query).then((response)=>{
            SetRecipeData(response);
            console.log(response);
        })
       
    }
    useEffect(()=>{
        fetchData(recipe).then((response)=>{
        SetRecipeData(response);
            console.log(response);
            
        })
    },[recipe])
 
  return (
    
    
    <div className='container'>
      <div className="row mb-4 d-flex justify-content-end">

       <div className="col-lg-8  mb-2 ">
       <input type="text" class="form-control  " value={searchTeam} onChange={handleRecipeSearch} />
       </div>
       <div className="col-lg-3 d-flex justify-content-end">
       <button class="btn btn-primary"  onClick={()=>handlefatch(searchTeam)}>search</button>
       </div>

          
        
      </div>
      <div className='flexbox row justify-content-center  ' style={{gap:"12px"}} data-aos="zoom-in">

{ 


          
          recipeData && recipeData.map((item,index)=>{
              return (
                <div key={index} className='flexItem col-lg-2 col-md-12 p-0'>
                <div className='img-wrapper d-flex justify-content-center '>
                    <img className="img-fluid" src={item.recipe.image} alt={item.recipe.label} />
                </div>
                <a target="_blanck" href={item.recipe.url}>

                <p style={{textAlign:"center"}}>{item.recipe.label}</p>
                </a>
                
            </div>

              )
            })
            // console.log(data1.hits)
          } 
          
      
      

           
            
            
            
        </div>
    </div>
  )
}


export default RecipeLists