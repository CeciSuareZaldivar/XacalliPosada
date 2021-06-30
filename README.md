# Proyecto CRM Xacalli Posada

### 💡 Nota:

> En este repositorio podrán encontrar todo lo relacionado con la creación de la [Aplicación Web](#aplicacion) del Hotel PetFriendly.


### 💡 Nota:

> Para el desarrollo de este proyecto, el [equipo 1](#autora) implementó todo lo aprendido durante los 5 módulos (Front-end Fundamentals, Programación con JavaScript, Back-end Fundamentals, React y Back-end con Node.js) del Learning Path **Desarrollo Web** de [Bedu](https://bedu.org/)


# 🚀 Requerimientos del proyecto

Las principales necesidades del hotel son:
 * Agilizar sus procesos de toma de decisiones dentro su área de ventas, necesita un espacio en el cual pueda visualizar los diferentes datos que sus huéspedes le proporcionan.
 * Aumentar el posicionamiento del hotel. Únicamente se promociona por Facebook, es necesario crear una pág web que muestre toda la información del hotel y se conecte a una base de datos para gestíon de los leads.
 * Implementar eficazmente en cada proceso el branding y la identidad corporativa del hotel. Se prente unificar la imagen de la marca en todos los canales. Se actualizará el correo que envian (cómo tipo recibo o comprobante) para confirmación de una reservación.

Actualmente el hotel realiza sus reservaciones apoyándose de un método anticuado y disfuncional. Consigue sus prospectos por medio de Facebook, realiza su labor de venta y en caso de que se deseen hospedar apunta la reservación en una hoja de papel; en ocasiones no recuerda dónde apunto los datos, por lo que constantemente se realizan las siguientes preguntas:
 * ¿Ya tengo reservaciones confirmadas?.
 * ¿Cuánto dejó de anticipo el huésped?.
 * ¿Para cuántas personas es la reservación?.
 * ¿De cuántas noches es su reservación?.
 * ¿En qué fecha se hospedarán?.
 * ¿Todavía cuento con disponibilidad en esa fecha?.
 * ¿Puedo seguir ofertando las demás cabañas/habitaciones?.

## ✔️ Optimización de procesos

Algunos de los procesos que les gustaría optimizar son:
* **Seguimiento dentro del proceso de venta:** 
    * Asignar un vendedor.
    * Verificar disponibiidad:
        * Determinadas fechas.
        * Las diferentes habitaciones.
        * Servicios.
* **Obtener sólo determinados campos**
    * De sus huéspedes:
        * Estadísticas:
            * Nacionalidad (¿De dónde los visitan?).
            * No. noches que se hospedan.
            * Valoración (Calificación que los huéspedes le asignan a su estadía).
        * Remarketing:
            * El e-mail y el télefono de los huéspedes para posteriormente enviarles promociones.
    * De sus empleados:
        * Saber cúal fue la comisión que obtuvieron por reservación o por mes. 

# 🎯 Objetivo
Innovar y optimizar los procesos dentro del área de ventas del hotel, mediante la estructuración, sistematización y configuración de un CRM (Customer Relationship Management) personalizado.

La correcta implementación del proyecto por parte del hotel se traducirá cómo la optimización en la toma de decisiones dentro de su departamento de ventas (reduciendo el tiempo de respuesta por parte del vendedor al huésped); el CRM agilizará no sólo la visualización si no también la gestión de sus diferentes datos.


# 📖 Antecedentes del Proyecto
Depués de tener una breve entrevista con el dueño del hotel se obtuvo la siguiente información:

## 🐾 Hotel Petfriendly
* Es un hotel PetFriendly, por lo que los huéspedes pueden llevar a sus mascotas.

## 🏨 Cabañas/Habitaciones

* **Cabañas/Habitaciones:**
    * Cuenta con 6 cabañas/habitaciones:
        * 4 Tienen cama matrimonial, son para 2 personas y tiene un precio por noche de $1,300 cada una.
        * 2 Tienen cama matrimonial e individual, es para 3 personas y tiene un precio por noche de $1,600.
        * Se agregará una 7ma cabaña/habitación con la que se interpretará que ya no cuenta con disponibilidad el hotel.
    * La capacidad total del hotel es de 13 personas.
    * Todas las cabañas/habitaciones tienen:
        * Baño.
        * Pequeño clóset.
        * Escritorio y silla.
        * Televisión y DVD.

## 🌼 Instalaciones

* **Sus instalaciones incluyen:**
    * Alberca.
    * Amplio jardín. 
    * Comedor / Estancia al aire libre.
    * Estacionamiento.
    * Jacuzzi. 

## 🌊 Servicios
* **Los servicios que ofrecen:**
    * ***Sin costo adicional***:
        * Camping con duración de 24 hrs.
        * Telescopio con duración de 2 hrs.
        * Wifi.
    * ***Con costo adicional***:
        * Asador $200 con duración de 4 hrs.
        * Desayuno Americano $150 (precio por persona) incluye:
            * Huevos al gusto
            * Jugo de temporada
            * Fruta
            * Café
        * Fogata  $400 con duración de 2 hrs.
        * Hiking  $100 (precio por persona) con duración de 2 hrs.
        * Masaje  $600 (precio por persona) con duración de 55 min.

* Todos los servicios, excluyendo el *Wifi*, se deben notificar con anticipación para verificar disponibilidad.

## 👷 Empleados
* Tienen un salario base de $500.

* Se le paga al empleado una comisión de $250 por cada cabaña/habitación que rente por noche.
    * Por ejemplo:
        * Si una pareja (2 personas) se hospeda de viernes a domingo, son dos noches. Siendo $500 de comisión.
        * Si 2 parejas (4 personas) se hospedan de domingo a lunes, es decir, una noche. De igual forma serían $500 de comisión; aunque es una sola noche, son dos las cabañas/habitaciones que se rentaron.

## 📦 Reservación
* **Proceso de reservación:**
    1. El Huésped proporciona sus datos:
        * Nombre Completo.
        * Teléfono.
        * Fechas de la reservación:
            * Check-In.
            * Check-Out.
        * No. de noches que se hospedará.
        * No. de personas a hospedarse.
        * No. mascotas que viajarán con ellos.
        * Nacionalidad.
    2. Se verifica que exista disponibilidad:
        * Fecha de check-in y check-out de la reservación.
        * Cabañas/Habitaciones, además de que puedan recibir el número de personas que indicó el huésped. 
    3. En caso de existir disponibilidad, se le pide al huésped que realice el deposito de su anticipo (equivalente al 50% del total de su estadía) con el fin de confirmar su reservación. El restante lo liquidará cuándo se encuentre en las instalaciones del hotel.

    4. Cuando el huésped envié el comprobante del pago de su anticipo, se confirma la reservación y se le pregunta si desearía adquirir algún servicio adicional para su estadía. En caso de que requiera de algún servicio se le indicará el costo, duración y se le notificará que el costo de este se cubrirá cuándo se encuentre en las instalaciones del hotel.

    5. Se realiza una segunda confirmación cuándo el huésped realiza su check-in, ya que han existido casos en los que realizan el deposito del anticipo pero no se presentan a las instalaciones, por lo que se podría ofrecer esa habitación si llegará algún huésped de improviso.


# 🔧 Desarrollo del Proyecto
Después de analizar la información proporcionada por el dueño del hotel, se planteo cómo se desarrolaría la estructura del proyecto para que pudiese cumplir eficazmente con los requerimientos del hotel. A continuación se explica detalladamente la configuración del proyecto.


La estructura del proyecto consta de las siguientes partes:

| No | Nombre | Descripción | Link | Código QR |
| ---------- | ---------- | ---------- | ---------- | ---------- |
| 1 | Api | Interfaz de la aplicación web del Hotel. Base de datos. | [Api Xacalli Posada](https://bit.ly/RepoApiXacalliPosada) | ![Api Xacalli](./img/api_xacalli_posada.png)|
| 2 | Aplicación Web | Encargada de agilizar el funnel de ventas del hotel. Mejorar la gestión de las reservaciones y facilitar el acceso a información específica cómo proveedores y el ROI de las campañas publicitarias. | [Crm Xacalli Posada](https://bit.ly/CrmXacalliPosada) | ![App Web Xacalli](./img/app_web_xacalli_posada.png) |
| 3 | Landing | Página de aterrizaje para aumentar el posicionamiento digital del hotel y facilitar la conversión de leads. | [Landing Xacalli Posada](https://bit.ly/RepoLandingXacalliPosada) | ![Landing Xacalli](./img/landing_xacalli_posada.png) |


<a name="aplicacion"></a>
## 🏨 Aplicación Web Xacalli Posada

# 🔩 Implementación del Proyecto

Al dar clic ["aquí”](https://landing-xacalli-posada.vercel.app/) pueden ver la implementacion en Vercel . 

<a name="autora"></a>
# ✒️ Autora 

[![Ceci Suarez](./img/ceci_suarez.jpg)](https://github.com/CeciSuareZaldivar)


# 🎁  Agradecimiento Especial

Agradezco infinitamente la oportunidad que me brindaron **Santander** y **Bedu** de participar dentro del programa __“Becas Santander – BEDU: Disruptive Innovation: 3 caminos para impulsar tu carrera"__, en el Learning Path **Desarrollo Web**.

Soy muy afortunada de formar parte de este gran proyecto. 