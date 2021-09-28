import React from 'react';
const Header = () => {

    const onClick = () => {
        console.log('i am clicked');
    }
    return (
        <div>
            <header className="header">
                <h1>Task Tracker</h1>
                <button onClick={onClick} className="btn" style={{ backgroundColor: 'green' }}>Add</button>
            </header>
        </div>
    );
}

export default Header;