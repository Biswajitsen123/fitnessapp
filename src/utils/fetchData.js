export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'process.env.REACT_APP_RAPID_API_KEY',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3699c03e87msh1b2332d409b7631p109842jsn851f405c0181',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
