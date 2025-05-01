let nombreMovi;
let tipo;
let monto;

console.log("Registro de cajas");

let ingreso=0, egreso=0;
let ans = "si"
let cont=0;
let saldoTotal=0;

function registrarMovimiento(){
    while(ans=="si"){
        nombreMovi = prompt("Nombre del movimiento: ");
        tipo = prompt("Tipo: ");
        monto = prompt("Monto: ");   
        if(verificar(nombreMovi,tipo,monto)){
            cont++;
            if(tipo=="ingreso"){
                ingreso+=Number(monto);
            }
            else if(tipo=="egreso"){
                egreso+=Number(monto);
            }
        }
        else{
            alert("Ingresa datos validos");
            continue;
        }
        ans = prompt("¿Registrar otro movimiento? (si/no)")
    }
    saldoTotal=ingreso-egreso;
}
function verificar(nombre, tipo, monto){
    if(nombre!=null && tipo!=null){
        if(isNaN(monto)){
            return false;
        }
        else{
            return true;
        }
    }
}

function mostrarResumen(){
    console.log(`Total de movimientos registrados: ${cont}`);   
    console.log(`Saldo total: ${saldoTotal}`);   
    console.log("Desglose por tipo:");
    console.log(`- Egresos: ${egreso}`);
    console.log(`- Ingresos: ${ingreso}`);
}