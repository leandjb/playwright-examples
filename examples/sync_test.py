import re
from playwright.sync_api import Page, expect

def test_verify_title(page: Page):
    page.goto("https://playwright.dev/")
    expect(page).to_have_title(re.compile("Playwright")) #if "playwright" string is lowercase, FAILS

def test_verify_button(page: Page):
    page.goto("https://playwright.dev/")
    expect(page).to_have_title(re.compile("apps"))

    startedButton=page.locator("text=Get started")
    expect(startedButton).to_have_attribute("href","/docs/intro")

    startedButton.click()