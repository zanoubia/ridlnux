#!/usr/bin/python

def signin(name,password):
        import sqlite3;
        conn = sqlite3.connect('ridlnux.db');
        c = conn.cursor();
        player = (name,);
        c.execute('SELECT * FROM Player WHERE name=?', player);
        result = c.fetchone();
        if (result == None or password != result[2]):
                conn.close()
                return "ko";
        else :
                conn.close()
                return "ok";


def signup(name,password):
        import sqlite3;
        conn = sqlite3.connect('ridlnux.db');
        c = conn.cursor();
        player = (name,);
        c.execute('SELECT * FROM Player WHERE name=?', player);
        result = c.fetchone();
        if (result != None):
                conn.close();
                return "ko";
        else :
		querry = "INSERT INTO Player  VALUES (NULL, '"+name+"','"+ password+"')";
                c.execute(querry);
                conn.commit();
                conn.close();
		return "ok";


def getlevel(name):
	import sqlite3;
        conn = sqlite3.connect('ridlnux.db');
        c = conn.cursor();
        player = (name,);
	c.execute('SELECT id  FROM Player WHERE name=?', player);
        result = c.fetchone();
	idplayer = (result[0],);
	c.execute('SELECT idlevel  FROM Play WHERE idplayer=?', idplayer);
	result = c.fetchone();
        levelid = (result[0],);
	c.execute('SELECT *  FROM Level WHERE id=?', levelid);
	level = c.fetchone();
	c.execute('SELECT *  FROM Hint WHERE levelid=?', levelid);
	hint= c.fetchone();
	conn.close();
	result = "{levelid:"+str(level[0])+",title:"+level[1]+",objectif:"+level[2]+",help:"+level[3]+",instructions:"+level[4]+",hintid:"+str(hint[0])+",hint:"+hint[1]+"}";
	return result;

	

def compareanswer(name,level,hint,answer):
	import sqlite3;
        conn = sqlite3.connect('ridlnux.db');
        c = conn.cursor();

        player = (name,);
	c.execute('SELECT id  FROM Player  WHERE name=?', player);
	res = c.fetchone();
	idplayer  = res[0];

	hintid = (hint,);
	c.execute('SELECT answer  FROM Hint WHERE id=?', hintid);
	res = c.fetchone();
	correctanswer = res[0];
	correctanswer = correctanswer.replace('$username',name);
	if (answer == correctanswer):
		#conn.execute("UPDATE Play  set idlevel =?  WHERE  idplayer=?, level + 1 ,idplayer ");
		#conn.commit;
		conn.close;
		return "ok";
	else :
		conn.close;
		return "ko";
	

