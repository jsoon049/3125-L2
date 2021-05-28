import React from "react";

export const Customer = () => {
  // State used to track user preferences
  const [state, setState] = React.useState({
    lactose: JSON.parse(sessionStorage.getItem("lactose")) || false,
    nuts: JSON.parse(sessionStorage.getItem("nuts")) || false,
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
    sessionStorage.setItem("lactose", JSON.stringify(state.lactose));
    sessionStorage.setItem("nuts", JSON.stringify(state.nuts));
    sessionStorage.setItem("organic", JSON.stringify(state.organic));
    alert("Saved Preferences!")
  };

  return (
    <div>
      <h1>Customer</h1>
      <div className="checkbox-wrapper">
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            defaultChecked={state.lactose}
            name="lactose"
          />{" "}
          Are you lactose-intolerant?
        </label>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            defaultChecked={state.nuts}
            name="nuts"
          />{" "}
          Do you have any nut allergies?
        </label>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            defaultChecked={state.organic}
            name="organic"
          />{" "}
          Do you have a preference for organic products?
        </label>
      </div>
      <button className="btn" onClick={sendUserInfo}>
        {" "}
        Save Preferences{" "}
      </button>
    </div>
  );
};
