const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('TC-edit data', function() {
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
  it('TC-edit data', async function() {
    await driver.get("https://aps-rejanglebong.skwn.dev/")
    await driver.manage().window().setRect({ width: 1147, height: 708 })
    await driver.findElement(By.css(".menu-nav > .menu-item:nth-child(3) .menu-text")).click()
    await driver.findElement(By.css(".even:nth-child(2) .btn-icon-warning > .icon")).click()
    await driver.executeScript("window.scrollTo(0,607)")
    await driver.findElement(By.id("pemilih_kk")).click()
    await driver.findElement(By.id("pemilih_kk")).sendKeys("1020304050607089")
    await driver.findElement(By.id("btn-simpan")).click()
  })
})
