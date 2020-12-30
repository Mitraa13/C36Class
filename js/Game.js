class Game{
    constructor(){

    }

    gamestate(){
        var gS = database.ref("gameState");
        gS.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref("/").set({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}