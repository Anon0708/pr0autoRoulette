let start_bet = 1;
let max_bet = 64;

let bet_input = 0;
let history_length = 0;
setInterval(async () => {
    history_length = document.getElementById("history").children
    if(!document.getElementById('spin').disabled && temp1.getFields().red == undefined) {
        if(history_length.length != 0) {
            let history = document.getElementById("history").children[0].innerText
            let index_start = history.indexOf("Win");
            let index_last = history.indexOf("(");
            let res = history.substring(index_start+4, index_last);
            let win_int = parseInt(res)

            index_start = history.indexOf("Bet");
            index_last = history.indexOf("(");
            res = history.substring(index_start+4, index_last);
            let bet_int = parseInt(res)

            if(win_int > 0) {
                bet_input = start_bet
            }
            else {
                if(bet_input < max_bet) {
                    bet_input  = bet_int * 2
                }
                else {
                    bet_input = start_bet
                }
            }
            document.getElementById("bet").value = bet_input
        }
        
        
        while (temp1.getFields().red == undefined) {
            await temp1.placeChip({x: "lol"});
            document.getElementById("spin").click()
        }
    }
}, 500)
    
