import React from 'react';

function FirstName() {
    return (
        <div>
            <h2>Clothes Business</h2>
            <div>
                <h2>Product 1</h2>
                <img src="product1.jpeg" alt="Product 1" />
                <p>Price: $30</p>
                <p>Description: A beautiful summer dress.</p>
            </div>
            <div>
                <h2>Product 2</h2>
                <img src="product2.jpg" alt="Product 2" />
                <p>Price: $25</p>
                <p>Description: Stylish T-shirt.</p>
            </div>
            {/* Add more products as needed */}
        </div>
    );
};

export default FirstName;
