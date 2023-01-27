const dbConnection = require("../util/mysql");

module.exports = class Article {
    constructor(Title, Description, Markdown) {
        this.Title = Title;
        this.Description = Description;
        this.Markdown = Markdown;
    }

    save() {
        const sql = "INSERT INTO Articles (Title, Description, Markdown) VALUES (?, ?, ?)";
        const params = [this.Title, this.Description,this.Markdown];

        return dbConnection.execute(sql,params);
    }

    // static 
}