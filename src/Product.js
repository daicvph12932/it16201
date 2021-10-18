import { Link } from "react-router-dom";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddProduct from "./Add";
import { remove } from "./api/ProductAPI";
import Edit from "./Edit";
import Bang from "./Bang";

const Product = (props) => {
  const { url } = useRouteMatch();

  const removeProduct = async (id) => {
    try {
      remove(id);
      props.onDelete(id);
    } catch (error) {}
  };

  return (
    <div>
      <Switch>
        <Route exact path={url}>
          {props.products.map((item, index) => (
            <div>
              <Link to={`/product/${item.id}`}>{item.name}</Link>
              {/* <button onClick={() => removeProduct(item.id)}>Delete</button>
              <Link to={`/productedit/${item.id}`}>Edit</Link> */}
            </div>
          ))}
        </Route>
        <Route path={`${url}/add`}>
          <AddProduct {...props} />
        </Route>
        <Route path={`${url}/:id`} exact>
          Detail Product
        </Route>
        <Route path={`${url}/:id/edit`}>
          <Edit {...props} />
        </Route>
        <Route path={`${url}/product`}>
         <Bang {...props}/>
        </Route>
      </Switch>
    </div>
  );
};
export default Product;
