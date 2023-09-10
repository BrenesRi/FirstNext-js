import React from "react"

//Funcionalidad asíncrona con Servidor

//async function getPart(codigo){
//const res = await fetch("solicitud al servidor del codigo especifico")
//const data = await res.json()
//return data.data;
//}

const partsJson = [
  {
    "codigo": "R001",
    "nombre": "Filtro de Aceite",
    "cantidad": 50,
    "cantidad_minima": 5,
    "cantidad_maxima": 100,
    "proveedor": "Proveedor A",
    "prioridad": "Alta",
    "ubicacion": "Almacén A",
    "imagen": "img/R001.png"
  },
  {
    "codigo": "R002",
    "nombre": "Batería de Coche",
    "cantidad": 30,
    "cantidad_minima": 10,
    "cantidad_maxima": 50,
    "proveedor": "Proveedor B",
    "prioridad": "Media",
    "ubicacion": "Almacén B",
    "imagen": "img/R002.png"
  },
  {
    "codigo": "R003",
    "nombre": "Freno de Disco",
    "cantidad": 40,
    "cantidad_minima": 8,
    "cantidad_maxima": 60,
    "proveedor": "Proveedor C",
    "prioridad": "Baja",
    "ubicacion": "Almacén A",
    "imagen": "img/R003.png"
  },
  {
    "codigo": "R004",
    "nombre": "Aceite de Motor",
    "cantidad": 60,
    "cantidad_minima": 15,
    "cantidad_maxima": 80,
    "proveedor": "Proveedor A",
    "prioridad": "Alta",
    "ubicacion": "Almacén B",
    "imagen": "img/R004.png"
  },
  {
    "codigo": "R005",
    "nombre": "Filtro de Aire",
    "cantidad": 25,
    "cantidad_minima": 5,
    "cantidad_maxima": 40,
    "proveedor": "Proveedor B",
    "prioridad": "Media",
    "ubicacion": "Almacén A",
    "imagen": "img/R005.png"
  },
  {
    "codigo": "R006",
    "nombre": "Tornillo Simple",
    "cantidad": 15,
    "cantidad_minima": 4,
    "cantidad_maxima": 30,
    "proveedor": "Proveedor C",
    "prioridad": "Baja",
    "ubicacion": "Almacén B",
    "imagen": "img/R006.png"
  },
  {
    "codigo": "R007",
    "nombre": "Ensambladora Angular",
    "cantidad": 35,
    "cantidad_minima": 6,
    "cantidad_maxima": 50,
    "proveedor": "Proveedor A",
    "prioridad": "Alta",
    "ubicacion": "Almacén A",
    "imagen": "img/R007.png"
  },
  {
    "codigo": "R008",
    "nombre": "Disco Duro 240GB SSD",
    "cantidad": 20,
    "cantidad_minima": 5,
    "cantidad_maxima": 30,
    "proveedor": "Proveedor B",
    "prioridad": "Media",
    "ubicacion": "Almacén B",
    "imagen": "img/R008.png"
  },
  {
    "codigo": "R009",
    "nombre": "Transistor Multiproposito",
    "cantidad": 45,
    "cantidad_minima": 10,
    "cantidad_maxima": 60,
    "proveedor": "Proveedor C",
    "prioridad": "Baja",
    "ubicacion": "Almacén A",
    "imagen": "img/R009.png"
  },
  {
    "codigo": "R010",
    "nombre": "Bujías de Encendido",
    "cantidad": 55,
    "cantidad_minima": 8,
    "cantidad_maxima": 70,
    "proveedor": "Proveedor A",
    "prioridad": "Alta",
    "ubicacion": "Almacén B",
    "imagen": "img/R010.png"
  }
];

function getPart(codigo) {
  for (let i = 0; i < partsJson.length; i++) {
    if (partsJson[i].codigo === codigo) {
      return partsJson[i];
    }
  }
}

function PartsPage(params) {
  const parte = getPart(params.params.codigo)
  //console.log(data)
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={parte.imagen} alt={parte.codigo}
              style={{ width: '200px', height: '150px' }} />
          </div>
          <div className="card-body">
            <div>
              <h3>{parte.nombre} ({parte.codigo})</h3>
              <p>{parte.cantidad}</p>
              <p>{parte.proveedor}</p>
              <p>{parte.ubicacion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartsPage