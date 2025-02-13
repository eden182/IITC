import time
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime
import logging

now_time = datetime.now().strftime("%H-%M-%S")

logging.basicConfig(
    filename=f"app_test_{now_time}.log",  # Log messages will be written to 'app.log'
    filemode="w",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

logging.info("Starting Automation Test... ✅")
service = Service()
options = webdriver.ChromeOptions()
options.add_argument("--window-size=2560,1440")
# options.add_argument('--headless')
driver = webdriver.Chrome(service=service, options=options)

logging.info("Navigating to the URL... ✅")
driver.get("https://squarespaceclone.onrender.com/")

try:
    logging.info("start checking prompt button")
    Log_button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//button[normalize-space()='LOG IN']"))
        ).click()
    logging.info("succses in pro_button✅")
    alert = driver.switch_to.alert
    alert.send_keys("baba , dada ,kaka")
    alert.accept()
except ArithmeticError as e:
    logging.error("failed to click pro_button")


logging.info("Automation Test Done! ✅")

time.sleep(10)