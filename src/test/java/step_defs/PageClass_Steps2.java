package step_defs;

import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import util.Driver;
import util.SharedDriver;
import util.SharedScenario;

public class PageClass_Steps2 {
    public PageClass_Steps2(SharedScenario sharedScenario, SharedDriver sharedDriver, PageClass_Steps2 pageClass_steps){
    }
    public PageClass_Steps2(){
    }

    @When("I Enter search keyword {string}")
    public void i_Enter_search_keyword(String searchKeyword) {
        Driver.getDriver().findElement(By.id("twotabsearchtextbox")).sendKeys(searchKeyword);
        Driver.getDriver().findElement(By.xpath("//input[@class='nav-input' and @type='submit']")).click();
    }
}
