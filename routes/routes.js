const appRouter = function(app) {
  // base route
  app.get('/', (req, res) => {
    res.send('WE ARE LIVE!');
  });

  // get categories
  app.get('/api/categories', (req, res) => {
    data = [{
      id: 4546,
      categoryName: 'Soap',
      categoryCode: 54567889,
      dateAdded: '12-12-2017'
    },
    {
      id: 7890,
      categoryName: 'Eletronic',
      categoryCode: 32555777,
      dateAdded: '12-13-2017'
    }];

    res.status(200).json(data);
  });

  // get products
  app.get('/api/products', (req, res) => {
    data = [{
      id: 4576,
      productCode: 1123,
      productName: 'Panga',
      categoryCode: 54567889
    },
    {
      id: 7891,
      productCode: 6781,
      productName: 'Geisher',
      categoryCode: 54567889
    },
    {
      id: 4567,
      productCode: 3456,
      productName: 'Radio',
      categoryCode: 32555777
    }];

    res.send(data);
  });
};

module.exports = appRouter;
