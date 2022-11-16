# Sitemap for blogger

## Reference link

Reference link https://developers.google.com/blogger/docs/3.0/using

## API details

const url =
"https://www.googleapis.com/blogger/v3/blogs/blogId/posts?key=your key";

const blog =
"https://www.googleapis.com/blogger/v3/blogs/blogId?key=your key";

_First link is used for posts and second link is used for getting the total number of posts in your blogger_

> Replace blogId with your **blogger Id**. You can find your blogger id by opening your blogger website and right click and view source and search for blog id.

> Generate an **api key** and put it in the key area. Use the reference link to generate your api key. Also customise your api key by going to https://console.cloud.google.com/ and make **restrict the key only for blogger** in api settings of the created application.

#### You can also use

> const blog =
> "https://www.googleapis.com/blogger/v3/blogs/byurl?url=yourbloggerwebsiteurl&key=your key";

## Program

**maxResults function expression** is used for finding the total number of posts in your blogger website.

**fetchData function** is used to get the posts in json format and select only **items**, we add the **maxResults to the url of fetch** and pass the items to **arrange function**

In arrange function, we use value for storing **title and url** and result which is a object for storing **the label and its posts**.

#### format for our result is

```
   result = {
     "Blog Tips": [
       { title: "1", url: "1" },
       { title: "2", url: "2" },
     ],
     Technology: [
       { title: "1", url: "1" },
     ],
   };

```

We traverse each item and add the label to the result as key and value as title and url. If the label is already present means then **add the previous value of the key with the current value**

Finally the result is passed **to the displayContent function**.

In this function, the result object is changed to array and stored in newResult.
**Key and value pairs are stored as array**. Value is **an array**. So traversing the newResult and storing the key in **key variable** and again traversing the value.

**Fetching title, url and put it in li by traversing the value.** The li is stored in list variable and after traversing one item, the **article html format** returned to the variable of **finalResult**.

After traversing all things. The finalResult is added to the container.

#### This is an reference that if you didn't use maxResults in fetchData then we can get only 10 results of our recent posts. So by using the nextPageToken we can do pagination.

```
async ()=>{
 const response = await fetch(url);
 const data = await response.json();
 const nextPage = data.nextPageToken;

 const response1 = await fetch(`${url}&pageToken=${nextPage}`);
 const data1 = await response1.json();

 console.log(data,data1);
 }
```
