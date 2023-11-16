var games = ['https://www.ricedigital.co.uk/wp-content/uploads/2013/07/Earthbound.jpg','https://i.ytimg.com/vi/QKL7BR4aauY/maxresdefault.jpg','https://www.lukiegames.com/assets/images/SNES/snes_final_fantasy_3_p_wgtfw8.jpg','https://i.ytimg.com/vi/4MZJaNO9SSo/maxresdefault.jpg']


document.addEventListener('DOMContentLoaded', function() {
    for (var i = 0; i < games.length; i++) {
        document.getElementById('games').innerHTML += '<img src=' + games[i] + '>';
    }    
})