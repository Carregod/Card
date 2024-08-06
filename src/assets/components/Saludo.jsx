function Saludo(props) {
    
    const saludo = "Ventas de tecnologia"
   
    const saludoProps = props.mensaje
    return (
        <>
        <h1>{saludo}</h1>
        <h2>{saludoProps}</h2> 
        

        </>
    )

}

export default Saludo
