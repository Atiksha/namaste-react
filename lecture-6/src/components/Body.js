import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
      // "https://c9a29fe6-e559-4e9c-a218-db404f8f049f.mock.pstmn.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://c9a29fe6-e559-4e9c-a218-db404f8f049f.mock.pstmn.io/https://namastedev.com/api/v1/listRestaurants"
    );

    const json = await data.json();
    console.log(json);

    //Optional chaining
    setListOfRestaurants(
      json.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurant(
      json.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="Search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restaurant Card and Updateb UI
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
            console.log("rating");
          }}
        >
          Top rated resturants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
