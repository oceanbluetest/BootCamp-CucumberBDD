package util;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;

public class SharedDriver {
    public SharedDriver(){
        WebDriverManager.chromedriver().setup();
        Driver.addDriver(new ChromeDriver());
    }
}
