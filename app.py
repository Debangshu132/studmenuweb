from pymongo import MongoClient
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
         print(restaurant[restaurant]["menu"])
         return render_template("headerfooter.html",menu=restaurant[restaurant]["menu"])
         #return render_template('chart.html',menu=menu)

if __name__ == "__main__":
    app.run()         
