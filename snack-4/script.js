const squadre = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Lecce", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Catania", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Manchester", puntiFatti: 0, falliSubiti: 0 },
    ]


squadre.forEach((squadra) =>{
    squadra.puntiFatti = makeRandomInterval(1, 100);
    squadra.falliSubiti = makeRandomInterval(5, 20);
})

console.log(squadre)

    function makeRandomInterval(min, max){
        return Math.floor(Math.random()* (max-min)) + min
    }
    