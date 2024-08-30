import React, { useState, useEffect } from 'react';
import './App.css';
import { Navigation } from './navigation/Navigation';
import { StoreView } from './store-front/StoreView'; // Import StoreView component
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartView } from "./cart-view/CartView";
import { CheckoutView } from "./checkout-view/CheckoutView";
import { Currency, LicensePlateData } from './license-plate-data.type';
import { MapView } from './mapview/MapView';

export function App() {
    const [currency, setCurrency] = useState<Currency>('USD');
    const [licensePlates, setPlates] = useState<LicensePlateData[]>([]);
    const [exchangeRates, setExchangeRates] = useState<{ [key in Currency]: number }>({ USD: 1, EUR: 1, GBP: 1 });
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
    
        // Fetch the license plates data
        fetch('/platesData.json')
            .then(response => response.json())
            .then((data: LicensePlateData[]) => {
                setPlates(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
        
        // Fetch the exchange rates
        fetch('/rates.json')
            .then(response => response.json())
            .then(data => {
                console.log("Exchange rates fetched:", data); // Debugging line
                setExchangeRates(data);
            })
            .catch(error => {
                console.error("Error fetching exchange rates:", error);
                setExchangeRates({ USD: 1, EUR: 1, GBP: 1 }); // Fallback to default
            });
    
    }, []);
    

    return (
        <div className="App">
            <header className="App-header"></header>
            
            <BrowserRouter>
                <Navigation onCurrencyChange={setCurrency} currency={currency} />
                <main role="main">
                    <Routes>
                        <Route 
                            path="/" 
                            element={<StoreView 
                                currency={currency} 
                                licensePlates={licensePlates} 
                                exchangeRates={exchangeRates} 
                                loading={loading} 
                            />
                            } 
                        />
                        <Route path="/cart" element={<CartView currency={currency} />} />
                        <Route path="/checkout" element={<CheckoutView />} />
                        <Route path="/map" element={<MapView licensePlates={licensePlates} />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}
