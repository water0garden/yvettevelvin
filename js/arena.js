document.addEventListener("DOMContentLoaded", function (event) {
  var randomNum = Math.floor(Math.random() * 1000000) + 1  ;

  arenaDisplay = {

    fetch: function (slug, per, container) {
      var fetchURL = 'https://api.are.na/v2/channels/' + slug + '/?per=' + per + '&nocache=' + randomNum;
      // url (required), options (optional)
      fetch(fetchURL, {
        method: 'get'
      }).then(function (response) {
        var channel = response.json();
        var prom = Promise.resolve(channel).then(function (data) {
          // console.log(data);
          arenaDisplay.parseChannel(data, container);

        });
      }).catch(function (err) {
        console.log('fetch failed');
      });

    },

    parseChannel: function (data, container) {
      var channel = {};
      channel.title = data.title;
      channel.contents = data.contents.reverse();
      channel.url = 'https://are.na/' + data.user.slug + '/' + data.slug + '/';



      console.log(data);
      // console.log(channel);



      if (data.metadata !== null) {
        var channelDescription = data.metadata.description;
        var channelDescriptionKeywordCheck = channelDescription.toLowerCase();
        if ( channelDescriptionKeywordCheck.includes("text") ) {
          document.querySelector('body').setAttribute('data-template', 'text');
        };
      }

      channel.contents.forEach(function (entry) {
        // console.log(entry);
        if (entry.class === 'Image') {

          if (entry.source !== null) {
            var source = entry.source.url
          } else {
            var source = entry.image.original.url
          };


          var randomNum = Math.random() * 100;

            if (randomNum<55) {
              var size = 'small';
            }
            else if (randomNum<66) {
              var size = 'medium';
            }
            else if (randomNum<100) {
              var size = 'large';
            }
            // else if (randomNum<100) {
            //   var size = 'ornaments';
            // }


        //   var entryHTML = '<figure class="work ' + size + '">'
        //         + '<img src="' + entry.image.original.url + '">'
        //         + '<figcaption>'
        //           + entry.title + entry.description_html
        //         + '</figcaption>'
        //       + '</figure>';
        // }


          var entryHTML = '<figure class="work ' + size + '">'
                + '<img src="' + entry.image.original.url + '">'
                + '<div class="dropdown">'
                  +  '<div class="dropbtn">'
                    + entry.title
                  + '</div>'
                  + '<div class="dropdown-content">'
                  + entry.description_html
                  + '</div>'
                + '</div>'
              + '</figure>'
          }




        else if (entry.class === 'Link') {
          if (entry.title !== "") {
            var title = entry.title
          } else {
            var str = entry.source.url;
            var title = str.replace("https://", "");
            title = title.replace("http://", "");
            title = title.replace("/", "");

          };

          var entryHTML = '<div class="block -'
            + entry.class
            + '">'
            + '<a target="_blank" class="portal"'
            + 'href="'
            + entry.source.url
            + '">'
            + title
            + '</a>'
            + '</div>';
        }

        else if (entry.class === 'Media') {
          var entryHTML = '<article>'
              + '<figure>'
              + entry.embed.html
              + '<figcaption>'
              + '<a  target="_blank" '
              + 'href="'
              + entry.source.url
              + '">'
              + entry.title
              + '</a>'
              + '</figcaption>'
              + '</figure>'
            + '</article>';
        }

        else if (entry.class === 'Attachment') {
          if (entry.attachment.extension === "mp4") {
            var entryHTML = '<div class="block -'
              + entry.class
              + '">'
              + '<figure>'
              + '<video autoplay loop muted>'
              + '<source src="' + entry.attachment.url + '">'
              + '</video>'
              + '</figure>'
              + '<a target="_blank" '
              + 'href="'
              + entry.attachment.url
              + '">'
              + entry.title
              + '</a>'
              + '</div>';
          } else if (entry.attachment.extension === "pdf") {
            var entryHTML = '<figure>'
              + '<img src="' + entry.image.display.url + '">'
              + '</figure>';
          }

        }

        else if (entry.class === 'Text') {
          var entryHTML = '<article>'
          + '<div class="text-block">'
              + entry.content_html
            + '</div>'
          + '</article>';
        }

        else if (entry.class === 'Channel') {
          var str = entry.title;
          var split = str.split("");
          var wordhtml = '';
          for (let i = 0; i < split.length; i++) {
            wordhtml += '<span>' + split[i] + '</span>';
          };

          var entryHTML = '<article>'
            + '<p>'
            + '<a class="sparkle-portal" href="/i/index.php?id='
              + entry.slug
              + '">'
              + wordhtml
              + '</a>'
            +'</p>'
          + '</article>';
        }

        container.innerHTML += entryHTML;

        document.querySelector('body').setAttribute('data-state', 'ready');

      });
    }

  };

});
