import React, { useState, useEffect } from 'react';
import './LicensePlate.css';
import { Currency, LicensePlateData } from '../license-plate-data.type';

interface LicensePlateProps {
  plate: LicensePlateData; // Match the type here with LicensePlateData
  currency: Currency;
  buttonText: string;
  onButtonClicked: (plate: LicensePlateData) => void;  // Correct prop type
}

const CURRENCIES = { EUR: "€", USD: "$", GBP: "£" };

export function LicensePlate(props: LicensePlateProps): JSX.Element {
  const { plate, buttonText, currency, onButtonClicked } = props;
  const [exchangeRates, setExchangeRates] = useState<{ [key in Currency]: number }>({
    EUR: 1,
    GBP: 1,
    USD: 1,
  });
  const [convertedPrice, setConvertedPrice] = useState<number>(plate.price);

  useEffect(() => {
    fetch('http://localhost:8000/rates')
      .then(response => response.json())
      .then(data => setExchangeRates(data))
      .catch(error => console.error("Error fetching exchange rates:", error));
  }, []);

  useEffect(() => {
    setConvertedPrice(plate.price * exchangeRates[currency]);
  }, [currency, exchangeRates, plate.price]);

  const buttonClicked = () => {
    onButtonClicked(plate);  // Call the handler with the plate data
  };

  return (
    <>
      <h2>
        {plate.title}
        {plate.onSale && <img src={process.env.PUBLIC_URL + "sale.png"} alt="On Sale" />}
      </h2>
      <img src={plate.picture} className="img-fluid" alt={plate.title} />
      <p>{plate.description}</p>
      <div>
        <h2 className="float-left">
          {CURRENCIES[currency]} {convertedPrice.toFixed(2)}
        </h2>
        <button
          className="btn btn-primary float-right"
          role="button"
          onClick={buttonClicked}  // Use the buttonClicked handler here
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
