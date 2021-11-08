window.addEventListener('DOMContentLoaded', DOMContentLoaded => {
    const teams = get_teams(); 
    
    populate_dropdowns(teams); 
    get_todays_matches(); 
    get_future_matches();
    update_standing(teams);
    populate_standing(teams); 
    
    const kcac = document.querySelector('#kcac-data'); 
    console.log('KCAC SITE'); 
    console.log(kcac.contentWindow.document.querySelector('div')); 
}); 

const populate_dropdowns = teams =>{
    teams.forEach(team => {
        const option = document.createElement('option'); 
        option.setAttribute('value', team.name); 
        document.querySelector('.team-selection #HomeTeamSelector').appendChild(option)
        
        const option_away = document.createElement('option'); 
        option_away.setAttribute('value', team.name); 
        document.querySelector('.team-selection #AwayTeamSelector').appendChild(option_away); 
    });
};


const get_teams = () => {
    return [
       {name: 'Oklahoma Wesleyan', wins: 6, losses: 0, tie: 0},
       {name: 'Saint Mary', wins: 1, losses: 5, tie: 0},
       {name: 'Bethany', wins: 1, losses: 4, tie: 0},
       {name: 'McPherson', wins: 5, losses: 1, tie: 0},
       {name: 'Southwestern', wins: 2, losses: 3, tie: 1},
       {name: 'Bethel', wins: 3, losses: 2, tie: 0},
       {name: 'Ottawa', wins: 3, losses: 2, tie: 0},
       {name: 'Kansas Wesleyan', wins: 0, losses: 5, tie: 0},
       {name: 'Friends', wins: 5, losses: 0, tie: 1},
       {name: 'Sterling', wins: 2, losses: 3, tie: 0},
       {name: 'Avila', wins: 0, losses: 4, tie: 2},
       {name: 'Tabor', wins: 4, losses: 1, tie: 0},
       {name: 'York', wins: 2, losses: 4, tie: 0},
    ]; 

}


const populate_standing = teams => {
    const standing_el = document.querySelector('.kcac-standing ol'); 
    standing_el.innerHTML = ''; 

    teams.forEach(team => {
        const team_li = document.createElement('li'); 
        team_li.innerHTML = `<b>${team.name}</b> : ${team.wins} <em>WINS</em> | ${team.losses} <em>LOSSES</em>| ${team.tie} <em>Ties</em>`; 
        standing_el.appendChild(team_li); 
    }); 

    //console.log('TEST'); 
}; 

const update_standing = teams => {
    teams.forEach(team =>{
        teams.sort((a, b) =>
            b.wins - a.wins ||
            b.tie - a.tie||
            b.losses - a.losses ||
            team[a.team] - team[a.team]
        );
    });
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