import { test, expect } from '@playwright/test';

const url: string = 'https://thefreerangetester.github.io/sandbox-automation-testing/'

test.describe('testcase de Botton asincrono en sandbox page', () => {

    test('click en ID dinamico', async ({ page }) => {

        await test.step('Dado que navego al sandbox page', async () => {
            await page.goto(url)
        })

        await test.step('Cuando hago click en boton dinamico', async () => {
            await page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto' }).click()
        })

        await test.step('Entonces es visible el mensaje despues de 3 segundos', async () => {
            const textElement = await page.getByText('OMG, aparezco después de 3');
            await expect.soft(textElement).toBeVisible()
            await expect.soft(textElement).toHaveClass('mt-3')
            await expect.soft(textElement).toHaveText('OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.')

        })

    })

})
