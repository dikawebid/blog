(function() {
    function displaySearchResults(results, store) {
        var searchResults = document.getElementById('search-results');

        if (results.length) { // Are there any results?
            var appendString = '';

            for (var i = 0; i < results.length; i++) {  // Iterate over the results
                var item = store[results[i].ref];

                appendString += '<div class="blog-grid-item mt-10">';
                appendString +=     '<div class="card h-100">';
                appendString +=     '    <div class="maxthumb">';
                appendString +=     '        <a href="' + item.url + '">';
                appendString +=     '            ';
                appendString +=     '        </a>';
                appendString +=     '    </div>';
                appendString +=     '    <div class="card-body">';
                appendString +=     '        <h2 class="card-title">';
                appendString +=     '            <a class="text-dark" href="' + item.url + '">' + item.title + '</a>';
                appendString +=     '            ';
                appendString +=     '        </h2>';
                appendString +=     '        <h4 class="card-text">';
                appendString += item.content.substring(0, 150)
                appendString += '</h4>';
                appendString +=     '    </div>';
                appendString +=     '    <div class="card-footer bg-white">';
                appendString +=     '        <div class="wrapfooter">';
                appendString +=     '            ';
                appendString +=     '            <span class="meta-footer-thumb">';
                appendString +=     '            ';
                appendString +=     '            <img class="author-thumb" src="https://www.gravatar.com/avatar/8c2ef75f6fd262a0d4002961a9436e0f?s=250&amp;d=mm&amp;r=x" alt="Dika">';
                appendString +=     '';            
                appendString +=     '            </span>';
                appendString +=     '            <span class="author-meta">';
                appendString +=     '            <span class="post-name"><a target="_blank" href="https://dika.web.id/">Dika</a></span> ';
                appendString +=                 '';
                appendString +=     '            <span class="post-date">'+item.read+' - '+ item.date +'</span>';
                appendString +=     '            </span>';
                appendString +=     '            <div class="clearfix"></div>';
                appendString +=     '        </div>';
                appendString +=     '    </div>';
                appendString +=     '</div>';
                appendString += '</div>';
            }

            searchResults.innerHTML = appendString;
        } else {
            searchResults.innerHTML = '<li>No results found</li>';
        }
    }
  
    function getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split('&');
  
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
  
        if (pair[0] === variable) {
          return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        }
      }
    }
  
    var searchTerm = getQueryVariable('q');
  
    if (searchTerm) {
        document.getElementById('lunrsearch').setAttribute("value", searchTerm);

        var idx = lunr(function () {
            this.ref('id')
            this.field('id');
            this.field('title', { boost: 10 });
            this.field('author');
            this.field('category');
            this.field('content');
            this.field('date');
            this.field('read');

            for (var key in window.store) {
                this.add({
                    'id': key,
                    'title': window.store[key].title,
                    'author': window.store[key].author,
                    'category': window.store[key].category,
                    'content': window.store[key].content,
                    'date': window.store[key].date,
                    'read': window.store[key].read
                })
            }
            
        });

        var results = idx.search(searchTerm); // Get lunr to perform a search
        displaySearchResults(results, window.store); // We'll write this in the next section
        $("#keyword").html(searchTerm);
    }
  })();