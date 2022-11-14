import React, { useState } from "react";
  
export const TasksContext = React.createContext();

export const TasksContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState();
  
    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    );
};