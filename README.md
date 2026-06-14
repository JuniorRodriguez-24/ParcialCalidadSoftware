## Detalles del proyecto
Este proyecto es un sistema de gestión de tareas (Task Manager) que está integrado con un cuadro de mandos de calidad. Se creó usando HTML, CSS y JavaScript puro con el propósito de evaluar las métricas y los estándares de calidad del software en el contexto de una actividad integradora. Facilita la administración de tareas y la visualización en tiempo real de las estadísticas de rendimiento.

## Estructura del proyecto
* **app.js**: Alberga la lógica de negocio que está contenida en la clase `TaskManager`. Se ocupa de la generación de estadísticas y reportes de calidad, así como del manejo de datos y la persistencia a través de `localStorage`. Asimismo, contiene un bloque de pruebas automatizadas a través de consola.
* **index.html**: Se trata de la interfaz gráfica del usuario. Usa CSS integrado para representar un panel interactivo (Dashboard) que consiste en tarjetas informativas, las cuales presentan los índices de calidad obtenidos del archivo JavaScript.

## Características funcionales
* **Gestión de tareas (CRUD):** Posibilita la creación, lectura, actualización y eliminación de tareas.
* **Control de estados:** Cambio de tareas entre los estados 'Pendiente', 'En progreso' y 'Completada'.
* **Validaciones:** Verificación de los campos obligatorios, como el título, y de las fechas límite que sean válidas.
* **Métricas de calidad:** Se muestran en pantalla indicadores clave como la complejidad ciclomática (3.5), los defectos por KLOC (0.8) y la cobertura (90%).
* **Estadísticas de productividad:** Análisis de las tareas finalizadas a tiempo y seguimiento del total de tareas.

## Instrucciones para la ejecución
1. Descargue o clone los archivos de este proyecto en su PC.
2. Verifique que los archivos `index.html` y `app.js` estén en la misma carpeta.
3. Para abrir el archivo `index.html` directamente en el navegador web predeterminado (no hace falta instalar servidores adicionales), haga doble clic en él.
4. Los datos se cargarán automáticamente en el tablero de control. Además, tiene la opción de hacer clic en el botón "Actualizar Dashboard" para actualizar manualmente los datos.
