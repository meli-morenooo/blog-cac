window.onload = function() {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const blogPostsContainer = document.getElementById('blog-posts');

            posts.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.className = 'blog-post';
                postElement.innerHTML = `
                    <img src="https://picsum.photos/id/${index}/800/300" alt="${post.title}">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;

                blogPostsContainer.appendChild(postElement);
            });
        });
}

