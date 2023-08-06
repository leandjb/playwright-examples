import re
from playwright.sync_api import Page, expect

def test_sync_1(page: Page):
    page.goto("https://playwright.dev/")
    expect(page).to_have_title(re.compile("Playwright")) #if "playwright" string is lowercase, FAILS
