from pymongo import MongoClient
import json
from flask import Flask, request,render_template
app = Flask(__name__)
#@app.route("/", methods=['GET', 'POST'])
#def index():
#    return "hello man"
@app.route("/", methods=['GET', 'POST'])
def menu():
         MONGODB_URI="mongodb://Debangshu:Starrynight.1@ds163694.mlab.com:63694/brilu"
         client = MongoClient(MONGODB_URI, connectTimeoutMS=30000)
         db = client.get_database("brilu")
         col = db["restaurants"]
         cursor = col.find()
         restaurant = cursor[0]
         print(restaurant["Taj"]["menu"])
         return render_template("headerfooter.html",menuitems=json.dumps(restaurant["Taj"]["menu"]))
         #return render_template('chart.html',menu=menu)
@app.route("/cart/<cartdata>", methods=['GET', 'POST'])
def cart(cartdata):
         return cartdata

if __name__ == "__main__":
    app.run()         
