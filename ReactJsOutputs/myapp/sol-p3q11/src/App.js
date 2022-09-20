import React from "react";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "Mahesh",
    lastName: "Mote",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */

  function toggleFavorite() {
    setContact({ ...contact, isFavorite: !contact.isFavorite });
  }

  return (
    <main>
      <article className="card">
        <img src="./images/user.png" className="card--image" alt="" />
        <div className="card--info">
          <img
            src={
              contact.isFavorite
                ? `../images/star-filled.png`
                : `../images/star-empty.png`
            }
            className="card--favorite"
            onClick={toggleFavorite}
            alt=""
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
