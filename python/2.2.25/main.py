from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
import logging
import time

print("test")
service = Service()
options = webdriver.ChromeOptions()
# options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

logging.basicConfig(level=logging.INFO)
# # # # # E commerce demo site
driver.get("http://localhost:5173/")
# Assert page title
assert "Vite + React" in driver.title, "the title does'nt match the value"

# finding the input
try:
    logging.info("checking title name")
    input = WebDriverWait(driver, 3).until(
        EC.presence_of_element_located((By.XPATH, "//input[@id=':r3:']"))
    )
    logging.info("page title is correct")

    assert input.is_displayed() , "the input is displayed"
    logging.info("the button is displayed")
except AssertionError as e:
    print(e)      
except TimeoutException:
    print("this input does'nt exist")


# label element
try:
    logging.info("check label")
    label_el = driver.find_element(By.ID, ":r3:-label")
    assert label_el.text == "Enter your email","not ex text in the label"
    logging.info("placeholder of label is correct")
except AssertionError as e:
    logging.error("failed to find label")

# darkmode button
try:
    logging.info("check dark button")
    DarkButton = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//input[@type='checkbox']"))
        ).click()
    logging.info("succses in dark mode")
except ArithmeticError as e:
    logging.error("failed to click darkmode")


time.sleep(10)