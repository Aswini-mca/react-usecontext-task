import './App.css';
import { createContext, useContext, useState } from "react";

const context = createContext();
const perItemQuantity = 1;
const perItemtotal = 899;

//json data
const initial_product_list = [{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images": [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ]
},
{
  "id": 2,
  "title": "iPhone X",
  "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  "price": 899,
  "discountPercentage": 17.94,
  "rating": 4.44,
  "stock": 34,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  "images": [
    "https://i.dummyjson.com/data/products/2/1.jpg",
    "https://i.dummyjson.com/data/products/2/2.jpg",
    "https://i.dummyjson.com/data/products/2/3.jpg",
    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
  ]
},
{
  "id": 3,
  "title": "Samsung Universe 9",
  "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
  "price": 1249,
  "discountPercentage": 15.46,
  "rating": 4.09,
  "stock": 36,
  "brand": "Samsung",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  "images": [
    "https://i.dummyjson.com/data/products/3/1.jpg"
  ]
},
{
  "id": 4,
  "title": "OPPOF19",
  "description": "OPPO F19 is officially announced on April 2021.",
  "price": 280,
  "discountPercentage": 17.91,
  "rating": 4.3,
  "stock": 123,
  "brand": "OPPO",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
  "images": [
    "https://i.dummyjson.com/data/products/4/1.jpg",
    "https://i.dummyjson.com/data/products/4/2.jpg",
    "https://i.dummyjson.com/data/products/4/3.jpg",
    "https://i.dummyjson.com/data/products/4/4.jpg",
    "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
  ]
},
{
  "id": 5,
  "title": "Huawei P30",
  "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  "price": 499,
  "discountPercentage": 10.58,
  "rating": 4.09,
  "stock": 32,
  "brand": "Huawei",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
  "images": [
    "https://i.dummyjson.com/data/products/5/1.jpg",
    "https://i.dummyjson.com/data/products/5/2.jpg",
    "https://i.dummyjson.com/data/products/5/3.jpg"
  ]
}
];

function App() {

  return (
    <context.Provider value={[perItemQuantity, perItemtotal]}>
      <div classNameName="App">
        <Cart />
      </div>
    </context.Provider>
  );
}

export default App;

// Cart component
function Cart() {
  const product = initial_product_list;
  const item = useContext(context);
  const [totalQuantity, setTotalQuantity] = useState(item[0])

  return (
    <div>
      <h3 className='container text-center mt-2'>React useContext Task</h3>
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-lg-8">
            <div className="p-2">
              <h4>Shopping cart Page</h4>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
              <div className="mr-1"><img className="rounded" src={product[1].images[0]} width="200" alt='' /></div>
              <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{product[1].title}</span>
                <div className="d-flex flex-row product-desc">
                  <div className="size mr-2"><span className="text-grey">SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...</span></div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <button className='btn btn-outlined text-warning' onClick={() => { setTotalQuantity(totalQuantity + 1) }}>+</button>{totalQuantity}<button className='btn btn-outlined text-warning' onClick={() => { setTotalQuantity(totalQuantity - 1); if (totalQuantity === 0) setTotalQuantity(0) }}>-</button></div>
              <div>
                <h5 className="text-grey">per/item ₹{item[1]}</h5>
              </div>
              <div className="d-flex align-items-center"><button className='btn btn-outlined text-warning'>Remove</button></div>
              <span className='font-weight-bold'>Total:₹{item[1] * totalQuantity}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

