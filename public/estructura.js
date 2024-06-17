class Dish {
    constructor(id, preu, titol, descripcio, isMenu) {
        this.id = id;
        this.preu = preu;
        this.titol = titol;
        this.descripcio = descripcio;
        this.isMenu = isMenu;
    }

    setMenu(menu) {
        this.menu = menu;
    }
}

class Menu {
    constructor(entrants, platsPrincipals, postres, preu) {
        this.entrants = entrants;
        this.platsPrincipals = platsPrincipals;
        this.postres = postres;
        this.preu = preu;
    }
}

export default {Menu, Dish};