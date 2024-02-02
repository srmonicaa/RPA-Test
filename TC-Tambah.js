const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('TC-Tambah', function() {
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
  it('TC-Tambah', async function() {
    await driver.get("https://aps-rejanglebong.skwn.dev/dev/")
    await driver.manage().window().setRect({ width: 1147, height: 708 })
    await driver.findElement(By.css(".menu-item:nth-child(3) .menu-text")).click()
    await driver.findElement(By.css(".btn-group > .font-weight-bolder")).click()
    await driver.findElement(By.id("pemilih_kk")).click()
    await driver.findElement(By.id("pemilih_kk")).sendKeys("1234543456543454")
    await driver.findElement(By.id("pemilih_nik")).click()
    await driver.findElement(By.id("pemilih_nik")).sendKeys("1234432345654546")
    await driver.findElement(By.id("pemilih_nama")).click()
    await driver.findElement(By.id("pemilih_nama")).sendKeys("Rani")
    await driver.findElement(By.id("pemilih_alamat")).click()
    await driver.findElement(By.id("pemilih_alamat")).sendKeys("test")
    await driver.findElement(By.id("pemilih_rt")).sendKeys("6")
    await driver.findElement(By.id("pemilih_rw")).sendKeys("7")
    await driver.findElement(By.css("#select2-pemilih_kelurahan_id-container > .select2-selection__placeholder")).click()
    await driver.findElement(By.css(".select2-search__field")).sendKeys("tas")
    await driver.findElement(By.id("pemilih_tempat_lahir")).sendKeys("test")
    await driver.findElement(By.id("pemilih_tgl_lahir")).click()
    await driver.findElement(By.css("tr:nth-child(1) > .day:nth-child(4)")).click()
    await driver.findElement(By.id("pemilih_tgl_lahir")).click()
    await driver.findElement(By.css(".col-12 > .col-md-6:nth-child(2)")).click()
    await driver.findElement(By.css(".col-8 .radio:nth-child(2) > span")).click()
    await driver.findElement(By.id("select2-pemilih_status_kawin-container")).click()
    await driver.findElement(By.id("select2-pemilih_caleg_id-container")).click()
    await driver.findElement(By.id("select2-pemilih_tps_id-container")).click()
    await driver.findElement(By.css("#Statusradio > .radio:nth-child(2)")).click()
    await driver.findElement(By.id("btn-simpan")).click()
  })
})
