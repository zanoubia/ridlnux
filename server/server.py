import ridlnuxdb
from flask import Flask, render_template, request, url_for, session
app = Flask(__name__)

@app.route('/players/signup', methods=['POST'])
def signup():
	player = request.form['username']
        passwd = request.form['password']
	result = ridlnuxdb.signup(player,passwd)
	return result

@app.route('/players/signin', methods=['POST'])
def signin():
	player = request.form['username']
	passwd = request.form['password']
	result = ridlnuxdb.signin(player,passwd)
	return result
	 

@app.route('/levels/current', methods=['POST'])
def getlevel():
	player = request.form['username']
	level = ridlnuxdb.getlevel(player)
	return level	

@app.route('/answer', methods=['POST'])
def answer():
	player = request.form['username']
	level = request.form['level']
	answer = request.form['answer']
	hint = request.form['hint']
	result = ridlnuxdb.compareanswer(player,level,hint,answer)
	return result

@app.route('/logout', methods=['POST'])
def logout():
	return ok

	

if __name__ == '__main__':
    app.run()
    app.secret_key ='\xd6\xbb\x13\x80%\xc91/\xcf\xdc\xb1\x13\xe8\x9b;\x03\xe9\xb3\xde\xe1\xd0)9S'
