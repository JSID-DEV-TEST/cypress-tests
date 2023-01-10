/// <reference types="cypress"/>

it('PappaPizza', () => {

    cy.viewport(1200,900)

    cy.visit('https://www.papajohns.co.uk/')

    cy.get('#onetrust-accept-btn-handler').click()

    cy.get('#ctl00_cphBody_txtPostcode').type('CV6 7JY')
    
    cy.get('#ctl00_cphBody_lbGetStarted > .centerB').click()

    cy.get('#ctl00__objHeader_lbOrderForCollection').click()

    cy.get('#ctl00_cphBody__objOffersCombined__rptStoreTopBanners_ctl01_hypPrimaryButton').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptElements_ctl00_lbSelect').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptProducts_ctl03__objMenuProduct_lbAddToBasket').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptProducts_ctl03__objMenuProduct_spnAddToBasket').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptElements_ctl01_lbSelect').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptProducts_ctl18__objMenuProduct_lbAddToBasket').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptProducts_ctl18__objMenuProduct_lbCustomise > .centerB').click({force: true})

    cy.contains('Add To Deal').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptElements_ctl02_lbSelect').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptProducts_ctl00__objMenuProduct_lbAddToBasket').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptProducts_ctl00__objMenuProduct_lbAddToBasket').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptElements_ctl03_lbSelect').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptProducts_ctl07__objMenuProduct_lbAddToBasket').click()
    
    cy.wait(6000)

    cy.get('#ctl00_cphBody__objDealBuilder_rptProducts_ctl07__objMenuProduct_lbAddToBasket').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptElements_ctl04_lbSelect').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptElements_ctl04_lbSelect').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptProducts_ctl00__objMenuProduct_spnAddToBasket').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptProducts_ctl00__objMenuProduct_spnAddToBasket').click()

    cy.get('#ctl00_cphBody__objDealBuilder_rptProducts_ctl00__objMenuProduct_spnAddToBasket').click()

    cy.get('#ctl00_cphBody__objDealBuilder_lbAddDeal > .rightB').click()
    
    cy.visit('https://www.papajohns.co.uk/stores/coventry-longfellow-road/basket-confirmation.aspx')

    cy.get('#ctl00_cphBody_lbProceedDesktop').click()

    cy.get('#ctl00_cphBody_lbProceedDesktop').click({force: true})

    cy.get('#ctl00_cphBody_lbGuest').click({force: true})
    
    cy.get('#ctl00_cphBody_txtGuestFirstName').type('James')

    cy.get('#ctl00_cphBody_txtGuestSurname').type('Bond')

    cy.get('#ctl00_cphBody_txtGuestEmail').type('007SHH@aol.com')

    cy.get('#ctl00_cphBody_txtGuestEmail').type('02476554884')

    cy.get('#ctl00_cphBody_txtPassword').type('PizzaismyFriend123!')

    cy.get('#ctl00_cphBody_txtConfirmPassword').type('PizzaismyFriend123!')


})