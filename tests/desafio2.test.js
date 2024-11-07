const puppeteer = require('puppeteer')

describe('Prueba de navegación Desafio Sesion 2', () => {

    it('Desafio', async () => {

        const browser = await puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.setViewport({ width: 1366, height: 768 });
        await page.goto('https://store.steampowered.com')

        const [elementHandle] = await page.$x('//a[contains(@class, "menuitem") and contains(text(), "Acerca de")]');


        if (elementHandle) {
            const text = await page.evaluate(element => element.textContent, elementHandle);
            console.log('Elemento encontrado:', text.trim());
            await elementHandle.click();
        } else {
            console.log('Elemento no encontrado');
        }









    });

})

