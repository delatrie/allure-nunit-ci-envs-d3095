namespace Allure.Examples.CiEnvs.Tests;

class TestClass2 : BaseTestClass
{
    [TestCase(1, "a")]
    [TestCase(2, "b")]
    public void TestInClass2(int a, string b)
    {

    }
}