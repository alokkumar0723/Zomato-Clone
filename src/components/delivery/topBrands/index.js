import React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import './topBrands.css';

const topBrandsList = [
    {
        id: 1,
        title: "Domino's Pizza",
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp"
    },
    {
        id: 2,
        title: "Meghana Foods",
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp"
    },
    {
        id: 3,
        title: "Pizza Hut",
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613210633.png?output-format=webp"
    },
    {
        id: 4,
        title: "McDonald's",
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp"
    },
    {
        id: 5,
        title: "Burger King",
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp"
    },
    {
        id: 6,
        title: "KFC",
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp"
    },
    {
        id: 7,
        title: "Leon Grill",
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/526e7511008f07f7d630549c7c5809b1_1638685733.png?output-format=webp"
    },
    {
        id: 8,
        title: "Donne Biryani House",
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/539d72f7e5ec3d70324b81ff844b9a4d_1616134185.png?output-format=webp"
    },
    {
        id: 9,
        title: "A2B - Adyar Ananda Bhavan",
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp"
    },
    {
        id: 10,
        title: "Empire Restaurant",
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp"
    }
];


const settings = {
    infinite: false,
    slidesToShow: 6,
    slideToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
        <div className="collection-title">Top Brands for you</div>
        <Slider {...settings}>
            {topBrandsList.map((brand) => {
                return (
                    <div>
                        <div className="top-brands-cover">
                            <img 
                                src={brand.cover} 
                                className="top-brands-image" 
                                alt={brand.time} 
                            />
                        </div>
                    </div>
                );
            })}
        </Slider>
    </div>
  );
};

export default TopBrands;