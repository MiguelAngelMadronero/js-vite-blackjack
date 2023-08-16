import {pedirCarta} from './pedir-carta.js'
import {valorCarta} from './valor-carta.js'
import {crearCartaHTML} from './crear-carta-html.js'
// 
/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {HTMLElement} puntosHTML  elemento HTML para mostrar los puntos
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck=[] ) => {
    if(!puntosMinimos) throw new Error('puntosMinimos son necesarios')
    if(!puntosHTML) throw new Error('Argumento puntosHTML es necesario')
 
 
    let puntosComputadora=0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta=crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
