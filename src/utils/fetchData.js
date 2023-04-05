export const exercisesOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5417c92d6bmsh28edebd58bdfd0fp107eecjsn0d90f07f042e',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

// process.env.REACT_APP_RAPID_API_KEY