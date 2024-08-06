function Card( {articulo}) {
  console.log (articulo)   
  return(
          <div className="card" style={{width: '18rem'}}>
              
          <img src={articulo.img} className="card-img-top" alt={articulo.nombre} width={"300px"} />
         
          <div className="card-body">
  
            
                          
              <h5 className="card-title"> {articulo.price} </h5>
              <p className="card-text">   {}  </p>
              <h1> $ {articulo.nombre} </h1>
              <a href="#" className="btn btn-primary">Buy</a>
          </div>
          </div>
      )
      
      
  
  }
  
  export default Card