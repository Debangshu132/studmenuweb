from pymongo import MongoClient
import json
from flask import Flask, request,render_template
app = Flask(__name__)
#@app.route("/", methods=['GET', 'POST'])
#def index():
#    return "hello man"
def getRestaurantsTableInformation(nameOfRestaurant,tableno):
    MONGODB_URI = "mongodb://Debangshu:Starrynight.1@ds163694.mlab.com:63694/brilu"
    client = MongoClient(MONGODB_URI, connectTimeoutMS=30000)
    db = client.get_database("brilu")
    col = db["restaurants"]
    cursor = col.find()
    restaurant = cursor[0]
    return(restaurant[nameOfRestaurant]["tables"])
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
@app.route("/individualcart/<data>", methods=['GET', 'POST'])
def individualcart(data):
         restaurant=data["restaurant"]
         tableno=data["tableno"]
         consumer_id=data["consumer_id"]
         mydata=getRestaurantsTableInformation(restaurant,tableno)
         return render_template("individualcart.html",datatowrite = mydata)
@app.route("/groupcart/<data>", methods=['GET', 'POST'])
def groupcart(data):
         return data
if __name__ == "__main__":
    app.run(debug=True)         
