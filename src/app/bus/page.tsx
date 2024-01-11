import { Metadata } from "next"
import Image from "next/image";
import React from 'react';

export const metadata: Metadata = {
  title: {
    absolute: "Bus Available"

  },
}




const busesData = [
  {
    id: 1,
    name: 'Bus A',
    image: '/bus1.jpg',
    timing: '10:00 AM',
    price: '$20',
  },
  {
    id: 2,
    name: 'Bus B',
    image: '/bus4.jpg',
    timing: '11:30 AM',
    price: '$25',
  },

  {
    id: 3,
    name: 'Bus c',
    image: '/bus3.jpg',
    timing: '11:30 AM',
    price: '$25',
  },

  {
    id: 4,
    name: 'Bus D',
    image: '/bus2.jpg',
    timing: '11:30 AM',
    price: '$25',
  },

];

const Home = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-6">Available Buses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {busesData.map((bus) => (
          <div key={bus.id} className="bg-white p-4 rounded shadow">
            <Image
              src={bus.image}
              alt={bus.name}
              width={240}
              height={240}
              className="mb-4 w-full h-40 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{bus.name}</h2>
            <p className="text-gray-600 mb-2">Timing: {bus.timing}</p>
            <p className="text-green-600 font-semibold">Price: {bus.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
