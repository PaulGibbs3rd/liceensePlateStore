import React from 'react';
import { CurrencyDropdown } from '../currency/CurrencyDropdown';
import { Link } from "react-router-dom";
import { Currency } from '../license-plate-data.type';

interface NavigationProps {
    currency: Currency;
    onCurrencyChange: (newCurrency: Currency) => void;
}

export function Navigation({ currency, onCurrencyChange }: NavigationProps) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">License Plate Store</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">My cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/checkout" className="nav-link">Checkout</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/map" className="nav-link">Map</Link> {/* New Map Button */}
                    </li>
                </ul>

                <CurrencyDropdown 
                    onCurrencyChange={onCurrencyChange} 
                    currency={currency} 
                />

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}
