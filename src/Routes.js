import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  import AddProduct from "./Add";
  import Bang from "./Bang.js";
  import Edit from "./Edit";
  import "bootstrap/dist/css/bootstrap.min.css"
   
  const Routes = (props) => {
    
    return (
      <Router>
        <div>
            
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to = "/" className="navbar-brand" exact>Home</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <li className="nav-item" >
                <NavLink to = "/Products" className="nav-link" exact>Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to = "/Add" className="nav-link" exact>AddProduct</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
        </div> 
        <Switch>
          <Route path="/" exact>
            <img  style={{ width: 1350 }} src="https://9mobi.vn/cf/images/2015/03/nkk/hinh-dep-1.jpg" />
          </Route>
          <Route  path="/product" exact>
            <Bang {...props}/>
          </Route>
          <Route path="/add" exact>
            <AddProduct/>
          </Route>
          <Route path="/product/edit/:id" exact>
            <Edit  onUpdate={props.onUpdate}/>
          </Route>
        </Switch>
      </Router>
    );
  };
  export default Routes;
  