from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/coverletter', methods=['GET','POST'])
def coverletter():
    coverletterInfo = {}
    with open('./static/document/coverletterWEB.txt') as f:
        linesList = f.readlines()
        coverletterInfo['content'] = linesList
        f.close()
    coverletterInfo_json = json.dumps(coverletterInfo)
    return coverletterInfo_json






if __name__ == '__main__':
    app.run('127.0.0.1', port=5000, debug=True)