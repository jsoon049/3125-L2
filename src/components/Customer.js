import React from "react";
import "./Customer.css";

export const Customer = () => {
  // State used to track user preferences
  const [state, setState] = React.useState({
    lactose: JSON.parse(sessionStorage.getItem("lactoseFree")) || false,
    nuts: JSON.parse(sessionStorage.getItem("nutFree")) || false,
    organic: JSON.parse(sessionStorage.getItem("organic")) || false,
  });

  // Event handler whenever a checbox is changed
  const handleChange = (evt) => {
    const value = evt.target.checked;
    setState({ ...state, [evt.target.name]: value });
    // console.log(data)
  };

  // Add user preferences to session storage
  const sendUserInfo = () => {
    sessionStorage.setItem("lactoseFree", JSON.stringify(state.lactose));
    sessionStorage.setItem("nutFree", JSON.stringify(state.nuts));
    sessionStorage.setItem("organic", JSON.stringify(state.organic));
    alert("Saved Preferences!");
  };

  return (
    <div>
      <h1 className="customerTitle">Customer Preferences</h1>
      <div className="customerContainer">
        <div className="checkbox-wrapper">
          <label>
            Would you like to see our lactose-free products?
            <input
              type="checkbox"
              onChange={handleChange}
              defaultChecked={state.lactose}
              name="lactose"
            />
          </label>
          <label>
            Would you like to see our nut-free products?
            <input
              type="checkbox"
              onChange={handleChange}
              defaultChecked={state.nuts}
              name="nuts"
            />
          </label>
          <label>
            Would you like to see our organic products?
            <input
              type="checkbox"
              onChange={handleChange}
              defaultChecked={state.organic}
              name="organic"
            />
          </label>
          <button className="btn" onClick={sendUserInfo}>
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};
