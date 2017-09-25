var data_model = {
  db: {}, // array or object, your call
  create(new_object, callback) {
    // somehow associates an object with a new id
    // adds the object to db
    var myObj = Object.assign({}, new_object);
    var err = false;
    var keys = Object.keys(this.db);
    var maxUsedId = Math.max(...keys) || 0;
    var nextId = maxUsedId++;

    this.db[nextId] = myObj;

    callback(err, myObj);
  },
  read(entry_id, callback) {
    // pass said object into callback
    for (var id in this.db) {
      if (this.db[id] === entry_id) {
        callback(this.db[i]);
      } else {
        callback(null);
      }
    }
  },
  update(entry_id, new_value, callback) {
    // replace said entry with said value
    var err = false;
    for (var id in this.db) {
      if (id === entry_id) {
        this.db[id] = new_value;
        callback(err, this.db[id]);
      } else {
        err = true;
        callback(err, null);
      }
    }
  },
  remove(entry_id, callback) {
    // remove object with said id
    // this operation must not change other objects' id's
    var err = false;
    for (var id in this.db) {
      if (id === entry_id) {
        delete this.db[id];
      } else {
        err = true;
      }
    }
    callback(err);
  }
};

var new_object = { name: "rien", age: 29, country: "Belgium" };

data_model.create(new_object, (err, new_obj) => {
  if (err) {
    console.log("Bad object!");
  } else {
    console.log(new_obj);
  }
});
