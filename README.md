# Frontend Login

Para el proyecto se construye el frontend de login.

La interfaz debe contar con un campo para el nombre de usuario, otro campo para contraseña y un botón realizar la acción de inicio de sesión, al ingresar deberá mostrar un escritorio para el usuario en donde se visualicen su nombre y correo. En caso de fallar, se debe indicar que hubo un error en el inicio de sesión.

El formulario de inicio de sesion se crea a partir de un formulario, haciendo la validacion de forma de los campos.

<p align="center">
  <img src="https://iili.io/KhW5gI.png" width="700"/>
</p>


Al iniciar sesion, se le indica al usuario que su ingreso fue exitoso y se redirije a la pagina de visualizacion de datos del usuario.

<p align="center">
  <img src="https://iili.io/KhWR0N.png" width="700"/>
</p>


Se cuenta un una ruta por medio de método post para el inicio de sesión (hacia la API creada en https://github.com/JoseAndres-py/Backend-Login-Express) de la siguiente manera:


```js
'/api/auth/signin'
```

Cuando esta ruta es consumida desde el frontend la api debe responder en tres casos diferentes :


1. Cuando el usuario se loguea exitosamente, debe responder con un status 200 y propiedad accessToken de la siguiente manera :

```js
res.status(200).send({ accessToken: token });
```

2. El usuario no existe en la bases de dato, debe responder con un status 404 de la siguiente manera:

```js
res.status(404).send('User Not Found.');
```

3. El usuario ingresa una contraseña inválida, debe responder con un status 401 de la siguiente manera:

```js
res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
```

## Bases de datos 

En el directorio config/config.json encontrarán las credenciales para la conexión de las bases de datos de la siguiente manera:

```json
{
    "development": {
        "username": "xxxxxxxxx",
        "password": "xxxxxxxxx",
        "database": "xxxxxxxxx",
        "host": "remotemysql.com",
        "dialect": "mysql"
    },
    "test": {
        "dialect": "sqlite",
        "storage": "./database.sqlite3"
    },
    "production": {
        "dialect": "sqlite",
        "storage": "./database.sqlite3"
    }
}
```

Queda de elección de cada grupo utilizar la bases de datos localmente que deseen ya sea la predeterminada en el archivo o utilizar mysql como se explicó en las sesiones anteriores, estas modificacion solo se deben realizar en el objeto “development”, las otras por ningún motivo deben ser modificadas esto podría alterar el resultado de la prueba y por ende su calificación.

## Modelo:
El modelo se creó por medio de sequelize cli con los atributos obligatorios : name,email , password de tipo string.
