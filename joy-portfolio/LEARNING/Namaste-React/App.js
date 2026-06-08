// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React",
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// ======================Next part=====================
// nested
// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         [React.createElement("h1", { key: "heading-1" }, "I am h1 tag"),
//         React.createElement("h2", { key: "heading-2" }, "I am h2 tag"),
//         ]// array of children
//     )
// );

// console.log(parent); // is a object which is called React Element. It is a lightweight object which is used to create the virtual DOM.

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// ======================Next part=====================

// import React from "react";
// import ReactDOM from "react-dom/client";

// // React Element

// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

// console.log(jsxHeading); // is a object which is called React Element. It is a lightweight object which is used to create the virtual DOM.

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
// // ======================Next part=====================
// import React from "react";
// import ReactDOM from "react-dom/client";

// //functional component
// const elem = <span>React Element</span>;

// const title = (
//     <h1 className = "head" tabIndex="5">
//         {elem}
//         Namaste React using JSX
//     </h1>
// )
// // const Title = () => (
// //     <h1 className = "head" tabIndex="5">
// //         {elem}
// //         Namaste React using JSX
// //     </h1>
// // );

// const HeadingComponent = () => (
//     <div id = "container">
//         {/* <Title/> */}
//         {/* {Title()} */}
//         {title}
//         <h1 className="heading">Namaste React Functional component</h1>

//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>);

// ======================Next part---PROJECT 1=====================
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.magnific.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
          alt="logo"
        />
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

const resList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "10583",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/5c5effc9-fae6-447d-850a-39f269c93084_10583.JPG",
      locality: "Coles Road",
      areaName: "Frazer Town",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "20K+",
      sla: {
        deliveryTime: 44,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-09 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "3.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ee3d341-38ca-407f-8cda-816b6ffc76d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/pizza-hut-coles-road-frazer-town-rest10583",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "405798",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Malleshwaram",
      areaName: "Malleshwaram",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.4,
      parentId: "61955",
      avgRatingString: "4.4",
      totalRatingsString: "2.3K+",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-08 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "70% OFF",
        subHeader: "UPTO ₹140",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "251",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ee3d341-38ca-407f-8cda-816b6ffc76d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/chinese-wok-malleshwaram-rest405798",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "347868",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/992ee8cf-4c7a-4520-a59b-8aef46a47d86_347868.JPG",
      locality: "Cunnigham road",
      areaName: "Central Bangalore",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "7.1K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-09 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            description: "Best in Bolt",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Bolt",
                  imageId:
                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ee3d341-38ca-407f-8cda-816b6ffc76d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-cunnigham-road-central-bangalore-rest347868",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1219702",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/29/63db73bc-acfc-424d-9c3c-9ab827ed4913_1219702.jpg",
      locality: "Malleshwaram B.B.M.P North",
      areaName: "Kapali Mall, Subedhar Chatram Road Gandhinagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "548",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-09 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ee3d341-38ca-407f-8cda-816b6ffc76d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/burger-king-malleshwaram-b-b-m-p-north-kapali-mall-subedhar-chatram-road-gandhinagar-rest1219702",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "570511",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/20/ef78f8a1-136a-4590-adc3-5d207900a5e0_570511.JPG",
      locality: "Bangalore South",
      areaName: "Vasanth Nagar",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.7,
      parentId: "3818",
      avgRatingString: "4.7",
      totalRatingsString: "6.1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-09 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ee3d341-38ca-407f-8cda-816b6ffc76d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/bakingo-south-vasanth-nagar-rest570511",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1208881",
      name: "Thirtha",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/27/b4cf8af1-5763-4919-bca2-cd99c5e75057_1208881 (1).jpg",
      locality: "Central banglore ",
      areaName: "Central Bangalore",
      costForTwo: "₹350 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Snacks",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.6,
      veg: true,
      parentId: "691336",
      avgRatingString: "4.6",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-08 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹70",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ee3d341-38ca-407f-8cda-816b6ffc76d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/thirtha-central-banglore-central-bangalore-rest1208881",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "2552",
      name: "Gullu's Chaat",
      cloudinaryImageId: "dzwlfxw0hqb0txqs9y9g",
      locality: "Seshadripuram",
      areaName: "Seshadripuram",
      costForTwo: "₹250 for two",
      cuisines: ["Chaat", "Snacks"],
      avgRating: 4.2,
      veg: true,
      parentId: "21103",
      avgRatingString: "4.2",
      totalRatingsString: "16K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-08 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description:
              "Serves only 100% vegetarian food, with no non-veg items.",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description:
                    "Serves only 100% vegetarian food, with no non-veg items.",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹39",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.7",
          ratingCount: "5.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ee3d341-38ca-407f-8cda-816b6ffc76d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/gullus-chaat-seshadripuram-rest2552",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "672074",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/8f9a90a5-4f89-4234-b4ed-a840580dbe52_672074.jpg",
      locality: "Ashok Nagar",
      areaName: "Sobha Mall",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "2.6K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-09 00:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
            description: "EatRight",
          },
          {
            imageId:
              "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
            description: "Best in Subs & Sandwiches",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "EatRight",
                  imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Subs & Sandwiches",
                  imageId:
                    "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹200 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-0ee3d341-38ca-407f-8cda-816b6ffc76d9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-ashok-nagar-sobha-mall-rest672074",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    totalRatingsString,
    slaString,
  } = resData.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-logo"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{`${avgRating} by ${totalRatingsString} users`}</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">
        {resList.map((restaurent) => (
          <RestaurantCard key={restaurent.info.id} resData ={restaurent}/>
        ))}
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
