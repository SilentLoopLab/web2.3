const greetUser = (username, role) => {
    console.log(`Hello, ${username}! Your role is: ${role}`);
};

setTimeout(greetUser, 1500, "Bob", "Instructor");