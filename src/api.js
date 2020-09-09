import { NEWS_API_KEY } from './config';


export const getNewsArticles = async () => {
      const response = await fetch(
      `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${NEWS_API_KEY}`
    );
    const json = await response.json();
    return json;
};

export const getTopicArticles = async topic => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
	);
	const json = await response.json();
	return json;
};