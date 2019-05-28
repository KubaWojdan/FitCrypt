$(document).ready(function(){
    
   /*$('.js--o-nas').waypoints(function(direction){
        if(direction == "down"){
            $('nav').addClass('.sticky');
        }else{
            $('nav').removeClass('.sticky');
        }
    }, {
        offset: '60px'
    });
    
    
    var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window')
}, {
  offset: '25%'
});*/
    
    /* Mobile nav */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    
    
});








//********************************************************WYSTWIETL NOWEGO DIVA - DIETY****************************************************************
function showNew(){
    var dieta1 = document.getElementById('dieta1');
    var dieta2 = document.getElementById('dieta2');
    var dieta3 = document.getElementById('dieta3');
    var dieta4 = document.getElementById('dieta4');
    var dieta5 = document.getElementById('dieta5');
    var dieta6 = document.getElementById('dieta6');
    var dieta7 = document.getElementById('dieta7');
    var dieta8 = document.getElementById('dieta8');
    
    if(document.getElementById("diety").selectedIndex == 0){
        dieta1.style.display = 'block';
        dieta2.style.display = 'none';
        dieta3.style.display = 'none';
        dieta4.style.display = 'none';
        dieta5.style.display = 'none';
        dieta6.style.display = 'none';
        dieta7.style.display = 'none';
        dieta8.style.display = 'none';
    } else if(document.getElementById("diety").selectedIndex == 1){
        dieta1.style.display = 'none';
        dieta2.style.display = 'block';
        dieta3.style.display = 'none';
        dieta4.style.display = 'none';
        dieta5.style.display = 'none';
        dieta6.style.display = 'none';
        dieta7.style.display = 'none';
        dieta8.style.display = 'none';
}else if(document.getElementById("diety").selectedIndex == 2){
        dieta1.style.display = 'none';
        dieta2.style.display = 'none';
        dieta3.style.display = 'block';
        dieta4.style.display = 'none';
        dieta5.style.display = 'none';
        dieta6.style.display = 'none';
        dieta7.style.display = 'none';
        dieta8.style.display = 'none';
}else if(document.getElementById("diety").selectedIndex == 3){
        dieta1.style.display = 'none';
        dieta2.style.display = 'none';
        dieta3.style.display = 'none';
        dieta4.style.display = 'block';
        dieta5.style.display = 'none';
        dieta6.style.display = 'none';
        dieta7.style.display = 'none';
        dieta8.style.display = 'none';
}else if(document.getElementById("diety").selectedIndex == 4){
        dieta1.style.display = 'none';
        dieta2.style.display = 'none';
        dieta3.style.display = 'none';
        dieta4.style.display = 'none';
        dieta5.style.display = 'block';
        dieta6.style.display = 'none';
        dieta7.style.display = 'none';
        dieta8.style.display = 'none';
}else if(document.getElementById("diety").selectedIndex == 5){
        dieta1.style.display = 'none';
        dieta2.style.display = 'none';
        dieta3.style.display = 'none';
        dieta4.style.display = 'none';
        dieta5.style.display = 'none';
        dieta6.style.display = 'block';
        dieta7.style.display = 'none';
        dieta8.style.display = 'none';
}else if(document.getElementById("diety").selectedIndex == 6){
        dieta1.style.display = 'none';
        dieta2.style.display = 'none';
        dieta3.style.display = 'none';
        dieta4.style.display = 'none';
        dieta5.style.display = 'none';
        dieta6.style.display = 'none';
        dieta7.style.display = 'block';
        dieta8.style.display = 'none';
}else if(document.getElementById("diety").selectedIndex == 7){
        dieta1.style.display = 'none';
        dieta2.style.display = 'none';
        dieta3.style.display = 'none';
        dieta4.style.display = 'none';
        dieta5.style.display = 'none';
        dieta6.style.display = 'none';
        dieta7.style.display = 'none';
        dieta8.style.display = 'block';
}

}

//********************************************************POKAZ INNY CENNIK****************************************************************
function getDiv() {
    var cennik1 = document.getElementById('cennik1');
    var cennik2 = document.getElementById('cennik2');
    var cennik3 = document.getElementById('cennik3');
    var cennik4 = document.getElementById('cennik4');
    var cennik5 = document.getElementById('cennik5');
    var cennik6 = document.getElementById('cennik6');
    
    if(document.getElementById("mySelect").selectedIndex == 0){
        cennik1.style.display = 'block';
        cennik2.style.display = 'none';
        cennik3.style.display = 'none';
        cennik4.style.display = 'none';
        cennik5.style.display = 'none';
        cennik6.style.display = 'none';
    }else if(document.getElementById("mySelect").selectedIndex == 1){
        cennik1.style.display = 'none';
        cennik2.style.display = 'block';
        cennik3.style.display = 'none';
        cennik4.style.display = 'none';
        cennik5.style.display = 'none';
        cennik6.style.display = 'none';
    }else if(document.getElementById("mySelect").selectedIndex == 2){
        cennik1.style.display = 'none';
        cennik2.style.display = 'none';
        cennik3.style.display = 'block';
        cennik4.style.display = 'none';
        cennik5.style.display = 'none';
        cennik6.style.display = 'none';
    }else if(document.getElementById("mySelect").selectedIndex == 3){
        cennik1.style.display = 'none';
        cennik2.style.display = 'none';
        cennik3.style.display = 'none';
        cennik4.style.display = 'block';
        cennik5.style.display = 'none';
        cennik6.style.display = 'none';
    }else if(document.getElementById("mySelect").selectedIndex == 4){
        cennik1.style.display = 'none';
        cennik2.style.display = 'none';
        cennik3.style.display = 'none';
        cennik4.style.display = 'none';
        cennik5.style.display = 'block';
        cennik6.style.display = 'none';
    }else if(document.getElementById("mySelect").selectedIndex == 5){
        cennik1.style.display = 'none';
        cennik2.style.display = 'none';
        cennik3.style.display = 'none';
        cennik4.style.display = 'none';
        cennik5.style.display = 'none';
        cennik6.style.display = 'block';
    }
}
//********************************************************KALKULATOR****************************************************************
//****************OBLICZENIA
var kalkulatorController = (function(){ 

    var kalorie;
    var bmi;
    
    return {
        liczKalorie: function(obj){
            kalorie = obj.age+obj.height+obj.weight;
    },
        
        liczBMI: function(obj){
            bmi = obj.age+obj.height+obj.weight;
    },
        getResult: function(){
            return {
                zapotrzebowanie: kalorie,
                bmi: bmi
            };  
    },
        
    }; 
})();    
    
//****************POBIERANIE DANYCH
var UIController = (function(){
    var DOMstrings = { // obiekt przechowujacy nazwy zmienny klas
        inputAge: '.age',
        inputWeight: '.weight',
        inputHeight: '.height'
    };
    return {
        getInput: function() {
            return {
                age: document.querySelector(DOMstrings.inputAge).value,
                weight: document.querySelector(DOMstrings.inputWeight).value,
                height: document.querySelector(DOMstrings.inputHeight).value
            };
        }
    };
    
})();

//****************REZULTAT
var calculator = (function(kalkCtrl, UICtrl){ 

    
    var setupEventListeners = function() {
        document.getElementById('oblicz').addEventListener("click", addItems);
    };

    
    var addItems = function(){
        
//1. pobierz dane z inputow
        var input;
        input = UICtrl.getInput();
//2. policz zapotrzebowanie kaloryczne i BMI
        kalkCtrl.liczKalorie(input);
        kalkCtrl.liczBMI(input);
//3. zapisz wyniki do zmiennych
        var wynikKalorie;
        var wynikBmi;
        wynikKalorie = kalkCtrl.getResult.zapotrzebowanie;
        wynikBmi = kalkCtrl.getResult.bmi;
//4. przekaz wyniki do HTML i wystwietl
        document.getElementById('kalorie').innerHTML = wynikKalorie;
        document.getElementById('bmi').innerHTML = wynikBmi;
    };
    
    return {
        init: function(){
            console.log('start');
            setupEventListeners();
        }
    };
    
})(kalkulatorController, UIController);
    
calculator.init();