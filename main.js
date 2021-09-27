window.addEventListener('DOMContentLoaded', DOMContentLoaded => {
    const kcac_data = document.querySelector('iframe#kcac-data'); 
    console.log(kcac_data); 
    
    get_standing(); 
    get_todays_matches(); 
    get_future_matches(); 
    get_team_names();
}); 

/*
const get_team_names = () =>{
    const team_name = [
        {name: 'Oklahoma Wesleyan'},
        {name: 'Saint Mary'},
        {name: 'Bethany'}, 
        {name: 'McPherson'},
        {name: 'Southwestern'},
        {name: 'Bethel'},
        {name: 'Ottawa'},
        {name: 'Kansas Wesleyan'},
        {name: 'Friends'},
        {name: 'Sterlings'},
        {name: 'Avila'},
        {name: 'Tabor'},
        {name: 'York' },
    ]; 

    team_name.forEach(team => {
        const team_data_list = document.createElement('datalist');
        team_data_list.innerHTML = team_name
        document.querySelector('.team-selection HomeTeamSelector').appendChild('team_data_list')
    });
};
*/
const get_standing = () => {
    const team_names = [
        {name: 'Oklahoma Wesleyan', wins: 0, losses: 0},
        {name: 'Saint Mary', wins: 0, losses: 0},
        {name: 'Bethany', wins: 0, losses: 0},
        {name: 'McPherson', wins: 0, losses: 0},
        {name: 'Southwestern', wins: 0, losses: 0},
        {name: 'Bethel', wins: 0, losses: 0},
        {name: 'Ottawa', wins: 0, losses: 0},
        {name: 'Kansas Wesleyan', wins: 0, losses: 0},
        {name: 'Friends', wins: 0, losses: 0},
        {name: 'Sterling', wins: 0, losses: 0},
        {name: 'Avila', wins: 0, losses: 0},
        {name: 'Tabor', wins: 0, losses: 0},
        {name: 'York', wins: 0, losses: 0},
    ]; 

    team_names[8].wins = 10; 
    
    team_names.forEach(team => {
        const team_li = document.createElement('li'); 
        team_li.innerHTML = `<b>${team.name}</b> : ${team.wins} <em>WINS</em> | ${team.losses} <em>LOSSES</em>`; 
        document.querySelector('.kcac-standing ol').appendChild(team_li); 
    }); 

    console.log('TEST'); 
}; 

const get_todays_matches = () => {
    var current_date = new Date();
    var month = current_date.getMonth() + 1;
    var day = current_date.getDate();
    var year = current_date.getFullYear();
    var formatted_date_string = day + '/' + month + '/' + year;
    document.getElementById('current_date').innerHTML=formatted_date_string;
}; 

const get_future_matches = () => {
    var future_date = new Date();
    var month = future_date.getMonth()+1;
    var day = future_date.getDate()+1;
    var year = future_date.getFullYear();
    var formatted_future_date_string = day + '/' + month + '/' + year ; 
    document.getElementById('future_date').innerHTML = formatted_future_date_string;
}; 