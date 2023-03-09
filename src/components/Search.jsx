import React from 'react'
import "../styles/Search.css"
import { useState } from 'react'


const Search = () => {
const [recipeSearch,setRecipeSearch]=useState("recipe search");
  const handleRecipeSearch=(e)=>{
    setRecipeSearch(e.target.value)

  }



  return (
    <>
    <section className='search-section'>
     <div className="container">
        <div className="default-form" >
            <form  className='row'>
                
                <div className="form-group col-lg-10 ">
                    <input type="text" name="text"    placeholder={recipeSearch} autoComplete="off" onChange={handleRecipeSearch}   required/>
                </div>
                <div className="form-group col-lg-2 ">
                    <button type="submit " className='theme-btn search-btn primary-btn btn' >
                        <span style={{textTransform:"uppercase",fontWeight:"bold"}}>Search</span>
                    </button>
                </div>


            </form>

        </div>


      </div>

    </section>
      
    </>
  )
}

export default Search