"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
class Server {
    constructor() {
        this.apiPath = {
            usuarios: '/api/usuarios'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8080';
        //Definir mis rutas
        this.routes();
    }
    routes() {
        this.app.use(this.apiPath.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map