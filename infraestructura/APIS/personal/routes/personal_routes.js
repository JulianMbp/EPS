
const {Router} = require('express');

const router= Router();

const {ShowPersonalM,AddPersonal,DeletePersonal,EditPersonal,ShowPersonal} = require('../controllers/personalMedicoController');



router.get('/', ShowPersonalM);
router.post('/', AddPersonal);
router.delete('/:id', DeletePersonal);
router.put('/:id', EditPersonal);
router.get('/:id', ShowPersonal);


module.exports = router;