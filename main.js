function suma(){
    alert(2+2);
}
const saludoAnonimo= function (nombre="usuario"){
    alert(`hola ${nombre}`)
} 

function getDestinoSeleccionado() {
    
    const opcion = prompt(`¿A qué destino te gustaría ir?
    Catálogo de destinos:
    1) CDMX
    2) Chiapas
    3) Monterrey
    4) Sonora
    5) Guatemala
    `).toLowerCase();
    return opcion;
  }
  
  function mostrarCosto(destino) {
    let costo;
    switch (destino) {
      case "cdmx":
        costo = 1200; 
        break;
      case "chiapas":
        costo = 2100; 
        break;
      case "monterrey":
        costo = 1300; 
        break;
      case "sonora":
        costo = 600; 
        break;
      case "guatemala":
        costo = 3000; 
        break;
      default:
        console.log("Lo sentimos, esa opción no la comprendemos.");
        return null; 
    }
    console.log(`${destino.toUpperCase()}: $${costo}`);
    return costo;
  }


  function verificarCupon(costo){
    const cupon = prompt(`Como parte de nuestro programa de recompensas, decidimos crear una serie de cupones:
    1) Cupón A 45%
    2) Cupón B 35%
    3) Cupón C 25%
    4) Cupón D 10%
    Incluya con un numero la opción elegida.
    `)
    let costoFinal, descuento;
    switch (cupon) {
        case '1':
          costoFinal = (1-.45)*costo;
          descuento = 45; 
          break;
        case '2':
          costoFinal = (1-.35)*costo; 
          descuento = 35; 
          break;
        case '3':
          costoFinal = (1-.25)*costo; 
          descuento = 25; 
          break;
        case '4':
          costoFinal = (1-.1)*costo;
          descuento = 10;  
          break;
        default:
          costoFinal = 1*costo;
          descuento = 0;  
      }
      
      return [costoFinal, descuento];
  }

  function pagoFinal(costoFinal){
    let pagarAhora = prompt(`   ¿Desea pagar su boleto ahora?
    1) Si
    2) No`).toLowerCase();
    if (pagarAhora === "si" || pagarAhora === "1"){
        let cantidadAPagar = parseFloat(prompt(`¿Cuanto desea pagar?`));
        if (cantidadAPagar<costoFinal){
            alert(`No logramos procesar su pago, intente mas tarde`)
        }
        else if (cantidadAPagar === costoFinal){
            console.log(`Muchas gracias por su compra, su boleto lo recibirá en ventanilla`)
        }
        else{
            console.log(`Muchas gracias por su compra, recibirá en ventanilla la cantidad de $${cantidadAPagar-costoFinal} y su boleto`)
        }
    }
    else {
        console.log(`Compra cancelada, tenga un buen día`);
    }
    
   
    }

  function AgenciaDeViajes() {
      let destino = getDestinoSeleccionado();
  
      if (destino !== null) {
        let costo = mostrarCosto(destino);
        let [costoFinal,descuento] = verificarCupon(costo);
        
        console.log(`
        Destino: ${destino}
        Precio Original: $ ${costo}
        Descuento: ${descuento}
        Precio Final: $${costoFinal}`);

        pagoFinal(costoFinal);
      }
      
      else{
        console.log(`Opcion invalida`);
      }
  
    console.log("Gracias por usar nuestro servicio.");
  }
AgenciaDeViajes();
  