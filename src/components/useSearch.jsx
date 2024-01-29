import {useState, useEffect} from 'react';

function useSearch() {
    
    const [features, setFeatures] = useState([]); //

    const search = async (q) => { //FIXME SEARCH IS NOT FORMATTING INTO JSON
        const response = await fetch(
            // 'http://localhost:2999?' + new URLSearchParams({ q })
            'https://www.server.neuroscope.app/?' + new URLSearchParams({ q }) //URLSearchParams function is built into the browser and formats the string into q=___userinput___
        );
        const data = await response.json(); //convert the response into JSON
        ////// console.log('Response: ', data);
        setFeatures(data);

        // localStorage.setItem('lastQuery', q); //stores the user's last query into their browser cache under the variable name lastQuery
    };

    useEffect(() => {
        // const lastQuery = localStorage.getItem('lastQuery'); //built in browser API to get user's last query
        // search(lastQuery);
        search('');
    }, []); //empty array is the dependency-- tells useEffect to run this function only when the component is first mounted

    return { search, features };
}

export default useSearch;