/* codigo javascript 
const btnCopiar = document.querySelectorAll('.btnCopiar');

btnCopiar.forEach(button => {
    button.addEventListener('click', () => {
        const textToCopy = button.previousElementSibling.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Texto copiado al portapapeles: ' + textToCopy);
        }
    ).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
});
});

*/

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

    const copiarTexto = async () => {
    const textoACopiar = '+54 11 2659-6891'; 

    try {
      await navigator.clipboard.writeText(textoACopiar);
      alert('numero copiado al portapapeles: ' + textoACopiar);
    } catch (err) {
      console.error('Error al copiar el texto: ', err);
      alert('Hubo un problema copiando el numero' );
    }
  };
