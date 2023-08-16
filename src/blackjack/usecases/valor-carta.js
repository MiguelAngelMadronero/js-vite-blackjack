/**
 * Función que obtiene el valor de la carta
 * @param {String} carta 
 * @returns {Number} devuelve un numero que es el valor de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);//el metodo substring es corta un string por donde lo indiques, en este caso se corta desde la posicion 1[0] hasta la ultima letra del string sin tomarla
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}