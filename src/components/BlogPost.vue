
<template>
  <div>
    <h1>{{ title }}</h1>
    <hr>
    <p>{{ description }}</p>
    <hr>
    <p>Author: {{ author }}</p>
    <hr>
    <p>Link: <a :href="link">{{ link }}</a></p>
    <hr>
    <p>Published: {{ pubDate }}</p>
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
        pubDate: ''
      }
    },
    methods: {
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
    created: function() {
      this.postItems();
    }
  }
</script>
<style>
  div {
    color: white;
  }
</style>