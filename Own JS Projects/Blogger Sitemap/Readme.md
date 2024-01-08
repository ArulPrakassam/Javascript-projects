# Sitemap for blogger

## Reference link

Reference link https://developers.google.com/blogger/docs/3.0/using

## API details

```js
const blog = `https://www.googleapis.com/blogger/v3/blogs/${bloggerID}?key=${apiKey}`;

const posts = `https://www.googleapis.com/blogger/v3/blogs/${bloggerID}/posts?key=${apiKey}&fetchBodies=false&maxResults=${maxResults}`;
```

Blog is used for getting total count of blog posts. Posts link is used for getting the list of blog posts

Replace blogId with your **blogger Id**. You can find your blogger id by opening your blogger website and right click and view source and search for blog id.

Generate your **api key** and put it in the apiKey area. Create your apiKey by going to https://console.cloud.google.com/. Also customise your apiKey and make **restrict the key only for blogger** in api settings of the created application.

#### You can also use

```js
const blog =
  "https://www.googleapis.com/blogger/v3/blogs/byurl?url=yourBloggerWebsiteUrl&key=your-key";
```
