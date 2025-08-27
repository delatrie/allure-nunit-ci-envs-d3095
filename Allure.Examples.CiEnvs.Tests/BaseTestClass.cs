using Allure.Net.Commons;
using Allure.NUnit;

namespace Allure.Examples.CiEnvs.Tests;

[AllureNUnit]
class BaseTestClass
{
    [TearDown]
    public void AddEnvLabelIfDefined()
    {
        var value = Environment.GetEnvironmentVariable($"ALLURE_LABEL_env");
        if (!string.IsNullOrEmpty(value))
        {
            AllureApi.AddLabel("env", value);
        }
    }
}