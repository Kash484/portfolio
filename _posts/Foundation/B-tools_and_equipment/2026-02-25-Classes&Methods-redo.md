```js

    class Robot {
    constructor(power) {
        this.power = power;
    }

    drain() {
        this.power -= 10;
        if (this.power < 0) {
        this.power = 0;
        }
    }

    shutdown() {
        while (this.power > 0) {
        this.drain();
        }
    }
    }

    let myRobot = new Robot(35);

    console.log(myRobot.power); // should print 35

    myRobot.shutdown();
