import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser'

import usuarioRoutes from './src/routes/usuario.js'

const PORT = process.env.PORT || 4000

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/usuario", usuarioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto: ${PORT}`)
})

export default app