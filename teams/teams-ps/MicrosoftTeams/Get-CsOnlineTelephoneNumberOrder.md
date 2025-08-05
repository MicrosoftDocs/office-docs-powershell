---
author: TristanChen-msft
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: mreddy
Module Name: MicrosoftTeams
ms.author: jiaych
ms.reviewer: julienp
online version: https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinetelephonenumberorder
schema: 2.0.0
title: Get-CsOnlineTelephoneNumberOrder
---

# Get-CsOnlineTelephoneNumberOrder

## SYNOPSIS
Use the `Get-CsOnlineTelephoneNumberOrder` cmdlet to get the order report of a specific telephone number order.

## SYNTAX

```
Get-CsOnlineTelephoneNumberOrder -OrderId <String> [-OrderType <String>]
 [<CommonParameters>]
```

## DESCRIPTION

This `Get-CsOnlineTelephoneNumberOrder` cmdlet can be used to get the status of specific telephone number orders. Currently supported orders for retrievals are: Search [New-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinetelephonenumberorder), Direct Routing Number Upload [New-CsOnlineDirectRoutingTelephoneNumberUploadOrder](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinedirectroutingtelephonenumberuploadorder), and Direct Routing Number Release [New-CsOnlineTelephoneNumberReleaseOrder](https://learn.microsoft.com/powershell/module/microsoftteams/New-csonlinetelephonenumberreleaseorder). When the OrderType is not indicated, the cmdlet will default to a Search order.

## EXAMPLES

### Example 1
```
PS C:\> $order = Get-CsOnlineTelephoneNumberOrder -OrderType Search -OrderId 1fd52b3b-b804-4ac4-a84d-4d70b51dd4be

Key                   Value
---                   -----
Id                    1fd52b3b-b804-4ac4-a84d-4d70b51dd4be
Name                  Postal Code Search Test
CreatedAt             2024-11-30T00:34:00.0825627+00:00
CreatedBy             ContosoAdmin
Description           Postal Code Search Test
NumberType            UserSubscriber
SearchType            PostalCode
AreaCode              778
PostalOrZipCode       V7Y 1G5
Quantity              2
Status                Reserved
IsManual              False
TelephoneNumbers      {System.Collections.Generic.Dictionary`2[System.String,System.Object], System.Collections.Generic.Dictionary`2[System.String,System.Object]}
ReservationExpiryDate 2024-11-30T00:50:01.1794152+00:00
ErrorCode             NoError
InventoryType         Subscriber
SendToServiceDesk     False
CountryCode           CA

PS C:\> $order.TelephoneNumbers

Key             Value
---             -----
Location        Vancouver
TelephoneNumber +16046606034
Location        Vancouver
TelephoneNumber +16046606030
```

This example returns a successful telephone number search and the telephone numbers are reserved for purchase.

### Example 2
```
PS C:\> $order = Get-CsOnlineTelephoneNumberOrder -OrderType Search -OrderId 8d23e073-bc98-4f73-8e05-7517655d7042

Key                   Value
---                   -----
Id                    8d23e073-bc98-4f73-8e05-7517655d7042
Name                  Postal Code Search Test
CreatedAt             2024-11-30T00:34:00.0825627+00:00
CreatedBy             ContosoAdmin
Description           Prefix Search Test
NumberType            UserSubscriber
SearchType            Prefix
AreaCode
PostalOrZipCode
Quantity              1
Status                Error
IsManual              False
TelephoneNumbers      {}
ReservationExpiryDate
ErrorCode             OutOfStock
InventoryType         Subscriber
SendToServiceDesk     False
CountryCode
```

This example returns a failed telephone number search and the `ErrorCode` is showing that telephone numbers with `NumberPrefix: 1425` is `OutOfStock`.

### Example 3
```powershell
PS C:\>  Get-CsOnlineTelephoneNumberOrder -OrderId 1fd52b3b-b804-4ac4-a84d-4d70b51dd4be

Key                   Value
---                   -----
Id                    1fd52b3b-b804-4ac4-a84d-4d70b51dd4be
Name                  Postal Code Search Test
CreatedAt             2024-11-30T00:34:00.0825627+00:00
CreatedBy             TNM
Description           Postal Code Search Test from Postman
NumberType            UserSubscriber
SearchType            PostalCode
AreaCode              778
PostalOrZipCode       V7Y 1G5
Quantity              2
Status                Expired
IsManual              False
TelephoneNumbers      {System.Collections.Generic.Dictionary`2[System.String,System.Object], System.Collections.Generic.Dictionary`2[System.String,System.Object]}
ReservationExpiryDate 2024-11-30T00:50:01.1794152+00:00
ErrorCode             NoError
InventoryType         Subscriber
SendToServiceDesk     False
CountryCode           CA
```

When the OrderType is not indicated, the cmdlet will default to a Search order. This example returns a successful telephone number search and the telephone numbers are reserved for purchase.

### Example 4
```powershell
PS C:\> Get-CsOnlineTelephoneNumberOrder -OrderType Release -OrderId 6aa4f786-8628-4923-9df1-896f3d84016c

Key                 Value
---                 -----
OrderId             6aa4f786-8628-4923-9df1-896f3d84016c
CreatedAt           2024-11-27T06:44:26.1975766+00:00
Status              Complete
TotalCount          3
SuccessCount        3
FailureCount        0
SuccessPhoneNumbers {+12063866355, +12063868075, +12063861642}
FailedPhoneNumbers  {}
```

This example returns the status of a successful release order for Direct Routing telephone numbers.

### Example 5
```powershell
PS C:\> Get-CsOnlineTelephoneNumberOrder -OrderType DirectRoutingNumberCreation -OrderId faef09f7-5bd5-4740-9e76-9a5762380f34

Key                 Value
---                 -----
OrderId             faef09f7-5bd5-4740-9e76-9a5762380f34
CreatedAt           2024-11-30T00:22:59.4989508+00:00
Status              Success
TotalCount          1
SuccessCount        1
FailureCount        0
WarningCount        0
FailedPhoneNumbers  {}
WarningPhoneNumbers {}
SuccessPhoneNumbers {+99999980}
```

This example returns the status of a successful upload order for a Direct Routing phone number.

## PARAMETERS

### -OrderId
Use the OrderId received as output of your order creation cmdlets.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrderType
Specifies the type of telephone number order to look up. Currently supported values are **Search**, **Release**, and **DirectRoutingNumberCreation**. If this value is unspecified, then it will default to a **Search** order.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
Updates in Teams PowerShell Module version 6.7.1 and later:
- A new optional parameter `OrderType` is introduced. If no OrderType is provided, it will default to a Search order.
- [BREAKING CHANGE] When a Search order is queried, the property name `TelephoneNumber` in the output will be changed to `TelephoneNumbers`. The structure of the `TelephoneNumbers` output will remain unchanged.
  - Impact: Scripts and processes that reference the `TelephoneNumber` property will need to be updated to use `TelephoneNumbers`.

## RELATED LINKS
[Get-CsOnlineTelephoneNumberCountry](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinetelephonenumbercountry)
[Get-CsOnlineTelephoneNumberType](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinetelephonenumbertype)
[New-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinetelephonenumberorder)
[Get-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinetelephonenumberorder)
[Complete-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/microsoftteams/complete-csonlinetelephonenumberorder)
[Clear-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/microsoftteams/clear-csonlinetelephonenumberorder)
[New-CsOnlineDirectRoutingTelephoneNumberUploadOrder](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinedirectroutingtelephonenumberuploadorder)
[New-CsOnlineTelephoneNumberReleaseOrder](https://learn.microsoft.com/powershell/module/microsoftteams/New-csonlinetelephonenumberreleaseorder)
