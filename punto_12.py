gastos = [
    {"categoria": "vivienda", "descripcion": "arriendo", "monto": 800.000},
    {"categoria": "transporte", "descripcion": "bus", "monto": 400.000},
    {"categoria": "ocio", "descripcion": "fiesta", "monto": 400.000},
    {"categoria": "alimentacion", "descripcion": "mercado", "monto": 600.000}
]

def agregar_gasto():
    global gastos
    categoria=input("Ingrese la categoria de su gasto: ")
    descripcion=input("Ingrese la descripcion de su gasto ")
    try:
        monto=float(input("Ingrese el monto equivalente al gasto "))
        gastos.append({"categoria": categoria, "descripcion": descripcion, "monto": monto})
    except ValueError:
            print("Ingrese un monto valido, recuerde ingresar sólo números")
            
def editar_gasto():
    global gastos
    categoria_ = input("Ingrese la categoría a la que le quiere editar el gasto: ")
    
    buscar= [gasto for gasto in gastos if gasto["categoria"] == categoria_]
    if not buscar:
        print(" No se encontró la categoria .")
        return
    
    try:
        nuevo_monto = float(input("Ingrese el nuevo monto  en esta categoría: "))
        for gasto in gastos:
            if gasto["categoria"] == categoria_:
                gasto["monto"] = nuevo_monto
        print("Se ha actualizado el monto de la categoria.")
    
    except ValueError:
        print("Ingrese un monto valido, recuerde ingresar sólo números")
        
            
def eliminar_gasto():
    global gastos
    categoria_eliminar = input("Ingrese la categoría a la que le quiere eliminar el gasto: ")
    
    buscar_= [gasto for gasto in gastos if gasto["categoria"] == categoria_eliminar]
    if not buscar_:
        print(" No se encontró la categoria .")
        return
    
    gastos= [gasto for gasto in gastos if gasto["categoria"]!= categoria_eliminar]
    print("Se ha eliminado correctamente el gasto")
            
def listar_gastos():
    if not gastos:
        print("No hay gastos registrados.")
        return
    for gasto in gastos:
        print(f"{gasto['categoria']}-{gasto['descripcion']}-{gasto['monto']}")
        
        

def categorizar_gastos():
    global gastos
    categorizar = input("Ingrese la categoria que quiere ver: ")
    
    buscar_gastos= [gasto for gasto in gastos if gasto["categoria"] == categorizar]
    if not buscar_gastos:
        print(" No se encontró la categoria .")
        return
    
    for gasto in buscar_gastos:
        print(f"{gasto['descripcion']}---{gasto['monto']}")


def calcular_total_gastos():
    if not gastos:
        print("No hay gastos ")
        return

    total_gastos = sum(gasto["monto"] for gasto in gastos)
    print(f"El total de gastos es {total_gastos:.3f}")     

def menu_control_gastos():
    while True:
        print("\n Menú de Control de Gastos:")
        print("1. Agregar gasto")
        print("2. Listar gastos")
        print("3. Editar gasto")
        print("4. Eliminar gasto")
        print("5. Ver gastos por categoría")
        print("6. Calcular total de gastos")
        print("7. Salir")

        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            agregar_gasto()
        elif opcion == "2":
            listar_gastos()
        elif opcion == "3":
            editar_gasto()
        elif opcion == "4":
            eliminar_gasto()
        elif opcion == "5":
            categorizar_gastos()
        elif opcion == "6":
            calcular_total_gastos()
        elif opcion == "7":
            print("Saliendo del programa...")
            break
        else:
            print("Opción inválida, por favor intente de nuevo")

menu_control_gastos()            