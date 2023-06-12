import axios from "axios";
const API_URL="http://localhost:7777"

class ProductService
{
    saveproduct(product)
    {
        return axios.post(API_URL+"/save",product);
    }
    getAll()
    {
        return axios.get(API_URL+"/getAll");
    }
    deletepro(id)
    {
        let na={"pid":id};
        return axios.post(API_URL+"/delete",na);
    }
    getproduct(id)
    {
        let na={"pid":id};
        return axios.post(API_URL+"/get",na);
    }
}
export default new ProductService();