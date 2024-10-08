// routes/products.router.js
const Router = require('./router');
const {
  getProducts,
  getProductById,
  addProduct,
  getProductsPaginate,
  updateProduct,
  deleteProduct
} = require('../controllers/products.controller');
const uploader = require('../middlewares/multer');
const passportCall = require('../utils/passportCall');

class ProductsRouter extends Router {
  init() {
    this.get('/', ['PUBLIC'], getProducts);
    this.get('/paginate', ['PUBLIC'], getProductsPaginate);
    this.get('/:pid', ['PUBLIC'], getProductById);

    this.post(
      '/',
      ['ADMIN', 'PREMIUM'],
      uploader.fields([{ name: 'identification', maxCount: 10 }]),
      addProduct
    );

    this.put(
      '/:pid',
      ['ADMIN', 'PREMIUM'],
      uploader.fields([{ name: 'identification', maxCount: 10 }]),
      updateProduct
    );

    this.delete('/:pid', ['ADMIN', 'PREMIUM'], deleteProduct);
  }
}

module.exports = new ProductsRouter();
