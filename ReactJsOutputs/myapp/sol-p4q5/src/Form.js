import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    isNewsletter: true,
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, type, value, checked } = event.target;
    setFormData((prevState) => {
      return { ...prevState, [name]: type === "checkbox" ? checked : value };
    });
    console.log(formData);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up");
      if (formData.isNewsletter) {
        console.log("Thanks for signing up for our newsletter");
      }
    } else {
      console.log("Passwords do not match");
    }
  };

  return (
    <main>
      <form>
        <input
          name="email"
          type="text"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div className="checkbox">
          <label htmlFor="isNewsletter">
            <input
              id="isNewsletter"
              name="isNewsletter"
              type="checkbox"
              checked={formData.isNewsletter}
              onChange={handleChange}
            />
            I want to join the newsletter
          </label>
        </div>
        <button onClick={handleSignUp}>Sign up</button>
      </form>
    </main>
  );
}
