import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const { cash, expenses } = useSelector((s) => s);
  const dispatch = useDispatch();
  const [productAll, setProductAll] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    if (name.trim() === "" || price.trim() === "") {
      alert("add product");
    } else {
      let new_product = {
        id: productAll.length ? productAll[productAll.length - 1].id + 1 : 1,
        name: name,
        price: price,
      };
      let res = [...productAll, new_product];
      setProductAll(res);
    }
    setName("");
    setPrice("");
  };

  const buyProduct = (productPrice) => {
    dispatch({ type: "BUY", payload: +productPrice });
  };


  const deleteproduct = (idx) => {
    dispatch({type: 'DELETE_PRODUCT', payload: idx})
  }

  console.log(productAll);

  return (
    <div className="container pt-10">
      <div className="flex justify-between">
        <div className="w-[500px] bg-red-600 h-60 flex items-center justify-center text-center text-white text-5xl leading-[70px] rounded-[12px]">
          {" "}
          Expenses : <br /> {Math.round(cash)} $
        </div>
        <div className="w-[500px] bg-blue-600 h-60 flex items-center justify-center text-center text-white text-5xl leading-[70px] rounded-[12px]">
          Cash : <br /> {Math.round(expenses)} $
        </div>
      </div>
      <div class="relative z-0 w-[500px] mx-auto mt-10 mb-5 group">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="floating_email"
          id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for=""
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Product Name
        </label>
      </div>
      <div class="relative z-0 w-[500px] mx-auto mt-10 mb-5 group">
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          name="floating_email"
          id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for=""
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Product Price
        </label>
      </div>
      <span className="block mx-auto w-[130px] mt-10 mb-10">
        <button
          type="button"
          onClick={() => addProduct()}
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Buy Product
        </button>
      </span>

      <div class="relative overflow-x-auto mb-10">
        <table class="w-[450px] mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>

              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {productAll.map((el, id) => (
            <tbody key={id}>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el.name}
                </th>
                <td class="px-6 py-4">{el.price} $</td>
                <td class="px-6 py-4 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => buyProduct(el.price)}
                    class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteproduct(el.id)}
                    class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Hero;
