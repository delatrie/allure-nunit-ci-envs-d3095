using Allure.Net.Commons;
using Allure.NUnit;

namespace Allure.Examples.CiEnvs.Tests;

[AllureNUnit]
class BaseTestClass
{
    [TearDown]
    public void AddEnvParameterIfDefined()
    {
        var value = Environment.GetEnvironmentVariable($"ALLURE_LABEL_env");
        if (!string.IsNullOrEmpty(value))
        {
            // Group by environments on the 'Suites' tab
            AllureApi.AddParentSuite(value);

            // Parameterizing tests with environment info keeps the results from different environments separated.
            // See https://allurereport.org/docs/history-and-retries/#common-pitfall-tests-from-different-environments-are-missing-in-the-report.
            // (the parameter can be hidden by adding `ParameterMode.Hidden` as the third argument)
            AllureApi.AddTestParameter("env", value);
        }
    }
}