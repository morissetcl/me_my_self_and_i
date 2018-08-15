export default function() {
  this.namespace = '/api';

  this.get('/articles', function() {
    return {
      data: [{
        type: 'articles',
        id: 'build-basic-api-two',
        attributes: {
          created: '05/02/17',
          title: '3 astuces pour réduire la duplication dans mes tests avec Rspec',
          summerize: 'En tant que développeur, j’estime que les tests sont indissociables de la maintenabilité d’une application. Mais le revers de la médaille, c’est qu’à force de vouloir tester je me retrouve face à une inutile duplication. Ci-dessous, je vous propose 3 astuces que j’utilise pour garder mes specs le plus propre possible.',
          image: 'https://cdn-images-1.medium.com/max/1600/1*M4oWp0_P77gvMfvUVjmR5A.jpeg',
          link: 'https://medium.com/captive-fr/3-astuces-pour-r%C3%A9duire-la-duplication-dans-mes-fichiers-de-tests-cc576c406e86'
        }
      }, {
        type: 'articles',
        id: 'build-basic-api-part-one',
        attributes: {
          created: '04/25/17',
          title: 'Build a basic API with Grape API & Grape-Entity Part 1',
          summerize: 'This is the first part of three in order to achieve to build a small API with Ruby On Rails , Grape API and Grape-Entity. This medium is dedicated to you if you are not still familiar with API. So, the main goal is to build a small API to manage a Book Store. We would like to get all the book, a specific book and his flows and also add a new flow to a specific book. Pretty simple, isn’t it ? Let’s start with our first part by building an API to return all Books.',
          image: 'https://cdn-images-1.medium.com/max/1600/1*MhHldOckM7Mwbcpsl6OP6Q.jpeg',

          link: 'https://medium.com/@clementrollon/build-a-basic-api-with-grape-api-grape-entity-part-1-5d5fa1cf38db'
        }
      },
        {
        type: 'articles',
        id: 'build-basic-api-part-two',
        attributes: {
          created: '05/02/17',
          title: 'Build a basic API with Grape API & Grape-Entity Part 2',
          summerize: 'In Part 1 we started to build a small API to manage book stock. Currently we have two models, book and flow. We created our first API method which allows us to return a list of books. Kind of index. In this second part I will introduce you Grape-Entity and we will see how to get a specific book when we do a request.',
          image: 'http://www.webentrepreneurdebutant.fr/wp-content/uploads/2010/11/lego-10-workers.jpg',
          link: 'https://medium.com/@clementrollon/build-a-basic-api-with-grape-api-grape-entity-part-2-25ed0d22dfb7'
        }
      }, {
        type: 'articles',
        id: 'build-basic-api-final-part',
        attributes: {
          created: '05/10/17',
          title: 'Build a basic API with Grape API & Grape-Entity Part 3',
          summerize: 'This is our last part and so far you can be proud of what you build. We have build two routes in our API. We can return a list of books and also get a specific book from an id. We introduced entities which allows us to choose which datas we want to display. It’s pretty good but not enough yet. So in this final part we will see how to add nested resources and how to add entities.',
          image: 'https://cdn-images-1.medium.com/max/2000/1*GcVf1U-AqgsxVoPZ3y59dw.jpeg',
          link: 'https://medium.com/@clementrollon/build-a-basic-api-with-grape-api-grape-entity-part-3-c186dda08938'
        }
      }]
    };
  });

  this.get('/gems', function() {
    return {
      data: [{
          type: 'gems',
          id: 'see_double',
          attributes: {
            created: '05/10/17',
            title: "See_Double Gem",
            summerize: "A small tool CLI to monitoring your FEATURE specs and check your duplication. SeeDouble go through all your specs and count the number of occurence of your 'expect' and 'result'.",
            image: 'http://www.krugerpark.co.za/images/1suricate-590a.jpg',
            link: 'https://github.com/morissetcl/see_double'
        }
      }, {
        type: 'gems',
        id: 'conchiterz',
        attributes: {
          created: '05/02/17',
          title: 'Conchiterz Gem',
          summerize: 'A simply gem to feminize french word/sentence.',
          image: 'https://imageresizer.static9.net.au/qdNswstJvDH-FWwogoTZGSqrpzY=/480x270/http%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2FNetwork%2FImages%2F2017%2F05%2F15%2F15%2F58%2Fconchitafix1505_2.jpg',
          link: 'https://github.com/morissetcl/conchiterz'
        }
      }]
    };
  });
}
