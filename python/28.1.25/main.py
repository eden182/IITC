from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

service = Service("./chromedriver.exe")
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

driver.get("http://atid.store")
driver.maximize_window()

# find a button
shop_button = driver.find_element(
    By.XPATH,
    "//a[@href='https://atid.store/store/']//span[@class='elementor-button-content-wrapper']//span[@class='elementor-button-text'][normalize-space()='Shop Now']"
)

shop_button.click()
time.sleep(10)




# driver.get("http://www.google.com")
# driver.back()
# time.sleep(2)
# driver.forward()
# time.sleep(2)
# driver.refresh()
# time.sleep(2)
# driver.quit()
# print(driver.title)