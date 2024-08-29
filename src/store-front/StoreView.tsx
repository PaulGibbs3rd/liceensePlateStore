import React, { useState } from 'react';
import { Currency, LicensePlateData } from "../license-plate-data.type";
import { Jumbotron } from '../jumbotron/Jumbotron';
import { LicensePlate } from '../license-plate/LicensePlate';
import { PromoBanner } from '../promo-banner/PromoBanner';
import { Spinner } from '../spinner/Spinner';
import { MapView } from '../mapview/MapView';
import { PopupWindow } from '../popup/PopupWindow';
import { useCart } from '../cart-service/cart-hook';

export interface StoreViewProps {
  currency: Currency;
  licensePlates: LicensePlateData[];  // Use LicensePlateData directly
  loading: boolean;
}

export function StoreView(props: StoreViewProps) {
  const { licensePlates, loading, currency } = props;
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [cart, addToCart] = useCart();

  const addPlateToCart = (plate: LicensePlateData) => {
    addToCart(plate).then(() => {
      setShowPopup(true);
    });
  };

  return (
    <main role="main">
      <Jumbotron title="Jumbo Title!" description="Look I'm on the big screen" />
      <PromoBanner />

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {loading ? (
              <Spinner />
            ) : (
              <div className="row">
                {licensePlates.map((licensePlate, index) => (
                  <div
                    key={`${licensePlate._id}-${licensePlate.state}-${index}`}  // Use _id instead of id
                    className="col-md-6 mb-4"
                  >
                    <LicensePlate
                      plate={licensePlate}
                      currency={currency}
                      buttonText="Add to cart"
                      onButtonClicked={() => addPlateToCart(licensePlate)}  // Ensure the prop is passed correctly
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col-md-4">
            <h4>Map View</h4>
            <div style={{ height: '500px', width: '100%', border: '1px solid #ccc' }}>
              <MapView licensePlates={licensePlates} />
            </div>
          </div>
        </div>
      </div>
      <PopupWindow 
        show={showPopup} 
        title="Plate added to cart" 
        onClose={() => setShowPopup(false)}
      >
        Thanks for shopping with us!
      </PopupWindow>
    </main>
  );
}
