function Animal() {
    var foodAmount = 50;

function formatFoodAmount() {
    return foodAmount + ' гр.';
}

this.dailyNorm = function(amount) {
    if (!arguments.length) return formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    foodAmount = amount;
};

this.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};
}
this.getFeed = function () {
     return this.feed;
};
function Cat(name) {
    Animal.call(this);
    Animal.call(this.feed(), console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма. Кот доволен ^_^ '));
    this.name = name;
}
this.stroke = function () {
    console.log('Гладим кота')
};
console.log(stroke());
var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.feed());

console.log(barsik.dailyNorm(600));
console.log(barsik.feed());

console.log(barsik.dailyNorm(250));
console.log(barsik.feed());
console.log();
console.log(getFeed());
barsik = null;