import Controlador from "./controller";

class UsuarisController extends Controlador {
    constructor() {
        super("m4pq5x20fdugzwv");
    }

    validar(email, password) {
        const all = this.getAll();
        let validated = false;
        for (user in all) {
            if (user.email === email) {
                if (user.password === password) {
                    validated = true;
                }
                break;
            }
        }
        return validated;
    }
}

export default UsuarisController;