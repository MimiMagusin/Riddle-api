// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
function comparableObjectId(objectId) {
  return objectId.toString();
}





module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function isJoinable (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations

    if (hook.method === 'find') {
      hook.result.data = hook.result.data.map((game) => (
        Object.assign(game, {
          isJoinable: !hook.params.user ? false : game.playerIds.length < 2 &&
            !game.playerIds.map(comparableObjectId)
              .includes(comparableObjectId(hook.params.user._id))
        })
      ));
    } else {
      hook.result.isJoinable = !hook.params.user ? false : hook.result.playerIds.length < 2 &&
        !hook.result.playerIds.map(comparableObjectId)
          .includes(comparableObjectId(hook.params.user._id));
    }


    return Promise.resolve(hook);
  };
};
