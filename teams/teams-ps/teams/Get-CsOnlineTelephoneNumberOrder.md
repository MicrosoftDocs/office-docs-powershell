---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumberorder
Module Name: MicrosoftTeams
title: Get-CsOnlineTelephoneNumberOrder
schema: 2.0.0
manager: mreddy
author: gracenlin
ms.author: gracenlin
ms.reviewer: 
---

# Get-CsOnlineTelephoneNumberOrder

## SYNOPSIS
Use the `Get-CsOnlineTelephoneNumberOrder` cmdlet to get the order report of a specific telephone number order.

## SYNTAX

```
Get-CsOnlineTelephoneNumberOrder [-OrderType] <OrderType> [-OrderId] <OrderId> [<CommonParameters>]
```

## DESCRIPTION

Use the `Get-CsOnlineTelephoneNumberOrder` cmdlet to get the order report of a specific telephone number order.

## EXAMPLES

### ---- Example 1: Getting a Search Order ----
```
PS C:\> $order = Get-CsOnlineTelephoneNumberOrder -OrderType Search -OrderId 1fd52b3b-b804-4ac4-a84d-4d70b51dd4be

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

If the OrderType is not provided, it will default to a Search order:
```
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

### ---- Example 2: Getting a Release Order ----
```
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

### ---- Example 3: Getting a DirectRoutingNumberCreation Order ----
```
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

## PARAMETERS

### `-OrderId`
Specifies the identifier of the telephone number order to look up.

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

### `-OrderType`
Specifies the type of telephone number order to look up. Currently supported values are **Search**, **Release**, and **DirectRoutingNumberCreation**.
If this value is unspecified, then it will default to a **Search** order.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Search
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).


## NOTES
Updates in Teams PowerShell Module version 6.8.0 and later: 
- A new optional parameter `OrderType` is introduced. If no OrderType is provided, it will default to a Search order.
- [BREAKING CHANGE] When a Search order is queried, the property name `TelephoneNumber` in the output will be changed to `TelephoneNumbers`. The structure of the `TelephoneNumbers` output will remain unchanged.
  - Impact: Scripts and processes that reference the `TelephoneNumber` property will need to be updated to use `TelephoneNumbers`.
 

## RELATED LINKS
- Create a Search order: [New-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/new-csonlinetelephonenumberorder)
- Create a Release order: [New-CsOnlineTelephoneNumberReleaseOrder.md](https://learn.microsoft.com/powershell/module/teams/new-csonlinetelephonenumberreleaseorder.md)
- Create a DirectRoutingNumberCreation order: [New-CsOnlineDirectRoutingTelephoneNumberUploadOrder.md](https://learn.microsoft.com/powershell/module/teams/new-csonlinedirectroutingtelephonenumberuploadorder.md)
