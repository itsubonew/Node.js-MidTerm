const dbConnection = require("../util/mysql");

module.exports = class Article {
    constructor(Title, Description, Markdown) {
        this.Title = Title;
        this.Description = Description;
        this.Markdown = Markdown;
    }

    save() {
        const sql = "INSERT INTO Articles2 (Title, Description, Markdown) VALUES (?, ?, ?)";
        const params = [this.Title, this.Description,this.Markdown];

        return dbConnection.execute(sql,params);
    }

    static find(){
        const sql = "SELECT * FROM Articles2 ORDER BY Articles_ID DESC"
        return dbConnection.query(sql);
    }

    updateOne(id) {
        const sql = 
        "UPDATE Article SET Title = ?, Description = ?, Markdown = ? WHERE (Articles_ID = ?)";
        const params = [this.title, this.Description, this.Markdown, id];
        return dbConnection.execute(sql, params);
    }

    static deleteOne(id) {
        const sql = "DELETE FROM Articles WHERE Articles_ID = ?";
        return dbConnection.execute(sql,[id]);
    };

    // static 
}
