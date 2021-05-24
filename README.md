# 🏨  Aplicación Web Xacalli Posada

Creación de una aplicación web para el Hotel PetFriendly denominado [“Xacalli Posada”](https://www.facebook.com/XacalliEnTepoztlan), ubicado en Tepoztlán Morelos.

### 💡 Nota:

> Este proyecto se realizó cómo parte de la finalización del módulo de React de [Bedu](https://bedu.org/), el [equipo 1](#autores) creó la aplicación web implementando todo lo aprendido durante el módulo.

# 🚀 Requerimientos del proyecto

El hotel requiere agilizar sus procesos de toma de decisiones dentro su área de ventas, necesita un espacio en el cual pueda visualizar los diferentes datos que sus huéspedes le proporcionan.

Actualmente el hotel realiza sus reservaciones apoyándose de un método anticuado y disfuncional. Consigue a sus prospectos por medio de Facebook, realiza su labor de venta y en caso de que se deseen hospedar apunta la reservación en una hoja de papel; en ocasiones no recuerda dónde apunto los datos, por lo que constantemente se realizan las siguientes preguntas:
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
            * El e-mail y el télefono de los huéspedes para enviar promociones.
    * De sus empleados:
        * Saber cúal fue la comisión que obtuvieron por reservación o por mes. 

# 🎯 Objetivo
Innovar y optimizar los procesos dentro del área de ventas del hotel, mediante la estructuración, sistematización y configuración de un CRM (Customer Relationship Management) personalizado.

La correcta implementación del proyecto por parte del hotel se traducirá cómo la optimización en la toma de decisiones dentro de su departamento de ventas (reduciendo el tiempo de respuesta del vendedor al huésped); el CRM agilizará no sólo la visualización si no también la gestión de sus diferentes datos.


# 📖 Antecedentes del Proyecto
Depués de tener una breve entrevista con el dueño del hotel obtuvimos la siguiente información:

## 🐾 Hotel Petfriendly
* Es un hotel PetFriendly, por lo que los huéspedes pueden llevar a sus mascotas.

## 🏨 Cabañas/Habitaciones

* **Cabañas/Habitaciones:**
    * Cuenta con 6 cabañas/habitaciones:
        * 4 Tienen cama matrimonial, son para 2 personas y tiene un precio por noche de $1,300 cada una.
        * 2 Tienen cama matrimonial e individual, es para 3 personas y tiene un precio por noche de $1,600.
        * Se agregará una 7ma cabaña/habitación con la que se interpretará que ya no cuenta con disponibilidad el hotel.
    * La capacidad total del hotel es de 13 personas. Sin embargo, en la actualidad cómo medida de sanidad implementada por la pandemia Covid19, cuenta con las siguientes restricciones:
        * Debe operar al 50% de su capacidad, equivalente a la renta de 3 cabañas; de 6 a 8 personas máximo.
    * Todas las cabañas/habitaciones tienen:
        * Baño completo.
        * Pequeño clóset.
        * Escritorio cosilla.
        * Televisión (con señal satelital) y DVD.

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
        * Fogata  $400 con duración de 4 hrs.
        * Hiking  $100 (por persona) con duración de 2 hrs.
        * Masaje  $600 (por persona) con duración de 55 min.
        * Desayuno Americano $150 incluye:
            * Jugo de temporada
            * Fruta
            * Café
            * Huevos al gusto
            
* Todos los servicios, excluyendo el *Wifi*, se deben notificar con anticipación para verificar disponibilidad.

## 👷 Empleados
* Tienen un salario base de $500.

* Se le paga al empleado una comisión de $250 por cada cabaña/habitación que rente por noche.
    * Por ejemplo:
        * Si una pareja (2 personas) se hospeda de viernes a domingo, son dos noches. Siendo $500 de comisión.
        * Si 2 parejas (4 personas) se hospedan de domingo a lunes, es decir, una noche. De igual forma serían $500 de comisión; aunque es una sola noche son dos las cabañas/habitaciones que se rentaron.

## 📦 Reservación
* **Proceso de reservación:**
    1. El Huésped proporciona sus datos:
        * Nombre Completo.
        * Teléfono.
        * Fechas de la reservación:
            * Inicio.
            * Fin.
        * No. de noches que se hospedará.
        * No. de personas a hospedarse.
        * No. mascotas que viajarán con ellos.
    2. Se verifica que exista disponibilidad:
        * Fecha de inicio y fin de reservación.
        * Cabañas/Habitaciones, además de que puedan recibir el número de personas que indicó el huésped. 
    3. En caso de existir disponibilidad, se le pide al huésped que realice el deposito de su anticipo (equivalente al 50% de su estadía) con el fin de confirmar su reservación. El restante lo liquidará cuándo se encuentre en las instalaciones del hotel.

    4. Cuando el huésped envié el comprobante del pago de su anticipo, se confirma la reservación y se le pregunta si desearía adquirir algún servicio adicional para su estadía. En caso de que requiera de algún servicio se le indicará el costo, duración y se le notificará que el costo de este se cubrirá cuándo se encuentre en las instalaciones del hotel.

    5. Se realiza una segunda confirmación cuándo el huésped realiza su check-in, ya que han existido casos en los que realizan el deposito del anticipo pero no se presentan a las instalaciones, por lo que se podría ofrecer esa habitación si llegará algún huésped de improviso.

# 🔧 Desarrollo del Proyecto
Analizamos la información proporcionada por el dueño del hotel y la configuramos de forma que cumpliera eficazmente con sus requerimientos. A continuación se explica detalladamente la estructura del proyecto.

## 👱 Usuarios
Debido a los requerimientos del cliente, se crearon dos tipos de usuarios:
    * Administrador: El dueño del Hotel, tendrá los permisos para asignar un vendedor a los prospectos y ver el seguimiento de los mismos.
    * Vendedor: Verá únicamente los datos de sus prospectos para darle seguimiento durante el proceso de venta.

## 📝 Base de Datos

### ☑️ Análisis de requisitos
Para crear la base de datos nos cuestionamos y respondimos las siguientes preguntas:
* ¿Qué información necesita almacenar el hotel?.
* ¿Cúantas entidades tendrá la base de datos?.
* ¿Y cuáles serán?.
* ¿Qué relación existe entre las diferentes entidades del hotel?.

#### 🔦 Entidades
Al analizar exhaustivamente los requerimiento del hotel, llegamos a la conclusión de que se necesitan las siguientes entidades y sus respectivos atributos para el correcto funcionamiento de su base de datos:

| No | Entidad | Atributos |
| ---------- | ---------- | ---------- |
| 1 | Empleado | id del empleado, nombre, apellido, salario, telefono, comision y id de su jefe (si tiene) |
| 2 | Cliente  | id del cliente, nombre, apellido,  telefono, no de personas que se hospedarán,  no de mascotas, nacionalidad, email,  facebook y eid del vendedor que lo atenderá |
| 3 | Habitación | id de la habitación, costo, cupo y disponibilidad |
| 4 | Servicios | id del servicio, nombre, costo y duración |
| 5 | Opinión| id de la opinión, id del cliente que hizo la opinión, texto y valoración |
| 6 | Cliente_Habitación| fecha de reservacion, fecha de inicio, fecha de fin,  no de noches, check in, chek out, pago de su anticipo, precio de la habitacion, id del cliente y id de la habitación |
| 7 | Cliente_Servicio  | id del cliente, id del servicio, fecha de inicio, fecha de fin, hora de inicio y hora de fin |

### ◾ Diseño Conceptual

#### 🔖 Modelo ER
Con el objetivo de visualizar la relación entre las entidades realizamos el modelo entidad relación.

Al darle clic en la imagen, podrán ver el modelo entidad relación en una mayor resolución.

![modelo_er](./src/img/modelo_er.jpg)


### ▪️ Diseño lógico

#### 🔖 Modelo relacional
Pasamos el modelo entidad relación al modelo relacional.

Al igual que el modelo anterior, al darle clic, se puede visualizar la imagen en una mejot resolución.
![modelo_relacional](./src/img/modelo_relacional.jpg)

## 📝 Maquetación CRM
Utilizaremos 3 templates básicos:
* LogIn para que los usuarios inicien sesión en la aplicación web.
* Dasboard, donde se visualizarán todos los datos del CRM.
* Error 404.

<a name="autores"></a>
# ✒️ Autores 

[![Ceci Suarez](./src/img/ceci_suarez.jpg)](https://github.com/CeciSuareZaldivar) [![Cristian Garcia](./src/img/cristian_garcia.jpg)](https://github.com/Adalk033)  
[![David Velazquez](./src/img/david_velazquez.jpg)](https://github.com/dvmoran1) [![Julian Hernandez](./src/img/julian_hernandez.jpg)](https://github.com/codeinit-code)


# 🎁  Agradecimiento Especial

Todos los integrantes del equipo 1, agradecemos infinitamente la oportunidad que nos brindaron **Santander** y **Bedu** de participar dentro del programa __“Becas Santander – BEDU: Disruptive Innovation: 3 caminos para impulsar tu carrera"__, en el Learning Path **Desarrollo Web**.

Somos muy afortunados de formar parte de este gran proyecto. 
Seguiremos retando nuestro potencial durante el siguiente módulo del programa.
