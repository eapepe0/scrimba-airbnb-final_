# ejercicio-Scrimba-react-Airbnb-Final
![screenshot](https://i.imgur.com/0uYTOrn.png)

Aprendi:

- Crear componentes
- Usar Props
- Usar JS adentro de JSX
- Destructurar props

```js

const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

const {img, name} = person

```

- Pasar props que no son strings => array de objetos , booleanos
- .map => usar map para pasar una array de objetos como props en un componente

- Mapear componentes

```js

 const jokeElements = jokesData.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
    
```


- Exportar datos de un archivo y usar esos datos como props para los componentes

- Hacer un render depende de una funcion de JS por ejemplo, si los datos nos dicen que un articulo esta agotado, mostrar un cartel en la pagina que diga agotado



