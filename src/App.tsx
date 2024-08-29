import React, { useState, useEffect } from 'react';
import './App.css';
import { Navigation } from './navigation/Navigation';
import { StoreView } from './store-front/StoreView'; // Import StoreView component
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartView } from "./cart-view/CartView";
import { CheckoutView } from "./checkout-view/CheckoutView";
import { Currency, LicensePlateData } from './license-plate-data.type';
import { MapView } from './mapview/MapView';

type LicensePlateType = {
    id: string;
    number: string;
    state: string;
    title: string;
    picture: string;
    description: string;
    price: number;
    onSale: boolean;
};

export function App() {
    const [currency, setCurrency] = useState<Currency>('USD');
    const [licensePlates, setPlates] = useState<LicensePlateData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8000/data')
            .then(response => response.json())
            .then((data: LicensePlateData[]) => {
                setPlates(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
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
                                loading={loading} 
                            />} 
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
