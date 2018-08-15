export default function() {
  this.namespace = '/api';

  this.get('/articles', function() {
    return {
      data: [{
        type: 'articles',
        id: 'build-basic-api-part-one',
        attributes: {
          createdAt: '04/25/17',
          title: 'Build a basic API with Grape API & Grape-Entity Part 1',
          summerize: 'This is the first part of three in order to achieve to build a small API with Ruby On Rails , Grape API and Grape-Entity. This medium is dedicated to you if you are not still familiar with API. So, the main goal is to build a small API to manage a Book Store. We would like to get all the book, a specific book and his flows and also add a new flow to a specific book. Pretty simple, isn’t it ? Let’s start with our first part by building an API to return all Books.',
          image: 'https://cdn-images-1.medium.com/max/1600/1*MhHldOckM7Mwbcpsl6OP6Q.jpeg',

          link: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
        }
      }, {
        type: 'articles',
        id: 'build-basic-api-part-two',
        attributes: {
          createdAt: '05/02/17',
          title: 'Build a basic API with Grape API & Grape-Entity Part 2',
          summerize: 'In Part 1 we started to build a small API to manage book stock. Currently we have two models, book and flow. We created our first API method which allows us to return a list of books. Kind of index. In this second part I will introduce you Grape-Entity and we will see how to get a specific book when we do a request.',
          image: 'https://cdn-images-1.medium.com/max/1600/1*3IAgVDK2_2NGosvjrYKTOw.jpeg',
          link: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
        }
      }, {
        type: 'articles',
        id: 'build-basic-api-final-part',
        attributes: {
          createdAt: '05/10/17',
          title: 'Build a basic API with Grape API & Grape-Entity Part 3',
          summerize: 'This is our last part and so far you can be proud of what you build. We have build two routes in our API. We can return a list of books and also get a specific book from an id. We introduced entities which allows us to choose which datas we want to display. It’s pretty good but not enough yet. So in this final part we will see how to add nested resources and how to add entities.',
          image: 'https://cdn-images-1.medium.com/max/2000/1*GcVf1U-AqgsxVoPZ3y59dw.jpeg',
          link: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
        }
      }]
    };
  });
}
