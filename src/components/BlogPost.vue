<template>
	<div class="views">
		<article class="color-div-wrapper">
			<div class="moving-color-div col-div-blog-page"></div>
		</article>
		<section class="hero blog-page-wrapper is-fullwidth">
			<div class="hero-head is-vcentered">
        <div class="columns is-mobile">
					<div class="column
						is-offset-1-mobile is-10-mobile
						is-offset-2-tablet is-8-tablet
						is-offset-2-desktop is-8-desktop
						is-offset-3-widescreen is-6-widescreen">
						<div class="image-wrapper" v-bind:style="backgroundImage">
							<div class="color-filter"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="hero-body ">
				<div class="columns">
					<div class="column">
						<p class="headline blog-headline">{{ title }}</p>
						<a class="sub-title section-item-active blog-credit">Skrivet av {{ getAuthorName() }}, {{ dateFormat()}}</a>
					</div>
				</div>
				<div class="columns">
					<div class="column
					is-offset-1-mobile is-10-mobile
					is-offset-2-tablet is-8-tablet
					is-offset-2-desktop is-8-desktop
					is-offset-3-widescreen is-6-widescreen">
							<p class="sub-title blog-description">{{shortenDescription()}}</p>
					</div>
				</div>
				<div class="columns">
					<div class="column is-hidden-touch">
						<p class="sub-title blurb">{{tbc}} <a v-bind:href="link">{{blogurl}}</a></p>
					</div>
					<div class="column is-hidden-desktop">
						<p class="sub-title blurb">{{tbc}} <br><a v-bind:href="link"> <span>---></span></a></p>
					</div>
				</div>
				<div class="column is-hidden-desktop has-text-left">
					<div class="app-wrapper-footer">
						<img class="footer-icon-mobile" src="../assets/images/oh_logo.png" alt="">
					</div>
				</div>
			</div>
		</section>
	</div>
</template>


<script>
  export default {
    data: function() {
      return {
				rss: '',
        post: '',
        title: '',
        author: '',
        description: '',
        link: '',
        pubDate: '',
        image: '',
				blogurl: 'http://www.oddhill.se/blogg',
				tbc: 'Läs mer på',
      }
    },
    methods: {
			getAuthorName: function(){
				let str = this.author;
				let get = str.substring(str.lastIndexOf("(")+1,str.lastIndexOf(")"));
				return get;
			},
			dateFormat: function(){
				let value = this.pubDate;
				let months = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];
				let year = value.slice(0, 4);
				let monthNumber = value.slice(5, 7);
        monthNumber = monthNumber.replace('0', '');
				let getMonthName = months[monthNumber - 1];
				let day = value.slice(8, 10);
				let valueFormat = day + ' ' + getMonthName + ' ' + year;
				return valueFormat;
			},
			shortenDescription: function(){
				let str = this.description;
				return str.substring(0,338) + '...';
			},
      postItems: function(){
        this.$http.get('./src/assets/data/blog-posts.xml').then((response) => {
          this.rss = response.body;
          // Cut out the last blog post
          var start = this.rss.search('<item>');
          var end = this.rss.search('</item>')+7;
          this.post = this.rss.slice(start,end);

          // parse string to xml-doc";
          var parser = new DOMParser();
          var xml = parser.parseFromString(this.post, "text/xml");
          var obj = this.xmlToJson(xml);

          // Assign data
          this.title = obj.item.title['#text']
          this.author = obj.item.author['#text']
          this.description = obj.item.description['#text']
          this.link = obj.item.link['#text']
          this.image = obj.item.enclosure['@attributes'].url

          // Format the date to local
          var date = new Date(obj.item.pubDate['#text'])
          this.pubDate = date.toLocaleDateString();
        })
      },
      xmlToJson: function(xml){
        // Create the return object
        var obj = {};

        if (xml.nodeType == 1) { // element
          // do attributes
          if (xml.attributes.length > 0) {
          obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType == 3) { // text
          obj = xml.nodeValue;
        }

        // do children
        if (xml.hasChildNodes()) {
          for(var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof(obj[nodeName]) == "undefined") {
              obj[nodeName] = this.xmlToJson(item);
            } else {
              if (typeof(obj[nodeName].push) == "undefined") {
                var old = obj[nodeName];
                obj[nodeName] = [];
                obj[nodeName].push(old);
              }
              obj[nodeName].push(this.xmlToJson(item));
            }
          }
        }
        return obj;
      }
    },

		computed: {
			backgroundImage: function() {
				return {
					backgroundImage: 'url('+this.image+')',
				}
			}
		},
    created: function() {
      this.postItems();
    }
  }
</script>
