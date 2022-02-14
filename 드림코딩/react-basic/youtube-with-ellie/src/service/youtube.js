class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  getSearchResults(query) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&key=${this.key}`, this.requestOptions)
    .then(response => response.json())
    .then(result => result.items.map(item => ({ ...item, id: item.id.videoId })))
  }

  getMostPopulars() {
    return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=${this.key}`, this.requestOptions)
    .then(response => response.json())
  }
}

export default Youtube;