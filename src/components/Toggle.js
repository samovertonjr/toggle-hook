// @flow
import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const activeButton = {
  free: "Free",
  paid: "Paid"
};

const Toggle = () => {
  const [isFree, setIsFree] = useState(false);
  const [price, setPrice] = useState(127);

  const active = isFree ? activeButton.free : activeButton.paid;
  console.log(active);
  console.log(price);

  const togglePriceSelect = event => {
    event.preventDefault();
    const priceValue = active === "Paid" ? price || 0 : 0;
    setPrice(priceValue);
    setIsFree(!isFree);
  };

  return (
    <>
      <Button.Group style={{ marginBottom: "20px" }}>
        <Button
          onClick={togglePriceSelect}
          active={active === activeButton.paid}
        >
          Paid
        </Button>
        <Button
          onClick={togglePriceSelect}
          active={active === activeButton.free}
        >
          Free
        </Button>
      </Button.Group>

      {isFree ? (
        <>
          <input name="price" type="hidden" />
          <p>FREE</p>
        </>
      ) : (
        <input
          style={{ display: "block" }}
          name="price"
          type="text"
          placeholder="price"
          value={price}
        />
      )}
    </>
  );
};

Toggle.displayName = "Toggle";

export default Toggle;
