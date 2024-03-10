// pages/apartments/index.tsx

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import "../../app/globals.css";
import RootLayout from "../../app/layout"; 

interface Apartment {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const ApartmentsIndexPage = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = async () => {
    try {
      const response = await fetch('http://localhost:3000/apartments');
      const data = await response.json();
      setApartments(data);
    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };

  return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Find Your New Home</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apartments.map((apartment) => (
                <Link href={`/apartments/${apartment._id}`} key={apartment._id}>
                <img
                    src={apartment.image}
                    alt={apartment.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{apartment.title}</h2>
                    <h4  className="text-sm font-semibold text-gray-500">Price: {apartment.price}</h4>

                </div>
                </Link>
            ))}
            </div>
        </div>
  );
};

export default ApartmentsIndexPage;
