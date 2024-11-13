
const { expect } = require('chai')
const puppeteer = require('puppeteer')

describe('Prueba de navegación Desafio 3', () => {


    before(async () => {
        browser = await puppeteer.launch({ headless: false }) // Abre el navegador en modo visible
        page = await browser.newPage() // Crea una nueva pestaña
    })

    after(async () => {
        await browser.close() // Cierra el navegador
    })

    beforeEach(async () => {
        await page.goto('https://store.steampowered.com') // Navega a la página de store.steampowered
        await page.setViewport({ width: 2560, height: 1440 }) // Establece el tamaño de la pantalla
    })


    it('Desafio 3', async () => {

        await page.waitForSelector('#store_nav_search_term')//Espera a que cargue el selector #store_nav_search_term
        await page.type('#store_nav_search_term', 'Ori and the Will of the Wisps')
        await page.keyboard.press('Enter')

        const xp = '::-p-xpath(//*[@id="search_resultsRows"]/a[1])'

        await page.waitForSelector(xp)
        await page.click(xp)

        await page.waitForSelector('#btn_add_to_cart_353051')

        const precioTxt = await page.$eval('#game_area_purchase_section_add_to_cart_353051 > div.game_purchase_action > div > div.game_purchase_price.price', el => el.textContent)

        // La expresión regular /\d+/ extrae el primer número que encuentre en el texto
        const precioInicial = parseInt(precioTxt.match(/\d+/)[0]);

        console.log({ precioInicial })

        await page.click('#btn_add_to_cart_353051')

        const xp2 = '::-p-xpath(/html/body/div[3]/dialog/div[2]/div/div/div[3]/div/div[3]/button[2])'

        await page.waitForSelector(xp2)

        await page.click(xp2)

        const xp3 = '::-p-xpath(//*[@id="page_root"]/div[2]/div/div[2]/div[3]/div[1]/div[1]/div/div/div/div[2]/div[4]/span/div)'

        await page.waitForSelector(xp3)

        const precioTxtFinal = await page.$eval(xp3, el => el.textContent)

        const precioFinal = parseInt(precioTxtFinal.match(/\d+/)[0]);

        console.log({ precioFinal })

        expect(precioFinal).to.be.equals(precioInicial)

    });

});