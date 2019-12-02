# Proyecto Web: Cartones de Bingo
## Realización de Página Web empleando el uso del Framework "Bootstrap 4"
## Descripción de Contenido:

### 1 - Página index.html:
  * Cabecera formada por logotipo de Bingo! y un acceso para hacer _Login_, responsive reduciendo el tamaño conforme se disminuye el ancho del dispositivo.
  * Menú de navegación que permite navegar a través de las distintas pestañas de las que dispone la web, el menú se contrae y se reduce a un botón desplegable una vez el ancho del dispositivo disminuye de 767 píxeles.
  * Cuerpo: se compone de un encabezado de bienvenida a la web, una zona lateral izquierda en la que se encuentra el jugador destacado del mes; una zona central en la que existe un texto tratando de atraer a los usuarios que visitan la web y un botón de registro que permite el acceso a un formulario de registro; en una zona del lateral derecho se encuentra una lista de los jugadores con mayores beneficios totales y un objetivo que se realiza mediante donaciones. En dimensiones inferiores de dispositivos la zona lateral derecha junto con el botón de registro pasa a ocupar su espacio debajo de los dos anteriores.
  * Pie de página formada por un enlace lateral izquierdo hacia una web de ayuda a personas con adicciones y una zona derecha en la que se incluyen las redes sociales del bingo.
### 2 - Página reglas.html:
 * Cabecera formada por logotipo de Bingo! y un acceso para hacer _Login_, responsive reduciendo el tamaño conforme se disminuye el ancho del dispositivo.
 * Cuerpo: Cuenta con una descripción del objetivo del juego en la que se incluye una fila con botones de los elementos del bingo, en los cuales se puede clickar y acceder a un popup que describe a los elementos. También se incluye un botón de _Empezar a Jugar_ que enlaza con la página bingo.html. La fila de botones pasa a ser de 4 a 2/2 en dimensiones de dispositivos inferiores.
 * Pie de página formada por un enlace lateral izquierdo hacia una web de ayuda a personas con adicciones y una zona derecha en la que se incluyen las redes sociales del bingo.
### 3 - Página bingo.html:
 * Cabecera formada por logotipo de Bingo! y un acceso para hacer _Login_, responsive reduciendo el tamaño conforme se disminuye el ancho del dispositivo.
 * Cuerpo: Zona formada por:
   * Una fila que se compone de un botón para iniciar la partida de bingo y un texto de bienvenida al Bingo!.
   * Una fila que recoge una zona lateral izquierda en la que se encuentra la información del jugador y una zona central-derecha donde        se sitúan los cartones de bingo y los botones para cantar linea y bingo. La zona de información del jugador pasa a ocupar la            totalidad del ancho del dispositivo a partir de un ancho inferior a 767 píxeles y la zona del chat pasa a la zona superior,              situandose por debajo de la información; los cartones vienen a continuación ocupando la totalidad del ancho. Los jugadores de la         partida pasan a ocupar el total del ancho. En dispositivos XS los cartones pasan a ser 1 cartón por fila al igual que los              jugadores de la partida.
   * Una fila en la que se visualizan los jugadores que se encuentran en la partida y a la derecha de los jugadores una ventana de chat.
 * Pie de página formada por un enlace lateral izquierdo hacia una web de ayuda a personas con adicciones y una zona derecha en la que se incluyen las redes sociales del bingo.
### 4 - Página ranking.html:
 * Cabecera formada por logotipo de Bingo! y un acceso para hacer _Login_, responsive reduciendo el tamaño conforme se disminuye el ancho del dispositivo.
 * Cuerpo: Formado por una zona que recoge a los miembros *top* del bingo (diarios, semanales y mensuales) mediante elementos que se despliegan. La forma se mantiene en todos los dispositivos.
 * Pie de página formada por un enlace lateral izquierdo hacia una web de ayuda a personas con adicciones y una zona derecha en la que se incluyen las redes sociales del bingo.

## Componentes de Bootstrap empleados:

### 1. Alerts:
 * Empleado en la página index.html, indicando ciertas condiciones de nuestra página web.
### 2. Badge:
 * Empleado en bingo.html para indicar la cantidad de mensajes que tenemos en el chat.
### 3. Buttons: 
 * Implementado en los distintos botones situados en las diferentes páginas.
### 4. Card: 
 * Implementado en index.html en la zona lateral del jugador del mes.
 * Implementado en bingo.html en la información del jugador, en la zona de chat y en la zona de jugadores de la partida.
 * Empleado en ranking.html dentro de un _Accordion_ para indicar los Tops ganadores.
### 5. Collapse:
 * Implementado en todas las páginas en el menú desplegable en dimensiones de dispositivos pequeños.
 * Empleado en rankings.html en la zona de _Tops_ del bingo permitiendo abrir y cerrar las distintas clasificaciones.
### 6. Forms: 
 * Implementado en index.html en el modal lanzado al pulsar el botón _Regístrate Ya_.
 * Implementado en bingo.html en la zona del chat, permitiendo enviar un comentario.
### 7. Input group: 
 * Implementado en index.html en el modal lanzado al pulsar el botón _Regístrate Ya_ para indicar el dinero inicial.
### 8. Jumbotron: 
 * Empleado en reglas.html como elemento contenedor de los objetivos del juego.
### 9. List group:
 * Empleado en index.html en la zona lateral derecha para indicar la lista de jugadores con mayores beneficios.
### 10. Media Object:
 * Implementado en ranking.html dentro de las _Cards_ para indicar los Tops.
### 11. Modal: 
 * Empleado en index.html, en el botón de registro.
 * Empleado en bingo.html, en el botón de _Cantar Línea_ y en el botón de _Cantar Bingo_.
 * Implementado en reglas.html, en los botones de _El Bombo_, _Las Bolas_, _Los Cartones_ y _Tipos_.
### 12. Navbar: 
 * Empleado en la página index.html y en todas las subpáginas en el menú de navegación.
### 13. Card: 
 * Implementado en index.html para indicar al jugador destacado del mes.
 * Implementado en bingo.html para indicar la información del jugador así como el chat. También en la sección de jugadores de la partida.
 * Empleado en ranking.html dentro del _Accordion_ para indicar los Tops.
### 14. Popovers: 
 * Empleado en todas las páginas en el botón de _Login_.
 * Implementado en index.html en el botón de información del usuario del mes.
 * Implementado en bingo.html en el botón _Comenzar Partida de Bingo_. 
### 15. Progress: 
 * Empleado en index.html en la zona lateral derecha para indicar la progresión de las donaciones.
### 16. Spinners: 
 * Implementado en bingo.html, al activar el modal de bingo o línea.
### 17. Toast: 
 * Implementado en bingo.html en la zona de comentarios.
### 18. Tooltips: 
* Empleado en todas las páginas en la zona del pie de página, se activa al posar el cursor sobre las redes sociales.
* Empleado en bingo.html en el botón de _Solicitar Pausa_.
