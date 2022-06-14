import React, { useState } from "react";
import "./App.css";
import contactsJSON from "./contacts.json";

const allContacts = JSON.parse(JSON.stringify(contactsJSON));

const fiveContacts = allContacts.slice(0, 5);
// const restContacts = allContacts.slice(5);

// "name": "Idris Elba",
// "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
// "popularity": 11.622713,
// "id": "11731993-0604-4bee-80d5-67ad845d0a38",
// "wonOscar": false,
// "wonEmmy": false

function App() {
  const [contacts, setContacts] = useState(fiveContacts);
  // const [theRest, setRest] = useState(restContacts);
  const handleRandom = () => {
    let filterArray = contactsJSON.filter(
      (celebrity) => !contacts.find(({ id }) => celebrity.id === id)
    );
    const randomContact =
      filterArray[Math.round(Math.random() * filterArray.length)];
    setContacts([...contacts, randomContact]);
  };

  return (
    <div className="App">
      <div className="buttons">
        {contacts.length > 0 && (
          <button
            type="button"
            onClick={handleRandom}

            // () => {
            // console.log("remaining contacts: ", theRest.length);
            // const randomContact =
            //   theRest[Math.round(Math.random() * theRest.length)];

            // const newRest = JSON.parse(JSON.stringify(theRest));
            // console.log(randomContact.name);
            // const newFiltered = newRest.filter(
            //   (toFilter) => toFilter.name !== randomContact.name
            // );

            // const newContacts = JSON.parse(JSON.stringify(contacts));
            // newContacts.push(randomContact);

            // setRest(newFiltered);
            // setContacts(newContacts);
            // }}
          >
            Add Random Contact
          </button>
        )}

        <button
          type="button"
          onClick={() => {
            const newContacts = JSON.parse(JSON.stringify(contacts));
            newContacts.sort((first, second) =>
              first.name.localeCompare(second.name)
            );
            setContacts(newContacts);
          }}
        >
          Sort By Name
        </button>

        <button
          type="button"
          onClick={() => {
            const newContacts = JSON.parse(JSON.stringify(contacts));
            newContacts.sort(
              (first, second) => second.popularity - first.popularity
            );
            setContacts(newContacts);
          }}
        >
          Sort By Popularity
        </button>
      </div>
      <table cellSpacing="0">
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
            <td>Actions</td>
          </tr>
          {contacts.map((oneContact) => (
            <tr>
              <td>
                <img src={oneContact.pictureUrl} alt="some cool people" />
              </td>
              <td>{oneContact.name}</td>
              <td>{oneContact.popularity.toPrecision(4)}</td>
              {oneContact.wonOscar ? <td>🏆</td> : <td></td>}
              {oneContact.wonEmmy ? <td>🏆</td> : <td></td>}
              <td>
                <button
                  type="button"
                  onClick={() => {
                    const newContacts = JSON.parse(JSON.stringify(contacts));
                    console.log(oneContact.id, oneContact.name);
                    const filteredArray = newContacts.filter(
                      (toFilter) => toFilter.id !== oneContact.id
                    );
                    setContacts(filteredArray);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
