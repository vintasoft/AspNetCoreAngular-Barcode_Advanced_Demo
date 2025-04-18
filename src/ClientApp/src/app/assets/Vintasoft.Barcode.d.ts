// Copyright 2014-2025 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Barcode {

  // ===== ENUMS =====

  /**
   * Specifies available types of 1D barcode symbologies.
   */
  class Web1DBarcodeTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of 2D barcode symbologies.
   */
  class Web2DBarcodeTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of barcode symbologies.
   */
  class WebBarcodeTypeEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of 1D barcode symbology subsets.
   */
  class Web1DBarcodeSubsetNamesEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of 2D barcode symbology subsets.
   */
  class Web2DBarcodeSubsetNamesEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of 1D barcode symbology subsets.
   */
  class Web1DBarcodeSubsetNamesFlagedEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of 2D barcode symbology subsets.
   */
  class Web2DBarcodeSubsetNamesFlagedEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available direction types for barcode scanning.
   */
  class WebScanDirectionEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes of threshold detection.
   */
  class WebThresholdModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available formats of customer information field in barcode.
   */
  class WebAustralianPostCustomerInfoFormatEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available encoding modes of Aztec barcode.
   */
  class WebAztecEncodingModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available Aztec symbol types.
   */
  class WebAztecSymbolTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available data encodation modes of Code 128 or Code 16K barcode.
   */
  class WebCode128EncodingModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available data encoding modes of DataMatrix barcode.
   */
  class WebDataMatrixEncodingModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available symbol types of Data Matrix barcode.
   */
  class WebDataMatrixSymbolTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available encoding modes of Han Xin Code barcode.
   */
  class WebHanXinCodeEncodingModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available error correction levels of Han Xin Code barcode.
   */
  class WebHanXinCodeErrorCorrectionLevelEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available symbol versions of Han Xin Code barcode.
   */
  class WebHanXinCodeSymbolVersionEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available encoding modes of MaxiCode barcode.
   */
  class WebMaxiCodeEncodingModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available data encoding modes of PDF417 barcode.
   */
  class WebPDF417EncodingModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available symbol types of Micro PDF417 barcode.
   */
  class WebMicroPDF417SymbolTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available checksums in MSI barcode.
   */
  class WebMSIChecksumTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available Error Correction Levels of PDF417 barcode.
   */
  class WebPDF417ErrorCorrectionLevelEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies the format of the color data for each pixel in the barcode image.
   */
  class WebBarcodeImagePixelFormatEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available data encoding modes of QR barcode.
   */
  class WebQREncodingModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available error correction levels of QR barcode.
   */
  class WebQRErrorCorrectionLevelEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available symbol versions of QR barcode.
   */
  class WebQRSymbolVersionEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of GS1 2D component symbols.
   */
  class WebGS1TwoDimensionalComponentTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }


  // ===== CLASSES =====

  /**
   * Contains information about value of Mailmark CMDM 2D barcode.
   */
  class WebMailmarkCmdmValueJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebMailmarkCmdmValueJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the class of the item.
     */
    get_ClassId(): string;

    /**
     * Sets the class of the item.
     * @param value Class of the item. Supported values:<br/> <ul> <li>"0" - Null or Test.</li> <li>"1" - 1C (Retail).</li> <li>"2" - 2C (Retail).</li> <li>"3" - 3C (Retail).</li> <li>"4" - Premium (Retail Publishing Mail) (for potential future use).</li> <li>"5" - Deferred (Retail).</li> <li>"6" - Air (Retail) (for potential future use).</li> <li>"7" - Surface (Retail) (for potential future use).</li> <li>"8" - Premium (Network Access).</li> <li>"9" - Standard (Network Access).</li> <li>"A" to "Z" - Spare(for potential future use).</li> </ul>
     */
    set_ClassId(value: string): void;

    /**
     * Gets optional space for use by customer.
     */
    get_CustomerContent(): string;

    /**
     * Sets optional space for use by customer.
     * @param value Optional space for use by customer.
     */
    set_CustomerContent(value: string): void;

    /**
     * Gets the Destination Post Code plus Delivery Point Suffix (DPS).
     */
    get_Dps(): string;

    /**
     * Sets the Destination Post Code plus Delivery Point Suffix (DPS).
     * @param value The Destination Post Code plus Delivery Point Suffix. Value contains the following number of characters:<br/> <ul> <li>Area (1 or 2 characters)</li> <li>District (1 or 2 characters)</li> <li>Sector (1 character)</li> <li>Unit (2 characters)</li> <li>DPS (2 characters).</li> </ul> <br /> Value shall be filled with 9 space characters if no destination post code information is available.
     */
    set_Dps(value: string): void;

    /**
     * Gets the Royal Mail Mailmark barcode payload for each product type.
     */
    get_InformationTypeId(): string;

    /**
     * Sets the Royal Mail Mailmark barcode payload for each product type.
     * @param value Royal Mail Mailmark barcode payload. Supported values:<br/> <ul> <li>"0" - Domestic Sorted And Unsorted.</li> <li>"1" - International Sorted And Unsorted (for potential future use).</li> <li>"2" - Response Services (for potential future use).</li> <li>"A" - Online Postage.</li> <li>"B" - Franking.</li> <li>"C" - Consolidation.</li> </ul>
     */
    set_InformationTypeId(value: string): void;

    /**
     * Gets the unique item within the Supply Chain ID.
     */
    get_ItemId(): string;

    /**
     * Sets the unique item within the Supply Chain ID.
     * @param value Unique item within the Supply Chain ID. Supported values: from "00000000" to "99999999".
     */
    set_ItemId(value: string): void;

    /**
     * Gets field reserved by Royal Mail.
     */
    get_Reserved(): string;

    /**
     * Sets field reserved by Royal Mail.
     * @param value Field reserved by Royal Mail. Must be filled with space characters until further notice.
     */
    set_Reserved(value: string): void;

    /**
     * Gets the Return to Sender Post Code but no DPS.
     */
    get_ReturnToSenderPostCode(): string;

    /**
     * Sets the Return to Sender Post Code but no DPS.
     * @param value Return to Sender Post Code but no DPS.
     */
    set_ReturnToSenderPostCode(value: string): void;

    /**
     * Gets a value indicating whether the level of RTS service is being requested.
     */
    get_RtsFlag(): string;

    /**
     * Sets a value indicating whether the level of RTS service is being requested.
     * @param value Flag. Supported values: <ul> <li>"0" - None .</li> <li>"1" - Response Services Unique (for potential future use).</li> </ul>
     */
    set_RtsFlag(value: string): void;

    /**
     * Gets the unique chain of customers involved in the mailing.
     */
    get_SupplyChainId(): string;

    /**
     * Sets the unique chain of customers involved in the mailing.
     * @param value unique chain of customers involved in the mailing. Supported values: from "0000000" to "9999999".
     */
    set_SupplyChainId(value: string): void;

    /**
     * Gets the barcode version as relevant to each Information Type ID.
     */
    get_VersionId(): string;

    /**
     * Sets the barcode version as relevant to each Information Type ID.
     * @param value Barcode version as relevant to each Information Type ID. Supported values:<br/> <ul> <li>"1" - For Mailmark barcode.</li> <li>"0", "2" to "9", "A" to "Z" - spare for future use.</li> </ul>
     */
    set_VersionId(value: string): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Barcode.WebMailmarkCmdmValueJS;

  }

  /**
   * Contains information about value of PPN barcode.
   */
  class WebPpnBarcodeValueJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPpnBarcodeValueJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the Batch number.
     */
    get_BatchNumber(): string;

    /**
     * Sets the Batch number.
     * @param value The Batch number.
     */
    set_BatchNumber(value: string): void;

    /**
     * Gets the Date of manufacture.
     */
    get_DateOfManufacture(): string;

    /**
     * Sets the Date of manufacture.
     * @param value The Date of manufacture.
     */
    set_DateOfManufacture(value: string): void;

    /**
     * Gets the Expiry date.
     */
    get_ExpiryDate(): string;

    /**
     * Sets the Expiry date.
     * @param value The Expiry date.
     */
    set_ExpiryDate(value: string): void;

    /**
     * Gets the GTIN (Global Trade Item Number).
     */
    get_GTIN(): string;

    /**
     * Sets the GTIN (Global Trade Item Number).
     * @param value GTIN.
     */
    set_GTIN(value: string): void;

    /**
     * Gets the PPN (Pharmacy Product Number).
     */
    get_PharmacyProductNumber(): string;

    /**
     * Sets the PPN (Pharmacy Product Number).
     * @param value PPN.
     */
    set_PharmacyProductNumber(value: string): void;

    /**
     * Gets the Serial number.
     */
    get_SerialNumber(): string;

    /**
     * Sets the Serial number.
     * @param value The Serial number.
     */
    set_SerialNumber(value: string): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Barcode.WebPpnBarcodeValueJS;

  }

  /**
   * Contains information about value of Swiss QR Code barcode.
   */
  class WebSwissQrCodeBarcodeValueJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebSwissQrCodeBarcodeValueJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the unambiguous indicator for the Swiss QR Code.
     */
    get_QrType(): string;

    /**
     * Gets version of the specifications (Implementation Guidelines) in use on the date on which the Swiss QR Code was created.
     */
    get_Version(): string;

    /**
     * Gets the character set code.
     */
    get_CodingType(): string;

    /**
     * Gets the IBAN or QR-IBAN of the creditor.
     */
    get_IBAN(): string;

    /**
     * Sets the IBAN or QR-IBAN of the creditor.
     * @param value The IBAN or QR-IBAN of the creditor.
     */
    set_IBAN(value: string): void;

    /**
     * Gets the creditor address type, which is specified using a code.
     */
    get_CreditorAddressType(): string;

    /**
     * Sets the creditor address type, which is specified using a code.
     * @param value The creditor address type, which is specified using a code. Available values: "S" - structured address, "K" - combined address elements (2 lines).
     */
    set_CreditorAddressType(value: string): void;

    /**
     * Gets the creditor's name or company according to the account name.
     */
    get_CreditorName(): string;

    /**
     * Sets the creditor's name or company according to the account name.
     * @param value The creditor's name or company according to the account name. Maximum 70 characters permitted.
     */
    set_CreditorName(value: string): void;

    /**
     * Gets the structured Address: Street/P.O. Box from the creditor's address.
     */
    get_CreditorStreetOrAddressLine1(): string;

    /**
     * Sets the structured Address: Street/P.O. Box from the creditor's address.
     * @param value The structured Address: Street/P.O. Box from the creditor's address. Maximum 70 characters permitted.
     */
    set_CreditorStreetOrAddressLine1(value: string): void;

    /**
     * Gets the structured Address: Street/P.O. Box from the creditor's address.
     */
    get_CreditorBuildingNumberOrAddressLine2(): string;

    /**
     * Sets the structured Address: Street/P.O. Box from the creditor's address.
     * @param value The structured Address: Street/P.O. Box from the creditor's address. Structured Address: maximum 16 characters allowed. Combined address elements: maximum 70 characters permitted. Must be provided for address type "K".
     */
    set_CreditorBuildingNumberOrAddressLine2(value: string): void;

    /**
     * Gets the postal code from creditor's address.
     */
    get_CreditorPostalCode(): string;

    /**
     * Sets the postal code from creditor's address.
     * @param value The postal code from creditor's address. Maximum 16 characters permitted. The postal code must be provided without a country code prefix. Combined address elements: must not be provided.
     */
    set_CreditorPostalCode(value: string): void;

    /**
     * Gets the town from creditor's address.
     */
    get_CreditorTown(): string;

    /**
     * Sets the town from creditor's address.
     * @param value The town from creditor's address. Maximum 35 characters permitted. Combined address elements: must not be provided.
     */
    set_CreditorTown(value: string): void;

    /**
     * Gets the Country from creditor's address.
     */
    get_CreditorCountry(): string;

    /**
     * Sets the Country from creditor's address.
     * @param value The Country from creditor's address. Two-character country code according to ISO 3166-1.
     */
    set_CreditorCountry(value: string): void;

    /**
     * Gets the ultimate creditor address type, which is specified using a code.
     */
    get_UltimateCreditorAddressType(): string;

    /**
     * Sets the ultimate creditor address type, which is specified using a code.
     * @param value The ultimate creditor address type, which is specified using a code. Available values: "S" - structured address, "K" - combined address elements (2 lines).
     */
    set_UltimateCreditorAddressType(value: string): void;

    /**
     * Gets the creditor's name or company according to the account name.
     */
    get_UltimateCreditorName(): string;

    /**
     * Sets the creditor's name or company according to the account name.
     * @param value The creditor's name or company according to the account name. Maximum 70 characters permitted.
     */
    set_UltimateCreditorName(value: string): void;

    /**
     * Gets the structured Address: Street/P.O. Box from the creditor's address.
     */
    get_UltimateCreditorStreetOrAddressLine1(): string;

    /**
     * Sets the structured Address: Street/P.O. Box from the creditor's address.
     * @param value The structured Address: Street/P.O. Box from the creditor's address. Maximum 70 characters permitted.
     */
    set_UltimateCreditorStreetOrAddressLine1(value: string): void;

    /**
     * Gets the structured Address: Street/P.O. Box from the creditor's address.
     */
    get_UltimateCreditorBuildingNumberOrAddressLine2(): string;

    /**
     * Sets the structured Address: Street/P.O. Box from the creditor's address.
     * @param value The structured Address: Street/P.O. Box from the creditor's address. Structured Address: maximum 16 characters allowed. Combined address elements: maximum 70 characters permitted. Must be provided for address type "K".
     */
    set_UltimateCreditorBuildingNumberOrAddressLine2(value: string): void;

    /**
     * Gets the postal code from creditor's address.
     */
    get_UltimateCreditorPostalCode(): string;

    /**
     * Sets the postal code from creditor's address.
     * @param value The postal code from creditor's address. Maximum 16 characters permitted. The postal code must be provided without a country code prefix. Combined address elements: must not be provided.
     */
    set_UltimateCreditorPostalCode(value: string): void;

    /**
     * Gets the town from creditor's address.
     */
    get_UltimateCreditorTown(): string;

    /**
     * Sets the town from creditor's address.
     * @param value The town from creditor's address. Maximum 35 characters permitted. Combined address elements: must not be provided.
     */
    set_UltimateCreditorTown(value: string): void;

    /**
     * Gets the country of the ultimate creditor's address.
     */
    get_UltimateCreditorCountry(): string;

    /**
     * Sets the country of the ultimate creditor's address.
     * @param value The country of the ultimate creditor's address. Two-character country code according to ISO 3166-1.
     */
    set_UltimateCreditorCountry(value: string): void;

    /**
     * Gets the payment amount.
     */
    get_Amount(): string;

    /**
     * Sets the payment amount.
     * @param value The payment amount.
     */
    set_Amount(value: string): void;

    /**
     * Gets the payment currency.
     */
    get_AmountCurrency(): string;

    /**
     * Sets the payment currency.
     * @param value The payment currency. 3-digit alphanumeric currency code according to ISO 4217. Only CHF and EUR are permitted.
     */
    set_AmountCurrency(value: string): void;

    /**
     * Gets the ultimate debtor address type, which is specified using a code.
     */
    get_UltimateDebtorAddressType(): string;

    /**
     * Sets the ultimate debtor address type, which is specified using a code.
     * @param value The ultimate debtor address type, which is specified using a code. Available values: "S" - structured address, "K" - combined address elements (2 lines).
     */
    set_UltimateDebtorAddressType(value: string): void;

    /**
     * Gets the debtor's name or company according to the account name.
     */
    get_UltimateDebtorName(): string;

    /**
     * Sets the debtor's name or company according to the account name.
     * @param value The debtor's name or company according to the account name. Maximum 70 characters permitted.
     */
    set_UltimateDebtorName(value: string): void;

    /**
     * Gets the structured Address: Street/P.O. Box from the debtor's address.
     */
    get_UltimateDebtorStreetOrAddressLine1(): string;

    /**
     * Sets the structured Address: Street/P.O. Box from the debtor's address.
     * @param value The structured Address: Street/P.O. Box from the debtor's address. Maximum 70 characters permitted.
     */
    set_UltimateDebtorStreetOrAddressLine1(value: string): void;

    /**
     * Gets the structured Address: Street/P.O. Box from the debtor's address.
     */
    get_UltimateDebtorBuildingNumberOrAddressLine2(): string;

    /**
     * Sets the structured Address: Street/P.O. Box from the debtor's address.
     * @param value The structured Address: Street/P.O. Box from the debtor's address. Structured Address: maximum 16 characters allowed. Combined address elements: maximum 70 characters permitted. Must be provided for address type "K".
     */
    set_UltimateDebtorBuildingNumberOrAddressLine2(value: string): void;

    /**
     * Gets the postal code from debtor's address.
     */
    get_UltimateDebtorPostalCode(): string;

    /**
     * Sets the postal code from debtor's address.
     * @param value The postal code from debtor's address. Maximum 16 characters permitted. The postal code must be provided without a country code prefix. Combined address elements: must not be provided.
     */
    set_UltimateDebtorPostalCode(value: string): void;

    /**
     * Gets the town from debtor's address.
     */
    get_UltimateDebtorTown(): string;

    /**
     * Sets the town from debtor's address.
     * @param value The town from debtor's address. Maximum 35 characters permitted. Combined address elements: must not be provided.
     */
    set_UltimateDebtorTown(value: string): void;

    /**
     * Gets the country of the ultimate debtor's address.
     */
    get_UltimateDebtorCountry(): string;

    /**
     * Sets the country of the ultimate debtor's address.
     * @param value The country of the ultimate debtor's address. Two-character country code according to ISO 3166-1.
     */
    set_UltimateDebtorCountry(value: string): void;

    /**
     * Gets the payment reference type.
     */
    get_PaymentReferenceType(): string;

    /**
     * Sets the payment reference type.
     * @param value The payment reference type. Maximum four alphanumeric characters.
     */
    set_PaymentReferenceType(value: string): void;

    /**
     * Gets the payment reference type.
     */
    get_PaymentReference(): string;

    /**
     * Sets the payment reference type.
     * @param value The payment reference type. QR reference: 27 characters, numeric, check sum calculation according to Modulo 10 recursive. Creditor Reference (ISO 11649): maximum 25 characters, alphanumeric The element may not be filled for the NON reference type. Banks do not distinguish between upper and lower case capitalization.
     */
    set_PaymentReference(value: string): void;

    /**
     * Gets the unstructured information that can be used to indicate the payment purpose or for additional textual information about payments with a structured reference.
     */
    get_UnstructuredMessage(): string;

    /**
     * Sets the unstructured information that can be used to indicate the payment purpose or for additional textual information about payments with a structured reference.
     * @param value The unstructured information that can be used to indicate the payment purpose or for additional textual information about payments with a structured reference. Maximum 140 characters permitted.
     */
    set_UnstructuredMessage(value: string): void;

    /**
     * Gets the bill information that contains coded information for automated booking of the payment.
     */
    get_BillInformation(): string;

    /**
     * Sets the bill information that contains coded information for automated booking of the payment.
     * @param value The bill information that contains coded information for automated booking of the payment. Maximum 140 characters permitted.
     */
    set_BillInformation(value: string): void;

    /**
     * Gets the parameter character chain of the alternative scheme 1.
     */
    get_AlternativeSchemeParameters1(): string;

    /**
     * Sets the parameter character chain of the alternative scheme 1.
     * @param value The parameter character chain of the alternative scheme 1. Maximum 100 characters permitted.
     */
    set_AlternativeSchemeParameters1(value: string): void;

    /**
     * Gets the parameter character chain of the alternative scheme 2.
     */
    get_AlternativeSchemeParameters2(): string;

    /**
     * Sets the parameter character chain of the alternative scheme 2.
     * @param value The parameter character chain of the alternative scheme 2. Maximum 100 characters permitted.
     */
    set_AlternativeSchemeParameters2(value: string): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Barcode.WebSwissQrCodeBarcodeValueJS;

  }

  /**
   * Base settings of barcode writer.
   */
  class WebBarcodeWriterBaseSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebBarcodeWriterBaseSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether the barcode writer must draw the barcode value on the barcode image using the automatic letter spacing.
     */
    get_ValueAutoLetterSpacing(): boolean;

    /**
     * Sets a value indicating whether the barcode writer must draw the barcode value on the barcode image using the automatic letter spacing.
     * @param value Flag.
     */
    set_ValueAutoLetterSpacing(value: boolean): void;

    /**
     * Gets a value indicating whether the barcode writer must process the special symbols in barcode value.
     */
    get_ProcessSpecialSymbols(): boolean;

    /**
     * Sets a value indicating whether the barcode writer must process the special symbols in barcode value.
     * @param value Flag.
     */
    set_ProcessSpecialSymbols(value: boolean): void;

    /**
     * Gets the width (and height for 2D barcodes), in pixels, of single block.
     */
    get_MinWidth(): number;

    /**
     * Sets the width (and height for 2D barcodes), in pixels, of single block.
     * @param value Width (and height for 2D barcodes), in pixels, of single block.
     */
    set_MinWidth(value: number): void;

    /**
     * Gets the adjustment method of bars width in percentage to the value of MinWidth property.
     */
    get_BarsWidthAdjustment(): number;

    /**
     * Sets the adjustment method of bars width in percentage to the value of MinWidth property.
     * @param value Adjustment method of bars width in percentage to the value of MinWidth property.
     */
    set_BarsWidthAdjustment(value: number): void;

    /**
     * Gets the barcode padding.
     */
    get_Padding(): number;

    /**
     * Sets the barcode padding.
     * @param value Padding.
     */
    set_Padding(value: number): void;

    /**
     * Gets image vertical and horizontal resolution, in dots per inch.
     */
    get_Resolution(): number;

    /**
     * Sets image vertical and horizontal resolution, in dots per inch.
     * @param value Image vertical and horizontal resolution, in dots per inch.
     */
    set_Resolution(value: number): void;

    /**
     * Gets the amount of gap between the text and the barcode when creating a barcode, in pixels.
     */
    get_ValueGap(): number;

    /**
     * Sets the amount of gap between the text and the barcode when creating a barcode, in pixels.
     * @param value Gap between the text and the barcode, in pixels.
     */
    set_ValueGap(value: number): void;

    /**
     * Gets the type of barcode symbology.
     */
    get_BarcodeType(): object;

    /**
     * Sets the type of barcode symbology.
     * @param value Type of barcode symbology.
     */
    set_BarcodeType(value: object): void;

    /**
     * Gets the image pixel format.
     */
    get_PixelFormat(): Vintasoft.Barcode.WebBarcodeImagePixelFormatEnumJS;

    /**
     * Sets the image pixel format.
     * @param value An instance of [see="WebBarcodeImagePixelFormatEnumJS"] class that defines the image pixel format.
     */
    set_PixelFormat(value: Vintasoft.Barcode.WebBarcodeImagePixelFormatEnumJS): void;

    /**
     * Gets the back color of barcode.
     */
    get_BackColor(): string;

    /**
     * Sets the back color of barcode.
     * @param value Back color of barcode.
     */
    set_BackColor(value: string): void;

    /**
     * Gets the fore color of barcode.
     */
    get_ForeColor(): string;

    /**
     * Sets the fore color of barcode.
     * @param value Fore color of barcode.
     */
    set_ForeColor(value: string): void;

    /**
     * Gets text that is showing below barcode.
     */
    get_PrintableValue(): string;

    /**
     * Sets text that is showing below barcode.
     * @param value Text.
     */
    set_PrintableValue(value: string): void;

    /**
     * Gets the value of the barcode.
     */
    get_Value(): string;

    /**
     * Sets the value of the barcode.
     * @param value Value of the barcode.
     */
    set_Value(value: string): void;

    /**
     * Gets the font family.
     */
    get_ValueFontFamily(): string;

    /**
     * Sets the font family.
     * @param value Font family.
     */
    set_ValueFontFamily(value: string): void;

    /**
     * Gets the font size.
     */
    get_ValueFontSize(): number;

    /**
     * Sets the font size.
     * @param value Font size.
     */
    set_ValueFontSize(value: number): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Barcode.WebBarcodeWriterBaseSettingsJS;

  }

  /**
   * Settings of 1D barcode writer.
   */
  class Web1DBarcodeWriterSettingsJS extends Vintasoft.Barcode.WebBarcodeWriterBaseSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "Web1DBarcodeWriterSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the height, in pixels, of 1D barcode.
     */
    get_Height(): number;

    /**
     * Sets the height, in pixels, of 1D barcode.
     * @param value Height.
     */
    set_Height(value: number): void;

    /**
     * Gets a value indicating whether the barcode writer must enable the numeric mode in Telepen barcodes.
     */
    get_EnableTelepenNumericMode(): boolean;

    /**
     * Sets a value indicating whether the barcode writer must enable the numeric mode in Telepen barcodes.
     * @param value Flag.
     */
    set_EnableTelepenNumericMode(value: boolean): void;

    /**
     * Gets a value indicating whether the barcode writer must calculate an optional checksum.
     */
    get_OptionalCheckSum(): boolean;

    /**
     * Sets a value indicating whether the barcode writer must calculate an optional checksum.
     * @param value Flag.
     */
    set_OptionalCheckSum(value: boolean): void;

    /**
     * Gets a value indicating whether the barcode writer must generate RSS-14 Stacked Omnidirectional barcode.
     */
    get_RSS14StackedOmnidirectional(): boolean;

    /**
     * Sets a value indicating whether the barcode writer must generate RSS-14 Stacked Omnidirectional barcode.
     * @param value Flag.
     */
    set_RSS14StackedOmnidirectional(value: boolean): void;

    /**
     * Gets a value indicating whether the RSS linear component has linked 2D component.
     */
    get_RSSLinkageFlag(): boolean;

    /**
     * Sets a value indicating whether the RSS linear component has linked 2D component.
     * @param value Flag.
     */
    set_RSSLinkageFlag(value: boolean): void;

    /**
     * Gets a value indicating whether the barcode writer must draw 1D barcode value on the barcode image.
     */
    get_ValueVisible(): boolean;

    /**
     * Sets a value indicating whether the barcode writer must drwa 1D barcode value on the barcode image.
     * @param value Flag.
     */
    set_ValueVisible(value: boolean): void;

    /**
     * Gets the ratio of the wide bar width to the narrow bar width (only for barcodes width 1X and 2X bars width).
     */
    get_BarsRatio(): number;

    /**
     * Sets the ratio of the wide bar width to the narrow bar width (only for barcodes width 1X and 2X bars width).
     * @param value Ratio of the bar width to the narrow bar width.
     */
    set_BarsRatio(value: number): void;

    /**
     * Gets Code 16K row count.
     */
    get_Code16KRows(): number;

    /**
     * Sets Code 16K row count.
     * @param value Code 16K row count.
     */
    set_Code16KRows(value: number): void;

    /**
     * Gets the Post barcodes Ascender/Descender height multiplier.
     */
    get_PostBarcodesADMultiplier(): number;

    /**
     * Sets the Post barcodes Ascender/Descender height multiplier.
     * @param value Post barcodes Ascender/Descender height multiplier.
     */
    set_PostBarcodesADMultiplier(value: number): void;

    /**
     * Gets the number of segments per row to be used in RSS Expanded Stacked barcode.
     */
    get_RSSExpandedStackedSegmentPerRow(): number;

    /**
     * Sets the number of segments per row to be used in RSS Expanded Stacked barcode.
     * @param value Number of segments per row to be used in RSS Expanded Stacked barcode.
     */
    set_RSSExpandedStackedSegmentPerRow(value: number): void;

    /**
     * Gets the format of customer information field of Australia Post 4-state barcode.
     */
    get_AustralianPostCustomerInfoFormat(): Vintasoft.Barcode.WebAustralianPostCustomerInfoFormatEnumJS;

    /**
     * Sets the format of customer information field of Australia Post 4-state barcode.
     * @param value An instance of [see="WebAustralianPostCustomerInfoFormatEnumJS"] class that defines the format of customer information field of Australia Post 4-state barcode.
     */
    set_AustralianPostCustomerInfoFormat(value: Vintasoft.Barcode.WebAustralianPostCustomerInfoFormatEnumJS): void;

    /**
     * Gets the type of barcode symbology.
     */
    get_BarcodeType(): object;

    /**
     * Sets the type of barcode symbology.
     * @param value An instance of [see="Web1DBarcodeTypeEnumJS"] class that defines the type of barcode symbology.
     */
    set_BarcodeType(value: Vintasoft.Barcode.Web1DBarcodeTypeEnumJS): void;

    /**
     * Gets the barcode symbology subset.
     */
    get_BarcodeSubset(): Vintasoft.Barcode.Web1DBarcodeSubsetNamesEnumJS;

    /**
     * Sets the barcode symbology subset.
     * @param value An instance of [see="Web1DBarcodeSubsetNamesEnumJS"] class that defines the barcode symbology subset.
     */
    set_BarcodeSubset(value: Vintasoft.Barcode.Web1DBarcodeSubsetNamesEnumJS): void;

    /**
     * Gets the Code128 data encoding mode.
     */
    get_Code128EncodingMode(): Vintasoft.Barcode.WebCode128EncodingModeEnumJS;

    /**
     * Sets the Code128 data encoding mode.
     * @param value An instance of [see="WebCode128EncodingModeEnumJS"] class that defines the Code128 data encoding mode.
     */
    set_Code128EncodingMode(value: Vintasoft.Barcode.WebCode128EncodingModeEnumJS): void;

    /**
     * Gets the Code 16K data encoding mode.
     */
    get_Code16KEncodingMode(): Vintasoft.Barcode.WebCode128EncodingModeEnumJS;

    /**
     * Sets the Code 16K data encoding mode.
     * @param value An instance of [see="WebCode128EncodingModeEnumJS"] class that defines the Code 16K data encoding mode.
     */
    set_Code16KEncodingMode(value: Vintasoft.Barcode.WebCode128EncodingModeEnumJS): void;

    /**
     * Gets a checksum type of MSI barcode.
     */
    get_MSIChecksum(): Vintasoft.Barcode.WebMSIChecksumTypeEnumJS;

    /**
     * Sets a checksum type of MSI barcode.
     * @param value An instance of [see="WebMSIChecksumTypeEnumJS"] class that defines a checksum type of MSI barcode.
     */
    set_MSIChecksum(value: Vintasoft.Barcode.WebMSIChecksumTypeEnumJS): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Barcode.Web1DBarcodeWriterSettingsJS;

  }

  /**
   * Settings of 2D barcode writer.
   */
  class Web2DBarcodeWriterSettingsJS extends Vintasoft.Barcode.WebBarcodeWriterBaseSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "Web2DBarcodeWriterSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether the barcode writer must draw 2D barcode value on the barcode image.
     */
    get_Value2DVisible(): boolean;

    /**
     * Sets a value indicating whether the barcode writer must draw 2D barcode value on the barcode image.
     * @param value Flag.
     */
    set_Value2DVisible(value: boolean): void;

    /**
     * Gets number of data layers in Aztec symbol.
     */
    get_AztecDataLayers(): number;

    /**
     * Sets number of data layers in Aztec symbol.
     * @param value Number of data layers in aztec symbol.
     */
    set_AztecDataLayers(value: number): void;

    /**
     * Gets a percent of error correction data in Aztec symbol.
     */
    get_AztecErrorCorrectionDataPercent(): number;

    /**
     * Sets a percent of error correction data in Aztec symbol.
     * @param value Percent of error correction data in aztec symbol.
     */
    set_AztecErrorCorrectionDataPercent(value: number): void;

    /**
     * Gets Aztec data encoding mode.
     */
    get_AztecEncodingMode(): Vintasoft.Barcode.WebAztecEncodingModeEnumJS;

    /**
     * Sets Aztec data encoding mode.
     * @param value An instance of [see="WebAztecEncodingModeEnumJS"] class that defines the Aztec data encoding mode.
     */
    set_AztecEncodingMode(value: Vintasoft.Barcode.WebAztecEncodingModeEnumJS): void;

    /**
     * Gets Aztec symbol type.
     */
    get_AztecSymbol(): Vintasoft.Barcode.WebAztecSymbolTypeEnumJS;

    /**
     * Sets Aztec symbol type.
     * @param value An instance of [see="WebAztecSymbolTypeEnumJS"] class that defines the Aztec symbol type.
     */
    set_AztecSymbol(value: Vintasoft.Barcode.WebAztecSymbolTypeEnumJS): void;

    /**
     * Gets the MaxiCode barcode resolution.
     */
    get_MaxiCodeResolution(): number;

    /**
     * Sets the MaxiCode barcode resolution.
     * @param value MaxiCode barcode resolution.
     */
    set_MaxiCodeResolution(value: number): void;

    /**
     * Gets the MaxiCode encoding mode.
     */
    get_MaxiCodeEncodingMode(): Vintasoft.Barcode.WebMaxiCodeEncodingModeEnumJS;

    /**
     * Sets the MaxiCode encoding mode.
     * @param value An instance of [see="WebMaxiCodeEncodingModeEnumJS"] class that defines the MaxiCode encoding mode.
     */
    set_MaxiCodeEncodingMode(value: Vintasoft.Barcode.WebMaxiCodeEncodingModeEnumJS): void;

    /**
     * Gets MicroPDF417 column count.
     */
    get_MicroPDF417Columns(): number;

    /**
     * Sets MicroPDF417 column count.
     * @param value MicroPDF417 column count.
     */
    set_MicroPDF417Columns(value: number): void;

    /**
     * Gets the row height of Micro PDF417.
     */
    get_MicroPDF417RowHeight(): number;

    /**
     * Sets the row height of Micro PDF417.
     * @param value Row height of Micro PDF417.
     */
    set_MicroPDF417RowHeight(value: number): void;

    /**
     * Gets PDF417 column count.
     */
    get_PDF417Columns(): number;

    /**
     * Sets PDF417 column count.
     * @param value PDF417 column count.
     */
    set_PDF417Columns(value: number): void;

    /**
     * Gets the row height of PDF417.
     */
    get_PDF417RowHeight(): number;

    /**
     * Sets the row height of PDF417.
     * @param value Row height of PDF417.
     */
    set_PDF417RowHeight(value: number): void;

    /**
     * Gets PDF417 row count.
     */
    get_PDF417Rows(): number;

    /**
     * Sets PDF417 row count.
     * @param value PDF417 row count.
     */
    set_PDF417Rows(value: number): void;

    /**
     * Gets the type of barcode symbology.
     */
    get_BarcodeType(): object;

    /**
     * Sets the type of barcode symbology.
     * @param value An instance of [see="Web2DBarcodeTypeEnumJS"] class that defines the type of barcode symbology.
     */
    set_BarcodeType(value: Vintasoft.Barcode.Web2DBarcodeTypeEnumJS): void;

    /**
     * Gets the barcode symbology subset.
     */
    get_BarcodeSubset(): Vintasoft.Barcode.Web2DBarcodeSubsetNamesEnumJS;

    /**
     * Sets the barcode symbology subset.
     * @param value An instance of [see="Web2DBarcodeSubsetNamesEnumJS"] class that defines the barcode symbology subset.
     */
    set_BarcodeSubset(value: Vintasoft.Barcode.Web2DBarcodeSubsetNamesEnumJS): void;

    /**
     * Gets the Data Matrix data encoding mode.
     */
    get_DataMatrixEncodingMode(): Vintasoft.Barcode.WebDataMatrixEncodingModeEnumJS;

    /**
     * Sets the Data Matrix data encoding mode.
     * @param value An instance of [see="WebDataMatrixEncodingModeEnumJS"] class that defines the Data Matrix data encoding mode.
     */
    set_DataMatrixEncodingMode(value: Vintasoft.Barcode.WebDataMatrixEncodingModeEnumJS): void;

    /**
     * Gets the Data Matrix symbol size.
     */
    get_DataMatrixSymbol(): Vintasoft.Barcode.WebDataMatrixSymbolTypeEnumJS;

    /**
     * Sets the Data Matrix symbol size.
     * @param value An instance of [see="WebDataMatrixSymbolTypeEnumJS"] class that defines the Data Matrix symbol size.
     */
    set_DataMatrixSymbol(value: Vintasoft.Barcode.WebDataMatrixSymbolTypeEnumJS): void;

    /**
     * Gets Han Xin Code data encoding mode.
     */
    get_HanXinCodeEncodingMode(): Vintasoft.Barcode.WebHanXinCodeEncodingModeEnumJS;

    /**
     * Sets Han Xin Code data encoding mode.
     * @param value An instance of [see="WebHanXinCodeEncodingModeEnumJS"] class that defines the Han Xin Code data encoding mode.
     */
    set_HanXinCodeEncodingMode(value: Vintasoft.Barcode.WebHanXinCodeEncodingModeEnumJS): void;

    /**
     * Gets Han Xin Code error correction level.
     */
    get_HanXinCodeErrorCorrectionLevel(): Vintasoft.Barcode.WebHanXinCodeErrorCorrectionLevelEnumJS;

    /**
     * Sets Han Xin Code error correction level.
     * @param value An instance of [see="WebHanXinCodeErrorCorrectionLevelEnumJS"] class that defines the Han Xin Code error correction level.
     */
    set_HanXinCodeErrorCorrectionLevel(value: Vintasoft.Barcode.WebHanXinCodeErrorCorrectionLevelEnumJS): void;

    /**
     * Gets the Han Xin Code symbol version (symbol size).
     */
    get_HanXinCodeSymbol(): Vintasoft.Barcode.WebHanXinCodeSymbolVersionEnumJS;

    /**
     * Sets the Han Xin Code symbol version (symbol size).
     * @param value An instance of [see="WebHanXinCodeSymbolVersionEnumJS"] class that defines the Han Xin Code symbol version (symbol size).
     */
    set_HanXinCodeSymbol(value: Vintasoft.Barcode.WebHanXinCodeSymbolVersionEnumJS): void;

    /**
     * Gets MicroPDF417 data encoding mode.
     */
    get_MicroPDF417EncodingMode(): Vintasoft.Barcode.WebPDF417EncodingModeEnumJS;

    /**
     * Sets MicroPDF417 data encoding mode.
     * @param value An instance of [see="WebPDF417EncodingModeEnumJS"] class that defines the MicroPDF417 data encoding mode.
     */
    set_MicroPDF417EncodingMode(value: Vintasoft.Barcode.WebPDF417EncodingModeEnumJS): void;

    /**
     * Gets the MicroPDF417 symbol size.
     */
    get_MicroPDF417Symbol(): Vintasoft.Barcode.WebMicroPDF417SymbolTypeEnumJS;

    /**
     * Sets the MicroPDF417 symbol size.
     * @param value An instance of [see="WebMicroPDF417SymbolTypeEnumJS"] class that defines the MicroPDF417 symbol size.
     */
    set_MicroPDF417Symbol(value: Vintasoft.Barcode.WebMicroPDF417SymbolTypeEnumJS): void;

    /**
     * Gets PDF417 data encoding mode.
     */
    get_PDF417EncodingMode(): Vintasoft.Barcode.WebPDF417EncodingModeEnumJS;

    /**
     * Sets PDF417 data encoding mode.
     * @param value An instance of [see="WebPDF417EncodingModeEnumJS"] class that defines the PDF417 data encoding mode.
     */
    set_PDF417EncodingMode(value: Vintasoft.Barcode.WebPDF417EncodingModeEnumJS): void;

    /**
     * Gets PDF417 error correction level.
     */
    get_PDF417ErrorCorrectionLevel(): Vintasoft.Barcode.WebPDF417ErrorCorrectionLevelEnumJS;

    /**
     * Sets PDF417 error correction level.
     * @param value An instance of [see="WebPDF417ErrorCorrectionLevelEnumJS"] class that defines the PDF417 error correction level.
     */
    set_PDF417ErrorCorrectionLevel(value: Vintasoft.Barcode.WebPDF417ErrorCorrectionLevelEnumJS): void;

    /**
     * Gets QR data encoding mode.
     */
    get_QREncodingMode(): Vintasoft.Barcode.WebQREncodingModeEnumJS;

    /**
     * Sets QR data encoding mode.
     * @param value An instance of [see="WebQREncodingModeEnumJS"] class that defines the QR data encoding mode.
     */
    set_QREncodingMode(value: Vintasoft.Barcode.WebQREncodingModeEnumJS): void;

    /**
     * Gets QR error correction level.
     */
    get_QRErrorCorrectionLevel(): Vintasoft.Barcode.WebQRErrorCorrectionLevelEnumJS;

    /**
     * Sets QR error correction level.
     * @param value An instance of [see="WebQRErrorCorrectionLevelEnumJS"] class that defines the QR error correction level.
     */
    set_QRErrorCorrectionLevel(value: Vintasoft.Barcode.WebQRErrorCorrectionLevelEnumJS): void;

    /**
     * Gets the QR symbol version (symbol size).
     */
    get_QRSymbol(): Vintasoft.Barcode.WebQRSymbolVersionEnumJS;

    /**
     * Sets the QR symbol version (symbol size).
     * @param value An instance of [see="WebQRSymbolVersionEnumJS"] class that defines the QR symbol version (symbol size).
     */
    set_QRSymbol(value: Vintasoft.Barcode.WebQRSymbolVersionEnumJS): void;

    /**
     * Gets the value of Mailmark CMDM 2D barcode.
     */
    get_MailmarkCMDMBarcodeValue(): Vintasoft.Barcode.WebMailmarkCmdmValueJS;

    /**
     * Sets the value of Mailmark CMDM 2D barcode.
     * @param value Instance of [see="WebMailmarkCmdmValueJS"] class.
     */
    set_MailmarkCMDMBarcodeValue(value: Vintasoft.Barcode.WebMailmarkCmdmValueJS): void;

    /**
     * Gets the value of PPN barcode.
     */
    get_PpnBarcodeValue(): Vintasoft.Barcode.WebPpnBarcodeValueJS;

    /**
     * Sets the value of PPN barcode.
     * @param value Instance of [see="WebPpnBarcodeValueJS"] class.
     */
    set_PpnBarcodeValue(value: Vintasoft.Barcode.WebPpnBarcodeValueJS): void;

    /**
     * Gets the value of Swiss QR Code barcode.
     */
    get_SwissQrCodeBarcodeValue(): Vintasoft.Barcode.WebSwissQrCodeBarcodeValueJS;

    /**
     * Sets the value of Swiss QR Code barcode.
     * @param value Instance of [see="WebSwissQrCodeBarcodeValueJS"] class.
     */
    set_SwissQrCodeBarcodeValue(value: Vintasoft.Barcode.WebSwissQrCodeBarcodeValueJS): void;

    /**
     * Sets the value of the barcode.
     * @param value Value of the barcode.
     */
    set_Value(value: string): void;

    /**
     * Gets the ECI assignment number.
     */
    get_EciNumber(): number;

    /**
     * Sets the ECI assignment number.
     * @param value ECI assignment number.
     */
    set_EciNumber(value: number): void;

    /**
     * Gets DotCode matrix width.
     */
    get_DotCodeMatrixWidth(): number;

    /**
     * Sets DotCode matrix width.
     * @param value The DotCode matrix width. Minimum value is 5. Default value is <b>0</b> (matrix width is calculated automatically).
     */
    set_DotCodeMatrixWidth(value: number): void;

    /**
     * Gets DotCode matrix height.
     */
    get_DotCodeMatrixHeight(): number;

    /**
     * Sets DotCode matrix height.
     * @param value The DotCode matrix height. Minimum value is 5. Default value is <b>0</b> (matrix height is calculated automatically).
     */
    set_DotCodeMatrixHeight(value: number): void;

    /**
     * Gets the width/height aspect ratio of DotCode matrix.
     */
    get_DotCodeMatrixWidthHeightRatio(): number;

    /**
     * Sets the width/height aspect ratio of DotCode matrix.
     * @param value The width/height aspect ratio of DotCode matrix. Default value is 1.5.
     */
    set_DotCodeMatrixWidthHeightRatio(value: number): void;

    /**
     * Gets a value indicating whether the barcode writer must generate the Dotcode cells with square form.
     */
    get_DotCodeRectangularModules(): boolean;

    /**
     * Sets a value indicating whether the barcode writer must generate the Dotcode cells with square form.
     * @param value True - the barcode writer must generate the Dotcode cells with square form; False - the barcode writer must generate the Dotcode cells with circle form. Default value is False.
     */
    set_DotCodeRectangularModules(value: boolean): void;

    /**
     * Gets a value indicating whether the barcode writer must interpret non-data characters in DotCode barcode.
     */
    get_DotCodeInterpretNonDataCharacters(): boolean;

    /**
     * Sets a value indicating whether the barcode writer must interpret non-data characters in DotCode barcode.
     * @param value True - the barcode writer must interpret non-data characters and encode them using FNC1, FNC2 and FNC3 flags; False - the barcode writer encodes NonDataFlags.Fnc1, NonDataFlags.Fnc2 and NonDataFlags.Fnc3 characters as is. Default value is True.
     */
    set_DotCodeInterpretNonDataCharacters(value: boolean): void;

    /**
     * Gets the GS1 2D component type.
     */
    get_GS1TwoDimensionalComponentType(): Vintasoft.Barcode.WebGS1TwoDimensionalComponentTypeEnumJS;

    /**
     * Sets the GS1 2D component type.
     * @param value An instance of [see="WebGS1TwoDimensionalComponentTypeEnumJS"] class that defines the GS1 2D component type.
     */
    set_GS1TwoDimensionalComponentType(value: Vintasoft.Barcode.WebGS1TwoDimensionalComponentTypeEnumJS): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Barcode.Web2DBarcodeWriterSettingsJS;

  }

  /**
   * Barcode reader settings.
   */
  class WebBarcodeReaderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebBarcodeReaderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the barcode symbology types to search.
     */
    get_BarcodeType(): Vintasoft.Barcode.WebBarcodeTypeEnumJS;

    /**
     * Sets the barcode symbology types to search.
     * @param value An instance of [see="WebBarcodeTypeEnumJS"] class that defines the barcode symbology types to search.
     */
    set_BarcodeType(value: Vintasoft.Barcode.WebBarcodeTypeEnumJS): void;

    /**
     * Gets the 1D barcode symbology subsets to search.
     */
    get_Barcode1DSubsets(): Vintasoft.Barcode.Web1DBarcodeSubsetNamesFlagedEnumJS;

    /**
     * Sets the 1D barcode symbology subsets to search.
     * @param value An instance of [see="Web1DBarcodeSubsetNamesFlagedEnumJS"] class that defines the 1D barcode symbology subsets to search.
     */
    set_Barcode1DSubsets(value: Vintasoft.Barcode.Web1DBarcodeSubsetNamesFlagedEnumJS): void;

    /**
     * Gets the 2D barcode symbology subsets to search.
     */
    get_Barcode2DSubsets(): Vintasoft.Barcode.Web2DBarcodeSubsetNamesFlagedEnumJS;

    /**
     * Sets the 2D barcode symbology subsets to search.
     * @param value An instance of [see="Web2DBarcodeSubsetNamesFlagedEnumJS"] class that defines the 2D barcode symbology subsets to search.
     */
    set_Barcode2DSubsets(value: Vintasoft.Barcode.Web2DBarcodeSubsetNamesFlagedEnumJS): void;

    /**
     * Gets the scan direction for barcode search.
     */
    get_ScanDirection(): Vintasoft.Barcode.WebScanDirectionEnumJS;

    /**
     * Sets the scan direction for barcode search.
     * @param value An instance of [see="WebScanDirectionEnumJS"] class that defines the scan direction for barcode search.
     */
    set_ScanDirection(value: Vintasoft.Barcode.WebScanDirectionEnumJS): void;

    /**
     * Gets the scan interval for barcode search.
     */
    get_ScanInterval(): number;

    /**
     * Sets the scan interval for barcode search.
     * @param value Scan interval.
     */
    set_ScanInterval(value: number): void;

    /**
     * Gets the expected number of barcodes to search.
     */
    get_ExpectedBarcodes(): number;

    /**
     * Sets the expected number of barcodes to search.
     * @param value Number of barcodes to search.
     */
    set_ExpectedBarcodes(value: number): void;

    /**
     * Gets a value indicating whether the barcode reader must collect information for quality test.
     */
    get_CollectTestInformation(): boolean;

    /**
     * Sets a value indicating whether the barcode reader must collect information for quality test.
     * @param value True - the barcode reader must collect information for quality test; False - the barcode reader must NOT collect information for quality test.
     */
    set_CollectTestInformation(value: boolean): void;

    /**
     * Gets a value indicating whether the barcode reader must interpret ECI characters in barcode value.
     */
    get_InterpretEciCharacters(): boolean;

    /**
     * Sets a value indicating whether the barcode reader must interpret ECI characters in barcode value.
     * @param value True - barcode reader must interpret ECI characters in barcode value; False - barcode reader must NOT interpret ECI characters in barcode value.
     */
    set_InterpretEciCharacters(value: boolean): void;

    /**
     * Gets the rectangle on image, where barcodes must be searched.
     */
    get_ScanRectangle(): object;

    /**
     * Sets the rectangle on image, where barcodes must be searched.
     * @param x Coordinate of the left top corner of the rectangle.
     * @param y Coordinate of the left top corner of the rectangle.
     * @param w Width of the rectangle.
     * @param h Height of the rectangle.
     */
    set_ScanRectangle(value: number): void;

    /**
     * Gets a value indicating whether the barcode reader must use multiple threads for barcode reading.
     */
    get_UseMultithreading(): boolean;

    /**
     * Sets a value indicating whether the barcode reader must use multiple threads for barcode reading.
     * @param value True - barcode reader will use multiple threads for barcode reading; False - barcode reader will use single thread for barcode reading.
     */
    set_UseMultithreading(value: boolean): void;

    /**
     * Gets a value indicating whether the barcode reader must use the automatic barcode recognition mode.
     */
    get_AutomaticRecognition(): boolean;

    /**
     * Sets a value indicating whether the barcode reader must use the automatic barcode recognition mode.
     * @param value True - barcode reader must use the automatic barcode recognition mode; False - barcode reader must NOT use the automatic barcode recognition mode.
     */
    set_AutomaticRecognition(value: boolean): void;

    /**
     * Gets a value indicating whether the barcode reader must erode the image with barcodes before barcode search.
     */
    get_Erode(): boolean;

    /**
     * Sets a value indicating whether the barcode reader must erode the image with barcodes before barcode search.
     * @param value True - the barcode reader must erode the image with barcodes before barcode search; False - the barcode reader must NOT erode the image with barcodes before barcode search.
     */
    set_Erode(value: boolean): void;

    /**
     * Gets a value indicating whether the barcode reader must invert the image with barcodes before barcode search.
     */
    get_InvertImageColors(): boolean;

    /**
     * Sets a value indicating whether the barcode reader must invert the image with barcodes before barcode search.
     * @param value True - the barcode reader must invert the image with barcodes before barcode search; False - the barcode reader must NOT invert the image with barcodes before barcode search.
     */
    set_InvertImageColors(value: boolean): void;

    /**
     * Gets the threshold value for algorithm of color conversion.
     */
    get_Threshold(): number;

    /**
     * Sets the threshold value for algorithm of color conversion.
     * @param value Threshold value. Minimum value is 0, maximum value is 765. Default value is 500.
     */
    set_Threshold(value: number): void;

    /**
     * Gets the minimum threshold value of algorithm color conversion in the barcode reading iteration process.
     */
    get_ThresholdMin(): number;

    /**
     * Sets the minimal threshold value of algorithm color conversion in the barcode reading iteration process.
     * @param value Threshold value. Minimum value is 0, maximum value is 765. Default value is 200.
     */
    set_ThresholdMin(value: number): void;

    /**
     * Gets the maximal threshold value of algorithm color conversion in the barcode reading iteration process.
     */
    get_ThresholdMax(): number;

    /**
     * Sets the maximal threshold value of algorithm color conversion in the barcode reading iteration process.
     * @param value Threshold value. Minimum value is 0, maximum value is 765. Default value is 600.
     */
    set_ThresholdMax(value: number): void;

    /**
     * Gets the number of steps in barcode reading iteration process.
     */
    get_ThresholdIterations(): number;

    /**
     * Sets the number of steps in barcode reading iteration process.
     * @param value The number of steps in barcode reading iteration process. Minimum value is 1 (iterative process is disabled), maximum value is 32. Default value is 1.
     */
    set_ThresholdIterations(value: number): void;

    /**
     * Gets a mode of threshold detection.
     */
    get_ThresholdMode(): Vintasoft.Barcode.WebThresholdModeEnumJS;

    /**
     * Sets a mode of threshold detection.
     * @param value An instance of [see="WebThresholdModeEnumJS"] class that defines a mode of threshold detection. Default value is "Automatic".
     */
    set_ThresholdMode(value: Vintasoft.Barcode.WebThresholdModeEnumJS): void;

    /**
     * Gets the recognition time-out, in milliseconds.
     */
    get_RecognitionTimeout(): number;

    /**
     * Sets the recognition time-out, in milliseconds.
     * @param value Recognition time-out, in milliseconds.
     */
    set_RecognitionTimeout(value: number): void;

    /**
     * Gets a value indicating whether the barcode reader must search Code 39 barcodes without Start/Stop symbols.
     */
    get_SearchCode39WithoutStartStop(): boolean;

    /**
     * Sets a value indicating whether the barcode reader must search Code 39 barcodes without Start/Stop symbols.
     * @param value A value indicating whether the barcode reader must search Code 39 barcodes without Start/Stop symbols.
     */
    set_SearchCode39WithoutStartStop(value: boolean): void;

    /**
     * Gets a value indicating whether the barcode reader must search QR Code Model 1 barcodes.
     */
    get_SearchQRModel1Barcodes(): boolean;

    /**
     * Sets a value indicating whether the barcode reader must search QR Code Model 1 barcodes.
     * @param value A value indicating whether the barcode reader must search QR Code Model 1 barcodes.
     */
    set_SearchQRModel1Barcodes(value: boolean): void;

    /**
     * Gets a scale factor that is used for upscaling or downscaling an image before barcode recognition.
     */
    get_ImageScaleFactor(): number;

    /**
     * Sets a scale factor that is used for upscaling or downscaling an image before barcode recognition.
     * @param value Scale factor. Minimum value is 0.1, maximum value is 4. Default value is 1.
     */
    set_ImageScaleFactor(value: number): void;

    /**
     * Gets the maximum cell size, in pixels, for two-dimensional matrix barcodes (Aztec, DataMatrix, DotCode, QR, Micro QR, Han Xin Code, Maxicode).
     */
    get_MatrixBarcodeMaxCellSize(): number;

    /**
     * Sets the maximum cell size, in pixels, for two-dimensional matrix barcodes (Aztec, DataMatrix, DotCode, QR, Micro QR, Han Xin Code, Maxicode).
     * @param value Maximum cell size, in pixels.
     */
    set_MatrixBarcodeMaxCellSize(value: number): void;

    /**
     * Gets the maximum barcode height, in narrow bars, for Pharmacode barcode.
     */
    get_PharmacodeMaxHeight(): number;

    /**
     * Sets the maximum barcode height, in narrow bars, for Pharmacode barcode.
     * @param value Maximum barcode height, in narrow bars, for Pharmacode barcode.
     */
    set_PharmacodeMaxHeight(value: number): void;

    /**
     * Gets the minimum barcode height, in narrow bars, for Pharmacode barcode.
     */
    get_PharmacodeMinHeight(): number;

    /**
     * Sets the minimum barcode height, in narrow bars, for Pharmacode barcode.
     * @param value Minimum barcode height, in narrow bars, for Pharmacode barcode.
     */
    set_PharmacodeMinHeight(value: number): void;

    /**
     * Gets the minimum barcode padding, in narrow bars, for Pharmacode barcode.
     */
    get_PharmacodeMinPadding(): number;

    /**
     * Sets the minimum barcode padding, in narrow bars, for Pharmacode barcode.
     * @param value Minimum barcode padding, in narrow bars, for Pharmacode barcode.
     */
    set_PharmacodeMinPadding(value: number): void;

    /**
     * Gets the maximum barcode value of Pharmacode barcode.
     */
    get_PharmacodeMaxValue(): number;

    /**
     * Sets the maximum barcode value of Pharmacode barcode.
     * @param value Maximum barcode value of Pharmacode barcode.
     */
    set_PharmacodeMaxValue(value: number): void;

    /**
     * Gets a value indicating whether the barcode reader accepts Pharmacode barcode, which has all bars with the same width.
     */
    get_SearchOneBarWidePharmacode(): boolean;

    /**
     * Sets a value indicating whether the barcode reader accepts Pharmacode barcode, which has all bars with the same width.
     * @param value False - the barcode reader does not accept Pharmacode barcode, which has all bars with the same width; True - the barcode reader accepts Pharmacode barcode, which has all bars with the same width. Default value is False.
     */
    set_SearchOneBarWidePharmacode(value: boolean): void;

    /**
     * Gets a value indicating whether the barcode reader must interpret FNC characters in DotCode barcodes.
     */
    get_DotCodeInterpretFncCharacters(): boolean;

    /**
     * Sets a value indicating whether the barcode reader must interpret FNC characters in DotCode barcodes.
     * @param value True - barcode reader interprets FNC1, FNC2 and FNC3 characters as specified in specification; False - barcode reader does NOT interpret FNC1, FNC2 and FNC3 characters and transmins them as they encoded in barcode.
     */
    set_DotCodeInterpretFncCharacters(value: boolean): void;

    /**
     * Gets the minimum area of DotCodeBarcode, in dots.
     */
    get_DotCodeMatrixMinArea(): number;

    /**
     * Sets the minimum area of DotCodeBarcode, in dots.
     * @param value The minimum area of DotCodeBarcode, in dots. Default value is 90.
     */
    set_DotCodeMatrixMinArea(value: number): void;

    /**
     * Gets the maximum area of DotCodeBarcode, in dots.
     */
    get_DotCodeMatrixMaxArea(): number;

    /**
     * Sets the maximum area of DotCodeBarcode, in dots.
     * @param value The maximum area of DotCodeBarcode, in dots. Default value is 15000.
     */
    set_DotCodeMatrixMaxArea(value: number): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Barcode.WebBarcodeReaderSettingsJS;

  }

  /**
   * Barcode reader.
   */
  class WebBarcodeReaderJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebBarcodeReaderJS"] class.
     * @param service An instance of [see="WebServiceJS"] class that should be used for barcode reading.
     */
    constructor(service: Vintasoft.Shared.WebServiceJS);

    // PROPERTIES

    /**
     * Gets the barcode reader settings.
     */
    get_Settings(): Vintasoft.Barcode.WebBarcodeReaderSettingsJS;

    /**
     * Sets the barcode reader settings.
     * @param value An instance of [see="WebBarcodeReaderSettingsJS"] class that defines the barcode reader settings.
     */
    set_Settings(value: Vintasoft.Barcode.WebBarcodeReaderSettingsJS): void;

    // METHODS

    /**
     * Sends an asynchronous request to a server for reading barcodes from web image.
     * @param image An instance of [see="WebImageJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>results (object): Array of barcode recognition results.<br/> Result of recognition is an object with following properties:<br/> <ul> <li>barcodeType (string): Barcode type.</li> <li>value (string): Barcode value.</li> <li>hexValue (string): Barcode value in hex representation.</li> <li>confidence (string): Barcode confidence.</li> <li>readingQuality (number): Barcode reading quality.</li> <li>threshold (number): Image threshold which was applied to an image during barcode recognition.</li> <li>region (object): Image region where barcode is found. Image region has the following properties: <ul> <li>angle (number): Angle, in degrees, relative to vector (1,0).</li> <li>leftTop (object): A left-top coordinates of bounding rectangle.</li> <li>leftBottom (object): A left-bottom coordinates of bounding rectangle.</li> <li>rightTop (object): A right-top coordinates of bounding rectangle.</li> <li>rightBottom (object): A right-bottom coordinates of bounding rectangle.</li> </ul> </li> <li>additionalInfo (object): An associative array, which contains the names and values of custom barcode properties.</li> <li>test (object): Result of barcode print quality test.<br/> It can be ISO15415 barcode print quality test: <ul> <li>decode (object): Decode value and grade.</li> <li>maxReflectance (object): A max reflectance, in percents of reflectance value and grade.</li> <li>minReflectance (object): A min reflectance, in percents of reflectance value and grade.</li> <li>symbolContrast (object): Symbol contrast value and grade.</li> <li>modulation (object): Modulation value and grade.</li> <li>scanGrade (object): Scan grade and value.</li> <li>axialNonuniformity (object): Axial nonuniformity value and grade.</li> <li>gridNonuniformity (object): Grid nonuniformity value and grade.</li> <li>unusedErrorCorrection (object): Unused error correction value and grade.</li> <li>reflectanceMargin (object): Reflectance margin value and grade.</li> <li>quietZone (object): Quiet zone, value in percents, that requires barcode symbology specification and grade.</li> <li>distortionAngle (object): Distortion angle of barcode matrix value and grade.</li> <li>additionalGrades (object): Array of additional grades that depends from barcode symbology.</li> <li>fixedPatternDamage (object): Fixed pattern damage value and grade.</li> <li>codewordYield (object): Efficiency with which linear scans can recover data from a two-dimensional multi-row symbol value and grade.</li> <li>codewordPrintQualityModulation (object): Codeword print quality value and grade based on codeword modulation for a two-dimensional multi-row symbol.</li> <li>codewordPrintQualityDefects (object): Codeword print quality value and grade based on codeword defects for a two-dimensional multi-row symbol.</li> <li>codewordPrintQualityDecodability (object): Codeword print quality value and grade based on codeword decodability for a two-dimensional multi-row symbol.</li> <li>codewordPrintQuality (object): Codeword print quality value and grade for a two-dimensional multi-row symbol.</li> <li>startPattern (object): A result of ISO15516 Start/RAP pattern test for multi-row symbologies (PDF417/MicroPDF417).</li> <li>centerPattern (object): A result of ISO15516 Center/RAP pattern test for multi-row symbologies (MicroPDF417).</li> <li>stopPattern (object): A result of ISO15516 Stop/RAP pattern test for multi-row symbologies (PDF417/MicroPDF417).</li> </ul> OR it can be:<br/> <ul> <li>tests (object): Array of ISO15416 barcode print quality test.<br/> ISO15416 barcode print quality test contain: <ul> <li>decode (object): Decode value and grade.</li> <li>maxReflectance (object): A max reflectance, in percents of reflectance value and grade.</li> <li>minReflectance (object): A min reflectance, in percents of reflectance value and grade.</li> <li>globalThreshold (object): A global threshold (GT), in percents of reflectance value and grade.</li> <li>symbolContrast (object): Symbol contrast value and grade.</li> <li>minEdgeContrast (object): A minimum edge contrast (ECmin), in percents of reflectance value and grade.</li> <li>modulation (object): Modulation value and grade.</li> <li>defects (object): Defects value and grade.</li> <li>decodability (object): Decodability value and grade.</li> <li>scanGrade (object): Scan grade and value.</li> </ul> </li> </ul> </li> </ul> For 1D barcode contains following properties: <ul> <li>narrowBarCount (number): Narrow bar count.</li> <li>narrowBarSize (number): Size, in pixels, of the narrow bar.</li> </ul> For 2D barcode contains following properties: <ul> <li>matrixSize (object): Size, in modules (cells), of the barcode matrix.</li> <li>cellSize (object): Size, in pixels, of barcode matrix cell.</li> <li>bulleyeCenter (object): Center of the "Bulleye" search pattern of Aztec barcode.</li> </ul> </li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    readBarcodes(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server for reading barcodes from web image, which is represented by a Base64 string.
     * @param imageAsBase64 An image, which is represented by a Base64 string.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>results (object): Array of barcode recognition results.<br/> Result of recognition is an object with following properties:<br/> <ul> <li>barcodeType (string): Barcode type.</li> <li>value (string): Barcode value.</li> <li>hexValue (string): Barcode value in hex representation.</li> <li>confidence (string): Barcode confidence.</li> <li>readingQuality (number): Barcode reading quality.</li> <li>threshold (number): Image threshold which was applied to an image during barcode recognition.</li> <li>region (object): Image region where barcode is found. Image region has the following properties: <ul> <li>angle (number): Angle, in degrees, relative to vector (1,0).</li> <li>leftTop (object): A left-top coordinates of bounding rectangle.</li> <li>leftBottom (object): A left-bottom coordinates of bounding rectangle.</li> <li>rightTop (object): A right-top coordinates of bounding rectangle.</li> <li>rightBottom (object): A right-bottom coordinates of bounding rectangle.</li> </ul> </li> <li>additionalInfo (object): An associative array, which contains the names and values of custom barcode properties.</li> <li>test (object): Result of barcode print quality test.<br/> It can be ISO15415 barcode print quality test: <ul> <li>decode (object): Decode value and grade.</li> <li>maxReflectance (object): A max reflectance, in percents of reflectance value and grade.</li> <li>minReflectance (object): A min reflectance, in percents of reflectance value and grade.</li> <li>symbolContrast (object): Symbol contrast value and grade.</li> <li>modulation (object): Modulation value and grade.</li> <li>scanGrade (object): Scan grade and value.</li> <li>axialNonuniformity (object): Axial nonuniformity value and grade.</li> <li>gridNonuniformity (object): Grid nonuniformity value and grade.</li> <li>unusedErrorCorrection (object): Unused error correction value and grade.</li> <li>reflectanceMargin (object): Reflectance margin value and grade.</li> <li>quietZone (object): Quiet zone, value in percents, that requires barcode symbology specification and grade.</li> <li>distortionAngle (object): Distortion angle of barcode matrix value and grade.</li> <li>additionalGrades (object): Array of additional grades that depends from barcode symbology.</li> <li>fixedPatternDamage (object): Fixed pattern damage value and grade.</li> <li>codewordYield (object): Efficiency with which linear scans can recover data from a two-dimensional multi-row symbol value and grade.</li> <li>codewordPrintQualityModulation (object): Codeword print quality value and grade based on codeword modulation for a two-dimensional multi-row symbol.</li> <li>codewordPrintQualityDefects (object): Codeword print quality value and grade based on codeword defects for a two-dimensional multi-row symbol.</li> <li>codewordPrintQualityDecodability (object): Codeword print quality value and grade based on codeword decodability for a two-dimensional multi-row symbol.</li> <li>codewordPrintQuality (object): Codeword print quality value and grade for a two-dimensional multi-row symbol.</li> <li>startPattern (object): A result of ISO15516 Start/RAP pattern test for multi-row symbologies (PDF417/MicroPDF417).</li> <li>centerPattern (object): A result of ISO15516 Center/RAP pattern test for multi-row symbologies (MicroPDF417).</li> <li>stopPattern (object): A result of ISO15516 Stop/RAP pattern test for multi-row symbologies (PDF417/MicroPDF417).</li> </ul> OR it can be:<br/> <ul> <li>tests (object): Array of ISO15416 barcode print quality test.<br/> ISO15416 barcode print quality test contain: <ul> <li>decode (object): Decode value and grade.</li> <li>maxReflectance (object): A max reflectance, in percents of reflectance value and grade.</li> <li>minReflectance (object): A min reflectance, in percents of reflectance value and grade.</li> <li>globalThreshold (object): A global threshold (GT), in percents of reflectance value and grade.</li> <li>symbolContrast (object): Symbol contrast value and grade.</li> <li>minEdgeContrast (object): A minimum edge contrast (ECmin), in percents of reflectance value and grade.</li> <li>modulation (object): Modulation value and grade.</li> <li>defects (object): Defects value and grade.</li> <li>decodability (object): Decodability value and grade.</li> <li>scanGrade (object): Scan grade and value.</li> </ul> </li> </ul> </li> </ul> For 1D barcode contains following properties: <ul> <li>narrowBarCount (number): Narrow bar count.</li> <li>narrowBarSize (number): Size, in pixels, of the narrow bar.</li> </ul> For 2D barcode contains following properties: <ul> <li>matrixSize (object): Size, in modules (cells), of the barcode matrix.</li> <li>cellSize (object): Size, in pixels, of barcode matrix cell.</li> <li>bulleyeCenter (object): Center of the "Bulleye" search pattern of Aztec barcode.</li> </ul> </li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    readBarcodesFromBase64(imageAsBase64: string, successFunc: Function, errorFunc: Function): void;

  }

  /**
   * Barcode writer.
   */
  class WebBarcodeWriterJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebBarcodeWriterJS"] class.
     * @param service An instance of [see="WebServiceJS"] class that should be used for barcode writing.
     */
    constructor(service: Vintasoft.Shared.WebServiceJS);

    // PROPERTIES

    /**
     * Gets the barcode writer settings.
     */
    get_Settings(): Vintasoft.Barcode.WebBarcodeWriterBaseSettingsJS;

    /**
     * Sets the barcode writer settings.
     * @param value An instance of [see="WebBarcodeWriterBaseSettingsJS"] class that defines the barcode writer settings.
     */
    set_Settings(value: Vintasoft.Barcode.WebBarcodeWriterBaseSettingsJS): void;

    // METHODS

    /**
     * Sends an asynchronous request to a server for creating barcode.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>barcode (string): A barcode image as PNG file represented by Base64 string.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    getBarcodeAsBase64Image(successFunc: Function, errorFunc: Function): void;

  }

}

