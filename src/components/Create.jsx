import { useState } from "react";

function Create() {
   // Stores the details entered for the movie 
const [title, setTitle] = useState('');
const [year, setYear] = useState('');
const [poster, setPoster] = useState('');

 // Runs when the form is submitted
  const handleSubmit = (e) => {
       // Stops the page from refreshing
    e.preventDefault();
     // Prints the movie details to the console
    console.log(title,year,poster);
  }

  return (
    <div>
      <h2>This is my Create Component.</h2>
      {/* Form for adding a new movie */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            // Updates the title as the user types
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
{/* Input for the year the movie was released */}
          <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            // Saves the year entered by the user
            onChange={(e) => { setYear(e.target.value) }}
          />
        </div>

          <div className="form-group">
          <label>Add Movie Poster: </label>
          <input type="text"
            className="form-control"
            value={poster}
               // Updates the poster value
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>
           {/* Button to submit the movie details */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create;
