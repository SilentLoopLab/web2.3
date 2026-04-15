class MySQLDatabase {
  save(user) {
    console.log("User saved to MySQL");
  }
}

class UserService {
  constructor() {
    this.db = new MySQLDatabase();
  }

  createUser(user) {
    this.db.save(user);
  }
}

//______________________________

class MySQLDatabase {
  save(user) {
    console.log("User saved to MySQL");
  }
}

class MongoDatabase {
  save(user) {
    console.log("User saved to MongoDB");
  }
}

class UserService {
  constructor(database) {
    this.database = database;
  }

  createUser(user) {
    this.database.save(user);
  }
}