import React, { useState } from "react";
import { DB, storage } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function ProductInput(props) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("Unbranded");
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [imageUpload, setImageUpload] = useState([]);
  const [imgURls, setImgUrls] = useState([]);

  const [uploadStatus, setUploadStatus] = useState(true);

  const productsCollectionRef = collection(DB, "products");

  const handleUploadImage = () => {
    return new Promise((resolve, reject) => {
      let newlist = [];
      for (let i = 0; i < imageUpload.length; i++) {
        const imageRef = ref(storage, `images/${imageUpload[i].name + v4()}`);
        uploadBytes(imageRef, imageUpload[i]).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            newlist.push(url);
            if (i === imageUpload.length - 1) {
              console.log(newlist);
              resolve(newlist);
            }
          });
        });
      }
    });
  };

  const handleSubmit = async (e) => {
    setUploadStatus(false);
    e.preventDefault();
    if (name === "" || amount === 0 || price === 0 || imageUpload === null) {
      alert("Some input fields are blank");
      return;
    }
    // uploading image
    let newlist = await handleUploadImage();
    console.log(newlist);
    setImgUrls(newlist);
    const product = {
      name: name,
      brand: brand,
      amount: amount,
      price: price,
      imgUrl: newlist,
      id: "",
    };
    console.log("done2");
    console.log(imgURls);
    const newProduct = await addDoc(productsCollectionRef, product);
    product.id = newProduct.id;
    props.onCreate(product);

    setImgUrls([]);
    setAmount(0);
    setName("");
    setPrice(0);
    setBrand("Unbranded");
    setUploadStatus(true);
  };

  if (uploadStatus) {
    return (
      <form onSubmit={handleSubmit} className="p-2 bg-slate-100 my-5">
        <legend className="pl-2">Enter new product:</legend>
        <input
          type="text"
          className="form-input"
          placeholder="product"
          title="Name of Product"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-input"
          placeholder="amount"
          onChange={(e) => setAmount(e.target.value)}
          title="Amount"
        />
        <input
          type="text"
          className="form-input"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
          title="price"
        />
        <input
          type="file"
          className="form-input"
          multiple
          onChange={(e) => {
            setImageUpload(e.target.files);
          }}
        />

        <div className="form-input" title="brand name of product">
          <select
            name="todos"
            className=""
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="unbranded">Unbranded</option>
            <option value="hp">HP</option>
            <option value="lenovo">Lenovo</option>
            <option value="dell">DELL</option>
          </select>
        </div>

        <input type="submit" value="Submit" className="btn increment-btn" />
      </form>
    );
  }
  if (!uploadStatus) {
    return (
      <div role="status" className="m-2 p-2 align-middle">
        <svg
          className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
}

export default ProductInput;
