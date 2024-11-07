const puppeteer = require('puppeteer')//Importamos puppeteer

async function pruebaDeNavegador() {

    const browser = await puppeteer.launch({ headless: false })//Abre el navegador en modo no headless (visible), se usa en false normalmente para hacer pruebas
    const page = await browser.newPage()//Crea una nueva página en el navegador
    await page.goto('https://www.example.com')//Navega a la página de example
    await page.waitForSelector('h1') //Espera a que cargue el selector h1
    await browser.close()//Cierra el navegador

}

pruebaDeNavegador()//Llamamos a la función