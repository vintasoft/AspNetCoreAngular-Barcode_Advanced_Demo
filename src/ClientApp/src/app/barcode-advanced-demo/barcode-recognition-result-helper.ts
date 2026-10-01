export class BarcodeRecognitionResultHelper {

  _barcodeReader: Vintasoft.Barcode.WebBarcodeReaderJS | null;


  constructor(barcodeReader: Vintasoft.Barcode.WebBarcodeReaderJS | null) {
    this._barcodeReader = barcodeReader;
  }


  /**
   Creates a HTML markup for modal window with the barcode reading result.
  */
  public createHtmlMarkupForBarcodeReadingResult(barcodeRecognitionResult: any): string {
    let htmlMarkup: string = '<b>BarcodeType: </b>' + barcodeRecognitionResult.barcodeType + '<br />';

    if (barcodeRecognitionResult.barcodeType == "Mailmark CMDM Type7" || barcodeRecognitionResult.barcodeType == "Mailmark CMDM Type9" || barcodeRecognitionResult.barcodeType == "Mailmark CMDM Type29") {
      htmlMarkup += '<b>Value: </b><br />';
      htmlMarkup += this.createMarkupWithInformationAboutMailmarkCMDMBarcode(barcodeRecognitionResult, true, '<br />') + '<br />';
      htmlMarkup += '<b>Base value: </b>' + this.__replaceSpecialHtmlChars(barcodeRecognitionResult.baseValue) + '<br />';
    }
    else if (barcodeRecognitionResult.barcodeType == "PPN") {
      htmlMarkup += '<b>Value: </b><br />';
      htmlMarkup += this.createMarkupWithInformationAboutPpnBarcode(barcodeRecognitionResult, true, '<br />') + '<br />';
      htmlMarkup += '<b>Base value: </b>' + this.__replaceSpecialHtmlChars(barcodeRecognitionResult.baseValue) + '<br />';
    }
    else if (barcodeRecognitionResult.barcodeType == "AAMVA") {
      htmlMarkup += '<b>Value: </b><br />';
      htmlMarkup += this.createMarkupWithInformationAboutAamvaBarcode(barcodeRecognitionResult, true, '<br />') + '<br />';
      htmlMarkup += '<b>Base value: </b>' + this.__replaceSpecialHtmlChars(barcodeRecognitionResult.baseValue) + '<br />';
    }
    else if (barcodeRecognitionResult.barcodeType == "Swiss QR Code") {
      htmlMarkup += '<b>Value: </b><br />';
      htmlMarkup += this.createMarkupWithInformationAboutSwissQrCodeBarcode(barcodeRecognitionResult, true, '<br />') + '<br />';
      htmlMarkup += '<b>Base value: </b>' + this.__replaceSpecialHtmlChars(barcodeRecognitionResult.baseValue) + '<br />';
    }
    else if (barcodeRecognitionResult.barcodeType == "IATA BCBP Aztec" || barcodeRecognitionResult.barcodeType == "IATA BCBP DataMatrix" || barcodeRecognitionResult.barcodeType == "IATA BCBP PDF417" || barcodeRecognitionResult.barcodeType == "IATA BCBP QR Code") {
      htmlMarkup += '<b>Value: </b><br />';
      htmlMarkup += this.createMarkupWithInformationAboutIataBcbpBarcode(barcodeRecognitionResult, true, '<br />') + '<br />';
      htmlMarkup += '<b>Base value: </b>' + this.__replaceSpecialHtmlChars(barcodeRecognitionResult.baseValue) + '<br />';
    }
    else if (barcodeRecognitionResult.barcodeType.substring(0, 3) == "GS1") {
      htmlMarkup += '<b>Value: </b>' + this.__replaceSpecialHtmlChars(barcodeRecognitionResult.value) + '<br />';
      htmlMarkup += '<b>Base value: </b>' + this.__replaceSpecialHtmlChars(barcodeRecognitionResult.baseValue) + '<br />';
      htmlMarkup += '<b>GS1 Decoded value: </b><br />';
      htmlMarkup += '===<br />';
      htmlMarkup += this.createMarkupWithInformationAboutGS1Barcode(barcodeRecognitionResult, true, '<br />') + '<br />';
      htmlMarkup += '===<br />';
    }
    else {
      htmlMarkup += '<b>Value: </b><br />' + this.__replaceSpecialHtmlChars(barcodeRecognitionResult.value) + '<br />';
      if (barcodeRecognitionResult.baseValue != null && barcodeRecognitionResult.value != barcodeRecognitionResult.baseValue) {
        htmlMarkup += '<b>Base value: </b>' + this.__replaceSpecialHtmlChars(barcodeRecognitionResult.baseValue) + '<br />';
      }
    }

    htmlMarkup += '<b>Confidence: </b>' + barcodeRecognitionResult.confidence + '<br />';
    htmlMarkup += '<b>ReadingQuality: </b>' + barcodeRecognitionResult.readingQuality.toFixed(2) + '<br />';
    htmlMarkup += '<b>Threshold: </b>' + barcodeRecognitionResult.threshold + '<br />';
    htmlMarkup += '<b>Region: </b>' + 'LT=(' + barcodeRecognitionResult.region.leftTop.x + ',' + barcodeRecognitionResult.region.leftTop.y + '); RT=(' +
      barcodeRecognitionResult.region.rightTop.x + ',' + barcodeRecognitionResult.region.rightTop.y + '); LB=(' + barcodeRecognitionResult.region.leftBottom.x +
      ',' + barcodeRecognitionResult.region.leftBottom.y + '); RB=(' + barcodeRecognitionResult.region.rightBottom.x + ',' + barcodeRecognitionResult.region.rightBottom.y +
      '); Angle=' + barcodeRecognitionResult.region.angle.toFixed(1) + '°<br />';

    // 1D
    if (barcodeRecognitionResult.className == "WebBarcodeRecognition1DResult") {
      let barcodeRecognition1DResult: any = barcodeRecognitionResult;
      htmlMarkup += '<b>NarrowBarCount: </b>' + barcodeRecognition1DResult.narrowBarCount + '<br />';
      htmlMarkup += '<b>NarrowBarSize: </b>' + barcodeRecognition1DResult.narrowBarSize.toFixed(2) + '<br /><br />';
    }
    // 2D
    else if (barcodeRecognitionResult.className == "WebBarcodeRecognition2DResult") {
      let barcodeRecognition2DResult: any = barcodeRecognitionResult;
      htmlMarkup += '<b>MatrixSize: </b>' + barcodeRecognition2DResult.matrixSize.x + "x" + barcodeRecognition2DResult.matrixSize.y + '<br />';
      htmlMarkup += '<b>CellSize: </b>' + barcodeRecognition2DResult.cellSize.x.toFixed(2) + "x" + barcodeRecognition2DResult.cellSize.y.toFixed(2) + '<br />';
      if (barcodeRecognition2DResult.className == "WebAztecBarcodeRecognitionResult") {
        let aztecBarcodeRecognitionResult: any = barcodeRecognitionResult;
        htmlMarkup += '<b>BulleyeCenter: </b>' + aztecBarcodeRecognitionResult.bulleyeCenter.x.toFixed(2) + "x" + aztecBarcodeRecognitionResult.bulleyeCenter.y.toFixed(2) + '<br />';
      }
      htmlMarkup += "<br />"
    }
    htmlMarkup += '<b>HEXValue: </b><br /><div style="font-family:\'Courier New\'">' + barcodeRecognitionResult.hexValue + '</div>';

    let barcodePrintQualityTestResult: any = barcodeRecognitionResult.printQualityTest;
    if (barcodePrintQualityTestResult != undefined) {
      htmlMarkup += "<br /><b>QualityTestInformation</b>:<br />";
      if (barcodePrintQualityTestResult.className == "WebISO15416BarcodePrintQualityTestResult") {
        let iso15416BarcodePrintQualityTestResult: any = barcodePrintQualityTestResult;
        htmlMarkup += this.__createMarkupForISO15416TestResult(iso15416BarcodePrintQualityTestResult.tests);
      }
      else {
        htmlMarkup += this.__createMarkupForISO15415TestResult(barcodePrintQualityTestResult);
      }
    }
    else {
      htmlMarkup += '<br />';
      if (this._barcodeReader != null && this._barcodeReader.get_Settings().get_CollectTestInformation()) {
        htmlMarkup += "Barcode print quality test is not supported for this barcode type.<br />";
      }
      else {
        htmlMarkup += "Barcode print quality test information is not collected. Please open 'Reader Settings' and set value of 'CollectTestInformation' property to 'true' if you want to collect the barcode print quality test information.<br />";
      }
    }

    return htmlMarkup;
  }

  /**
   Creates a HTML markup with information about recognized Mailmark CMDM barcode.
   @param barcodeRecognitionResult Information about Mailmark CMDM barcode.
   @param isBoldTextLabel A value indicating whether the parameter title must be shown using bold font.
   @param brText A string that should be used as line break symbol.
  */
  public createMarkupWithInformationAboutMailmarkCMDMBarcode(barcodeRecognitionResult: any, isBoldParameterTitle: boolean, brText: string): string {
    let htmlMarkup = this.__createMarkupForBarcodeInfoParameter('UPU Country ID', barcodeRecognitionResult.decodedValue.upuCountryId, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Information type ID', barcodeRecognitionResult.decodedValue.informationTypeId, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Version ID', barcodeRecognitionResult.decodedValue.versionId, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Item class', barcodeRecognitionResult.decodedValue.itemClass, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Supply chain ID', barcodeRecognitionResult.decodedValue.supplyChainId, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Item ID', barcodeRecognitionResult.decodedValue.itemId, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('DPS', barcodeRecognitionResult.decodedValue.dps, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('RTS flag', barcodeRecognitionResult.decodedValue.rtsFlag, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Return to sender post code', barcodeRecognitionResult.decodedValue.returnToSenderPostCode, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Reserved', barcodeRecognitionResult.decodedValue.reserved, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Customer content', barcodeRecognitionResult.decodedValue.customerContent, isBoldParameterTitle, '');
    return htmlMarkup;
  }

  /**
   Creates a HTML markup with information about recognized PPN barcode.
   @param barcodeRecognitionResult Information about PPN barcode.
   @param isBoldTextLabel A value indicating whether the parameter title must be shown using bold font.
   @param brText A string that should be used as line break symbol.
  */
  public createMarkupWithInformationAboutPpnBarcode(barcodeRecognitionResult: any, isBoldParameterTitle: boolean, brText: string): string {
    let htmlMarkup = this.__createMarkupForBarcodeInfoParameter('Batch number', barcodeRecognitionResult.decodedValue.batchNumber, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Date of manufacture', barcodeRecognitionResult.decodedValue.dateOfManufacture, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Expiry date', barcodeRecognitionResult.decodedValue.expiryDate, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('GTIN', barcodeRecognitionResult.decodedValue.GTIN, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Pharmacy product number', barcodeRecognitionResult.decodedValue.pharmacyProductNumber, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Serial number', barcodeRecognitionResult.decodedValue.serialNumber, isBoldParameterTitle, '');
    return htmlMarkup;
  }

  /**
   Creates a HTML markup with information about recognized AAMVA barcode.
   @param barcodeRecognitionResult Information about AAMVA barcode.
   @param isBoldTextLabel A value indicating whether the parameter title must be shown using bold font.
   @param brText A string that should be used as line break symbol.
  */
  public createMarkupWithInformationAboutAamvaBarcode(barcodeRecognitionResult: any, isBoldParameterTitle: boolean, brText: string): string {
    let htmlMarkup = this.__createMarkupForBarcodeInfoParameter('Version level', barcodeRecognitionResult.versionLevel, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Issuer identification number', barcodeRecognitionResult.issuerIdentificationNumber.toString(), isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Jurisdiction version number', barcodeRecognitionResult.jurisdictionVersionNumber.toString(), isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('License number', barcodeRecognitionResult.licenseNumber, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Expiration date', barcodeRecognitionResult.expirationDate, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('IssueDate', barcodeRecognitionResult.issueDate, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Date of birth', barcodeRecognitionResult.dateOfBirth, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Card revision date', barcodeRecognitionResult.cardRevisionDate, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Family name', barcodeRecognitionResult.familyName, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('First name', barcodeRecognitionResult.firstName, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Middle name', barcodeRecognitionResult.middleName, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Sex', barcodeRecognitionResult.sex, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Height', barcodeRecognitionResult.height, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Eye color', barcodeRecognitionResult.eyeColor, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Hair color', barcodeRecognitionResult.hairColor, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Country ID', barcodeRecognitionResult.countryId, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Address street 1', barcodeRecognitionResult.addressStreet1, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Address street 2', barcodeRecognitionResult.addressStreet2, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Address city', barcodeRecognitionResult.addressCity, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Address state code', barcodeRecognitionResult.addressStateCode, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Address postal code', barcodeRecognitionResult.addressPostalCode, isBoldParameterTitle, '');
    return htmlMarkup;
  }

  /**
   Creates a HTML markup with information about recognized Swiss QR Code barcode.
   @param barcodeRecognitionResult Information about Swiss QR Code barcode.
   @param isBoldTextLabel A value indicating whether the parameter title must be shown using bold font.
   @param brText A string that should be used as line break symbol.
  */
  public createMarkupWithInformationAboutSwissQrCodeBarcode(barcodeRecognitionResult: any, isBoldParameterTitle: boolean, brText: string): string {
    let htmlMarkup = this.__createMarkupForBarcodeInfoParameter('QR type', barcodeRecognitionResult.decodedValue.qrType, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Version', barcodeRecognitionResult.decodedValue.version, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Coding type', barcodeRecognitionResult.decodedValue.codingType, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('IBAN', barcodeRecognitionResult.decodedValue.IBAN, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Creditor address type', barcodeRecognitionResult.decodedValue.creditorAddressType, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Creditor name', barcodeRecognitionResult.decodedValue.creditorName, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Creditor street or address line 1', barcodeRecognitionResult.decodedValue.creditorStreetOrAddressLine1, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Creditor building number or address line 2', barcodeRecognitionResult.decodedValue.creditorBuildingNumberOrAddressLine2, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Creditor postal code', barcodeRecognitionResult.decodedValue.creditorPostalCode, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Creditor town', barcodeRecognitionResult.decodedValue.creditorTown, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Creditor country', barcodeRecognitionResult.decodedValue.creditorCountry, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate creditor address type', barcodeRecognitionResult.decodedValue.ultimateCreditorAddressType, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate creditor name', barcodeRecognitionResult.decodedValue.ultimateCreditorName, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate creditor street or address line 1', barcodeRecognitionResult.decodedValue.ultimateCreditorStreetOrAddressLine1, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate creditor building number or address line 2', barcodeRecognitionResult.decodedValue.ultimateCreditorBuildingNumberOrAddressLine2, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate creditor postal code', barcodeRecognitionResult.decodedValue.ultimateCreditorPostalCode, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate creditor town', barcodeRecognitionResult.decodedValue.ultimateCreditorTown, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate creditor country', barcodeRecognitionResult.decodedValue.ultimateCreditorCountry, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Amount', barcodeRecognitionResult.decodedValue.amount, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Amount currency', barcodeRecognitionResult.decodedValue.amountCurrency, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate debtor address type', barcodeRecognitionResult.decodedValue.ultimateDebtorAddressType, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate debtor name', barcodeRecognitionResult.decodedValue.ultimateDebtorName, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate debtor street or address line 1', barcodeRecognitionResult.decodedValue.ultimateDebtorStreetOrAddressLine1, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate debtor building number or address line 2', barcodeRecognitionResult.decodedValue.ultimateDebtorBuildingNumberOrAddressLine2, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate debtor postal code', barcodeRecognitionResult.decodedValue.ultimateDebtorPostalCode, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate debtor town', barcodeRecognitionResult.decodedValue.ultimateDebtorTown, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Ultimate debtor country', barcodeRecognitionResult.decodedValue.ultimateDebtorCountry, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Payment reference type', barcodeRecognitionResult.decodedValue.paymentReferenceType, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Payment reference', barcodeRecognitionResult.decodedValue.paymentReference, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Unstructured message', barcodeRecognitionResult.decodedValue.unstructuredMessage, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Bill information', barcodeRecognitionResult.decodedValue.billInformation, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Alternative scheme parameters 1', barcodeRecognitionResult.decodedValue.alternativeSchemeParameters1, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('Alternative scheme parameters 2', barcodeRecognitionResult.decodedValue.alternativeSchemeParameters2, isBoldParameterTitle, '');
    return htmlMarkup;
  }

  /**
   Creates a HTML markup with information about recognized IATA BCBPe barcode.
   @param barcodeRecognitionResult Information about barcode.
   @param isBoldTextLabel A value indicating whether the parameter title must be shown using bold font.
   @param brText A string that should be used as line break symbol.
  */
  public createMarkupWithInformationAboutIataBcbpBarcode(barcodeRecognitionResult: any, isBoldParameterTitle: boolean, brText: string): string {
    var htmlMarkup = this.__createMarkupForBarcodeInfoParameter('AirlineDesignatorOfIssuer', barcodeRecognitionResult.decodedValue.airlineDesignatorOfIssuer, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('AirlineNumericCode', barcodeRecognitionResult.decodedValue.airlineNumericCode, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('BaggageTagLicensePlate', barcodeRecognitionResult.decodedValue.baggageTagLicensePlate, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('CheckInSequenceNumber', barcodeRecognitionResult.decodedValue.checkInSequenceNumber, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('CompartmentCode', barcodeRecognitionResult.decodedValue.compartmentCode, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('ConditionalsSize', barcodeRecognitionResult.decodedValue.conditionalsSize, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('DateOfFlight', barcodeRecognitionResult.decodedValue.dateOfFlight, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('DateOfPassIssuance', barcodeRecognitionResult.decodedValue.dateOfPassIssuance, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('DocumentType', barcodeRecognitionResult.decodedValue.documentType, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('ElectronicTicketIndicator', barcodeRecognitionResult.decodedValue.electronicTicketIndicator, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('FirstBaggageTagLicensePlate', barcodeRecognitionResult.decodedValue.firstBaggageTagLicensePlate, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('FlightNumber', barcodeRecognitionResult.decodedValue.flightNumber, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('FormatCode', barcodeRecognitionResult.decodedValue.formatCode, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('FreeBaggageAllowance', barcodeRecognitionResult.decodedValue.freeBaggageAllowance, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('FrequentFlyerAirlineDesignator', barcodeRecognitionResult.decodedValue.frequentFlyerAirlineDesignator, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('FrequentFlyerNumber', barcodeRecognitionResult.decodedValue.frequentFlyerNumber, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('FromCityAirportCode', barcodeRecognitionResult.decodedValue.fromCityAirportCode, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('IdAdIndicator', barcodeRecognitionResult.decodedValue.idAdIndicator, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('InternationalDocumentVerification', barcodeRecognitionResult.decodedValue.internationalDocumentVerification, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('MarketingCarrierDesignator', barcodeRecognitionResult.decodedValue.marketingCarrierDesignator, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('NumberOfSegments', barcodeRecognitionResult.decodedValue.numberOfSegments, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('OperatingCarrierDesignator', barcodeRecognitionResult.decodedValue.operatingCarrierDesignator, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('OperatingCarrierPnrCode', barcodeRecognitionResult.decodedValue.operatingCarrierPnrCode, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('PassengerDescription', barcodeRecognitionResult.decodedValue.passengerDescription, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('PassengerName', barcodeRecognitionResult.decodedValue.passengerName, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('PassengerStatus', barcodeRecognitionResult.decodedValue.passengerStatus, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('RepeatedConditionalsSize', barcodeRecognitionResult.decodedValue.repeatedConditionalsSize, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('SeatNumber', barcodeRecognitionResult.decodedValue.seatNumber, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('SecondBaggageTagLicensePlate', barcodeRecognitionResult.decodedValue.secondBaggageTagLicensePlate, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('SelecteeIndicator', barcodeRecognitionResult.decodedValue.selecteeIndicator, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('SerialNumber', barcodeRecognitionResult.decodedValue.serialNumber, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('SourceOfBoardingPassIssuance', barcodeRecognitionResult.decodedValue.sourceOfBoardingPassIssuance, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('SourceOfCheckIn', barcodeRecognitionResult.decodedValue.sourceOfCheckIn, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('ToCityAirportCode', barcodeRecognitionResult.decodedValue.toCityAirportCode, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('UniqueConditionalsSize', barcodeRecognitionResult.decodedValue.uniqueConditionalsSize, isBoldParameterTitle, brText);
    htmlMarkup += this.__createMarkupForBarcodeInfoParameter('VersionNumber', barcodeRecognitionResult.decodedValue.versionNumber, isBoldParameterTitle, brText);
    return htmlMarkup;
  }

  /**
   Creates a HTML markup with information about recognized GS1 barcode.
   @param {object} barcodeInfo Information about barcode.
   @param {boolean} isBoldTextLabel A value indicating whether the parameter title must be shown using bold font.
   @param {string} brText A string that should be used as line break symbol.
  */
  public createMarkupWithInformationAboutGS1Barcode(barcodeRecognitionResult: any, isBoldParameterTitle: boolean, brText: string): string {
    var htmlMarkup = "";
    if (barcodeRecognitionResult.applicationIdentifierValues != null) {
      for (var i = 0; i < barcodeRecognitionResult.applicationIdentifierValues.length; i++) {
        if (i == (barcodeRecognitionResult.applicationIdentifierValues.length - 1))
          brText = '';

        var applicationIdentifierValue = barcodeRecognitionResult.applicationIdentifierValues[i];
        htmlMarkup += this.__createMarkupForBarcodeInfoParameter(applicationIdentifierValue.applicationIdentifier.dataContent, applicationIdentifierValue.value, isBoldParameterTitle, brText);
      }
    }
    return htmlMarkup;
  }

  /**
   * Creates a HTML markup with information about barcode info parameter.
   * @param barcodeInfoParamTitle Title of barcode info parameter.
   * @param barcodeInfoParamValue Value of barcode info parameter.
   * @param isBoldParameterTitle A value indicating whether the parameter title must be shown using bold font.
   * @param brText A string that should be used as line break symbol.
   */
  private __createMarkupForBarcodeInfoParameter(barcodeInfoParamTitle: string, barcodeInfoParamValue: string, isBoldParameterTitle: boolean, brText: string): string {
    let labelStart: string = '', labelEnd: string = '';
    if (isBoldParameterTitle) {
      labelStart = '<b>';
      labelEnd = '</b>';
    }
    return labelStart + '- ' + barcodeInfoParamTitle + ': ' + labelEnd + barcodeInfoParamValue + brText;
  }

  /**
   Creates a HTML markup for ISO15416 barcode print quality test information.
   param {object} testInfo Information about quality test.
   returns {string} HTML markup.
  */
  private __createMarkupForISO15416TestResult(testResults: any): string {
    let htmlMarkup = '';
    for (let i = 0; i < testResults.length; i++) {
      if (testResults.length > 1)
        htmlMarkup += '<br /><hr><b>Symbol component ' + (i + 1) + ':</b><br /><hr>';
      let testResult: any = testResults[i];
      htmlMarkup += '<table style="text-align:center; width:100%">';
      htmlMarkup += '<tr style="background-color:#DBD7D7"><td><b>Parameter</b></td><td><b>Value</b></td><td><b>Grade</b></td></tr>';
      if (testResult.decode != null)
        htmlMarkup += this.__createTableRowForQualityTestProperty("Decode", testResult.decode.value, testResult.decode.grade);
      htmlMarkup += this.__createTableRowForQualityTestProperty("MaxReflectance", testResult.maxReflectance.value, testResult.maxReflectance.grade);
      htmlMarkup += this.__createTableRowForQualityTestProperty("MinReflectance", testResult.minReflectance.value, testResult.minReflectance.grade);
      htmlMarkup += this.__createTableRowForQualityTestProperty("GlobalThreshold", testResult.globalThreshold.value, testResult.globalThreshold.grade);
      htmlMarkup += this.__createTableRowForQualityTestProperty("SymbolContrast", testResult.symbolContrast.value, testResult.symbolContrast.grade);
      if (testResult.minEdgeContrast != null)
        htmlMarkup += this.__createTableRowForQualityTestProperty("MinEdgeContrast", testResult.minEdgeContrast.value, testResult.minEdgeContrast.grade);
      if (testResult.modulation != null)
        htmlMarkup += this.__createTableRowForQualityTestProperty("Modulation", testResult.modulation.value, testResult.modulation.grade);
      if (testResult.defects != null)
        htmlMarkup += this.__createTableRowForQualityTestProperty("Defects", testResult.defects.value, testResult.defects.grade);
      if (testResult.decodability != null)
        htmlMarkup += this.__createTableRowForQualityTestProperty("Decodability", testResult.decodability.value, testResult.decodability.grade);
      if (testResult.printContrastSignal != null)
        htmlMarkup += this.__createTableRowForQualityTestProperty("PrintContrastSignal", testResult.printContrastSignal.value, testResult.printContrastSignal.grade);
      if (testResult.averageBarGain != null)
        htmlMarkup += this.__createTableRowForQualityTestProperty("AverageBarGain", testResult.averageBarGain.value, testResult.averageBarGain.grade);
      if (testResult.whiteNarrowBarWidth != null)
        htmlMarkup += this.__createTableRowForQualityTestProperty("WhiteNarrowBarWidth", testResult.whiteNarrowBarWidth.value, testResult.whiteNarrowBarWidth.grade);
      if (testResult.blackNarrowBarWidth != null)
        htmlMarkup += this.__createTableRowForQualityTestProperty("BlackNarrowBarWidth", testResult.blackNarrowBarWidth.value, testResult.blackNarrowBarWidth.grade);
      if (testResult.blackWhiteRatio != null)
        htmlMarkup += this.__createTableRowForQualityTestProperty("BlackWhiteRatio", testResult.blackWhiteRatio.value, testResult.blackWhiteRatio.grade);
      if (testResult.quietZoneLeft != null)
        htmlMarkup += this.__createTableRowForQualityTestProperty("QuietZoneLeft", testResult.quietZoneLeft.value, testResult.quietZoneLeft.grade);
      if (testResult.quietZoneRight != null)
        htmlMarkup += this.__createTableRowForQualityTestProperty("QuietZoneRight", testResult.quietZoneRight.value, testResult.quietZoneRight.grade);
      htmlMarkup += this.__createTableRowForQualityTestProperty("ScanGrade", testResult.scanGrade.value, testResult.scanGrade.grade);
      htmlMarkup += '</table>';
    }
    return htmlMarkup;
  }

  /**
   Creates a HTML markup for ISO15415 barcode print quality test information.
   param {object} testInfo Information about quality test.
   returns {string} HTML markup.
  */
  private __createMarkupForISO15415TestResult(testResult: any): string {
    let htmlMarkup = '';
    htmlMarkup += '<table style="text-align:center; width:100%">';
    htmlMarkup += '<tr style="background-color:#DBD7D7"><td><b>Parameter</b></td><td><b>Value</b></td><td><b>Grade</b></td></tr>';
    htmlMarkup += this.__createTableRowForQualityTestProperty("Decode", testResult.decode.value, testResult.decode.grade);
    htmlMarkup += this.__createTableRowForQualityTestProperty("UnusedErrorCorrection", testResult.unusedErrorCorrection.value, testResult.unusedErrorCorrection.grade);
    if (testResult.codewordYield != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("CodewordYield", testResult.codewordYield.value, testResult.codewordYield.grade);
    if (testResult.codewordPrintQualityModulation != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("CodewordPrintQualityModulation", testResult.codewordPrintQualityModulation.value, testResult.codewordPrintQualityModulation.grade);
    if (testResult.codewordPrintQualityDefects != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("CodewordPrintQualityDefects", testResult.codewordPrintQualityDefects.value, testResult.codewordPrintQualityDefects.grade);
    if (testResult.codewordPrintQualityDecodability != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("CodewordPrintQualityDecodability", testResult.codewordPrintQualityDecodability.value, testResult.codewordPrintQualityDecodability.grade);
    if (testResult.codewordPrintQuality != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("CodewordPrintQuality", testResult.codewordPrintQuality.value, testResult.codewordPrintQuality.grade);
    if (testResult.maxReflectance != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("MaxReflectance", testResult.maxReflectance.value, testResult.maxReflectance.grade);
    if (testResult.minReflectance != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("MinReflectance", testResult.minReflectance.value, testResult.minReflectance.grade);
    if (testResult.symbolContrast != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("SymbolContrast", testResult.symbolContrast.value, testResult.symbolContrast.grade);
    if (testResult.axialNonuniformity != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("AxialNonuniformity", testResult.axialNonuniformity.value, testResult.axialNonuniformity.grade);
    if (testResult.gridNonuniformity != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("GridNonuniformity", testResult.gridNonuniformity.value, testResult.gridNonuniformity.grade);
    if (testResult.modulation != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("Modulation", testResult.modulation.value, testResult.modulation.grade);
    if (testResult.printGrowth != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("PrintGrowth", testResult.printGrowth.value, testResult.printGrowth.grade);
    if (testResult.fixedPatternDamage != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("FixedPatternDamage", testResult.fixedPatternDamage.value, testResult.fixedPatternDamage.grade);
    if (testResult.additionalGrades != null)
      for (var i = 0; i < testResult.additionalGrades.length; i++)
        htmlMarkup += this.__createTableRowForQualityTestProperty(testResult.additionalGrades[i].value, "", testResult.additionalGrades[i].grade);
    if (testResult.quietZone != null)
      htmlMarkup += this.__createTableRowForQualityTestProperty("QuietZone", testResult.quietZone.value, testResult.quietZone.grade);
    htmlMarkup += this.__createTableRowForQualityTestProperty("DistortionAngle", testResult.distortionAngle.value, testResult.distortionAngle.grade);
    htmlMarkup += this.__createTableRowForQualityTestProperty("OverallSymbolGrade", testResult.overallSymbolGrade.value, testResult.overallSymbolGrade.grade);
    htmlMarkup += '</table>';

    if (testResult.startPattern != undefined) {
      htmlMarkup += '<hr><b>Start Pattern Test</b>:<br /><hr>';
      htmlMarkup += this.__createMarkupForISO15416TestResult([testResult.startPattern]);
      htmlMarkup += '<hr>';
    }
    if (testResult.centerPattern != undefined) {
      htmlMarkup += '<b>Center Pattern Test</b>:<br /><hr>';
      htmlMarkup += this.__createMarkupForISO15416TestResult([testResult.centerPattern]);
      htmlMarkup += '<hr>';
    }
    if (testResult.stopPattern != undefined) {
      htmlMarkup += '<b>Stop Pattern Test</b>:<br /><hr>';
      htmlMarkup += this.__createMarkupForISO15416TestResult([testResult.stopPattern]);
      htmlMarkup += '<hr>';
    }

    return htmlMarkup;
  }

  /**
   Creates a markup for quality test property.
  */
  private __createTableRowForQualityTestProperty(propertyName: string, value: string, grade: string): string {
    let style = 'style="background-color:#DBD7D7; text-align:left"';
    return '<tr><td ' + style + '>' + propertyName + '</td><td>' + value + '</td><td>' + grade + '</td></tr>';
  }

  /**
   Replaces special HTML characters from the string with HTML code.
   param {string} sourceString Source string with HTML code.
   returns {string} String with replaces special HTML characters
  */
  private __replaceSpecialHtmlChars(sourceString: string): string {
    sourceString = sourceString.replace(/</g, '&lt;');
    sourceString = sourceString.replace(/>/g, '&gt;');
    return sourceString;
  }

}
