import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser'

import usuarioRoutes from './src/routes/usuario.js'
import prearmadoRoutes from './src/routes/prearmado.js'

const PORT = process.env.PORT || 4000

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/usuario", usuarioRoutes);


app.get("/resenainfluencer", async (req, res) => {
    const resenas = await Resena.findAll({
        attributes : ['video','enlace','comentario'],
        include : {
            model : Tipo_Resena,
            attributes : ['nombre','descripcion']
        }
    })

    res.send(resenas)
})

app.use("/prearmado", prearmadoRoutes);


app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto: ${PORT}`)
})
const purchase = async () => {
    

        const result = await prearmadoApi.create({pre_armado_id:'981ef8b4-72da-11ed-a1eb-0242ac120002', nombre:'PC Ultra Gamer', descripcion:'Una computadora para jugar a los juegos mas exigentes'});
        console.log(result);
}
app.get("/prearmado", async (req, res) => {
    const id_build = req.query.id
    let piezas = []

    const pc = await Pre_Armado.findOne({where : {pre_armado_id : id_build}})
    const pc_componentes = await Pre_Armado_Producto.findAll({where : {pre_armado_id : pc.pre_armado_id}})

    for (let index = 0; index < pc_componentes.length; index++) {
        const pieza = await Producto.findOne({where : {producto_id : pc_componentes[index].producto_id}})
        pieza.push(pieza)
    }

    res.send(piezas)
})
export default app