import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Reservas from './pages/Reservas';

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reservas" component={Reservas} />
        </Switch>
    );
}

// json-server server.json -p 3333
// json-server server.json -p 3333 -d 2000
// sudo npm install -g json-server