import React from "react";
import Contact from "./Components/Contact";

const CONTACT_DATA = [
  {
    imgPath: "./mr-whiskerson.png",
    contactName: "Mr. Whiskerson",
    phone: "(212) 555-1234",
    mail: "mr.whiskaz@catnap.meow",
  },
  {
    imgPath: "./fluffykins.png",
    contactName: "Fluffykins",
    phone: "(212) 555-2345",
    mail: "fluff@me.com",
  },
  {
    imgPath: "./felix.png",
    contactName: "Felix",
    phone: "(212) 555-4567",
    mail: "thecat@hotmail.com",
  },
  {
    imgPath: "./pumpkin.png",
    contactName: "Mr. Whiskerson",
    phone: "(0800) CAT KING",
    mail: "pumpkin@scrimba.com",
  },
];

function App() {
  return (
    <div className="contacts">
      {CONTACT_DATA.map((contact) => {
        const { imgPath, contactName, phone, mail } = contact;
        return (
          <Contact
            imgPath={imgPath}
            contactName={contactName}
            phone={phone}
            mail={mail}
          />
        );
      })}
    </div>
  );
}

export default App;
