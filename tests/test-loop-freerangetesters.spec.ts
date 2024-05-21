import { test, expect } from '@playwright/test';

test.describe('navegacion a www.freerangetester.com',() => {

    const secciones = [
        {nombre: 'Cursos', url: '/cursos', tituloEsperado: 'Cursos'},
        {nombre: 'Udemy', url: '/udemy', tituloEsperado: 'Udemy'},
        {nombre: 'Recursos', url: '/recursos', tituloEsperado: 'Recursos'}
    ]
    
    for (const seccion of secciones) {

        test(`Validar redireccion de la seccion "${seccion.nombre}"`, async ({ page }) => {
            await test.step('Estando en la web HOME de freerange tester', async () => {
                page.goto('https://www.freerangetesters.com')
                await expect(page).toHaveTitle("Free Range Testers")
            })
    
            await test.step(`Cuando hago click en "${seccion.nombre}"`, async () => {
                page.locator('#page_header').getByRole('link', {name: seccion.nombre, exact: true}).click()
                await page.waitForURL(`**${seccion.url}`)
                
            })
    
            await test.step(`Debo estar redirigido a la pagina "${seccion.tituloEsperado}" `, async () => {
                await expect(page).toHaveTitle(seccion.tituloEsperado)
            })
            
        })    
        
    }
    
})

