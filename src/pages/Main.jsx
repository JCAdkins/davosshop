import { useEffect, useRef, useState } from "react";
import { Button, Carousel } from "flowbite-react";
import { Carousel as MaterialCarousel } from "@material-tailwind/react";
import FlexWrapContainer from "../components/containers/FlexWrapContainer";
import FlexWrapCard from "../components/cards/FlexWrapCard";
import "../customcss/custom.css";
import womensImage from "../assets/images/womens_apparel.jpeg";
import mensImage from "../assets/images/mens_apparel.webp";
import NoisyImage from "../components/NoisyImage";
import LoadingPage from "../components/LoadingPage";

const Main = () => {
  const [loading, setLoading] = useState("true");
  const [boxShadow, setBoxShadow] = useState();
  const [main_outer, setMain_Outer] = useState();
  const [opacity, setOpacity] = useState("0");
  const [carousel_transition, setCarousel_Transition] = useState(
    "decarousel_transition"
  );
  const mainOuterRef = useRef();
  let rectTop;

  const weeklyDeals = [
    {
      name: "Womens Volleyball Shorts",
      brand: "Nike",
      category: ["womens", "athletic", "shorts", "volleyball"],
      id: 11110,
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b2376733-646d-434f-8bff-47a043717ded/performance-womens-game-volleyball-shorts-VrTWY080.png",
        "https://www.mojavemyst.com/cdn/shop/products/4-2-ProductPurchase-PHOTOS_1200x.jpg?v=1632249979",
        "https://www.mojavemyst.com/cdn/shop/products/4-3-ProductPurchase-PHOTOS_1200x.jpg?v=1632250051",
        "https://www.mojavemyst.com/cdn/shop/products/4-4-ProductPurchase-PHOTOS_1200x.jpg?v=1632250079",
        "https://www.mojavemyst.com/cdn/shop/products/4-5-ProductPurchase-PHOTOS_1200x.jpg?v=1632250105",
        "https://www.mojavemyst.com/cdn/shop/products/4-7-ProductPurchase-PHOTOS_1200x.jpg?v=1632250133",
        "https://www.mojavemyst.com/cdn/shop/products/4-8-ProductPurchase-PHOTOS_1200x.jpg?v=1632250157",
        "https://www.mojavemyst.com/cdn/shop/products/4-9-ProductPurchase-PHOTOS_1200x.jpg?v=1632250192",
        "https://www.mojavemyst.com/cdn/shop/products/4-10-ProductPurchase-PHOTOS_1200x.jpg?v=1632250239",
        "https://www.mojavemyst.com/cdn/shop/products/4-11-ProductPurchase-PHOTOS_1200x.jpg?v=1632250259",
        "https://www.mojavemyst.com/cdn/shop/products/4-6-ProductPurchase-PHOTOS_1200x.jpg?v=1632250273",
        "https://www.mojavemyst.com/cdn/shop/products/4-12-ProductPurchase-PHOTOS_1200x.jpg?v=1630608478",
      ],
      price: 35.0,
      details: {
        description:
          "Mojave Myst is a fine mist spray deodorant that delivers multi-day body odor protection you can trust. Formulated in the Mojave Desert, one of the hottest, extreme and beautiful environments on earth.  Mojave Myst’s trademark ODOR CANCELLING TECHNOLOGY is a patent-pending deodorant that effectively neutralizes body odor. This proprietary formula is made with ultra-pure colloidal PLATINUM, GOLD, SILVER & COPPER. These precious earth elements eliminate body odor on contact. The unique spray application ensures the most hygienic experience compared to stick or roll-on products. Start your Mojave Myst journey and trust your deodorant again. Everybody is different. Depending on your body chemistry, Mojave Myst delivers up to 5 days of odor cancelling protection. This non-toxic, high performance spray deodorant delivers effortless and comfortable daily protection under the most extreme conditions. Although Mojave Myst contains no added fragrance, it does have a light and earthy coconut aroma from the natural distillation process.\nUP TO 5-DAY ODOR PROTECTION\nFOR ALL SKIN TYPES\nNON-TOXIC\nVEGAN\nCRUELTY FREE\nGENDER NEUTRAL\nNO ADDED FRAGRANCE",
        directions:
          "Shake well before use. Spray Mojave Myst molecular deodorant 6 inches away from a dry underarm area. Spray 3-4 times per arm. Product dries instantly and will not stain clothing or leave residue under the arms. FOR EXTERNAL USE ONLY. Not intended for use by children. Avoid the face and eyes. Discontinue use if skin irritation occurs. DO NOT use on freshly shaved skin or sensitive body areas.",
        ingredients: {
          1: "Purified Water",
          2: "Certified Organic Coconut Alcohol (Ethyl Alcohol 95%)",
          3: "Colloids of .999 Pure Platinum",
          4: ".999 Pure Gold",
          5: ".999 Pure Silver",
          6: ".999 Pure Copper",
          7: "Glycerin, Citric Acid",
        },
        color: null,
        weight: null,
        volume: "2.0 fl oz, 60 ml",
      },
      ratings: [4, 5, 5, 4, 5, 5, 5, 4, 3, 5, 5, 3, 5, 4, 4, 5, 5],
      reviews: [],
      discount: 0.1,
    },
    {
      name: "Deodorant Spray: Watermelon",
      id: 11111,
      price: 40.0,
      category: ["accessory", "deodorant", "spray", "watermelon", "mens"],
      images: [
        "https://images.lululemon.com/is/image/lululemon/LM5AO4S_035955_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
        "https://www.mojavemyst.com/cdn/shop/products/4-2-ProductPurchase-PHOTOS_1200x.jpg?v=1632249979",
        "https://www.mojavemyst.com/cdn/shop/products/4-3-ProductPurchase-PHOTOS_1200x.jpg?v=1632250051",
        "https://www.mojavemyst.com/cdn/shop/products/4-4-ProductPurchase-PHOTOS_1200x.jpg?v=1632250079",
        "https://www.mojavemyst.com/cdn/shop/products/4-5-ProductPurchase-PHOTOS_1200x.jpg?v=1632250105",
        "https://www.mojavemyst.com/cdn/shop/products/4-7-ProductPurchase-PHOTOS_1200x.jpg?v=1632250133",
        "https://www.mojavemyst.com/cdn/shop/products/4-8-ProductPurchase-PHOTOS_1200x.jpg?v=1632250157",
        "https://www.mojavemyst.com/cdn/shop/products/4-9-ProductPurchase-PHOTOS_1200x.jpg?v=1632250192",
        "https://www.mojavemyst.com/cdn/shop/products/4-10-ProductPurchase-PHOTOS_1200x.jpg?v=1632250239",
        "https://www.mojavemyst.com/cdn/shop/products/4-11-ProductPurchase-PHOTOS_1200x.jpg?v=1632250259",
        "https://www.mojavemyst.com/cdn/shop/products/4-6-ProductPurchase-PHOTOS_1200x.jpg?v=1632250273",
        "https://www.mojavemyst.com/cdn/shop/products/4-12-ProductPurchase-PHOTOS_1200x.jpg?v=1630608478",
      ],
      discount: 0.2,
      details: {
        description:
          "Mojave Myst is a fine mist spray deodorant that delivers multi-day body odor protection you can trust. Formulated in the Mojave Desert, one of the hottest, extreme and beautiful environments on earth.  Mojave Myst’s trademark ODOR CANCELLING TECHNOLOGY is a patent-pending deodorant that effectively neutralizes body odor. This proprietary formula is made with ultra-pure colloidal PLATINUM, GOLD, SILVER & COPPER. These precious earth elements eliminate body odor on contact. The unique spray application ensures the most hygienic experience compared to stick or roll-on products. Start your Mojave Myst journey and trust your deodorant again. Everybody is different. Depending on your body chemistry, Mojave Myst delivers up to 5 days of odor cancelling protection. This non-toxic, high performance spray deodorant delivers effortless and comfortable daily protection under the most extreme conditions. Although Mojave Myst contains no added fragrance, it does have a light and earthy coconut aroma from the natural distillation process.\nUP TO 5-DAY ODOR PROTECTION\nFOR ALL SKIN TYPES\nNON-TOXIC\nVEGAN\nCRUELTY FREE\nGENDER NEUTRAL\nNO ADDED FRAGRANCE",
        directions:
          "Shake well before use. Spray Mojave Myst molecular deodorant 6 inches away from a dry underarm area. Spray 3-4 times per arm. Product dries instantly and will not stain clothing or leave residue under the arms. FOR EXTERNAL USE ONLY. Not intended for use by children. Avoid the face and eyes. Discontinue use if skin irritation occurs. DO NOT use on freshly shaved skin or sensitive body areas.",
        ingrediants: {
          1: "Purified Water",
          2: "Certified Organic Coconut Alcohol (Ethyl Alcohol 95%)",
          3: "Colloids of .999 Pure Platinum",
          4: ".999 Pure Gold",
          5: ".999 Pure Silver",
          6: ".999 Pure Copper",
          7: "Glycerin, Citric Acid",
        },
        color: null,
      },
      weight: null,
      volume: "2.0 fl oz, 60 ml",
    },
    {
      name: "Poop Spray: Peach",
      id: 11112,
      images: [
        "https://www.mojavemyst.com/cdn/shop/products/4-1-ProductPurchase-PHOTOS_1200x.jpg?v=1632249914",
      ],
      price: 45.0,
      category: ["accessory", "deodorant", "spray", "peach", "womens"],
      discount: 0.25,
      details: {
        description:
          "Mojave Poopster is a fine mist spray deodorant that delivers multi-day body odor protection you can trust. Formulated in the Mojave Desert, one of the hottest, extreme and beautiful environments on earth.  Mojave Myst’s trademark ODOR CANCELLING TECHNOLOGY is a patent-pending deodorant that effectively neutralizes body odor. This proprietary formula is made with ultra-pure colloidal PLATINUM, GOLD, SILVER & COPPER. These precious earth elements eliminate body odor on contact. The unique spray application ensures the most hygienic experience compared to stick or roll-on products. Start your Mojave Myst journey and trust your deodorant again. Everybody is different. Depending on your body chemistry, Mojave Myst delivers up to 5 days of odor cancelling protection. This non-toxic, high performance spray deodorant delivers effortless and comfortable daily protection under the most extreme conditions. Although Mojave Myst contains no added fragrance, it does have a light and earthy coconut aroma from the natural distillation process.\nUP TO 5-DAY ODOR PROTECTION\nFOR ALL SKIN TYPES\nNON-TOXIC\nVEGAN\nCRUELTY FREE\nGENDER NEUTRAL\nNO ADDED FRAGRANCE",
        directions:
          "Shake well before use. Spray Mojave Myst molecular deodorant 6 inches away from a dry underarm area. Spray 3-4 times per arm. Product dries instantly and will not stain clothing or leave residue under the arms. FOR EXTERNAL USE ONLY. Not intended for use by children. Avoid the face and eyes. Discontinue use if skin irritation occurs. DO NOT use on freshly shaved skin or sensitive body areas.",
        ingrediants: {
          1: "Purified Water",
          2: "Certified Organic Coconut Alcohol (Ethyl Alcohol 95%)",
          3: "Colloids of .999 Pure Platinum",
          4: ".999 Pure Gold",
          5: ".999 Pure Silver",
          6: ".999 Pure Copper",
          7: "Glycerin, Citric Acid",
        },
        color: null,
      },
      weight: null,
      volume: "2.0 fl oz, 60 ml",
    },
    {
      name: "Deodorant Spray: Pineapple",
      id: 11113,
      images: [
        "https://www.mojavemyst.com/cdn/shop/products/4-1-ProductPurchase-PHOTOS_1200x.jpg?v=1632249914",
      ],
      price: 50.0,
      discount: 0.05,
      category: ["accessory", "deodorant", "spray", "pineapple", "mens"],
      details: {
        description:
          "Mojave Myst is a fine mist spray deodorant that delivers multi-day body odor protection you can trust. Formulated in the Mojave Desert, one of the hottest, extreme and beautiful environments on earth.  Mojave Myst’s trademark ODOR CANCELLING TECHNOLOGY is a patent-pending deodorant that effectively neutralizes body odor. This proprietary formula is made with ultra-pure colloidal PLATINUM, GOLD, SILVER & COPPER. These precious earth elements eliminate body odor on contact. The unique spray application ensures the most hygienic experience compared to stick or roll-on products. Start your Mojave Myst journey and trust your deodorant again. Everybody is different. Depending on your body chemistry, Mojave Myst delivers up to 5 days of odor cancelling protection. This non-toxic, high performance spray deodorant delivers effortless and comfortable daily protection under the most extreme conditions. Although Mojave Myst contains no added fragrance, it does have a light and earthy coconut aroma from the natural distillation process.\nUP TO 5-DAY ODOR PROTECTION\nFOR ALL SKIN TYPES\nNON-TOXIC\nVEGAN\nCRUELTY FREE\nGENDER NEUTRAL\nNO ADDED FRAGRANCE",
        directions:
          "Shake well before use. Spray Mojave Myst molecular deodorant 6 inches away from a dry underarm area. Spray 3-4 times per arm. Product dries instantly and will not stain clothing or leave residue under the arms. FOR EXTERNAL USE ONLY. Not intended for use by children. Avoid the face and eyes. Discontinue use if skin irritation occurs. DO NOT use on freshly shaved skin or sensitive body areas.",
        ingrediants: {
          1: "Purified Water",
          2: "Certified Organic Coconut Alcohol (Ethyl Alcohol 95%)",
          3: "Colloids of .999 Pure Platinum",
          4: ".999 Pure Gold",
          5: ".999 Pure Silver",
          6: ".999 Pure Copper",
          7: "Glycerin, Citric Acid",
        },
        color: null,
      },
      weight: null,
      volume: "2.0 fl oz, 60 ml",
    },
    {
      name: "More Womens Shorts",
      brand: "Under Armor",
      id: 11114,
      category: ["shorts", "athletic", "volleyball", "womens"],
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bb41ff2a-43df-4c01-adca-7bcfcf948428/performance-womens-game-volleyball-shorts-VrTWY080.png",
      ],
      price: 55.0,
      discount: 0.15,
      details: {
        description:
          "Mojave Myst is a fine mist spray deodorant that delivers multi-day body odor protection you can trust. Formulated in the Mojave Desert, one of the hottest, extreme and beautiful environments on earth.  Mojave Myst’s trademark ODOR CANCELLING TECHNOLOGY is a patent-pending deodorant that effectively neutralizes body odor. This proprietary formula is made with ultra-pure colloidal PLATINUM, GOLD, SILVER & COPPER. These precious earth elements eliminate body odor on contact. The unique spray application ensures the most hygienic experience compared to stick or roll-on products. Start your Mojave Myst journey and trust your deodorant again. Everybody is different. Depending on your body chemistry, Mojave Myst delivers up to 5 days of odor cancelling protection. This non-toxic, high performance spray deodorant delivers effortless and comfortable daily protection under the most extreme conditions. Although Mojave Myst contains no added fragrance, it does have a light and earthy coconut aroma from the natural distillation process.\nUP TO 5-DAY ODOR PROTECTION\nFOR ALL SKIN TYPES\nNON-TOXIC\nVEGAN\nCRUELTY FREE\nGENDER NEUTRAL\nNO ADDED FRAGRANCE",
        directions:
          "Shake well before use. Spray Mojave Myst molecular deodorant 6 inches away from a dry underarm area. Spray 3-4 times per arm. Product dries instantly and will not stain clothing or leave residue under the arms. FOR EXTERNAL USE ONLY. Not intended for use by children. Avoid the face and eyes. Discontinue use if skin irritation occurs. DO NOT use on freshly shaved skin or sensitive body areas.",
        ingrediants: {
          1: "Purified Water",
          2: "Certified Organic Coconut Alcohol (Ethyl Alcohol 95%)",
          3: "Colloids of .999 Pure Platinum",
          4: ".999 Pure Gold",
          5: ".999 Pure Silver",
          6: ".999 Pure Copper",
          7: "Glycerin, Citric Acid",
        },
        color: null,
      },
      weight: null,
      volume: "2.0 fl oz, 60 ml",
    },
  ];

  const new_products = [11110, 11111, 11114];
  const featured_products = [11111, 11113, 11115];

  const new_product_array = new_products.map((new_product, index) => {
    const full_prod = weeklyDeals.filter(
      (product) => product.id === new_product
    );
    return (
      <div
        className="flex flex-col items-center w-fit h-fit min-w-[100px] gap-2"
        key={index}
      >
        <img
          className="h-full w-full max-h-[250px]"
          src={full_prod[0].images[0]}
          alt="Product Image"
        />
        <h5 className="text-lg font-bold leading-5 tracking-tight text-black h-full w-full max-w-[15ch] dark:text-white">
          <div className="text-center">{full_prod[0].name}</div>
        </h5>
        <div className="flex-col w-full items-center text-black text-md">
          <div className="text-center">${full_prod[0].price.toFixed(2)}</div>
          <div className="text-center text-xl">{full_prod[0].brand}</div>
        </div>
      </div>
    );
  });

  const updateRectTop = () => {
    rectTop = mainOuterRef.current?.getBoundingClientRect()?.top;
    if (rectTop < 450) {
      setMain_Outer("main-outer");
      setCarousel_Transition("carousel_transition");
      setOpacity("1");
    } else if (rectTop > 450) {
      setMain_Outer("");
      setCarousel_Transition("decarousel_transition");
      setOpacity("0");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setBoxShadow("main-overlay-box-shadow");
    }, 6000);
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading();
    }, 5000);
    window.addEventListener("scroll", updateRectTop);
    return () => window.removeEventListener("scroll", updateRectTop);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="flex flex-col w-full bg-white">
          <div className="main flex justify-center items-center w-screen bg-left-bottom bg-[url('./assets/images/davos_shop_bg.webp')] mb-16">
            <div
              className={`${boxShadow} w-[80%] h-[80%] grid grid-cols-3 rounded-sm font-dmserif`}
            >
              <div className="main-overlay-left flex col-span-1 h-full items-start bg-gray-900/80">
                <div className="main-inner-overlay-left flex flex-col w-full leading-[50px] items-center gap-6 p-6">
                  <div className="main-inner-overlay-header flex w-1/2 h-fit justify-evenly text-3xl border-y border-white">
                    <p>D</p>
                    <p>A</p>
                    <p>V</p>
                    <p>O</p>
                    <p>S</p>
                  </div>
                  <div className="main-inner-overlay-body text-justify">
                    Empowering a sustainable future, our ecommerce shop stands
                    on the pillars of efficiency, environmental responsibility,
                    and a commitment to elevate global living standards. We
                    curate products with a purpose, fostering a community where
                    conscious choices drive positive change for a better world.
                  </div>
                </div>
              </div>
              <div className="main-overlay-right flex flex-col overflow-y-auto col-span-2 h-full bg-white/40">
                <MaterialCarousel className="relative">
                  <div className="main-inner-overlay-right flex flex-col items-center justify-evenly w-full h-full">
                    <h1 className="text-3xl text-gray-800">
                      Spread Joy: Support Needy Kids at Davos!
                    </h1>
                    <p className="text-xl text-black leading-[50px] text-justify p-14 -mt-10">
                      Here at Davos, we believe in the magic of giving. Help us
                      bring smiles to the faces of needy kids throughout the
                      year of 2024. Your donation can make a world of
                      difference.{" "}
                      <span
                        className="underline text-bold hover:cursor-pointer"
                        onClick={() =>
                          console.log(
                            "Need to go to donation page or bring up donation modal."
                          )
                        }
                      >
                        Click to donate now
                      </span>
                      ! #DavosCares
                    </p>
                  </div>
                  <div className="main-inner-overlay-right flex flex-col w-full h-full items-center p-6 overflow-y-auto">
                    <div className="main-inner-overlay-header sticky top-0 backdrop-blur-lg left-0 h-fit w-fit text-3xl text-center text-black px-4 z-10 border-y border-black">
                      <p className="">WEEKLY DEALS</p>
                    </div>
                    <FlexWrapContainer>
                      {weeklyDeals.map((deal, index) => (
                        <FlexWrapCard
                          className="w-[30ch] h-full flex flex-col p-6"
                          cardClassName="border-none hover:shadow-md hover:shadow-app_accent-900"
                          key={index}
                          image={deal.images[0]}
                        >
                          <h5 className="text-lg font-bold leading-5 tracking-tight text-black bg-white h-full w-full border-none dark:text-white">
                            <div>{deal.name}</div>
                          </h5>
                          <div className="flex-col w-full text-black text-md">
                            <div className="flex justify-between">
                              <div className="flex whitespace-pre gap-1">
                                <div className="line-through">
                                  ${deal.price}
                                </div>
                                <div className="text-red-500">
                                  $
                                  {(deal.price * (1 - deal.discount)).toFixed(
                                    2
                                  )}
                                </div>
                              </div>
                              <div>{deal.discount * 100}% Off</div>
                            </div>
                          </div>
                          <div className="flex items-end justify-center h-full">
                            <Button
                              onClick={() =>
                                console.log(deal.name + " clicked.")
                              }
                              className="bg-app_accent-900 w-full"
                              size="xs"
                            >
                              Purchase
                            </Button>
                          </div>
                        </FlexWrapCard>
                      ))}
                    </FlexWrapContainer>
                  </div>
                  <div className="main-inner-overlay-right flex flex-col w-full h-full items-center p-6 overflow-y-auto">
                    <div className="main-inner-overlay-header sticky top-0 backdrop-blur-lg left-0 h-fit w-fit text-3xl text-center text-black px-4 z-10 border-y border-black">
                      <p className="">MONTHLY DEALS</p>
                    </div>
                    <FlexWrapContainer>
                      {weeklyDeals.map((deal, index) => (
                        <FlexWrapCard
                          className="w-[30ch] flex flex-col p-6"
                          cardClassName="border-none hover:shadow-md hover:shadow-app_accent-900"
                          key={index}
                          image={deal.images[0]}
                        >
                          <h5 className="text-lg font-bold leading-5 tracking-tight text-black bg-white h-full w-full border-none dark:text-white">
                            <div>{deal.name}</div>
                          </h5>
                          <div className="flex-col w-full text-black text-md">
                            <div className="flex justify-between">
                              <div className="flex whitespace-pre gap-1">
                                <div className="line-through">
                                  ${deal.price}
                                </div>
                                <div className="text-red-500">
                                  $
                                  {(deal.price * (1 - deal.discount)).toFixed(
                                    2
                                  )}
                                </div>
                              </div>
                              <div>{deal.discount * 100}% Off</div>
                            </div>
                          </div>
                          <div className="flex items-end justify-center h-full">
                            <Button
                              onClick={() =>
                                console.log(deal.name + " clicked.")
                              }
                              className="bg-app_accent-900 w-full"
                              size="xs"
                            >
                              Purchase
                            </Button>
                          </div>
                        </FlexWrapCard>
                      ))}
                    </FlexWrapContainer>
                  </div>
                </MaterialCarousel>
              </div>
            </div>
          </div>
          <div className="flex w-full h-fit text-black justify-evenly my-16">
            <div
              className="relative flex justify-center items-center h-[600px] w-2/5 max-w-[450px] hover:cursor-pointer"
              onClick={() => {
                console.log("Gentlewomen's clicked.");
              }}
            >
              <NoisyImage
                className="absolute top-0 left-0 h-full w-full"
                href={womensImage}
                alt="Womens Fashion Apparel"
              />

              <div className="text-white text-4xl z-10">Gentlewomens</div>
            </div>
            <div
              className="relative flex justify-center items-center h-[600px] w-2/5 max-w-[450px] hover:cursor-pointer"
              onClick={() => {
                console.log("Gentlemen's clicked.");
              }}
            >
              <NoisyImage
                className="absolute top-0 left-0 h-full w-full"
                href={mensImage}
                alt="Mens Fashion Apparel"
              />
              <div className="text-white text-4xl z-10">Gentlemens</div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div
              ref={mainOuterRef}
              className={`flex w-full h-[450px] text-black items-center justify-evenly bg-gray-400 border-y-2 pl-10 border-app_accent-900 mt-6 mb-16 transition-all duration-150 ease-in`}
            >
              <div
                className={`opacity-${opacity} ${main_outer}-1 flex w-full h-4/5 justify-center items-center bg-app_accent-900 p-6`}
              >
                <div
                  className={`${main_outer}-2 flex w-full h-full bg-gray-600 p-8 items-center justify-center text-center`}
                >
                  <div
                    className={`${main_outer}-3 flex w-full h-full bg-gray-400 p-8 items-center justify-center text-center`}
                  >
                    <div
                      className={`${main_outer}-4 flex w-full h-full bg-gray-200 p-8 items-center justify-center text-center`}
                    >
                      <div
                        className={`${main_outer}-5 flex w-full h-full bg-gray-100 items-center justify-center text-center`}
                      >
                        <div
                          className={`${main_outer}-6 flex flex-wrap w-full h-fit py-2 bg-white items-center justify-evenly`}
                        >
                          <div className="main-inner-text-1 text-4xl">
                            THINGS
                          </div>
                          <div className="main-inner-text-2 text-4xl">JUST</div>
                          <div className="main-inner-text-3 text-4xl">IN</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`hidden sm:inline-block ${carousel_transition} flex w-full min-w-[250px] max-w-[50%] px-8 h-full`}
              >
                <Carousel
                  pauseOnHover={true}
                  leftControl=" "
                  rightControl=" "
                  color="red"
                  className="main_carousel"
                >
                  {new_product_array}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
