// CardItem.tsx
import React from "react";

interface CardItemProps {
  data: HotelData;
}

interface HotelData {
  id: number;
  hotelName: string;
  rating: number;
  imageUrl: string;
  price: number;
  numRooms: number;
  hasWindow: boolean;
  numNights: number;
}

const CardItem: React.FC<CardItemProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4">
      <div className="flex">
        <img
          src={`src/images/A.jpg`}
          alt={data.hotelName}
          className="w-40 h-40 rounded-md mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{data.hotelName}</h2>
          <p className="text-gray-600">Rating: {data.rating}</p>
          <p className="text-gray-600">Price: ${data.price} per night</p>
          <p className="text-gray-600">Number of Rooms: {data.numRooms}</p>
          <p className="text-gray-600">
            Has Window: {data.hasWindow ? "Yes" : "No"}
            
          </p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold mt-2 py-1 px-2 rounded-full">Book</button>
        </div>
        
      </div>
    </div>
  );
};

export default CardItem;
