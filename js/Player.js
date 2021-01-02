class Player{
    constructor(){
        this.name = null
        this.distance = 0
        this.index = null
    }
    getCount(){
        var playerCountref = database.ref("playerCount")
        playerCountref.on("value", (data) => {
            playerCount = data.val();
        })
        }
    updateCount(count){
        database.ref("/").update({
        playerCount:count
        })
    }
    update(){
        var playerindex = "players/player"+this.index
        database.ref(playerindex).set({
        name:this.name,
        distance:this.distance
        })
    }
    static getplayerinfo(){
        var playerinforef = database.ref("players")
        playerinforef.on("value", (data) => {
            allplayers = data.val();      
        })
    }
}
