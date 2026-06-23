# Manual Test Scenarios / Test Cases

# System Under Test: Airline booking portal AirAsia with integrated travel insurance

Scenario 1 : 
Flight Booking and Insurance Selection 
Insurance Display
Verify travel insurance option is displayed during booking
Verify default state (checked/unchecked)
Verify insurance provider name, price, and benefits are shown correctly

Scenario 2 : Add Insurance 
Select insurance and proceed 
Verify price updates correctly in total fare
Verify insurance details are included in summary page

Scenario 3 : Remove Insurance 
Uncheck insurance
Verify total price updates correctly
Verify insurance is removed from summary
Passenger Details & Eligibility 

Scenario 4: Passenger Info Validation
Enter valid passenger details - insurance accepted
Enter invalid DOB for different age - error shown
Verify eligibility rules (age limits, nationality)

Scenario 5: Multiple Passengers
Add insurance for all passengers
Add insurance for selected passengers only (if supported)
Verify pricing per passenger

 

# Payment & Pricing Validation

Scenario 6: Price Accuracy
Verify insurance price matches provider API
Verify tax calculation
Verify currency consistency

Scenario 7: Payment Success
Complete booking with insurance
Verify:
Booking confirmed
Insurance included in receipt

Scenario 8: Payment Failure
Payment fails
Verify:
No insurance purchased
No duplicate charges
Booking Confirmation & Documents

Scenario 9: Confirmation Email
Verify insurance details in email
Verify policy number included
Verify correct passenger mapping

Scenario 10: Policy Document
Verify downloadable insurance policy
Verify correct customer details
API / Integration Testing

Scenario 11: Insurance API Response
Simulate API success - insurance added
Simulate API failure - graceful error handling

Scenario 12: Timeout / Retry
Slow API - verify retry or fallback
Ensure booking doesn’t break

# Negative & Edge Cases

Scenario 13: Booking Without Insurance
Ensure booking works normally

Scenario 14: Mid-Flow Changes
Add insurance - go back - change flight - verify recalculation

Scenario 15: Session Timeout
Session expires - verify insurance state reset

# What Should Be Automated (and Why) 

* Test cases that needed to be automate often involves with high risk, needs stability and repeatable flows for eg:
* End to end booking with insurance - this is due to core business flow and may cause some big impact if there is flaws.
* Validating Pricing - if pricing is not accurate, this will lead to the lost of funds in the company.
* Payment flow - Ensure final transaction is smooth until payment is made with successful message.

## Automation Framework used:

# Playwright with typescript

It has built in auto wait which reduce the flakiness of the tests.=
Able to test on different types of browser since each browser may behave differently.
Supports API and UI testing in one framework 
Easy pipeline integration




