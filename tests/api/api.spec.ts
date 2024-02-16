import { test, expect} from '@playwright/test'


test.describe("ValueLinkClient API", ()  => {

test.describe.configure({ mode: 'serial' });


const ClientUserName = 'dennjones'
const ClientUserPassword = 'dev.123'
const IntegrationAccessKey = ''
var accessTokenAPI = ""
var clientId = 0
var appraisalId = 0

test.beforeAll(async ({request}) => {
    const response = await request.post('/api/Tokens', {
        data:{
                username: ClientUserName,
                password: ClientUserPassword,
                apiKey: IntegrationAccessKey
        },
    })
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    console.log(responseBody)
    expect(responseBody.accessToken).toBeTruthy()
    expect(responseBody.clientId).toBe(120)
    accessTokenAPI = responseBody.accessToken
    console.log(accessTokenAPI)
    clientId = responseBody.clientId
    console.log(clientId) 
})
    
test("Create API Order", async ({request}) => {
        const response = await request.post('/api/clients/'+clientId+'/Orders', {
            data:{
                "agent": null,
                "borrower": {
                    "name": "Dr Anthony Fauci & Deshaun Watson",
                    "email": "anthony@yopmail.com; deshaun_h@yopmail.com",
                    "phone": "913-111-1112, 913-111-1112",
                    "workPhone": null,
                    "cellPhone": "913-111-1111, 913-111-1112",
                    "borrowerMailingAddress": null,
                    "borrowerMailingCity": null,
                    "borrowerMailingState": null,
                    "borrowerMailingZip": null
                },
                "broker": null,
                "property": {
                    "address": "12110 Dover St",
                    "city": "Houston",
                    "stateCode": "TX",
                    "zip": "77031",
                    "legalDesc": null,
                    "currentOwner": null,
                    "county": null,
                    "parcelID": null,
                    "propertyTypeName": "Single Family Residential",
                    "accessInformation": "To access the property, contact Borrower.\r\nN/A",
                    "yearBuilt": null,
                    "occupiedBy": null,
                    "estimatedSquareFootage": null,
                    "estimatedLotSize": null
                },
                "occupancyType": {
                    "occupancyTypeID": 3,
                    "occupancyTypeName": "Investment",
                    "occupancyTypeDisplayName": "Investment"
                },
                "otherContactsList": [],
                "appraisalID": 0,
                "appraisalTransactionID": "",
                "orderTypeCode": null,
                "orderTypeName": null,
                "lenderName": null,
                "lenderBranchName": "",
                "isLenderDifferent": false,
                "appraisalLenderName": null,
                "appraisalLenderAddress": null,
                "loanNumber": "17100401024",
                "agencyCaseIdentifier": null,
                "loanTypeName": "FHA",
                "loanPurposeName": null,
                "fhaCaseNumber": "",
                "duCaseNumber": "85693211274",
                "transactionTypeName": "Purchase",
                "dateNeeded": "2023-04-20T00:00:00",
                "orderPriorityTypeName": "normal",
                "fileOnHold": false,
                "appraisalOnHoldDate": "0001-01-01T00:00:00",
                "appraisalResumeDate": "0001-01-01T00:00:00",
                "inspectedDate": "0001-01-01T00:00:00",
                "inspectionTime": null,
                "inspectedTime": null,
                "inspectionDate": "0001-01-01T00:00:00",
                "inspectionComplete": false,
                "appraisalStatusName": null,
                "trackingNumber": null,
                "vendorFileNumber": null,
                "appraisalSentToBorrowerOn": "0001-01-01T00:00:00",
                "appraisalSentToBorrower": false,
                "reportDownloadedByBorrower": false,
                "reportDownloadedByBorrowerOn": "0001-01-01T00:00:00",
                "borrowerReportAuthorizationCode": null,
                "termsAcknowledgedByBorrower": false,
                "termsAcknowledgedByBorrowerOn": "0001-01-01T00:00:00",
                "isRevisionRequest": false,
                "revisionRequestedOn": "0001-01-01T00:00:00",
                "lenderComments": "",
                "sellerContribution": 0,
                "appraisalOrigCompletionDate": "0001-01-01T00:00:00",
                "invoiceDueDate": "0001-01-01T00:00:00",
                "invoiceComments": null,
                "loanApplicationDate": "0001-01-01T00:00:00",
                "loanClosingDate": "0001-01-01T00:00:00",
                "lenderAddress": null,
                "appointmentContact": null,
                "investorName": "Chase",
                "appraisalFee": 300.00,
                "paymentReceived": 0,
                "appraisalFileName": null,
                "appraisalFileReleased": false,
                "appraisalFileReleasedOn": "0001-01-01T00:00:00",
                "appraisalFileReleasedBy": null,
                "uadStatusName": null,
                "uadReportNeeded": true,
                "uadDocumentFileIdentifier": null,
                "reportTypeName": null,
                "appraisalXMLFileName": null,
                "appraisalXMLFileSubmittedtoPortal": false,
                "appraisalTypeName": "1004 Conventional",
                "appraisalType1Fee": 300.00,   
                "salesTaxAmount": 0,
                "salesTaxRate": 0,
                "disclosureDate": "0001-01-01T00:00:00",
                "loanAmount": 41.0,
                "appraisedValue": 0,
                "salesPrice": 75000,
                "effectiveDate": "0001-01-01T00:00:00",
                "ucdpDocFileID": null,
                "orderedOn": "0001-01-01T00:00:00",
                "orderedByUsername": "dennjones",
                "orderedByName": "Denn Jones",
                "orderedByPhone": null,
                "orderedByEmail": "vld_qa007@outlook.com",
                "loanProcessorUser1": "",
                "loanProcessorUser2": "",
                "loanProcessorUser3": "",
                "additionalClientRecipients": "testJoseph@yopmail.com",
                "loConnectUserName": "AMS Admin",
                "loConnectEmail": "testJoseph@yopmail.com",
                "loConnectPhone": "null",
                "webhookURL": "",
                "createdOn": "0001-01-01T00:00:00",
                "createdBy": null,
                "orderSource": "ValueLinkClientAPI",
                "statusMessage": null,
                "statusCode": 0,
                "paymentStatus": "unpaid",
                "intentToProceedDate": "2022-05-09",
                "AssignmentType": "AutoAssignAMC",
                "AppraiserID":0,
                "buydownTerms": "Buydown Term 36",
                "buydownAmount": 7855,
                "buydownFunder": "Builder",
                "customFields": []
            },
            headers:{
                'accesstoken': accessTokenAPI,
                'Content-Type': 'application/json'
            }
        })
        expect(response.ok()).toBeTruthy()
        expect(response.status()).toBe(200)
        const responseBody = await response.json()
        console.log(responseBody)
        expect(responseBody.appraisalID).toBeTruthy()
        appraisalId = responseBody.appraisalID
        console.log(appraisalId)
    })
})
