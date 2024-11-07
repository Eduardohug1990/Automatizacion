const puppeteer = require('puppeteer')

describe('Prueba de navegación', () => {

    it('Debería navegar a example', async () => { //it es una prueba, async es para que espere a que termine la prueba

        const browser = await puppeteer.launch({ headless: false })//Abre el navegador en modo no headless (visible), se usa en false normalmente para hacer pruebas
        const page = await browser.newPage()//Crea una nueva página en el navegador
        await page.goto('https://www.example.com')//Navega a la página de example
        await page.waitForSelector('h1') //Espera a que cargue el selector h1
        await browser.close()//Cierra el navegador
    })

    it('Debería navegar a example 2', async () => { //it es una prueba, async es para que espere a que termine la prueba

        const browser = await puppeteer.launch({ headless: false })//Abre el navegador en modo no headless (visible), se usa en false normalmente para hacer pruebas
        const page = await browser.newPage()//Crea una nueva página en el navegador
        await page.goto('https://www.example.com')//Navega a la página de example
        await page.waitForSelector('h1') //Espera a que cargue el selector h1
        await browser.close()//Cierra el navegador
    })

    it('Debería navegar a example 3', async () => { //it es una prueba, async es para que espere a que termine la prueba

        const browser = await puppeteer.launch({ headless: false })//Abre el navegador en modo no headless (visible), se usa en false normalmente para hacer pruebas
        const page = await browser.newPage()//Crea una nueva página en el navegador
        await page.goto('https://www.example.com')//Navega a la página de example
        await page.waitForSelector('h1') //Espera a que cargue el selector h1
        await browser.close()//Cierra el navegador
    })



})