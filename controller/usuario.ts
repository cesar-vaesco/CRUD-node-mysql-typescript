import { Request, Response } from "express";
import Usuario from '../models/usuario';



export const getUsuarios = async (req: Request, res: Response) => {

    const usuarios = await Usuario.findAll();

    res.json({ usuarios });
}


export const getUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }
}

export const postUsuario = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const existeEmail = await Usuario.findOne({
            where:{
                email: body.email
            }
        })

        if(existeEmail){
            return res.status(400).json({
                msg: `Email ${body.email} ya registrado`
            })
        }

        const usuario = Usuario.build(body);
        await usuario.save();

        res.status(201).json({
            msg: 'Usuario creado',
            usuario
        })

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });

    }

}

export const putUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const usuario = await Usuario.findByPk(id);

        if(!usuario){
            res.send(404).json({
                msg:`El usuario con el id ${id} no existe`
            });
        }

        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        })

        if (!existeEmail) {
            return res.status(400).json({
                msg: `El ${body.email} no existe en la base de datos`
            })
        }

        await usuario?.update( body );

        res.json({
            usuario
        });


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });

    }
}

export const deleteUsuarioBorrado = async (req: Request, res: Response) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }

    await usuario?.destroy();


    res.json({
        msg: 'Usuario borrado'
    })
}


export const deleteUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }

    await usuario?.update({estado: 0});


    res.json({
        msg: 'Usuario borrado logico',
        usuario
    })
}
