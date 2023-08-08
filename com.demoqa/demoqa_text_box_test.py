import re
from playwright.sync_api import Page, expect

# Runner
# pytest.exe --slowmo 1000 --headed .\examples\async.py

def test_demoqa_input_btn(page: Page):
    page.goto("https://demoqa.com/")
    expect(page).to_have_title("DEMOQA")

    elements_btn = page.locator("text=Elements").click()
    page.screenshot(path="img/demoqa/text_box_step_01.png")
    expect(page).to_have_url(re.compile(".*elements"))

    page.locator("text=Text box").click()
    page.screenshot(path="img/demoqa/text_box_step_02.png")
    expect(page).to_have_url(re.compile(".*text-box"))

    page.locator("#userName").fill("Leandro Jose Barros")
    page.locator('//input[@id="userEmail"]').fill("ljbarros@gmail.com")
    page.locator('//textarea[@id="currentAddress"]').fill("Bogota, Colombia")
    page.screenshot(path="img/demoqa/text_box_step_03.png")

    page.locator("#submit").click()
    page.screenshot(path="img/demoqa/text_box_step_04.png")

