import { useHistory, useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
 
export default function Edit(props) {
  let history = useHistory();
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://615dd9d812571a0017207926.mockapi.io/api/v1/meo/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        reset(data);
      });
  }, [reset]);
  const onSubmit = (data) => {
    fetch("https://615dd9d812571a0017207926.mockapi.io/api/v1/meo/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.onUpdate(data);
        history.push("/product");
      });
  };
  return (
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            {...register("ten")}
 
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            {...register("gia")}
 
          />
        </div>
        <button type="submit" className="btn btn-info">
          Update
        </button>
      </form>
      );
}
