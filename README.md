## Guia de instalación

Antes de comenzar, asegúrate de tener [Visual Studio Code](https://code.visualstudio.com/download), [Composer](https://getcomposer.org/), [Node.js](https://nodejs.org/en) y [Xampp](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.4/xampp-windows-x64-8.2.4-0-VS16-installer.exe/download) instalados en tu sistema.

Antes de comenzar se debe iniciar el servidor de Apache y el gestor de base de datos MySQL contenidos en Xampp. 

Clonar el proyecto en la carpeta de su preferencia por medio del siguiente comando utilizando git o el simbolo del sistema de windows:

```bash
git clone https://github.com/ExequielGL/Practica3_IDWM.git
```

Luego abrir la carpeta utilizando Visual studio code y seguir con la guía.

### Laravel

Para configurar Laravel, se debe abrir una terminal con la ruta dentro de la carpeta 'api_practica3', luego sigue estos pasos:

1. **Instalar dependencias de PHP con Composer:**

```bash
composer install
```
En el caso de que presente algun tipo de error que requiera actualizar composer ejecutar:

```bash
composer update
```

En el caso de presentar el error: "Failed to download ... from dist: the zip extension and unzip/7z commands are both missing, skipping. The php.ini used...". Debe dirigirse a la siguiente ruta: C:\xampp\php\php.ini y descomentar la linea 962: "extension=zip' del archivo php.ini. Ahora vuelva a ejecutar composer install.

Este comando instalará las dependencias de PHP necesarias para el proyecto.

2. **Configurar las variables de entorno:**

```bash
copy .env.example .env
```

Este comando copiará el archivo .env.example a .env. Aquí debes configurar la base de datos, debes modificar la linea 14 del archivo .env de la siguiente manera:

```bash
DB_DATABASE=IDWM_practica3_EG
```

Este comando copiará el archivo .env.example a .env. Aquí debes configurar la base de datos.

3. **Generar APP_KEY:**

```bash
php artisan key:generate
```

Este comando creará una llave para ejecutar el servidor de laravel.

4. **Poblar la base de datos:**

En el panel de control de Xampp, presionar el botón Admin de la sección de MySQL, luego se debe crear una base de datos con el nombre 'IDWM_practica3_EG' y luego en el proyecto ejecutar el siguiente comando:

```bash
php artisan migrate --seed
```

Este comando creará y poblará las tablas en la base de datos. Asegúrate de que la base de datos exista, este operativa y coincida con la configuración del archivo .env.

5. **Iniciar el servidor:**

```bash
php artisan serve
```

Este comando iniciará el servidor de Laravel de manera local.