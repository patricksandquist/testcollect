window.ApiActions = {
  receiveCollections: function (collections) {
    AppDispatcher.dispatch({
      actionType: CollectionConstants.COLLECTIONS_RECEIVED,
      collections: collections
    });
  },

  receiveCollection: function (collection) {
    AppDispatcher.dispatch({
      actionType: CollectionConstants.COLLECTION_ADDED,
      collection: collection
    });
  }
};
