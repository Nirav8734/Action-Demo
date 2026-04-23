export class Helpers {
  constructor(page) {
    this.page = page;
  }

  // 🌐 Navigation
  async open(url) {
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  // =============================
  // 🖱️ SMART CLICK METHODS
  // =============================

  async click(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
  }

  async clickWithHover(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.scrollIntoViewIfNeeded();
    await locator.hover();
    await locator.click();
  }

  async clickWithRetry(locator, retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
        return;
      } catch (e) {
        if (i === retries - 1) throw e;
        await this.page.waitForTimeout(500);
      }
    }
  }

  async jsClick(locator) {
    await this.page.evaluate(el => el.click(), await locator.elementHandle());
  }

  // =============================
  // ✍️ SMART INPUT METHODS
  // =============================

  async fill(locator, value) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
  }

  async fillWithClear(locator, value) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
    await locator.fill('');
    await this.page.waitForTimeout(200);
    await locator.fill(value);
  }

  async typeSlow(locator, value) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
    await locator.fill('');
    await locator.type(value, { delay: 100 });
  }

  // =============================
  // 📄 TEXT METHODS
  // =============================

  async getText(locator) {
    await locator.waitFor({ state: 'visible' });
    return await locator.textContent();
  }

  async getTrimmedText(locator) {
    const text = await this.getText(locator);
    return text?.trim();
  }

  // =============================
  // ⏳ WAIT HELPERS
  // =============================

  async waitForVisible(locator) {
    await locator.waitFor({ state: 'visible' });
  }

  async waitForHidden(locator) {
    await locator.waitFor({ state: 'hidden' });
  }

  async waitAndClick(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async waitForText(locator, text) {
    await locator.waitFor();
    await this.page.waitForFunction(
      (el, expected) => el.textContent.includes(expected),
      await locator.elementHandle(),
      text
    );
  }

  // =============================
  // 📦 DROPDOWN
  // =============================

  async selectByLabel(locator, label) {
    await locator.waitFor({ state: 'visible' });
    await locator.selectOption({ label });
  }

  async selectByValue(locator, value) {
    await locator.waitFor({ state: 'visible' });
    await locator.selectOption(value);
  }

  // =============================
  // 🖱️ HOVER / SCROLL
  // =============================

  async hover(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.hover();
  }

  async scrollAndClick(locator) {
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
  }

  // =============================
  // ⌨️ KEYBOARD
  // =============================

  async pressEnter() {
    await this.page.keyboard.press('Enter');
  }

  async pressTab() {
    await this.page.keyboard.press('Tab');
  }

  // =============================
  // 📂 FILE UPLOAD
  // =============================

  async uploadFile(locator, filePath) {
    await locator.setInputFiles(filePath);
  }

  // =============================
  // 🔔 ALERTS
  // =============================

  async acceptAlert() {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });
  }

  async dismissAlert() {
    this.page.once('dialog', async dialog => {
      await dialog.dismiss();
    });
  }

  // =============================
  // 🪟 NEW TAB
  // =============================

  async handleNewTab(action) {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      action()
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }

  // =============================
  // 📸 SCREENSHOT
  // =============================

  async takeScreenshot(name = 'screenshot.png') {
    await this.page.screenshot({ path: name, fullPage: true });
  }
}
