# 1.1 Installation with Homebrew
  + Open terminal
  + Install postgres: `brew install postgres`
  + Start an instance of postgres: `brew services start postgresql`. You should be prompted with `Successfully started postgresql`

# 1.2 Client-Server Architecture 
PG uses a `Client-Server` model
  + The server program (Postgres) manages database files, connects with clients, and performs actions on behalf of clients.
  + The client is the frontend 

Postgres as a master server program is always running and listening for connections. Sub-server-client processes come and go.

# 1.3 Creating & Removing a Database 
  + Start an instance of postgres: `brew services start postgresql`. You should be prompted with `Successfully started postgresql`
  + Create a new DB: `createdb mydb`. If you don't receive a response, it worked! If the db already exists, you'll receive an error message. 
  + To remove a databse: `dropdb mydb`.If you don't receive a response, it worked! If the db no longer exists, you'll receive an error message.

# 1.4 Accessing a Database
  + Each database has a command-line interface (CLI) that allows you to interact with it.
  + To launch the CLI for a specific db, type `psql mydb`. The last line of your terminal should read `mydb=# `
  + From the CLI, you can input commands ending with a semicolon `;`
  + Try out the following:
    `SELECT version();`
    `SELECT current_date;`
    `SELECT 2 + 2;`
  + To quit a CLI, type `\q`

# 2.0 - 2.2 What is a Relational Database?
  + Postgres models data relationally. It is a Relational Database Management System (RDBMS). 
  + A relation is a table - similar to a spreadsheet!
  + A table is full of rows, each with the same number of columns
    + the columns will always be the same for each row, although the number of rows is variable
  + A `database` contains `multiple tables`, and `multiple databases` are called a `cluster`

# 2.3 Create a new Table
  + Within the `psql` prompt, use the `CREATE TABLE myTable` add a table to your database.
  + To remove a table, type `DROP TABLE mytable`
  + Typically, you'll want to define some of the columns of your table when you create it. It requires more planning at the beginnning, but makes maintaining a lot easier because you only have to manage rows.
  + Columns have `datatypes`. For a list of data types, go to `https://www.postgresql.org/docs/9.5/datatype.html`
    + For quick reference, `varchar(100)` is for strings up to 100 characters, `int` is for whole numbers, `float` is for decimals
  + Create a table with 4 columns: `city, temp_lo, temp_hi, date`
    `CREATE TABLE weatherTable(`
      `city  varchar(80),`
      `temp_lo int,`
      `temp_hi int,`
      `date  date`
    `);`

# 2.4 Inserting Rows into the Table
  + To insert rows with values into a table, use `INSERT INTO myTable VALUES (Value1, Value2, value3, value4);`

# 2.5 Querying Data from a table
  + Use `Select * FROM myTable;` to select everything from a table
  + Use `ORDER BY` to sort and order the data that is selected
    e.g. `SELECT * FROM myTable ORDER BY city;`
  + You can select distinct items with `SELECT DISTINCT columnName FROM myTable`
  + Any column or combination of columns may be selected.

# 2.6 Joins between Tables within a Database
  + Recall that a database can contain multiple tables. 
  + In order to access data across multiple tables, we use `join` queries.

# 2.8 & 2.9 Updating & Deleting rows within a table
  + To update a row, use `UPDATE myTable SET column1 = newValue, column2 = newValue WHERE city = 'San Francisco';`
  + To delete a row, use `DELETE FROM myTable WHERE city = 'San Francisco';`





  

