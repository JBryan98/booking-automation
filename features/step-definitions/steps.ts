import { Given, When, Then } from '@wdio/cucumber-framework';

import StaysPage from '../pageobjects/stays.view';
import BookingStay from '../pageobjects/booking.view';
import CardData from '../pageobjects/cardData.view';
import UserData from '../pageobjects/userdata.view';

Given(/^I select my destiny (.+)$/, async (destiny) => {
    await StaysPage.setDestination(destiny);
});

When(/^I write the range of days: (.*) - (.*) - of (.*)$/, async (start, end, monthYear) => {
    //await expect(StaysPage.btnConfirmDate).toBeExisting();
    await StaysPage.setDate(start, end, monthYear)
});

When(/^I put the age of my child (.*)$/,async (age) => {
    await StaysPage.setRoomsAndGuests(age);
})

When(/^I choose my stay$/,async () => {
    await BookingStay.chooseStay();
})

When(/^I select my room and put my personal info: (.*) - (.*) - (.*) - (.*) - (.*) - (.*) - (.*) - (.*)$/, async (firstName, lastName, email, address, zipCode, city, country, mobilePhone) => {
    await UserData.fillInfo(firstName, lastName, email, address, zipCode, city, country, mobilePhone);
})

When(/^ I am on the finish booking page i put my credit card info: (.*) - (.*) - (.*) - (.*)$/, async (cardNumber, cardType, expirationDate, cvcCode) => {
    await CardData.finalStep(cardNumber, cardType, expirationDate, cvcCode)
})

