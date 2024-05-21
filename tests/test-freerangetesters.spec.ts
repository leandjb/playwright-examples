import { test, expect } from '@playwright/test';

test.describe('navegacion a www.freerangetester.com',() => {

    test('Los links principales funcionan', async ({ page }) => {
        await test.step('Estando en la web HOME de freerange tester', async () => {
            page.goto('https://www.freerangetesters.com')
            await expect(page).toHaveTitle("Free Range Testers")
        })

        await test.step('Cuando hago click en "Cursos"', async () => {
            page.locator('#page_header').getByRole('link', {name: 'Cursos', exact: true}).click()
            await page.waitForURL('**/cursos')
            
        })

        await test.step('Debo estar en la pagina "cursos"', async () => {
            await expect(page).toHaveTitle('Cursos')
        })
        
    })
    
})

