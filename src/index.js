import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component
{
    constructor()
    {
        super();
        this.state={}
    }

    render()
    {
        return(
            <div>

<h1>Hello world</h1>

            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));
