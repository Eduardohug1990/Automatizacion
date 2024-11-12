const { expect } = require('chai')
const puppeteer = require('puppeteer')

describe('Prueba de navegación', () => {

    before(async () => {
        browser = await puppeteer.launch({ headless: false }) // Abre el navegador en modo visible
        page = await browser.newPage() // Crea una nueva pestaña
    })

    after(async () => {
        await browser.close() // Cierra el navegador
    })

    beforeEach(async () => {
        await page.goto('https://www.example.com') // Navega a la página de example
        await page.setViewport({ width: 2560, height: 1440 }) // Establece el tamaño de la pantalla
    })

    afterEach(async () => {
        await page.screenshot({ path: 'screenshot.png' }) // Toma una captura de pantalla
    })

    it('Debería navegar a example', async () => { //it es una prueba, async es para que espere a que termine la prueba
        await page.waitForSelector('h1') // Espera a que cargue el selector h1
    })

    it('Debería navegar a example 2', async () => { //it es una prueba, async es para que espere a que termine la prueba

        await page.waitForSelector('h1') // Espera a que cargue el selector h1
    })

    it('Debería navegar a example 3', async () => { //it es una prueba, async es para que espere a que termine la prueba

        await page.waitForSelector('h1') // Espera a que cargue el selector h1
        await page.goto('https://www.dev.to') // Navega a la página de dev.to
        await page.waitForSelector('h1') // Espera a que cargue el selector h1
        await page.goBack() // Retrocede a la página anterior
        await page.goForward() // Avanza a la página siguiente

    })

    it('Debería navegar a example 4', async () => {

        await page.type('#developer-name', 'Eduardo', { delay: 5000 }) // Escribe en el input con el id developer-name el texto Eduardo con un delay de 5000 milisegundos
        await page.click('#submit-button', { clickCount: 2 }) // Hace click en el botón con el id submit-button con un doble click

        const text = await page.$eval('h1', element => element.textContent) // Obtiene el texto del h1

        expect(url).to.include('devexpress') // Verifica que la url incluya devexpress
        expect(title.length).to.equal(14) // Verifica que la longitud del título sea igual a 14

        const title = await page.title() // Obtiene el título de la página
        const url = await page.url() // Obtiene la url de la página

        console.log({ text, title, url }) // Muestra en consola el título y la url de la página

    })

    it('Debería navegar a example 5', async () => {

        await page.waitForSelector('#searchTerm')
        await page.type('#searchTerm', 'Hola Mundo', { delay: 100 })
        await page.keyboard.press('Enter', { delay: 100 }) // Presiona la tecla Enter con un delay de 100 milisegundos
    })

    it('Debería navegar a example 6 Devices', async () => {
        const tablet = await puppeteer.devices['ipad landscape']  // Muestra los dispositivos disponibles

        await page.emulate(tablet) // Emula el dispositivo tablet

        const movile = await puppeteer.devices['iPhone X'] // Muestra los dispositivos disponibles

        await page.emulate(movile) // Emula el dispositivo móvil


        const devices = puppeteer.devices;
        console.log(Object.keys(devices)); // Lista todos los dispositivos soportados

    })



})