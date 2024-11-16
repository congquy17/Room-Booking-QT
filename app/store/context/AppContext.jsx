import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [localtion, setLocaltion] = useState('');
    const [quantityCustomer, setQuantityCustomer] = useState('');
    const [dateStart, setDateStart] = useState('');

    return (
        <AppContext.Provider
            value={{ localtion, setLocaltion, quantityCustomer, setQuantityCustomer, dateStart, setDateStart }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
