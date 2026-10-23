import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./movies";
const Read = () => {
   // Stores the movie data in an array using useState
  const [movies, setMovies] = useState([]);

   // Runs when the page loads to get the movie data
  useEffect(
    ()=>{
       // Axios gets the movie information from the URL
    axios.get('https://data-rep-mern-application.github.io/dataserver/movies.json')
      .then((response) => {
        // Prints the movie data in the console
        console.log(response.data.myArray);
        // Updates the movies array with the data received
        setMovies(response.data.myArray);
      })
         // Displays an error if the request fails
      .catch((error) => { console.log(error); });
  }, []
);

   // Another useEffect that is currently empty
  useEffect(
    ()=>{

    }
  )

  return (
      {/* Displays the heading for the Read page */}
    <div>
      <h2>This is my Read Component.</h2>
       {/* Passes the movie data to the Movies component to display */}
      <Movies movies={movies} />
    </div>
  );
}
// Exports the component so it can be used elsewhere
export default Read;
