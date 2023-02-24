import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
   const { data } = await axios.get((url), {
      headers: {
         'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
         'X-RapidAPI-Key': '06935d1ae0msh3a14add54ef08f0p1cba0fjsn7a53bb0bbdcc',
      }
   });

   return data;
}