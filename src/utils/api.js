export const fetchAllData = async (url) => {
    let apiUrl = `${import.meta.env.VITE_APP_BASE_API_URL}${url}`
    let response = await fetch(apiUrl, {
        method: 'GET'
    });
    return response;
}