var gay = document.querySelector("#nome");
        var level = document.querySelector("#nivel");
        var attack = document.querySelector("#poder");
        var force = document.querySelector("#forca");
        var defesa = document.querySelector("#defesa");
        var armadura = document.querySelector("#armadura");
        var agilidade = document.querySelector("#agilidade");
        var D4 = document.querySelector("#d4");
        var D6 = document.querySelector("#d6");
        var D8 = document.querySelector("#d8");
        var D10 = document.querySelector("#d10");
        var D12 = document.querySelector("#d12");
        var D20 = document.querySelector("#d20");
        var D100 = document.querySelector("#d100");
        var D1000 = document.querySelector("#d1000");
        var resultado = document.querySelector("#resultado");

        gay.addEventListener("change", NomeN);
        force.addEventListener("change", calcularAtributos);
        level.addEventListener("change", function() {
            NomeN();
            calcularAtributos();
        });
        agilidade.addEventListener("change", calcularAtributos);
        armadura.addEventListener("change", calcularAtributos);
        D4.addEventListener("click", DADO4);
        D6.addEventListener("click", DADO6);
        D8.addEventListener("click", DADO8);
        D10.addEventListener("click", DADO10);
        D12.addEventListener("click", DADO12);
        D20.addEventListener("click", DADO20);
        D100.addEventListener("click", DADO100);
        D1000.addEventListener("click", DADO1000);

        function NomeN() {
            var nome = gay.value;
            var nivel = parseInt(level.value);

            if (nivel >= 5 && nivel <= 10) {
                if (!nome.includes("[VETERANO]")) {
                    gay.value = nome.replace(" [INICIANTE]", "") + " [VETERANO]";
                }
            } else if (nivel >= 1 && nivel <= 4) {
                if (!nome.includes("[INICIANTE]")) {
                    gay.value = nome.replace(" [VETERANO]", "") + " [INICIANTE]";
                }
            }
        }

        function calcularAtributos() {
            attack.value = ((force.value - 10)/2) + level.value/2

            var agilidade_numero = parseInt(agilidade.value)
            var armadura_numero = parseInt(armadura.value)
            defesa.value =  agilidade_numero + armadura_numero
        
        
        }

        function rolarDado(lados) {
            return Math.floor(Math.random() * lados) + 1;
        }

        function DADO4() {
            resultado.textContent = "D4: " + rolarDado(4);
        }

        function DADO6() {
            resultado.textContent = "D6: " + rolarDado(6);
        }

        function DADO8() {
            resultado.textContent = "D8: " + rolarDado(8);
        }

        function DADO10() {
            resultado.textContent = "D10: " + rolarDado(10);
        }

        function DADO12() {
            resultado.textContent = "D12: " + rolarDado(12);
        }

        function DADO20() {
            resultado.textContent = "D20: " + rolarDado(20);
        }

        function DADO100() {
            resultado.textContent = "D100: " + rolarDado(100);
        }

        function DADO1000() {
            resultado.textContent = "D1000: " + rolarDado(1000);
        }