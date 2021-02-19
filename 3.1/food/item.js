module.exports = class Item{
  constructor( id ,name,value ) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.currency ="USD";
  }
  print() {
    return`---------------------\n`+
      `${this.id} ${this.name}:${this.value}.00 ${this.currency}\n` +
          `---------------------\n`
  }
}