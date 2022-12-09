/* Manejo de rutas para renderizar en la app */
import header from '../templates/header';
import home from '../pages/home';
import character from '../pages/character';
import error404 from '../pages/error404';

const routes = {
    '/': home,
    '/:id': character,
    '/contact': 'contact',
}

const router = async () => {
    const rHeader = null || document.getElementById('header');
    const rContent = null || document.getElementById('content');

    rHeader.innerHTML = await header();
}
export default router;