package step_defs;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.WebDriver;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import util.Driver;

import java.util.concurrent.TimeUnit;

public class Hooks {
    public static Scenario currentScenario;
    @Before
    public void setUp(Scenario scenario) {
        currentScenario = scenario;
        Driver.addScenario(scenario);
        WebDriverManager.chromedriver().setup();
        System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY, "true");
        WebDriver driver = new ChromeDriver();
        Driver.addDriver(driver);
        Driver.getDriver().manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
        Driver.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @After
    public void tearDown() {
        Driver.getDriver().quit();
    }


}
