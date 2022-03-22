import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {

    test('Debe traer 20 elementos', async() => {

       const gifs = await getGifs('One Punch');

       expect(gifs.length).toBe(20);

    });

    test('Debe traer un arreglo vacio', async() => {

        const gifs = await getGifs('');
 
        expect(gifs.length).toBe(0);
 
     })


})