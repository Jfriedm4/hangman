$(function(){

  var words = ['moana', 'baywatch', 'the fate of the furious', 'furious 7', 'fast and furious 6', 'the fate of the furious', 'furious 7', 'fast and furious 6', 'the fate of the furious', 'furious 7', 'fast and furious 6', 'the fate of the furious', 'furious 7', 'fast and furious 6', 'central intelligence', 'san andreas', 'pain and gain', 'gi joe', 'the mummy returns', 'the scorpion king', 'the rundown', 'walking tall', 'doom', 'gridiron gang', 'race to witch mountain'];

  var game = {
    guessed: [],
    left: 12,
    start: function() {
      this.complete = false;
      this.word = words[Math.floor(Math.random() * words.length)];
      this.$right = document.getElementById('right');
      this.$wrong = document.getElementById('wrong');
      this.$remain = document.getElementById('remain');
      this.$right.innerHTML = (/\w/g,'_').repeat(this.word.length);
    },

  guess: function(letter) {
    if (this.left > 0 && this.complete != true) {
      if (this.word.indexOf(letter) > -1 || this.guessed.indexOf(letter) > -1) {
        this.right(letter);
      } else {
        this.wrong(letter);
      }
    }
  },

  right: function(letter) {
    for(var i = 0; i < this.word.length; i++) {
      if (this.word[i] == letter) {
        var word = this.$right.innerHTML.split('');
        word[i] = letter;
        this.$right.innerHTML = word.join('');
      }
    }
    if (this.$right.innerHTML.indexOf('_') < 0) {
      alert('you win!');
      this.complete = true;
    }
  },

  wrong: function(letter) {
    this.guessed.push(letter);
    this.$wrong.innerHTML += ' ' + letter;
    this.left--;
    this.$remain.innerHTML = this.left;
    if (this.left < 1) {
      alert('you lose! '+ this.word);
      this.complete = true;
    }
  }
};

  game.start();
  document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    game.guess(letter);
  };
});
