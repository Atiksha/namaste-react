import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //   Local State Variable //State Variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  //   Normal JS variable
  //   let listOfRestaurants = null;

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            const filterList = listOfRestaurants.filter(
              (res) => res.data.avgRaiting > 4
            );
            setlistOfRestaurants(filterList);
            console.log(listOfRestaurants);
          }}
        >
          Top rated resturants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
