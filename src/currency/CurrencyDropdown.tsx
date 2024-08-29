import React, { useState } from 'react';
import './CurrencyDropdown.css';
import { Currency } from "../license-plate-data.type";

export interface CurrencyDropdownProps {
    currency: Currency;
    onCurrencyChange: (newCurrency: Currency) => void;
}

export function CurrencyDropdown(props: CurrencyDropdownProps) {
    const [showItems, setShowItems] = useState(false);

    return (
        <div className="btn-group margin10">
            <button type="button" onClick={() => setShowItems(!showItems)}
                className="btn btn-info dropdown-toggle" data-toggle="dropdown">
                {props.currency}
            </button>
            <div className={showItems ? "dropdown-menu show" : "dropdown-menu"}>
                <button className="dropdown-item" onClick={() => {
                    setShowItems(false);
                    props.onCurrencyChange('USD');
                }}>
                    USD ($)
                </button>
                <button className="dropdown-item" onClick={() => {
                    setShowItems(false);
                    props.onCurrencyChange('EUR');
                }}>
                    EUR (€)
                </button>
                <button className="dropdown-item" onClick={() => {
                    setShowItems(false);
                    props.onCurrencyChange('GBP');
                }}>
                    GBP (£)
                </button>
            </div>
        </div>
    );
}
