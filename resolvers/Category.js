exports.Category = {
  products: ({id}, {filter}, { db }) => {
    const categoryProducts = db.products.filter((product) => product.categoryId === id);

    if(filter?.onSale) {
        return categoryProducts.filter(product => product.onSale)
    }

    return categoryProducts;

  },
};
