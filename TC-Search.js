const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('TC-Search', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('TC-Search', async function() {
    await driver.get("https://aps-rejanglebong.skwn.dev/")
    await driver.manage().window().setRect({ width: 1382, height: 744 })
    await driver.findElement(By.css(".menu-nav > .menu-item:nth-child(3) .menu-text")).click()
    await driver.executeScript("window.scrollTo(0,503)")
    await driver.executeScript("window.scrollTo(0,423)")
    await driver.findElement(By.id("table-inputpemilih_dtSearch")).click()
    await driver.findElement(By.id("table-inputpemilih_dtSearch")).sendKeys("gina")
    await driver.executeScript("window.scrollTo(0,423)")
    await driver.findElement(By.id("table-inputpemilih_dtSearch")).sendKeys("DANI")
    await driver.findElement(By.css(".align-top:nth-child(4)")).click()
  })
})
