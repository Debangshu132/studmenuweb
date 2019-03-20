from pymongo import MongoClient
import json
from flask_socketio import SocketIO,send,emit
from flask import Flask, request,render_template
app = Flask(__name__)
socketio = SocketIO(app)
#@app.route("/", methods=['GET', 'POST'])
#def index():
#    return "hello man"
@socketio.on('canirefresh')
def handle_my_custom_event(msg):
    print("yo connected")     
    emit('okrefreshpage', msg)

def getRestaurantsTableInformation(nameOfRestaurant,tableno):
    MONGODB_URI = "mongodb://Debangshu:Starrynight.1@ds163694.mlab.com:63694/brilu"
    client = MongoClient(MONGODB_URI, connectTimeoutMS=30000)
    db = client.get_database("brilu")
    col = db["restaurants"]
    cursor = col.find()
    restaurant = cursor[0]
    return(restaurant[nameOfRestaurant]["tables"][tableno])
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
@app.route("/groupcart/<data>", methods=['GET', 'POST'])
def groupcart(data):
         data=json.loads(data)
         restaurant=data["restaurant"]
         tableno=data["tableno"]
         identity=data["identity"]
         mydata=getRestaurantsTableInformation(restaurant,tableno)
         mydata={"identity":identity,"tableinfo":mydata,"restaurant":restaurant,"tableno":tableno}
         return render_template("individualcart.html",datatowrite =json.dumps(mydata))

if __name__ == "__main__":
 socketio.run(app) 
