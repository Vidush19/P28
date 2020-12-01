class Tree {
    constructor(x, y) {
        this.tree1 = loadImage("images/tree.png");
        World.add(world, this.tree1);
    }
    display() {
        push();
        imageMode(CENTER);
        image(this.tree1, 670, 470, 450, 450);
        pop();
    }
}