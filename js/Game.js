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
    async start(){
        if(gameState===0){
            player = new Player();
            var playerCountref = await database.ref("playerCount").once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getplayerinfo();
        if(allplayers !== undefined){
            var display_position = 130;
            for(var plr in allplayers){
                if(plr === "player"+player.index)                
                fill("red");
                else 
                fill("black");
                display_position+=20;
                textSize(15);
                text(allplayers[plr].name+":"+allplayers[plr].distance,120,display_position);
            }
        }
    }
}