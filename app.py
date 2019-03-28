from pymongo import MongoClient
import json
from flask_socketio import SocketIO,send,emit
from flask import Flask, request,render_template,make_response
app = Flask(__name__)
socketio = SocketIO(app)
#@app.route("/", methods=['GET', 'POST'])
#def index():
#    return "hello man"
@socketio.on('canirefresh')
def handle_my_custom_event(msg):
    print("yo refresh the page")
    restaurant = request.cookies.get('restaurantcookie')
    tableno = request.cookies.get('tablenocookie')
    identity = request.cookies.get('identitycookie')
    mydata=getRestaurantsTableInformation(restaurant,tableno)
    mydata={"identity":identity,"tableinfo":mydata,"restaurant":restaurant,"tableno":tableno}
    print('the restaurnt is yupyupy up',restaurant)
    emit('okrefreshpage',json.dumps(mydata), broadcast=True)
       

def getRestaurantsAllTableInfo(nameOfRestaurant):
    MONGODB_URI = "mongodb://Debangshu:Starrynight.1@ds163694.mlab.com:63694/brilu"
    client = MongoClient(MONGODB_URI, connectTimeoutMS=30000)
    db = client.get_database("brilu")
    col = db["restaurants"]
    cursor = col.find()
    restaurant = cursor[0]
    return(restaurant[nameOfRestaurant]["tables"])
def getRestaurantsTableConsumerInformation(nameOfRestaurant,tableno):
    MONGODB_URI = "mongodb://Debangshu:Starrynight.1@ds163694.mlab.com:63694/brilu"
    client = MongoClient(MONGODB_URI, connectTimeoutMS=30000)
    db = client.get_database("brilu")
    col = db["restaurants"]
    cursor = col.find()
    restaurant = cursor[0]
    consumerArray=restaurant[nameOfRestaurant]["tables"][tableno]["consumer"]
    return(consumerArray)
def getRestaurantsTableInformation(nameOfRestaurant,tableno):
    MONGODB_URI = "mongodb://Debangshu:Starrynight.1@ds163694.mlab.com:63694/brilu"
    client = MongoClient(MONGODB_URI, connectTimeoutMS=30000)
    db = client.get_database("brilu")
    col = db["restaurants"]
    cursor = col.find()
    restaurant = cursor[0]
    return(restaurant[nameOfRestaurant]["tables"][tableno])
@app.route("/menu/<resto>", methods=['GET', 'POST'])
def menu(resto):
         MONGODB_URI="mongodb://Debangshu:Starrynight.1@ds163694.mlab.com:63694/brilu"
         client = MongoClient(MONGODB_URI, connectTimeoutMS=30000)
         db = client.get_database("brilu")
         col = db["restaurants"]
         cursor = col.find()
         restaurant = cursor[0]
         print(restaurant[resto]["menu"])
         return render_template("headerfooter.html",menuitems=json.dumps(restaurant[resto]["menu"]))
         #return render_template('chart.html',menu=menu)
@app.route("/groupcart/<data>", methods=['GET', 'POST'])
def groupcart(data):
         data=json.loads(data)
         restaurant=data["restaurant"]
         tableno=data["tableno"]
         identity=data["identity"]
         cookiedata={"identity":identity,"restaurant":restaurant,"tableno":tableno}
         mydata=getRestaurantsTableInformation(restaurant,tableno)
         mydata={"identity":identity,"tableinfo":mydata,"restaurant":restaurant,"tableno":tableno}
         #socketio.emit('okrefreshpage', 'abc', broadcast=True)  
         resp = make_response(render_template("individualcart.html",datatowrite =json.dumps(mydata)))
         resp.set_cookie('restaurantcookie', restaurant)
         resp.set_cookie('tablenocookie', tableno)
         resp.set_cookie('identitycookie', identity)
         return resp
@app.route("/updatecart/<dataUpdate>", methods=['GET', 'POST'])
def updatecart(dataUpdate):
    print("yo refresh the page")
    data=json.loads(dataUpdate)
    restaurant=data["restaurant"]
    tableno=data["tableno"]
    identity=data["identity"]    
    mydata=getRestaurantsTableInformation(restaurant,tableno)
    mydata={"identity":identity,"tableinfo":mydata,"restaurant":restaurant,"tableno":tableno}
    return json.dumps(mydata)
@app.route("/dashboard/<restoo>", methods=['GET', 'POST'])
def dashboard(restoo):
     tableInfo=getRestaurantsAllTableInfo(restoo)
     return str(tableInfo) 
@app.route("/dashboardwaiterpage/", methods=['GET', 'POST'])
def dashboardwaiterpage():
     
     return render_template("dashboard.html")
@app.route("/logoutwaiter/<tablejsondata>", methods=['GET', 'POST'])
def logoutwaiter(tablejsondata):
     restaurant = request.cookies.get('restaurantcookie')
     table=json.loads(tablejsondata)
     tableno=table['tableno']
     updateRestaurantsTablesInformation(restaurant,str(tableno), waiter={})   
     return "success"
@app.route("/populatedashboardmenuitems/<resto>", methods=['GET', 'POST'])
def populatedashboardmenuitems(resto):
         MONGODB_URI="mongodb://Debangshu:Starrynight.1@ds163694.mlab.com:63694/brilu"
         client = MongoClient(MONGODB_URI, connectTimeoutMS=30000)
         db = client.get_database("brilu")
         col = db["restaurants"]
         cursor = col.find()
         restaurant = cursor[0]
         print(restaurant[resto]["menu"])
         return json.dumps(restaurant[resto]["menu"]) 
        
        
        
@app.route("/logoutwaiterfromalltables/<waiterid>", methods=['GET', 'POST'])
def populatedashboardwaiterprofiles(waiterid):
         MONGODB_URI="mongodb://Debangshu:Starrynight.1@ds163694.mlab.com:63694/brilu"
         client = MongoClient(MONGODB_URI, connectTimeoutMS=30000)
         db = client.get_database("brilu")
         col = db["restaurants"]
         cursor = col.find()
         restaurant = cursor[0]
         restaurantWaiter=restaurant[resto]["waiters"][waiterid] 
         activeTables=restaurantWaiter["activetables"]
         for tableno in activetables:
            db.restaurants.update({"_id" : "restaurant"}, {"$set":{"Taj"+".tables."+str(tableno)+".waiter":""}},upsert=True);
         
         db.restaurants.update({"_id" : "restaurant"}, {"$set":{"Taj"+".waiters."+waiterid+"."+"activetables": []}},upsert=True);
          
         return "success"   
    
    
    
@app.route("/populatedashboardwaiterprofiles/<resto>", methods=['GET', 'POST'])
def populatedashboardwaiterprofiles(resto):
         MONGODB_URI="mongodb://Debangshu:Starrynight.1@ds163694.mlab.com:63694/brilu"
         client = MongoClient(MONGODB_URI, connectTimeoutMS=30000)
         db = client.get_database("brilu")
         col = db["restaurants"]
         cursor = col.find()
         restaurant = cursor[0]
         print('WAITERS!!!!')   
         print(restaurant[resto]["waiters"])
         return json.dumps(restaurant[resto]["waiters"])        
      


def updateRestaurantsTablesInformation(nameOfRestaurant,tableno, **kwargs):
    MONGODB_URI = "mongodb://Debangshu:Starrynight.1@ds163694.mlab.com:63694/brilu"
    client = MongoClient(MONGODB_URI, connectTimeoutMS=30000)
    db = client.get_database("brilu")
    tables=getRestaurantsAllTableInfo(nameOfRestaurant)
    table=tables[tableno]
    for key in kwargs:
        table[key]=kwargs[key]
    db.restaurants.update({"_id" : "restaurant"}, {"$set":{str(nameOfRestaurant)+".tables."+str(tableno): table}},upsert=True);
    return(0)




@app.route("/checkforcheckins/<data>", methods=['GET', 'POST'])
def checkforcheckins(data):
    data=json.loads(data)
    restaurant=data["restaurant"]
    tableno=data["tableno"]
    identity=data["identity"]
    consumerArray=getRestaurantsTableConsumerInformation(restaurant,tableno)
    return json.dumps({"consumers":consumerArray})
@app.route("/dashboardmenu/", methods=['GET', 'POST'])
def dashboardmenu():
   return "menu"
@app.route("/dashboardactivatedeactivatemenu/<items>", methods=['GET', 'POST'])
def dashboardactivatedeactivatemenu(items):
         MONGODB_URI="mongodb://Debangshu:Starrynight.1@ds163694.mlab.com:63694/brilu"
         client = MongoClient(MONGODB_URI, connectTimeoutMS=30000)
         db = client.get_database("brilu")
         col = db["restaurants"]
         cursor = col.find()
         restaurant = cursor[0]
         menujson=restaurant["Taj"]["menu"]
         itemjson=json.loads(items)
         truefalse=itemjson[1]
         truefalse=str(truefalse)
         itemjson=itemjson[0]   
         category0=str(itemjson[0])
         category1=str(itemjson[1])
         category2=str(itemjson[2])
         category2=category2.replace("_"," ")
         category1=category1.replace("_"," ")
         item=menujson[category0][category1][category2]   
         item['active']=truefalse
         db.restaurants.update({"_id" : "restaurant"}, {"$set":{"Taj"+".menu."+category0+"."+category1+"."+category2: item}},upsert=True);
       
         print(item)
         return "success"
    
    
    
    
    
    
if __name__ == "__main__":
 socketio.run(app)
