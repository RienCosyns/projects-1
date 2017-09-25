var data_model_array = {
  db: [], // array
  create(new_object) {
    // assigns a unique ID to each object
    //   once an ID has been used for one object, it can never be used for another
    //   once an object has been given an ID, it can never be given a new one
    // adds the object to db
    var myObj = Object.assign({}, new_object);
    var maxId = 0;
    for (var i = 0; i < this.db.length; i++) {
      if (this.db[i].id > maxId) {
        maxId = this.db[i].id;
      }
    }
    var uniqueId = maxId++;
    myObj.id = uniqueId;
    this.db.push(myObj);
  },
  read(entry_id) {
    // return object associated with given id
    for (var i = 0; i < this.db.length; i++) {
      if (this.db[i].id === entry_id) {
        return this.db[i];
      }
    }
  },
  update(entry_id, new_value) {
    // replace said entry with said value
    for (var i = 0; i < this.db.length; i++) {
      if (this.db[i].id === entry_id) {
        this.db[i] = new_value;
      }
    }
  },
  remove(entry_id) {
    // remove object with said id
    for (var i = 0; i < this.db.length; i++) {
      if (this.db[i].id === entry_id) {
        this.db.splice(i, 1);
      }
    }
    // this operation must not change other objects' id's
  }
};

var data_model_object = {
  db: {},
  create(new_object) {
    var myObj = Object.assign({}, new_object);
    var keys = Object.keys(this.db);
    var maxUsedId = Math.max(...keys);
    var nextId = maxUsedId++;

    this.db[nextId] = myObj;
  },
  read(entry_id) {
    for (var id in this.db) {
      if (id === entry_id) {
        return this.db[id];
      }
    }
  },
  update(entry_id, new_value) {
    for (var id in this.db) {
      if (id === entry_id) {
        this.db[id] = new_value;
      }
    }
  },
  delete(entry_id) {
    for (var id in this.db) {
      if (id === entry_id) {
        delete this.db[id];
      }
    }
  }
};
