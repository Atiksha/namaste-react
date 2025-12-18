/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - Resturant Container
 *      - Resturant Card
 *        - Img
 *        - Name of Res, Star Rating, Cusine. Delivery
 *  Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//css
// const styleCard = {
//   backgroundColor: "#f0f0f0"
// };

// const ResturantCard = ({resName, cuisine}) => {

// const ResturantCard = (props) => {
//   const { resName, cuisine } = props;
//   return (
//     <div>
//       <h3> {props.resName}</h3>
//       <h4> {props.cuisine}</h4>
//     </div>
//   );
// };

const ResturantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisine,
    avgRaiting,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/" +
          cloudinaryImageId
        }
      />
      <h3> {name}</h3>
      <h4> {cuisine.join(", ")}</h4>
      <h4> {avgRaiting} stars</h4>
      <h4> {costForTwo / 100} FOR TWO</h4>
      <h4> {deliveryTime} minutes</h4>
      {/* <h4> {resData.data.deliveryTime} minutes</h4> */}
    </div>
  );
};

const resList = [
  {
    data: {
      id: 1,
      name: "Domino's Pizza",
      cuisine: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRaiting: 4.4,
      costForTwo: 40000,
      deliveryTime: 35,
      cloudinaryImageId:
        "2025/11/11/46cde14b-1445-4fe8-8d87-8b8cb4478998_24437.JPG",
    },
  },
  {
    data: {
      id: 2,
      name: "Cheesecake & Co.",
      cuisine: ["Cheesecake & Co"],
      avgRaiting: 4.6,
      costForTwo: 48000,
      deliveryTime: 21,
      cloudinaryImageId:
        "2024/7/18/ae338b76-63aa-424c-9640-dc9b4088e8b1_921413.jpg",
    },
  },
  {
    data: {
      id: 3,
      name: "Pizza Hub",
      cuisine: ["Italian", "Fast Food"],
      avgRaiting: 4.5,
      costForTwo: 60000,
      deliveryTime: 20,
      cloudinaryImageId:
        "2025/9/17/68bb2189-9394-4457-8014-1c98f60bfcb0_1208274.jpg",
    },
  },
  {
    data: {
      id: 4,
      name: "Burger Point",
      cuisine: ["American", "Fast Food"],
      avgRaiting: 4.0,
      costForTwo: 35000,
      deliveryTime: 18,
      cloudinaryImageId:
        "2025/8/8/56a685ab-971a-4f64-98b5-201ed7ea59a8_834978.JPG",
    },
  },
  {
    data: {
      id: 5,
      name: "Open Window Cakes",
      cuisine: ["Cakes & Pastries", "Bakery", "Desserts"],
      avgRaiting: 4.6,
      costForTwo: 80000,
      deliveryTime: 40,
      cloudinaryImageId:
        "2024/8/8/f4273c2f-4d30-4af9-be8f-753f6a437417_924844.jpg",
    },
  },
  {
    data: {
      id: 6,
      name: "The Belgian Waffle Co.",
      cuisine: ["Waffle", "Desserts", "Ice Cream"],
      avgRaiting: 4.2,
      costForTwo: 40000,
      deliveryTime: 22,
      cloudinaryImageId:
        "2025/1/17/d30e906d-c10a-4ae9-bb8a-e35f2424cdba_33848.JPG",
    },
  },
  {
    data: {
      id: 7,
      name: "Dragon Wok",
      cuisine: ["Chinese", "Asian"],
      avgRaiting: 4.4,
      costForTwo: 55000,
      deliveryTime: 28,
      cloudinaryImageId:
        "2024/5/6/d0807ef7-cc68-4cca-8032-c9eb44c9925e_11887.jpg",
    },
  },
  {
    data: {
      id: 8,
      name: "Healthy Bowl",
      cuisine: ["Salads", "Healthy Food"],
      avgRaiting: 4.7,
      costForTwo: 50000,
      deliveryTime: 15,
      cloudinaryImageId:
        "2025/9/11/321322d1-10f3-40e6-b9c5-32a79e9ca122_1053725.JPG",
    },
  },
  {
    data: {
      id: 9,
      name: "Cafe Brew",
      cuisine: ["Cafe", "Beverages"],
      avgRaiting: 4.3,
      costForTwo: 30000,
      deliveryTime: 12,
      cloudinaryImageId:
        "2025/8/8/b2156858-e1c9-4825-b0e5-2f6c2b653a09_757212.JPG",
    },
  },
  {
    data: {
      id: 10,
      name: "Royal Biryani",
      cuisine: ["Hyderabadi", "Indian"],
      avgRaiting: 4.5,
      costForTwo: 65000,
      deliveryTime: 35,
      cloudinaryImageId:
        "2025/6/6/a4c52b26-d0df-4631-85b7-be49eeae2fe5_1059830.jpg",
    },
  },
];


const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResturantCard  key={restaurant.data.id} resData={restaurant} />
        ))}

        {/* <ResturantCard resName="KFC" cuisine="Burger, FastFood" /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
