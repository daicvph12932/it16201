import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 
const AddProduct = (props) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
 
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        // bắt đầu call api
        "https://615dd9d812571a0017207926.mockapi.io/api/v1/meo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data) 
        }
      );
      const product = await response.json(); 
      props.onAdd(product);
      history.push("/product");
      console.log(product.id);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
        
      <div className="container">
        <main>
          <div className="row g-5">
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3"></h4>
              <form
                className="needs-validation"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="input-group has-validation">
                      <input {...register("ten", { required: true })}
                        type="text"
                        className="form-control"
                        placeholder="Nhập tên sản phẩm"
                        
                      />
                      
                      
                    </div>
                    <br />
                    {errors.name && <span>Mời nhập tên sản phẩm</span>}
                   
                  </div>
                  <div className="col-12">
                    <div className="input-group has-validation">
                      <input {...register("gia", { required: true })}
                        type="gia"
                        className="form-control"
                        placeholder="Nhập giá sản phẩm"
                        
                      />
                    </div>
                    <br />
                    {errors.price && <span>Mời nhập giá sản phẩm</span>}
                  </div>
                 
                  <div className="col-12">
                    <div className="input-group has-validation">
                      <input {...register("mota", { required: true })}
                        type="text"
                        className="form-control"
                        placeholder="Mô tả"
                        
                      />
                    </div>
                    <br />
                    
                  </div>
                </div>
                <hr className="my-4" />
                <button className="w-50 btn btn-primary btn-lg" type="submit">
                  Thêm sản phẩm
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default AddProduct;