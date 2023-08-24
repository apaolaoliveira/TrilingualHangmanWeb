// Português
$(function SetPortuguese () {
    $(".br").click(function(){
        // Cabeçalho
        $(".title").text("Jogo da forca");

        // Mudar língua
        $(".language-selected").text("pt-br");
        $(".language-icon").attr("src", "src/Imgs/flags/br.png");

        // Botão novo jogo
        $(".newGame").text("Novo Jogo");
        
        // Mudar Tema
        $(".theme-selected").text("Escolha um tema");
        $(".theme-icon").attr("src", "src/Imgs/themes/emptyIcon.png");
        
        $(".fruits").text("Frutas");
        $(".animals").text("Animais");
        $(".professions").text("Profissões");
        $(".colours").text("Cores");
        
        // Rodapé
        $(".madeBy").text("Feito por ");
    });
});

// English
$(function SetEnglish () {
    $(".en").click(function(){
        // Header
        $(".title").text("Hangman Game");
        
        // Change Language
        $(".language-selected").text("en");
        $(".language-icon").attr("src", "src/Imgs/flags/en.png");

        // New game button
        $(".newGame").text("New Game");
        $(".theme-icon").attr("src", "src/Imgs/themes/emptyIcon.png");
        
        // Change Themes
        $(".theme-selected").text("Choose a theme");
        
        $(".fruits").text("Fruits");
        $(".animals").text("Animals");
        $(".professions").text("Professions");
        $(".colours").text("Colors");
        
        // Footer
        $(".madeBy").text("Made by ");
    });
});

// Español
$(function setSpanish () {
    $(".es").click(function(){
        // Cabeza
        $(".title").text("Juego del ahorcado");
        
        // Cambiar Idioma
        $(".language-selected").text("es");
        $(".language-icon").attr("src", "src/Imgs/flags/es.png");

        // Boton nuevo juego
        $(".newGame").text("Nuevo juego");
        
        // Cambiar Temas
        $(".theme-selected").text("Elige un tema");
        $(".theme-icon").attr("src", "src/Imgs/themes/emptyIcon.png");

        $(".fruits").text("Frutas");
        $(".animals").text("Animales");
        $(".professions").text("Profesiones");
        $(".colours").text("Colores");

        // Pie de Página
        $(".madeBy").text("Hecho por ");
    });
});

$(function setMenu () {
    $(".lang-arrow").click(function() {
        $(".language ul").toggle();
    });
    $(".language ul li a").click(function() {
        $(".language ul").hide();
    });

    $(".theme-arrow").click(function() {
        $(".theme ul").toggle();
    });     
    $(".theme ul li a").click(function() {
        $(".theme ul").hide();
    }); 

});

$(function SetThemeOption () {
    $(".theme-option").click(function() {
        var selectedTheme = $(this).text();
        $(".theme-selected").text(selectedTheme);
    });

    $(".fruits").click(function(){
        $(".theme-icon").attr("src", "src/Imgs/themes/fruitIcon.png");
    });

    $(".animals").click(function(){
        $(".theme-icon").attr("src", "src/Imgs/themes/animalIcon.png");
    });

    $(".professions").click(function(){
        $(".theme-icon").attr("src", "src/Imgs/themes/professionIcon.png");
    });

    $(".colours").click(function(){
        $(".theme-icon").attr("src", "src/Imgs/themes/colourIcon.png");
    });
});