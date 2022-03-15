import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import { Home } from './Components/Home.js'
import { Form } from './Components/Form.js'
import { ABM } from './Components/ABM.js'
import { EditForm } from './Components/EditForm.js'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/form' component={Form}/>
        <Route path='/movements' component={ABM}/>
        <Route path='/editForm/:id' component={EditForm}/>
      </Switch>
    </div> 
    </BrowserRouter>
  );
}

export default App;
