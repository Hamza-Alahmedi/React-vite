// App.tsx
import React, { useState } from "react";
import SearchSection from "./components/SearchSection";
import ResultSection from "./components/ResultSection";
import "./App.css";

const App: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<HotelData[]>([]);

  // Define your handleSearch function
  const handleSearch = (searchData: SearchData) => {
    const fetchedResults = fetchHotelResults(searchData);
    setSearchResults(fetchedResults);
    setShowResults(true);
  };

  return (
    <div className="bg-page">
      <SearchSection
        onSearchHandler={handleSearch}
        onSearchValidate={validateSearch}
      />
      {showResults && <ResultSection results={searchResults} />}
    </div>
  );
};

export default App;

// Add the necessary validation and fetchHotelResults functions
const validateSearch = (): boolean => {
  // Implement your validation logic
  // Return true if validation passes, false otherwise
  return true;
};

interface SearchData {
  // Define your search data structure
  // For example: country, city, dates, etc.
}

const fetchHotelResults = (searchData: SearchData): HotelData[] => {
  // For now, return some dummy data
  return [
    {
      id: 1,
      hotelName: "Hotel A",
      rating: 4.5,
      imageUrl: "./images/A.jpg",
      price: 120,
      numRooms: 2,
      hasWindow: true,
      numNights: 5,
    },
    {
      id: 2,
      hotelName: "Hotel B",
      rating: 4.2,
      imageUrl: "./images/B.jpg",
      price: 150,
      numRooms: 3,
      hasWindow: false,
      numNights: 4,
    },
    // Add more dummy data as needed
  ];
};

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
