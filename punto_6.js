const prompt = require("prompt-sync")();

function convertirUnidades(tipo, valor, unidadPrincipal, unidadSecundaria) {
       let resultado

       try {
        if ( tipo === "Temperatura") {
            if (unidadPrincipal === "C" && unidadSecundaria === "F") {
                resultado = (valor * 9/5) + 32
            }
            else if (unidadPrincipal === "C" && unidadSecundaria === "K") {
                resultado = (valor + 273.15)
            }
            else if (unidadPrincipal === "F" && unidadSecundaria === "C") {
                resultado = (valor - 32) * 5/9
            }
            else if (unidadPrincipal === "F" && unidadSecundaria === "K") {
                resultado = (valor - 32) * 5/9 + 273.15
            }
            else if (unidadPrincipal === "K" && unidadSecundaria === "C") {
                resultado = valor - 273.15
            }
            else if (unidadPrincipal === "K" && unidadSecundaria === "F") {
                resultado = (valor - 273.15) * 9/5 + 32
            } else {
                throw new Error(" ⚠️ Unidades de temperatura invalidas.")
            }
        }
        else if ( tipo === "Longitud") {
            if (unidadPrincipal === "m" && unidadSecundaria === "km") {
                resultado = valor / 1000
            }
            else if (unidadPrincipal === "m" && unidadSecundaria === "mi") {
                resultado = valor / 1609.34
            }
            else if (unidadPrincipal === "km" && unidadSecundaria === "m") {
                resultado = valor * 1000
            }
            else if (unidadPrincipal === "km" && unidadSecundaria === "mi") {
                resultado = valor / 1.609
            }
            else if (unidadPrincipal === "mi" && unidadSecundaria === "m") {
                resultado = valor * 1609.34
            }
            else if (unidadPrincipal === "mi" && unidadSecundaria === "km") {
                resultado = valor - 1.609
            } else {
                throw new Error(" ⚠️ Unidades de longitud invalidas.")
            }
        }
        else if (tipo === "Peso") {
            if (unidadPrincipal === "g" && unidadSecundaria === "kg") {
                resultado = valor / 1000
            }
            else if (unidadPrincipal === "g" && unidadSecundaria === "lb") {
                resultado = valor / 453.592
            }
            else if (unidadPrincipal === "kg" && unidadSecundaria === "g") {
                resultado = valor * 1000
            }
            else if (unidadPrincipal === "kg" && unidadSecundaria === "lb") {
                resultado = valor * 2.205
            }
            else if (unidadPrincipal === "lb" && unidadSecundaria === "g") {
                resultado = valor * 453.592
            }
            else if (unidadPrincipal === "lb" && unidadSecundaria === "kg") {
                resultado = valor / 2.205
            } else {
                throw new Error(" ⚠️ Unidades de peso invalidas.")
            }
        } else {
            throw new Error(" ⚠️ Tipo de conversion invalida.")
        }
       } catch (error) {
        console.log(`⚠️ Error: ${error.message}`)
        return null
       }

       return resultado
}

function mostrarResultado(valor, unidadPrincipal, unidadSecundaria, resultado) {
    console.log(`✅ ${valor} ${unidadPrincipal} equivale a ${resultado.toFixed(2)} ${unidadSecundaria}`)
}

function main(){
    while (true){
        console.log("\n Conversor de Unidades")
        console.log("1. Convertir temperatura (C, F, K)")
        console.log("2. Convertir longitud (m, km, mi)")
        console.log("3. Convertir peso (g, kg, lb)")
        console.log("4. Salir");

        let opcion = prompt("Seleccione una opción: ")

        if (opcion === "4") {
            console.log("👋 Saliendo del conversor.")
            break;
        }

        let tipo, unidadPrincipal, unidadSecundaria 
        switch (opcion) {
            case "1":
                tipo = "Temperatura"
                unidadPrincipal = prompt("Ingrese la unidad principal (C, F, K): ").toUpperCase()
                unidadSecundaria = prompt("Ingrese la unidad secundaria (C F, K): ").toUpperCase()
                break
            case "2":
                tipo = "Longitud"
                unidadPrincipal = prompt("Ingrese la unidad principal (m, km, mi): ").toLowerCase()
                unidadSecundaria = prompt("Ingrese la unidad secundaria (m, km, mi): ").toLowerCase()
                break
            case "3":
                tipo = "Peso"
                unidadPrincipal = prompt("Ingrese la unidad principal (g, kg, lb): ").toLowerCase()
                unidadSecundaria = prompt("Ingrese la unidad secundaria (g, kg, lb): ").toLowerCase()
                break
            default:
                console.log("⚠️ Opción inválida.")
                continue
        }
        
        let valor = parseFloat(prompt("Ingres el valor a convertir: "))
            if (isNaN(valor) || valor < 0) {
                console.log("⚠️ Entrada inválida. Ingrese un número positivo.")
                continue
            }
        let resultado = convertirUnidades(tipo, valor, unidadPrincipal, unidadSecundaria)
            if (resultado !== null) {
                mostrarResultado(valor, unidadPrincipal, unidadSecundaria, resultado)
            }
        }
}

main()