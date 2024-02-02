const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('TC-import data', function() {
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
  it('TC-import data', async function() {
    await driver.get("https://aps-rejanglebong.skwn.dev/")
    await driver.manage().window().setRect({ width: 1147, height: 708 })
    await driver.findElement(By.css(".menu-nav > .menu-item:nth-child(3) .menu-text")).click()
    await driver.findElement(By.css(".dropdown-toggle")).click()
    await driver.findElement(By.linkText("Import Excel")).click()
    await driver.findElement(By.name("excel_file")).click()
    await driver.findElement(By.name("excel_file")).sendKeys("C:\\fakepath\\Data Pemilih 2024-02-01 15_22_56.xlsx")
    await driver.findElement(By.css("#form_upload_pemilih .btn-aps")).click()
    await driver.findElement(By.css(".swal2-confirm")).click()
    {
      const element = await driver.findElement(By.css(".swal2-confirm"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".swal2-confirm")).click()
  })
})
