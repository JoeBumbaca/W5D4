Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i])
  }
}

// a = [1,2,3];
// a.myEach((ele) => console.log(ele));
// a.myEach((ele) => console.log(ele + 3))

function waterbottle(ele) {
  console.log(ele * 2);
};

a.myEach(waterbottle);

Array.prototype.myMap = function(callback) {
  let ret = []
  this.myEach((ele) => ret.push(callback(ele)));
  return ret;
};

console.log(a.myMap((ele) => (ele.toString()+ "waterbottle")));
console.log(a.map((ele) => (ele.toString() + "waterbottle")));

Array.prototype.myReduce = function(callback)