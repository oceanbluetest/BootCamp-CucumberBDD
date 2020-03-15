package util;

import io.cucumber.java.Scenario;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import step_defs.Hooks;

public class SharedScenario {
    public SharedScenario(){
        Scenario scenario = Hooks.currentScenario;
        Driver.addScenario(scenario);
    }
}
