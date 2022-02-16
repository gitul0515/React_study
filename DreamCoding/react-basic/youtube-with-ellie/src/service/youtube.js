import axios from 'axios'

class Youtube {
  constructor(httpClients) {
    this.youtube = axios.create(httpClients);
  }

  async getSearchResults(query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 24,
        q: query,
        type: 'video'
      }
    });
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
  }

  async getMostPopulars() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 24,
      }
    })
    return response.data.items;
  }
}

export default Youtube;