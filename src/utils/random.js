const getRandomElement = (elements) => {
    //Logica necesaria para devolver un elemento aleatorio de ese arreglo
    //(Math) un numero entre 0 -----> 0.999999

    const indexRandom = Math.floor(Math.random() * elements.length)
    return elements[indexRandom]
  }

  export { getRandomElement }