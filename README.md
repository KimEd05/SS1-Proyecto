# SS1-Proyecto
## Propuesta de proyecto para Elecciones Generales en Guatemala

Existe una serie de procedimientos que provocan que el proceso de elección en Guatemala sea tardado y exhaustivo:
>1. Búsqueda de los ciudadanos a través de un listado dentro de un cuadernillo asignado a una determinada mesa electoral.
>2. El conteo de votos al cerrar las mesas electorales, ya que los observadores deben de verificar cada una de las papeletas para validar si el voto cuenta o no.
>3. La digitalización de los votos correspondientes a cada una de las mesas electorales.


De la misma forma, existen otra serie de problemas que van asociados al error humano e inclusive al fraude, ya que, por experiencia propia, la línea del nombre en el del cuadernillo de la mesa electoral se encuentra firmada en algunas ocasiones, lo cual puede prestarse a múltiples interpretaciones, por lo que se propone la siguiente solución por medio de los servicios:
> - `Amazon Rekognition`: Se utilizará para hacer reconocimiento facial de los ciudadanos que se presenten a votar. Con esto se solucionaría el retraso provocado por la búsqueda de nombre en el cuadernillo de la mesa electoral, y se validaría por completo la identidad de la persona que está votando, disminuyendo la posibilidad de fraude.
> - `Amazon Polly`: Para las personas no videntes, la aplicación se ejecutará a través de audios que expliquen el proceso de votación, así como el listado de integrantes de las papeletas.
> - `Amazon Transcribe`: La aplicación permitirá procesar la voz de las personas a texto, lo cual le concederá la oportunidad a los ciudadanos no videntes de realizar su elección después de escuchar el listado de los integrantes de las papeletas.
> - `Amazon DynamoDB`: Servicio utilizado para almacenar los datos de prueba del sistema, recolectados a través de la simulación de votaciones.
> - `Amazon S3`: Servicio en el que se encuentran almacenadas las fotografías de los ciudadanos de prueba del sistema para realizar el reconocimiento facial, así como el sitio web estático.

---

## Arquitectura inicial
![Arquitectura Inicial](https://github.com/KimEd05/SS1-Proyecto/blob/main/Arquitectura%20Inicial.png?raw=true "Arquitectura Inicial")


## Implementación
Link de [presentación](https://www.canva.com/design/DAEM5VEfGiw/6FUVPW6uzSMo3fZ54RBaBA/view?utm_content=DAEM5VEfGiw&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton).
