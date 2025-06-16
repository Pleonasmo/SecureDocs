function carregarDados() {
    carregarKPIS();
    carregarGraficos();
    kpiQtdTentativas();
}

function carregarKPIS() {
    fetch("/dashboard/totalUsuarioSite", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then( resultado => {
        resultado.json()
        .then(json => {
            let kpi = document.getElementById("kpi1");
            kpi.innerHTML = json.lista[0].qtd
        })
    })

    fetch("/dashboard/mediaAcertos", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resultado => {
        resultado.json()
        .then(json => {
            let kpi = document.getElementById("kpi2")
            kpi.innerHTML = json.lista[0].taxa + "%"
        })
    })

    fetch("/dashboard/mediaErros", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resultado => {
        resultado.json()
        .then(json => {
            let kpi = document.getElementById("kpi3")
            kpi.innerHTML = json.lista[0].taxa + "%"
        })
    })
}

function carregarGraficos() {
    fetch("/dashboard/carregarRanking", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resultado => {
        resultado.json()
        .then(json => {
            const ctx2 = document.getElementById('myChart2');
            let lista = []
            lista.push(json.lista[0].qtdPreHistoria)
            lista.push(json.lista[0].qtdIdadeAntiga)
            lista.push(json.lista[0].qtdIdadeMedia)
            lista.push(json.lista[0].qtdIdadeModerna)
            lista.push(json.lista[0].qtdIdadeContemporanea)

                    new Chart(ctx2, {

                        type: 'bar', data: {

                            labels: ['Pré-História', 'Idade Antiga', 'Idade Média', 'Idade Moderna', 'Idade Contemporânea'],
                            
                            datasets: [

                                {
                                    label: 'Votos dos Usuários',
                                    data: lista,
                                    backgroundColor: 'brown',
                                    borderColor: 'black',
                                    borderWidth: 1
                                }

                            ]

                        },

                        options: {

                            responsive: true,

                            scales: {

                                y: {

                                    beginAtZero: true

                                }

                            }

                        }

            });
        })
    })

    fetch("/dashboard/graficoRespostas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resultado => {
        resultado.json()
        .then(json => {
            let lista = json.lista[0]
            
            let listaAcertos = []
            let listaErros = []

            for(let i = 1; i <= 20; i++) {
                let acerto = `acertoQ${i}`;
                let erro = `erroQ${i}`;

                listaAcertos.push(lista[acerto])
                listaErros.push(lista[erro])
            }
            
            const ctx1 = document.getElementById('myChart1');
            
            new Chart(ctx1, {
                
                type: 'bar', data: {
                    
                    labels: ['Questão 1', 'Questão 2', 'Questão 3', 'Questão 4', 'Questão 5', 'Questão 6', 'Questão 7', 'Questão 8', 'Questão 9', 'Questão 10', 'Questão 11',
                        
                        'Questão 12', 'Questão 13', 'Questão 14', 'Questão 15', 'Questão 16', 'Questão 17', 'Questão 18', 'Questão 19', 'Questão 20'],
                        
                        datasets: [
                            
                            {
                                label: 'Acertos',
                                data: listaAcertos,
                                backgroundColor: 'green',
                                borderColor: 'black',
                                borderWidth: 1
                            },
                            
                            {
                                label: 'Erros',
                                data: listaErros,
                                backgroundColor: 'red',
                                borderColor: 'black',
                                borderWidth: 1
                            }
                            
                        ]
                        
                    },
                    
                    options: {
                        
                        responsive: true,
                        
                        scales: {
                            
                            y: {
                                
                                beginAtZero: true
                                
                            }
                            
                        }
                        
                    }
                    
                });
            })
    })
}


function kpiQtdTentativas() {
    fetch("/dashboard/kpiQtdTentativas").then((res) => {
            res.json().then((res) => {
                let kpi = document.getElementById("kpi4");
                kpi.innerHTML = res[0].qtd;
            })
    })
}


