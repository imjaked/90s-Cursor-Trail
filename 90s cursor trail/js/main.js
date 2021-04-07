   var pointers = [],
   mouse = {
     x: 0,
     y: 0
   };

var pointer = function() {
 this.x = 0;
 this.y = 0;
 this.node = (function(){
   var n = document.createElement("div");
   n.className = "trail";
   document.body.appendChild(n);
   return n;
 }());
};

pointer.prototype.draw = function() {
 this.node.style.left = this.x + "px";
 this.node.style.top = this.y + "px";
};

for (var i = 0; i < 12; i++) {
 var d = new pointer();
 pointers.push(d);
}

function draw() {

 var x = mouse.x,
     y = mouse.y;
 
 pointers.forEach(function(pointer, index, pointers) {
   var nextpointer = pointers[index + 1] || pointers[0];
   
   pointer.x = x;
   pointer.y = y;
   pointer.draw();
   x += (nextpointer.x - pointer.x) * .6;
   y += (nextpointer.y - pointer.y) * .6;

 });
}

addEventListener("mousemove", function(event) {
 //event.preventDefault();
 mouse.x = event.pageX;
 mouse.y = event.pageY;
});

function animate() {
 draw();
 requestAnimationFrame(animate);
}

animate();
