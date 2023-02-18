import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Accordion = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <label>
          <span className="p-3"> Name: </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Add your Name"
          />
        </label>
      </form>

      <Button className="me-2" variant="success">
        Add Name
      </Button>

      <Button className="me-2" variant="success">
        Predict
      </Button>
    </div>
  );
};

export default Accordion;
