/* codigo javascript */
const copiarMail = async () => {
    const textoACopiar = 'joaquinr.erti@gmail.com'; 

    try {
      await navigator.clipboard.writeText(textoACopiar);
      alert('Correo copiado al portapapeles: ' + textoACopiar);
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
      alert('Hubo un problema copiando el mail' );
    }
  };

const copiarNumero = async () => {
    const textoACopiar = '+54 11 2659-6891'; 

    try {
      await navigator.clipboard.writeText(textoACopiar);
      alert('Numero copiado al portapapeles: ' + textoACopiar);
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
      alert('Hubo un problema copiando el numero' );
    }
  };
