class GameClass {
  checkGuess(user, guess) {
    return !!user && !!guess; // TODO
  }

  isNotJoinableBy(user) {
    return !this.isJoinableBy(user);
  }

  isJoinableBy(user) {
    return this.isJoinable() && !this.hasJoined(user);
  }

  hasJoined(user) {
    this.playerIds.includes(user._id);
  }

  isJoinable() {
    return !this.isFull() && !this.isStarted();
  }

  isFull() {
    return this.playerIds.length >= 2;
  }

  isStarted() {
    return this.started === true;
  }
}

module.exports = GameClass;
