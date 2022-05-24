import React, { useEffect, useState } from 'react';

const useTool = (id) => {

    const [part, setPart] = useState([]);
    useEffect(() => {

        const url = `http://localhost:5000/tools/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setPart(data))
    }, [part])
    return { part, setPart }
};

export default useTool;