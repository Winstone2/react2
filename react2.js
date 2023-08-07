import React, { useState, useEffect } from 'react';

function DataFetching() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data and update state
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []); // Empty dependency array means effect runs once after initial render

    return <div>{data ? data.message : 'Loading...'}</div>;
}

export default DataFetching;
