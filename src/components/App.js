import React from 'react';
import ModalComponent from './ModalComponent';

const App = (props) => {
    return (
        <div>
            <div className="container">
                {props.children}
            </div>
            <ModalComponent/>
        </div>
    );
};

export default App;