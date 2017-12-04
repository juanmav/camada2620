# TwitterClon Backend

La idea de este proyecto es generar un pequeño con de 
Twitter para articular los conocimientos que se fueron
trabajando durante viendo durante el curso.

## Funcionalidades:

- Usuarios
    - Crear una cuenta
    - Editar una cuenta (nice to have)
    - Recuperar una cuenta (nice to have)
    - Login
- Twits
    - Crear Twit.
    - Editar Twit, la persona que lo creo.
    - Borrar Twit, la persona que lo creo.
    - Fecha del creacion.
    - Comentarios, debe estar logueado.
- Muro Twits
    - Publico todos los ven.
    - Para generar twits necesario el login. 
- Buscar Twits por usuario, debe estar logueado.

## Endpoints:

### Usuarios [/users/]

- Crear una cuenta [/users/][POST]

**Resquest**

```
    {
        mail: 'mail@mail.com'
        username: 'username01',
        password: '123456789'
        name: 'Roberto'
        lastname: 'Roberson'
    }
```

**Response**

### Login [/login/]

- Autenticar [/login][POST]

**Request**
```
    {
        username: 'username01',
        password: '123456789'
    }
```

**Response**

```
{
    token: 'asdasdashdjñlasdkasiduopisadksaldñ'
}
```

## Twits

- Todos los twits [/twits/?username={value}][GET]

**Query**

- username, es el nombre de usuarion [OPCIONAL]

**Response**

```
[
    {
        _id: '6534fsdlkfjsd9804382',
        message: 'Llalaal mi twit',
        creation_date: '2017/10/01 20:20:00',
        modification_date: null,
        creator: {
            name: 'Usuario',
            Lastanme: 'Usuario',
            nickname: 'username01'
        }
    },
    {
        _id: '6534f64lkfjsd9804382',
        message: 'El segundo twit',
        creation_date: '2017/10/01 20:20:00',
        modification_date: '2017/10/01 20:20:00',
        creator: {
            name: 'Usuario',
            Lastanme: 'Usuario',
            nickname: 'username01'
        }
    }
]
```
- Crear Twit [/twits/][POST]

**Login**

Header: 'x-access-token' : 'asd78a6s786das7d8'

**Resquest**

```
    {
        message: 'Te envio mi twitt!'
    }
```

**Response**

```
    {
        _id: '897sa89dyhjkasdl',
        message: 'Te envio mi twitt!',
        creation_date: '2017/10/01 20:20:00',
        modification_date: null,
        creator: {
            username: 'UsuatioLogueado'
        }
    }
```

- Editar un Twit [/twit/:id][PUT]

**Regla**

Solamente el dueño del twitt lo puede modificar.

**params**

- id - Id del twit

**Login**

Header: 'x-access-token' : 'asd78a6s786das7d8'

**Request**

```
    {
        _id: '897sa89dyhjkasdl',
        message: 'Mensaje Actualizado',
        creation_date: '2017/10/01 20:20:00',
        modification_date: null,
        creator: {
            username: 'UsuatioLogueado'
        }
    }
```

**Response**

- 200
```
    {
        _id: '897sa89dyhjkasdl',
        message: 'Mensaje Actualizado',
        creation_date: '2017/10/01 20:20:00',
        modification_date: '2017/10/01 20:21:00',
        creator: {
            username: 'UsuatioLogueado'
        }
    }
```

- 401
```
    {
        message: 'No podes editar un twit que no es tuyo'
    }
```


- Borrar Twit [/twit/:id][DELETE]

**Regla**

Solamente el dueño del twitt lo puede borrar.

**params**

- id - Id del twit

**Login**

Header: 'x-access-token' : 'asd78a6s786das7d8'

**Request**

**Response**

- 200
```
    {
        message: 'Twit borrado con exito'
    }
```

- 401
```
    {
        message: 'No podes borrar un twit que no es tuyo'
    }
```

## Comentarios

- Crear un comentario [/twits/:id/comments][POST]

**Regla**
El usuario tiene que estar logueado para generar comentario.

**params**

id - id del twitt donde se genera el comentario.

**Login**

Header: 'x-access-token' : 'asd78a6s786das7d8'

**Resquest**

```
    {
        message: 'Que bien twit!!!'
    }
```

**Response**

```
    {
        _id: '12312312312536ygfsda',
        message: 'Que bien twit!!!',
        creator: {
            username: 'UsuatioLogueado'
        }
    }
```