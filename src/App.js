import React, { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

const fiveContacts = contactsJSON.slice(0, 10);

// "name": "Idris Elba",
// "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
// "popularity": 11.622713,
// "id": "11731993-0604-4bee-80d5-67ad845d0a38",
// "wonOscar": false,
// "wonEmmy": false

function App() {
  const [contacts, setContacts] = useState(fiveContacts);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>IronContacts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won Oscar</td>
            <td>Won Emmy</td>
          </tr>
          {contacts.map((oneContact) => (
            <tr>
              <td>
                <img src={oneContact.pictureUrl} alt="some cool people" />
              </td>
              <td>{oneContact.name}</td>
              <td>{oneContact.popularity}</td>
              {oneContact.wonOscar === true ? <td>🏆</td> : <td></td>}
              {oneContact.wonEmmy === true ? <td>🏆</td> : <td></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
