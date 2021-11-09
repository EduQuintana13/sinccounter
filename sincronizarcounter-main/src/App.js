import './App.css';
import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer.js'
// Did at  npm install  bootstrap react-bootstrap in project base directory
 import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer';
     // <ItemListContainer name={mensaje} />
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Cart from './components/Cart';
const mensaje = "Bienvenido al paraiso de las frutas secas, nosotros secamos con amor";
function App() {
  return (

        <BrowserRouter>
<NavBar/>
    <Switch>
        <Route exact path="/">
            <ItemListContainer name="Escoger Producto a Comprar"/>
                </Route>
                    <Route path="/categories/:categoryid">
                        <ItemListContainer/>
                        </Route>
                    <Route path="/categories">
                        <ItemListContainer/>
                        </Route>
                    <Route path="/item/:itemid">
                        <ItemDetailContainer/>
                        </Route>
                    <Route path="/cart">
                        <Cart/>
                        </Route>


                            </Switch>
      <header className="App-header">
      </header>
    </BrowserRouter>
          );
}



export default App;
