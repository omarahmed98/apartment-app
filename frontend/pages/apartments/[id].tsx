// pages/apartments/[id].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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

const ApartmentDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [apartment, setApartment] = useState<Apartment | null>(null);

  useEffect(() => {
    if (id) {
      fetchApartmentDetails(id as string);
    }
  }, [id]);

  const fetchApartmentDetails = async (apartmentId: string) => {
    try {
      const response = await fetch(`http://localhost:3000/apartments/${apartmentId}`);
      const data = await response.json();
      setApartment(data);
    } catch (error) {
      console.error('Error fetching apartment details:', error);
    }
  };

  if (!apartment) {
    return <div>Loading...</div>;
  }

  return (
    <RootLayout>
          <div className="container mx-auto px-4 py-8">
              <div className="max-w-lg mx-auto">
                  <img src={apartment.image} alt={apartment.title} className="w-full h-auto mb-4" />
                  <h1 className="text-3xl font-bold mb-4">{apartment.title}</h1>
                  <p className="text-gray-700 mb-4 max-w-lg">{apartment.description}</p>
                  <p className="text-gray-900 font-bold mb-4">Price : ${apartment.price}</p>
                  <p className="text-sm text-gray-500">Posted at: {apartment.createdAt}</p>
              </div>
          </div>
    </RootLayout>
  );
};

export default ApartmentDetailsPage;
