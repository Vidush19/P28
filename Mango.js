class Mango {
    constructor(x, y, radius) {
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.image = loadImage("images/mango.png");
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        fill("yellow");
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}