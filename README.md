# Twitter Follow Card

Un componente de React que simula una tarjeta de usuario de Twitter con la funcionalidad de seguir y dejar de seguir.

## Características

- Muestra la información de un usuario (nombre, nombre de usuario y avatar).
- Permite seguir o dejar de seguir al usuario.
- Cambia dinámicamente el texto del botón entre "Seguir" y "Siguiendo".
- Diseño responsive y moderno.

---

## Tecnologías utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos modernos.
- **CSS**: Estilos personalizados para la tarjeta y el botón.
- **unavatar.io**: Servicio para obtener avatares de usuarios basados en su nombre de usuario.

---

## Aprendizajes clave

### 1. Manejo del estado con `useState`
Aprendí a usar el hook `useState` para manejar el estado de un componente en React. En este proyecto, lo utilicé para cambiar el texto del botón entre "Seguir" y "Siguiendo", así como para mostrar u ocultar el texto "Dejar de seguir".

### 2. Uso de `props`
Aprendí a pasar datos entre componentes usando `props`. En este caso, pasé el nombre, nombre de usuario y estado inicial (`initialIsFollowing`) al componente `TwitterFollowCard`. Esto me permitió reutilizar el componente para múltiples usuarios.

### 3. Renderizado condicional
Aprendí a renderizar elementos de manera condicional basándome en el estado. Por ejemplo, el texto "Dejar de seguir" solo se muestra cuando el usuario está siendo seguido.

### 4. Mapeo de listas
Aprendí a renderizar una lista de componentes usando el método `map`. Esto fue especialmente útil para mostrar múltiples tarjetas de usuario a partir de un array de datos.

### 5. Uso de Vite
Descubrí lo rápido y eficiente que es Vite para desarrollar aplicaciones React. Configurar el proyecto fue sencillo, y el servidor de desarrollo es increíblemente rápido.

### 6. CSS modular
Aprendí a organizar y aplicar estilos CSS de manera modular. Esto me ayudó a mantener el código limpio y fácil de mantener.

### 7. Trabajo con APIs externas
Usé el servicio `unavatar.io` para obtener avatares de usuarios basados en su nombre de usuario. Esto me permitió entender cómo integrar APIs externas en un proyecto de React.

---

## Cómo usar

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/twitter-follow-card.git
cd twitter-follow-card
```

### 2. Instala las dependencias
```bash
npm install
```

### 3. Inicia el servidor de desarrollo
```bash
npm run dev
```

### 4. Abre el proyecto en tu navegador

Visita http://localhost:5173 para ver el proyecto en acción.

## Estructura del proyecto
```
twitter-follow-card/
├── src/
│   ├── App.jsx            # Componente principal que renderiza las tarjetas.
│   ├── TwitterFollowCard.jsx # Componente de la tarjeta de usuario.
│   ├── main.jsx           # Punto de entrada de la aplicación.
│   ├── App.css            # Estilos globales.
│   └── index.css          # Estilos base.
├── public/                # Archivos estáticos (opcional).
├── package.json           # Dependencias y scripts del proyecto.
```

---

## Conclusión

Este proyecto fue una excelente oportunidad para adentrarme en React. Aprendí a manejar el estado, pasar datos entre componentes, y renderizar listas de manera eficiente. Además, descubrí lo importante que es organizar el código y los estilos para mantener un proyecto limpio y escalable.

Una de las cosas que más me gustaron fue ver cómo un componente pequeño y bien estructurado puede ser reutilizado para crear interfaces más complejas. También me di cuenta de lo poderoso que es React para crear interfaces dinámicas y responsivas con relativamente poco código.

Este proyecto es solo el comienzo, y tengo ganas de seguir aprendiendo y mejorando mis habilidades en React.

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
