import React, {useLayoutEffect, useState} from 'react';

const UseTheme = () => {

    const [darkTheme, setDarkTheme] = useState(true)
    useLayoutEffect(() => {
document.documentElement.setAttribute('data-dark-theme', darkTheme)
    }, [darkTheme])

    return (
        {darkTheme, setDarkTheme}
    );
};

export default UseTheme;