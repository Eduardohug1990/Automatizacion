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
        await page.goto('https://www.dev.to')//Navega a la página de example
        await page.waitForSelector('h1') //Espera a que cargue el selector h1
        await page.goBack()//Retrocede a la página anterior
        await page.goForward()//Avanza a la página siguiente
        await browser.close()//Cierra el navegador
    })

    it('Debería navegar a example 4', async () => {
        const browser = await puppeteer.launch({ headless: false })//Abre el navegador en modo no headless (visible), se usa en false normalmente para hacer pruebas
        const page = await browser.newPage()//Crea una nueva página en el navegador
        await page.goto('https://devexpress.github.io/testcafe/example/')//Navega a la página de example
        await page.type('#developer-name', 'Eduardo', { delay: 5000 })//Escribe en el input con el id developer-name el texto Eduardo con un delay de 5000 milisegundos
        await page.click('#submit-button', { clickCount: 2 })//Hace click en el botón con el id submit-button con un doble click

        const text = await page.$eval('h1', element => element.textContent)//Obtiene el texto del h1

        const title = await page.title()//Obtiene el título de la página
        const url = await page.url()//Obtiene la url de la página

        console.log({ text, title, url })//Muestra en consola el título y la url de la página
        await page.close()//Cierra el navegador



    })



})