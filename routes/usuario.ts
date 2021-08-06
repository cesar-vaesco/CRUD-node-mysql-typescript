

import { Router } from 'express';
import { deleteUsuario,
        deleteUsuarioBorrado,
         getUsuario,
         getUsuarios,
         postUsuario,
         putUsuario } from '../controller/usuario';


const router = Router();


router.get('/',       getUsuarios);
router.get('/:id',    getUsuario);
router.post('/',      postUsuario);
router.put('/:id',    putUsuario);
router.delete('/borrado-fisico/:id', deleteUsuarioBorrado);
router.delete('/borrado-logico/:id', deleteUsuario);




export default router;
