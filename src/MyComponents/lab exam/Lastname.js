import React from 'react';

function LastName () {
    return (
        <div>
            <h1>Summer Activities</h1>
            <div>
                <h2>Activity 1</h2>
                <img src="activity1.jpg" alt="Activity 1" />
                <p>Description: Planning a beach trip.</p>
            </div>
            <div>
                <h2>Activity 2</h2>
                <img src="activity2.jpg" alt="Activity 2" />
                <p>Description: Hiking in the mountains.</p>
            </div>
            {/* Add more activities as needed */}
        </div>
    );
};

export default LastName;
