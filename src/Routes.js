import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import AddProduct from "./Add";
import Edit from "./Edit";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Product from "./Product";
import Bang from "./Bang";

const Routes = (props) => {
  return (
    <Router>
    <div className="container" style={{backgroundColor:'Gray'}}>
  <header  className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
      <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
    </a>
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><Link to="/" className="nav-link px-2 link-dark">Home</Link></li>
      <li><Link to="/product" exact className="nav-link px-2 link-dark">Product</Link></li>
      <li><Link to="/product/add" exact className="nav-link px-2 link-dark">Add Product</Link></li>
    
    </ul>
    <div className="col-md-3 text-end">
      <button type="button" className="btn btn-primary" ><Link to="/signup" style={{textDecoration:'none',color:'white'}}>Đăng kí</Link></button>
      <button type="button" className="btn btn-primary"><Link to="/signin" style={{textDecoration:'none',color:'white'}}>Đăng nhập</Link></button>
    </div>
  </header>
</div>

      {/* <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" activeClassName="active">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/product/add" activeClassName="active">
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" activeClassName="active">
              Đăng ký
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" activeClassName="active">
              Đăng nhập
            </NavLink>
          </li>
        </ul>
      </nav> */}
      <Switch>
        <Route path="/" exact>
        <div className='offset-1'>
        <img src="https://msmobile.com.vn/upload_images/images/hinh-nen-dep-cho-may-tinh-full-hd-2.jpg" className="img-fluid" alt="..." />
        </div>
        </Route>
        <Route path="/product" exact>
          <Bang {...props} />
        </Route>
        <Route path="/product/add" exact>
          <AddProduct {...props}/>
        </Route>
        <Route path="/productedit/:id">
          <Edit {...props}/>
        </Route>
        
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
};
export default Routes;
