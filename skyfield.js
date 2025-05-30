function changeContent(section) {
    let content = document.getElementById("content");
    
    if (section === "alertas") {
        content.innerHTML = "<h2>Alertas Climáticos</h2><p>Fique atento às mudanças inesperadas e avisos de tempestades.</p>";
    } else if (section === "safras") {
        content.innerHTML = "<h2>Informações sobre Safras</h2><p>Acompanhe previsões e impactos climáticos nas colheitas.</p>";
    } else if (section === "minha região") {
        content.innerHTML = "<h2>Clima na Minha Região</h2><p>Veja previsões detalhadas para a sua localização.</p>";
    } else if (section === "análises e relatórios") {
        content.innerHTML = "<h2>Análises e Relatórios</h2><p>Dados aprofundados sobre tendências climáticas e agrícolas.</p>";
    }
}
