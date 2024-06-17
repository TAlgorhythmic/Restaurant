const APIURLBase = "https://app.nocodb.com/api/v2";
const TOKEN = "ziaDGUyYpmYuGvXnT6hCJ8-08LjovuSeme3fFQdY";

class Controlador {
    constructor(tableId) {
        this.token = TOKEN;
        this.url = APIURLBase + "/tables/" + tableId + "/records";
    }

    async getAll() {
        const result = await fetch(this.url, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
                "xc-token": this.token
            }
        })
        const data = await result.json();
        return data;
    }

    async post(obj) {
        return await fetch(this.url, {
            "method" : "POST",
            "headers" : {
                "Content-Type" : "application/json",
                "xc-token" : this.token
            },
            "body" : JSON.stringify(obj)
        }).json();
    }

    async patch(id, ob) {
        ob.id = id;
        const response = await fetch(`${this.url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify(ob)
        });

        const data = await response.json();
        return data;
    }

    async getById(id) {
        const response = await fetch(`${this.url}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data;
    }

    async delete(id) {
        const response = await fetch(this.url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Id: id
            })
        });

        const data = await response.json();
        return data;
    }
}

export default Controlador;