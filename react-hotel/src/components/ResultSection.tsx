// ResultSection.tsx
import React from "react";
import CardItem from "./CardItem";

interface ResultSectionProps {
  results: HotelData[];
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

const ResultSection: React.FC<ResultSectionProps> = ({ results }) => {
  return (
    <div className="mt-8">
      {results.map((result) => (
        <CardItem key={result.id} data={result} />
      ))}
    </div>
  );
};

export default ResultSection;
