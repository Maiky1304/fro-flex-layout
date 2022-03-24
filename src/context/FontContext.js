import {createContext, useContext, useState} from "react";

const FontContext = createContext(1)

function FontProvider({ children }) {
    const [fontSize, setFontSize] = useState(1);

    return (
        <FontContext.Provider value={[fontSize, setFontSize]}>
            <div style={{ fontSize: `${fontSize}rem` }}>
                {children}
            </div>
        </FontContext.Provider>
    )
}

function useFont() {
    return useContext(FontContext)
}

export { FontProvider, useFont }