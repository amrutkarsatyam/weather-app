const API_KEY = 'AG3K6XREPRFJNRBQ9G56WVWHA';

export const getWeatherData = async (city) => {
  const res = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`
  );
  return res.json();
};
