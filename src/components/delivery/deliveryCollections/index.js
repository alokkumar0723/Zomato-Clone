import React from 'react';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import DeliveryItem from '../deliveryItem';
import './deliveryCollections.css';
import Slider from 'react-slick';


const deliveryItems = [
    {
        id: 1,
        title: 'Pizza',
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id: 2,
        title: 'Burger',
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id: 3,
        title: 'Home Style',
        cover: "https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png"
    },
    {
        id: 4,
        title: 'Manchurian',
        cover: "https://b.zmtcdn.com/data/o2_assets/2e6d86cd3b90906845c02b3eabf7bc141632716603.png"
    },
    {
        id: 5,
        title: 'Biryani',
        cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id: 6,
        title: 'Chaat',
        cover: "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
    },
    {
        id: 7,
        title: 'Dosa',
        cover: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
    {
        id: 8,
        title: 'Fries',
        cover: "https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png"
    },
    {
        id: 9,
        title: 'Chicken',
        cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id: 10,
        title: 'Paratha',
        cover: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
    },
    {
        id: 11,
        title: 'Shake',
        cover: "https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png"
    }
];


const settings = {
    infinite: false,
    slidesToShow: 4,
    slideToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
};




const DeliveryCollections = () => {
  return (
    <div className="delivery-collections">
        <div className="max-width">
            <div className="collection-title">Eat what makes you happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item) => {
                    return <DeliveryItem item={item} />;
                })}
            </Slider>
        </div>
    </div>
  );
};

export default DeliveryCollections;


// return <TopBrands brand={brand} />;


// (
//     <div>
//         <div className="top-brands-cover">
//             <img 
//                 src={brand.cover} 
//                 className="top-brands-image" 
                
//                 alt={brand.time} 
//             />
//         </div>
//     </div>
// );