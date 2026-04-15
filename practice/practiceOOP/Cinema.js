class CinemaFacade {
    #devices = {};
    constructor(...devices) {
        let [tv, sound, lights] = devices;
        this.#devices = { tv, sound, lights };
    }
    watchMovie() {
        console.log(this.#devices.tv.turnOn());
        console.log(this.#devices.sound.turnOn());
        console.log(this.#devices.lights.turnOff());
        console.log("Movie mode activated");
    }
    endMovie() {
        console.log(this.#devices.tv.turnOff());
        console.log(this.#devices.sound.turnOff());
        console.log(this.#devices.lights.turnOn());
        console.log("Movie mode deactivated");
    }  
}

class TV {
    #state = false;
    turnOn() {
        this.#state = !this.#state;
        return "TV turned on";
    }
    turnOff() {
        this.#state = !this.#state;
        return "TV turned off";
    }
}
class SoundSystem {
    #state = false;
    turnOn() {
        this.#state = !this.#state;
        return "Sound system turned on";
    }
    turnOff() {
        this.#state = !this.#state;
        return "Sound system turned off";
    }
}

class Lights {
    #state = false;
    turnOn() {
        this.#state = !this.#state;
        return "Lights restored";
    }
    turnOff() {
        this.#state = !this.#state;
        return "Lights dimmed";
    }
}
const tv = new TV();
const sound = new SoundSystem();
const lights = new Lights();

const cinema = new CinemaFacade(tv, sound, lights);

cinema.watchMovie();
// TV turned on
// Sound system turned on
// Lights dimmed
// "Movie mode activated"

cinema.endMovie();
// TV turned off
// Sound system turned off
// Lights restored
// "Movie mode deactivated"
