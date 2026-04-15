class Employee {
    work() {
        throw new Error("Method must be implemented");
    }

    eatLunch() {
        throw new Error("Method must be implemented");
    }

    attendMeeting() {
        throw new Error("Method must be implemented");
    }
}

class Developer extends Employee {
    work() {
        console.log("Developer writes code");
    }

    eatLunch() {
        console.log("Developer eats lunch");
    }

    attendMeeting() {
        console.log("Developer attends meeting");
    }
}

class Robot extends Employee {
    work() {
        console.log("Robot works");
    }

    eatLunch() {
        throw new Error("Robot does not eat lunch");
    }

    attendMeeting() {
        throw new Error("Robot does not attend meetings");
    }
}

//______________________________________

class Worker {
    work() {
        throw new Error("Method must be implemented");
    }
}

class LunchParticipant {
    eatLunch() {
        throw new Error("Method must be implemented");
    }
}

class MeetingParticipant {
    attendMeeting() {
        throw new Error("Method must be implemented");
    }
}

class Developer extends Worker {
    work() {
        console.log("Developer writes code");
    }

    eatLunch() {
        console.log("Developer eats lunch");
    }

    attendMeeting() {
        console.log("Developer attends meeting");
    }
}

class Robot extends Worker {
    work() {
        console.log("Robot works");
    }
}
