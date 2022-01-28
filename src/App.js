import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import './App.css';

const url = 'https://course-api.com/react-tours-project';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <React.Fragment>
      <div className="loading">
        <Loading />
      </div>
    </React.Fragment>
  }

  if (tours.length === 0) {
    return <React.Fragment>
      <main className="no-data">
        <div className="title">
          <h1>No Tours Left</h1>
          <div className="underline"></div>
          <button onClick={() => fetchData()}>Refresh Page</button>
        </div>
      </main>
    </React.Fragment>


  }

  return (
    <React.Fragment>
      <div>
        <Tours tours={tours} removeTours={removeTours} />
      </div>
    </React.Fragment>
  );



}

export default App;
