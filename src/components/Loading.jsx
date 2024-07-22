// Loading.js
import React from 'react';
import { PropagateLoader } from 'react-spinners';

function Loading() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <PropagateLoader color="#65981f" size={15} margin={2} />
        </div>
    );
}

export default Loading;
