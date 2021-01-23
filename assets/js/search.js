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
                
                // appendString += '<div class="blog-grid-item">';
                // appendString += '   <div class="card">';
                // appendString += '       <div class="card-header post-header"><div class="">';
                // appendString += '           <span class="meta-footer-thumb">';
                // appendString += '               <a href="/about"><img class="author-thumb" src="https://www.gravatar.com/avatar/8c2ef75f6fd262a0d4002961a9436e0f?s=250&amp;d=mm&amp;r=x" alt="Ferdhika Yudira"></a>'

                // // appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
                // // appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';

                // appendString += '           </span>';
                // appendString += '           <span class="author-meta">';
                // appendString += '               <span class="post-name"><a href="/about">Ferdhika Yudira</a></span><br/>';
                // appendString += '               <span class="post-date">'+ item.date +'</span>';
                // appendString += '               <span class="dot"></span>';
                // appendString += '               <span class="post-read">';
                // appendString += '                   '+item.read;
                // appendString += '               </span>';
                // appendString += '           </span>';
                // appendString += '       </div></div>';
                // appendString += '       <div class="card-body">';
				// appendString += '       	<h2 class="card-title"><a href="'+item.url+'">' + item.title + '</a></h2>';
				// appendString += '       	<h4 class="card-text">';
				// appendString += '       		'+item.content;
				// appendString += '       	</h4>';
				// appendString += '       	<div class="metafooter">';
				// appendString += '       		<div class="wrapfooter">';
				// appendString += '       			<span class="post-read-more"><a href="'+item.url+'" title="Read Story"><svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></a></span>';
				// appendString += '       		</div>';
				// appendString += '       	</div>';
				// appendString += '       </div>';
                // appendString += '   </div>';
                // appendString += '</div>';
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