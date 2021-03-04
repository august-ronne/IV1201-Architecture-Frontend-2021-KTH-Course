var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
const By = webdriver.By
const until = webdriver.until
require("geckodriver");

const serverUri = "http://localhost:3000/";
// const serverUri = REACT_APP_URL + "/";
const appTitle = "React App";

// var browser = new webdriver.Builder()
// 	.usingServer()
// 	.withCapabilities({ browserName: "chrome" })
// 	.build();

jest.setTimeout(10000);


var browser = new webdriver.Builder()
	.usingServer()
	// .withCapabilities({ browserName: "firefox" })
	.withCapabilities(webdriver.Capabilities.firefox())
	.build();


function logTitle() {
	return new Promise((resolve, reject) => {
		browser.getTitle().then(function(title) {
			resolve(title);
		});
	});
}
describe("Home page", function() {
	it("Should load the home page and get title", function() {
		return new Promise((resolve, reject) => {
			browser
				.get(serverUri)
				.then(logTitle)
				.then(title => {
					assert.strictEqual(title, appTitle);
					resolve();
				})
				.catch(err => reject(err));
		});
	});
})

describe("Register page", function() {
	it("Should not register with missing input", function() {
		return new Promise(async (resolve, reject) => {
			browser.get(serverUri + "register") 

			browser
				.wait(until.elementLocated(By.id('fname-register')), 10000)
				.sendKeys('test')

			browser
				.wait(until.elementLocated(By.id('submit-register')), 10000)
				.click()
				.then((elem) => resolve())
		});
	})

	it("Should not register with faulty input", function() {
		return new Promise(async (resolve, reject) => {

			browser
				.wait(until.elementLocated(By.id('lname-register')), 10000)
				.sendKeys('test')

			browser
				.wait(until.elementLocated(By.id('email-register')), 10000)
				.sendKeys('test@test.com')

			browser
				.wait(until.elementLocated(By.id('password-register')), 10000)
				.sendKeys('test')

			browser
				.wait(until.elementLocated(By.id('username-register')), 10000)
				.sendKeys('test')

			browser
				.wait(until.elementLocated(By.id('confirm-register')), 10000)
				.sendKeys('test')

			browser
				.wait(until.elementLocated(By.id('submit-register')), 10000)
				.click()
				.then((elem) => resolve())
		});
	})

	it("Should not register with with an already registered email", function() {
		return new Promise(async (resolve, reject) => {

			let emailInput = browser
				.wait(until.elementLocated(By.id('email-register')), 10000)

			emailInput.clear()
			emailInput.sendKeys('test@jest.com')

			browser
				.wait(until.elementLocated(By.id('submit-register')), 10000)
				.click()
				.then((elem) => resolve())
		});
	})
})






describe("Login Page", function() {

	it("should get a valid response with no credentials while login", function() {
		return new Promise(async (resolve, reject) => {
			browser.get(serverUri + "login") 

			// await browser.sleep(2000)

			browser
				.wait(until.elementLocated(By.id('button-login')), 10000)
				.click()
				.then((elem) => resolve())
		});
	});

	it("should get a valid response with faulty credentials while login", async function() {

		return new Promise(async (resolve, reject) => {
			
			browser
				.wait(until.elementLocated(By.id('email-login')), 10000)
				.sendKeys('test@test.com')

			browser
				.wait(until.elementLocated(By.id('password-login')), 10000)
				.sendKeys('password')

			browser
				.wait(until.elementLocated(By.id('button-login')), 10000)
				.click()
				.then((elem) => resolve())
		});
	});

	it("should get a valid response with correct credentials while login", async function() {

		return new Promise(async (resolve, reject) => {
			
			let emailInput = browser
				.wait(until.elementLocated(By.id('email-login')), 10000)

			emailInput.clear()
			emailInput.sendKeys('test@jest.com')

			let passwordInput = browser
				.wait(until.elementLocated(By.id('password-login')), 10000)
			passwordInput.clear()
			passwordInput.sendKeys('testtest')

			browser
				.wait(until.elementLocated(By.id('button-login')), 10000)
				.click()
				.then((elem) => resolve())
		});
	});

	it("Should load the user only page while logged in as a user", function() {
		return new Promise(async (resolve, reject) => {
			await browser.sleep(3000)

			browser
				.wait(until.elementLocated(By.id('auth-user')), 10000)
				.click()
				.then((elem) => resolve())
		});
	});

	it("should successfully logout", async function() {

		return new Promise(async (resolve, reject) => {

			await browser.sleep(3000)
			
			browser
				.wait(until.elementLocated(By.id('logout-navbar')), 10000)
				.click()
				.then((elem) => resolve())
		});
	});

	it("should get a valid response while logging in as admin", async function() {

		return new Promise(async (resolve, reject) => {
			browser.get(serverUri + "login") 

			await browser.sleep(2000)
			
			let emailInput = browser
				.wait(until.elementLocated(By.id('email-login')), 10000)

			emailInput.clear()
			emailInput.sendKeys('admin@admin.com')

			let passwordInput = browser
				.wait(until.elementLocated(By.id('password-login')), 10000)
			passwordInput.clear()
			passwordInput.sendKeys('admin01')

			browser
				.wait(until.elementLocated(By.id('button-login')), 10000)
				.click()
				.then((elem) => resolve())
		});
	});

});

describe("Admin page", function() {
	it("Should load the admin page while logged in as admin", function() {
		return new Promise(async (resolve, reject) => {
			await browser.sleep(3000)

			browser
				.wait(until.elementLocated(By.id('admin-navbar')), 10000)
				.click()
				.then((elem) => resolve())
		});
	});
})


afterAll(function() {
	browser.quit();
});