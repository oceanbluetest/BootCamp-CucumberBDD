package step_defs;


import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import testRunners.TestRunnerClass;
import util.Driver;
import util.Screenshot;
import util.SharedDriver;
import util.SharedScenario;

public class PageClass_Steps{
    public PageClass_Steps(SharedScenario sharedScenario, SharedDriver sharedDriver, PageClass_Steps pageClass_steps){
    }
    public PageClass_Steps(){
    }

    @Given("^I Open \"([^\"]*)\"$")
    public void i_Open(String website){
        Driver.getDriver().get(website);
        Screenshot.takeScreenshot();
    }

    @When("^I see search for \"([^\"]*)\" keyword$")
    public void i_see_search_for_keyword(String searchPhrase){
        Driver.getDriver().findElement(By.name("q")).sendKeys(searchPhrase);
        Driver.getDriver().findElement(By.name("btnK")).click();
        Screenshot.takeScreenshot();
    }

    @Then("^I should verify page's title$")
    public void i_should_verify_page_s_title(){
        String title = Driver.getDriver().getTitle();
        System.out.println(title);
        Screenshot.takeScreenshot();
    }
}
