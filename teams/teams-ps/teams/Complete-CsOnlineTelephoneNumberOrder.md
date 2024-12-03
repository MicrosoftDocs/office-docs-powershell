---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/complete-csonlinetelephonenumberorder
Module Name: MicrosoftTeams
title: Complete-CsOnlineTelephoneNumberOrder
schema: 2.0.0
manager: mreddy
author: TristanChen-msft
ms.author: jiaych
ms.reviewer: julienp
---

# Complete-CsOnlineTelephoneNumberOrder

## SYNOPSIS

Use the `Complete-CsOnlineTelephoneNumberOrder` cmdlet to complete a specific telephone number search order and confirm the purchase of the new telephone numbers. The telephone numbers can then be used to set up calling features for users and services in your organization.

## SYNTAX

```
Complete-CsOnlineTelephoneNumberOrder [-OrderId] <OrderId> [<CommonParameters>]
```

## DESCRIPTION

Use the `Complete-CsOnlineTelephoneNumberOrder` cmdlet to complete a specific telephone number search order and confirm the purchase of the new telephone numbers. The telephone numbers can then be used to set up calling features for users and services in your organization.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Complete-CsOnlineTelephoneNumberOrder -OrderId 1efd85ca-dd46-41b3-80a0-2e4c5f87c912
PS C:\> Get-CsOnlineTelephoneNumberOrder -OrderId 1efd85ca-dd46-41b3-80a0-2e4c5f87c912 | fl

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
Status                : Completed
TelephoneNumber       : {Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.TelephoneNumberSearchResult}

PS C:\> (Get-CsOnlineTelephoneNumberOrder -OrderId 1efd85ca-dd46-41b3-80a0-2e4c5f87c912).TelephoneNumber

Location      TelephoneNumber
--------      ---------------
New York City +17182000004
```

This example completes the purchase of the telephone number order containing the phone number +17182000004.

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

[Get-CsOnlineTelephoneNumberCountry](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumbercountry)

[Get-CsOnlineTelephoneNumberType](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumbertype)

[New-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/new-csonlinetelephonenumberorder)

[Get-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumberorder)

[Complete-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/complete-csonlinetelephonenumberorder)

[Clear-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/clear-csonlinetelephonenumberorder)
