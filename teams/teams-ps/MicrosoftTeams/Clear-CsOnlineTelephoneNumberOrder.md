---
author: TristanChen-msft
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: mreddy
Module Name: MicrosoftTeams
ms.author: jiaych
ms.reviewer: julienp
online version: https://learn.microsoft.com/powershell/module/microsoftteams/clear-csonlinetelephonenumberorder
schema: 2.0.0
title: Clear-CsOnlineTelephoneNumberOrder
---

# Clear-CsOnlineTelephoneNumberOrder

## SYNOPSIS

Use the `Clear-CsOnlineTelephoneNumberOrder` cmdlet to cancel a specific telephone number search order and release the telephone numbers. The telephone numbers can then be available for search and acquire.

## SYNTAX

```
Clear-CsOnlineTelephoneNumberOrder [-OrderId] <OrderId> [<CommonParameters>]
```

## DESCRIPTION

Use the `Clear-CsOnlineTelephoneNumberOrder` cmdlet to cancel a specific telephone number search order and release the telephone numbers. The telephone numbers can then be available for search and acquire.

## EXAMPLES

### Example 1
```
PS C:\> Clear-CsOnlineTelephoneNumberOrder -OrderId 1efd85ca-dd46-41b3-80a0-2e4c5f87c912
PS C:\> Get-CsOnlineTelephoneNumberOrder -OrderId 1efd85ca-dd46-41b3-80a0-2e4c5f87c912

AreaCode              :
CivicAddressId        :
CountryCode           : US
CreatedAt             : 8/23/2021 5:43:44 PM
Description           : test
ErrorCode             : NoError
Id                    : 1efd85ca-dd46-41b3-80a0-2e4c5f87c912
InventoryType         : Subscriber
IsManual              : False
Name                  : test
NumberPrefix          : 1718
NumberType            : UserSubscriber
Quantity              : 1
ReservationExpiryDate : 8/23/2021 5:59:45 PM
SearchType            : Prefix
SendToServiceDesk     : False
Status                : Cancelled
TelephoneNumber       : {Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.TelephoneNumberSearchResult}

PS C:\> $order.TelephoneNumber

Location      TelephoneNumber
--------      ---------------
New York City +17182000004
```

This example cancels the purchase of the telephone number order containing the phone number +17182000004.

## PARAMETERS

### OrderId
Specifies the telephone number search order to look up. Use `New-CsOnlineTelephoneNumberOrder` to create a search order to obtain a search order Id.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-CsOnlineTelephoneNumberCountry](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinetelephonenumbercountry)

[Get-CsOnlineTelephoneNumberType](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinetelephonenumbertype)

[New-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/microsoftteams/new-csonlinetelephonenumberorder)

[Get-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/microsoftteams/get-csonlinetelephonenumberorder)

[Complete-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/microsoftteams/complete-csonlinetelephonenumberorder)

[Clear-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/microsoftteams/clear-csonlinetelephonenumberorder)
