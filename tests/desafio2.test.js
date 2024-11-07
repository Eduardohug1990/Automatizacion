const puppeteer = require('puppeteer')

describe('Prueba de navegación Desafio Sesion 2', () => {


       it('Desafio Texto', async () => {

        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.setViewport({ width: 1366, height: 768 });
        await page.goto('https://store.steampowered.com')

        const linkText = 'Acerca de'

        await page.evaluate((linkText) => {

            //Busca todos los elementos a de la página y los convierte en un array
            const elements = Array.from(document.querySelectorAll('a'));
            //Busca el elemento que contenga el texto que se le pasa por parámetro
            const targetElement = elements.find(element => element.textContent.trim() === linkText);
            if (targetElement) {
                targetElement.click();
            }
        }, linkText);

       // await browser.close()

    });


    it('Desafio Xpath', async () => {

        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.setViewport({ width: 1366, height: 768 });
        await page.goto('https://store.steampowered.com')

        const xp = '::-p-xpath(//*[@id="global_header"]/div/div[2]/a[3])'

        await page.waitForSelector(xp)

        const element = await page.$(xp)

        console.log({element})

        element.click()

       // await browser.close()
            


    });

    it('Desafio CSS', async () => {

        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.setViewport({ width: 1366, height: 768 });
        await page.goto('https://store.steampowered.com')

        const cssSelector = '#global_header > div > div.supernav_container > a:nth-child(5)'

        await page.waitForSelector(cssSelector)

        const element = await page.$(cssSelector)

        console.log({element})

        element.click()

        await browser.close() 

        // await browser.close()

    });

 

})

