'use strict'

const productApi = require('./api.js')
const productUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateProduct = function (event) {
  console.log('passing through products event js')
  console.log(data)
  event.preventDefault()
  const data = getFormFields(event.target)
  // may need to update name of create after html is created
  productApi.createProduct(data)
    .then(productUi.onCreateProductSuccess)
    .catch(productUi.onCreateProductError)
}

// is 'const data' necessary for functionality?
const onGetAllProducts = function (event) {
  console.log('passing through get all events.js')
  event.preventDefault()
  const data = getFormFields(event.target)
  productApi.getAllProducts(data)
    .then(productUi.onGetAllProductsSuccess)
    .catch(productUi.onGetAllProductsError)
}

const onGetProduct = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  productApi.getProduct(data)
    .then(productUi.onGetProductSuccess)
    .catch(productUi.onGetProductError)
}

const onUpdateProduct = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  productApi.updateProduct(data)
    .then(productUi.onUpdateProductSuccess)
    .catch(productUi.onUpdateProductError)
}

const onDeleteProduct = function (event) {
  event.preventDefault()
  // need 'const data' if no form?
  const id = $(this).data('id')
  console.log('passing through events.js')
  console.log(id)
  productApi.deleteProduct(id)
    .then(productUi.onDeleteProductSuccess)
    .catch(productUi.onDeleteProductError)
}

module.exports = {
  onCreateProduct,
  onGetAllProducts,
  onGetProduct,
  onUpdateProduct,
  onDeleteProduct
}
