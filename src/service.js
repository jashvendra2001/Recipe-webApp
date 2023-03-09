const queryString={
    app_id:"5b17eeff",
    app_key:"ae2b2f22431f5f6f5738e6f54e3ec005"
}


export const fetchData=async(defaultQuery)=>{

    // https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=5b17eeff&app_key=ae2b2f22431f5f6f5738e6f54e3ec005
    const{app_id,app_key}=queryString;
    try{
        const data= await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`)
        const response= await data.json();
        console.log(response.hits,"api hits ");
        return (response.hits);
        
    }
    catch(e){
        console.log(e,"something wrong");
        return(e);

    }

}


