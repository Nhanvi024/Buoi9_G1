import { createContext, useEffect, useState } from "react";

const DataContext = createContext();
function DataProvider({ children }) {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        fetch('data/employees.json')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])

    let valueProvider = {
        employees,
        setEmployees
    }
    return (
        <DataContext.Provider value={valueProvider}>
            {children}
        </DataContext.Provider>
    )
}

export {
    DataContext,
    DataProvider
}