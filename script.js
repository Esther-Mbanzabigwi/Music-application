function getChannelVideos() {
    const apiKey = 'AIzaSyDUiqXdXghTDBwmfgUJyUKbCm2dg3ndrIE';
    const searchQuery = encodeURIComponent(document.getElementById('search-input').value);
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&type=video&key=${apiKey}`;


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const youtubeDataElement = document.getElementById('results-container');
            if (data.error) {
                youtubeDataElement.innerHTML = `<p>Error: ${data.error.message}</p>`;
            } else {
                const videos = data.items;
                youtubeDataElement.innerHTML = '<h2>Search Results</h2>';
                videos.forEach(video => {
                    youtubeDataElement.innerHTML += `<p>${video.snippet.title}</p>`;
                });
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}
