# React Boilerplate Front-End Code

In deze README wordt kort uitlegd wat er allemaal in de huidige boilerplate gemaakt is, en hoe je deze boilerplate kunt gebruiken.

## Installatie:
De gehele mappenstructuur is al gemaakt, aangezien we in de .gitignore alle node_modules negeren moeten we wel nog de juiste dependencies downloaden. Dit kan als volgt:
1. Verwijs naar de frontend folder
    ```bash
    cd frontend
    ```
    Als je dit correct hebt gedaan zie je nu in je terminal ongeveer het volgende:  
    `\web-interface-prediction-model\frontend>` 

2. Installeer de benodigde dependencies
    ```
    npm install 
    ```

3. Start de development server
    ```
    npm start
    ```
    
Als alles goed is gelukt wordt er nu op localhost:3000 een web pagina gerunned van de boilerplate.
> Source can be found here: https://reactjs.org/docs/create-a-new-react-app.html

## Project Layout:

De huidige projectstructuur bestaat uit meerdere mappen voor meerdere doeleinden, onderanderen `css` voor alle css. `components` voor alle react componenten.
```bash
/path/to/your/project
├── src/
│   ├── index.js
│   ├── serverCommunications.js
|   ├── components/             
|   |   ├── App.jsx
|   |   ├── AdminPage.jsx 
|   |   ├── DataPageA.jsx
|   |   └── DataPageB.jsx
|   |   └── Login.jsx
|   |   └── Logout.jsx
|   └── css/
|       └── bootstrap.css
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
|   └── manifest.json
├── node_modules/
├── package-lock.json
├── package.json
├── .git
└── .gitignore
```

- `index.js`: rendered de React.DOM en roept de App.jsx file aan samen met andere css bestanden.
- `serverCommunication.js`: bevat alle communicatie met de server zoals API calls.
- `components/`: een map voor alle react componenten.
- `App.jsx`: main component voor de applicatie die alle andere .jsx componenten aanroept.
- `public/`: automatisch gegenereerde map voor de HTML en favicon.
- `.git` en `.gitignore`: git versiebeheer bestanden.

## Code Examples:


### State Hook:
Een hook is een speciale functie waarbij je React state toe kunt voegen aan een functie component.
### useState:
#### Login.jsx
```js
import React, { useState } from 'react'

export default function Login(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} value={username}></input>
        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
    )
}
```
#### Output met console.log bij onChange:
```
username = u
username = us
username = use
username = user
```

### useEffect:
Een andere State Hook is de useEffect, deze hook wordt altijd als eerst gerunned, vergelijkbaar met een ComponentDidMount()
#### Logout.jsx
```js
import React, { useEffect } from 'react';
export default function Logout(props){
    useEffect(() => {
        doThisFunction()
    })
}
```
> For more documentation related to State Hooks, see: https://reactjs.org/docs/hooks-state.html

### API call:
#### serverCommunications.js
```js
export async function Login(username, password) {
    const body = {
        username: username,
        password: password
    };

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        mode: "cors",
        body: JSON.stringify(body),
    };

    return fetch(serverFetchBase + `/login`, fetchOptions);
}
```
#### Login.jsx
```js
import { Login } from './serverCommunications.js';

function handleLogin() {
    Login(username, password)
}
```

