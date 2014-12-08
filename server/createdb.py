import sqlite3;
conn = sqlite3.connect('ridlnux.db');
c = conn.cursor();
conn.execute('''CREATE TABLE Player
       (ID INTEGER PRIMARY KEY     NOT NULL,
       name           TEXT    NOT NULL,
       password           TEXT     NOT NULL);''')

conn.execute('''CREATE TABLE Level 
       (ID INTEGER PRIMARY KEY     NOT NULL,
	title           TEXT    NOT NULL,
       objectif           TEXT    NOT NULL,
       help           TEXT     NOT NULL,
       commands		TEXT);''')

conn.execute('''CREATE TABLE Hint 
       (ID INTEGER PRIMARY KEY     NOT NULL,
       hint           TEXT    NOT NULL,
	levelid	INT NOT NULL,
       answer           TEXT     NOT NULL);''')

conn.execute('''CREATE TABLE Play 
       ( idplayer         INT    NOT NULL,
       idlevel         INT     NOT NULL);''')

conn.commit();
conn.close();
