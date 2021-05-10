import React from 'react';
import '../css/style.css';
export default function Production(props) {

    return (
        <div class="container">
            <div class="filter">
                <h2>Filter</h2>
                <form>
                    <label>
                        Aantal uren
                        <input type="text" />
                    </label>
                    <label>
                        Tijdstip
                        <input type="text" />
                    </label>
                    <label>
                        Voorspelling
                        <input type="checkbox" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div class="energyContainer">
                <h1>Energy production</h1>
                <p>Welcome</p>
            </div>
        </div>
    )
}