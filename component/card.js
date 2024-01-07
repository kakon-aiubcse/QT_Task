import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10');
        console.log('API Response:', response.data);
        setData(response.data && response.data.Items ? response.data.Items : []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <>
      <div>
        <nav className="flex items-center justify-between p-4 ml-40 mr-40">
          <p className="text-lg font-bold">Popular</p>
          <div className="flex items-center space-x-4">
            <button className="text-amber-500 bold px-2 py-1 rounded">AddMore</button>
            <button className="bg-gray-200 px-1 py-1 rounded hover:bg-gray-300 hover:font-bold" onClick={handlePrev}>&lt;</button>
            <button className="bg-gray-200 px-1 py-1 rounded hover:bg-gray-300 hover:font-bold" onClick={handleNext}>&gt;</button>
          </div>
        </nav>
      </div>
      <div className="flex flex-wrap justify-center mr-16 ml-16">
        {loading ? (
          <p>Loading...</p>
        ) : data.length > 0 ? (
          data.slice(currentIndex, currentIndex + 5).map((item) => (
            <div key={item.Id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                src={item.ImageUrl}
                alt={item.Name}
                className="w-52 h-60 object-cover"
              />
              <div className="px-6 py-4">
                <div className="text-gray-500 text-l mb-2 text-center">{item.Name}</div>
              </div>
            </div>
          ))
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </>
  );
};

export default Card;

