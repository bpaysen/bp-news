import React from 'react';
import { getNewsArticles } from './api';
import ArticleList from './components/articlesList';
import { Container, Header } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    articles: [],
    apiError: "",
  };

  async componentDidMount() {
    try {
      const response = await getNewsArticles();
      this.setState({ articles: response.articles })
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }

  render() {
    const { articles, apiError } = this.state;
    return (
      <Container>
        <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
          Tech Articles
        </Header>
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could Not fetch any articles. Please try again.</p>}
      </Container>
    );
  }
}

export default App;
