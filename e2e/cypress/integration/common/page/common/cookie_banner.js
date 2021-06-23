import {Then} from "cypress-cucumber-preprocessor/steps";

Then(`I should see German cookie banner`, () => {
    const bannerEl = cy.get('#onetrust-banner-sdk')

    bannerEl.should('be.visible')
    bannerEl.contains('Wenn Sie auf „Alle Cookies akzeptieren“ klicken')
})
