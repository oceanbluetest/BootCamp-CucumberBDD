package testRunners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.DataProvider;

@CucumberOptions(
        features = "src/main/resources/features",
        glue = {"step_defs"},
        plugin = {
                "pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/re-run.txt"
        },
        dryRun = false,
        tags = {"@one"}
)
public class TestRunnerClass extends AbstractTestNGCucumberTests {
        @DataProvider(parallel = true)
        public Object[][] scenarios(){
                return super.scenarios();
        }

}
