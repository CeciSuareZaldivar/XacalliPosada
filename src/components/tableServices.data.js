import Checkbox from '@material-ui/core/Checkbox';

export const cols = [
  {id: 'checkboxServices', title: <Checkbox/>, minWidth: 10},
  {id: 'idNumberServices', title: 'No.', minWidth: 15},
  {id: 'idServices', title: 'ID Servicio', minWidth: 15},
  {id: 'nameServices', title: 'Nombre', minWidth: 15},
  {id: 'durationServices', title: 'Duración', minWidth: 10},
  {id: 'priceServices', title: 'Precio', minWidth: 15},
  {id: 'descriptionServices', title: 'Descripción', minWidth: 200},
  {id: 'idIcons'},
]


export const rows = [
  {
    idNumberServices: 1,
    idServices: "s01",
    nameServices: "Fogata",
    durationServices: "4 hrs",
    priceServices: 400,
    descriptionServices: "",
  },
  {
    idNumberServices: 2,
    idServices: "s02",
    nameServices: "Hiking",
    durationServices: "2 hrs",
    priceServices: 100,
    descriptionServices: "Precio por persona, depende condición física",
  },
  {
    idNumberServices: 3,
    idServices: "s03",
    nameServices: "Desayuno Americano",
    durationServices: "",
    priceServices: 150,
    descriptionServices: "Café, jugo (De temporada), fruta y huevos al gusto",
  },
  {
    idNumberServices: 4,
    idServices: "s04",
    nameServices: "Asador",
    durationServices: "4 hrs",
    priceServices: 200,
    descriptionServices: "No se prestan utensilios",
  },
  {
    idNumberServices: 5,
    idServices: "s05",
    nameServices: "Masaje",
    durationServices: "55 min",
    priceServices: 600,
    descriptionServices: "Precio por persona",
  },
  {
    idNumberServices: 6,
    idServices: "s06",
    nameServices: "Wifi",
    durationServices: "",
    priceServices: 0,
    descriptionServices: "",
  },
  {
    idNumberServices: 7,
    idServices: "s07",
    nameServices: "Camping",
    durationServices: "24 hrs",
    priceServices: 0,
    descriptionServices: "",
  },
  {
    idNumberServices: 8,
    idServices: "s08",
    nameServices: "Telescopio",
    durationServices: "2 hrs",
    priceServices: 0,
    descriptionServices: "",
  },
]
