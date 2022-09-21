import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
  });

  const hadleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
    console.log(formData);
  };

  return (
    <form>
      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        onChange={hadleChange}
        value={formData.firstName}
      />
      <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        onChange={hadleChange}
        value={formData.lastName}
      />
      <input
        name="email"
        type="text"
        placeholder="Email"
        onChange={hadleChange}
        value={formData.email}
      />
      <textarea
        name="comments"
        placeholder="Comments.."
        value={formData.comments}
        onChange={hadleChange}
      />
      <div className="checkbox">
        <input
          id="isFriendly"
          name="isFriendly"
          type="checkbox"
          onChange={hadleChange}
          value={formData.isFriendly}
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
      </div>
    </form>
  );
}
