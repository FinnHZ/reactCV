from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/coverletter', methods=['GET','POST'])
def coverletter():
    # coverletterInfo = {}
    # coverletterFile_original = open("./static/document/coverLetterCSV_CV.csv")
    # coverletterFile_csv = csv.reader(coverletterFile_original)
    # coverletterContent_list = list(coverletterFile_csv)
    
    # for i in range(0, len(coverletterContent_list)):
    #     coverletterInfo['content_'+i] = coverletterContent_list[0]

    # coverletterFile_original.close()

    # coverletterInfo_json = json.dumps(coverletterInfo)
    # return coverletterInfo_json

    coverletterInfo = {}
    with open('./static/document/coverLetterCSV_CV.txt') as f:
        linesList = f.readlines()
        for i in range(0, len(linesList)):
            coverletterInfo['content_'+ str(i)] = linesList[i].replace("\n","")
        f.close()
        
    coverletterInfo_json = json.dumps(coverletterInfo)
    return coverletterInfo_json








if __name__ == '__main__':
    app.run('127.0.0.1', port=5000, debug=True)