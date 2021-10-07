
import { React } from 'react';
// import { Switch, Link, useHistory, Route } from "react-router-dom";
// import Product from './Product';
import Button from '@restart/ui/esm/Button';
// import { Link } from "react-router-dom";

function Bang(props) {
    console.log(props.products)
    
     
    const removeProduct = async (id) => {
        try {
            await fetch(
                "https://615dd9d812571a0017207926.mockapi.io/api/v1/meo/" +id,
                {
                    method: "DELETE",
                }
            );
            props.onDelete(id);
        } catch (error) { }

    };

    return (
        <div>
        
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">/</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Mô tả</th>
                            <th scope="col">Ảnh</th>
                            <th scope="col">Thao tác</th>
                            {/* <th scope="col">Thao tác 2 </th> */}
                        </tr>
                    </thead>
                    <tbody>
    
                            {props.products && props.products.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.ten}</td>
                                    <td>{item.gia}</td>
                                    <td>{item.mota}</td>
                                    <td>{item.anh}</td>
                                    <td><Button onClick={() => removeProduct(item.id)} >Delete</Button> </td>
                                    <td><Button >Edit</Button> </td>
                                    {/* <Link to='/product'>EDIT</Link> */}
                                </tr>
                            ))}
            
                    </tbody>
                </table>
        
        </div>
    );
}
export default Bang;
