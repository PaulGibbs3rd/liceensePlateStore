import React, { useState, useEffect } from 'react';
import './LicensePlate.css';
import { Currency, LicensePlateData } from '../license-plate-data.type';

interface LicensePlateProps {
  plate: LicensePlateData;
  currency: Currency;
  exchangeRates: { [key in Currency]: number };
  buttonText: string;
  onButtonClicked?: (plate: LicensePlateData) => void;  // Optional since it’s not always needed
}

const CURRENCIES = { EUR: "€", USD: "$", GBP: "£" };

export function LicensePlate(props: LicensePlateProps): JSX.Element {
  const { plate, buttonText, currency, exchangeRates, onButtonClicked } = props;
  const [convertedPrice, setConvertedPrice] = useState<number>(plate.price);

  useEffect(() => {
    if (exchangeRates && exchangeRates[currency]) {
        setConvertedPrice(plate.price * exchangeRates[currency]);
    } else {
        console.error("Invalid currency or exchangeRates", exchangeRates, currency);
        setConvertedPrice(plate.price); // Fallback to original price
    }
}, [currency, exchangeRates, plate.price]);


  const buttonClicked = () => {
    if (onButtonClicked) {
      onButtonClicked(plate);
    }
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
          {CURRENCIES[currency]} {!isNaN(convertedPrice) ? convertedPrice.toFixed(2) : 'N/A'}
        </h2>
        <button
          className="btn btn-primary float-right"
          role="button"
          onClick={buttonClicked}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}
