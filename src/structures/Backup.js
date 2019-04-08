
const fs = require("fs")

class Backup {

    constructor(data, options = {}) {

        this.timestamp = new Date();

        this.location = ".";

        this.filter = {};

        this.data = data;
        
        this.options = options;

    }

    saveTo(destination, options = {}) {

    }

}