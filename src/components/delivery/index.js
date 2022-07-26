import React from 'react';
import { restaurants } from '../../data/restaurants';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import './delivery.css';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';


const deliveryFilers = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: 'Filters'
  },
  {
    id: 2,
    title: 'Rating: 4.0+'
  },
  {
    id: 3,
    title: 'Safe and Hygienic'
  },
  {
    id: 4,
    title: 'Pure Veg'
  },
  {
    id: 5,
    title: 'Filters',
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: 'Great Offers'
  },
];


const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilers} />
      </div>
      <DeliveryCollections />
      <TopBrands className="top-brands"/>
      <ExploreSection 
        list={restaurantList} 
        collectionName='Delivery Restaurants in Bangalore' 
      />
    </div>
  );
};

export default Delivery;