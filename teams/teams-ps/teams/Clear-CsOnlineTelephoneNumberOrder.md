---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/clear-csonlinetelephonenumberorder
Module Name: MicrosoftTeams
title: Clear-CsOnlineTelephoneNumberOrder
schema: 2.0.0
manager: mreddy
author: TristanChen-msft
ms.author: jiaych
ms.reviewer: julienp
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

### -------------------------- Example 1 --------------------------
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

## INPUTS

## OUTPUTS

## RELATED LINKS

[Get-CsOnlineTelephoneNumberCountry](Get-CsOnlineTelephoneNumberCountry.md)
[Get-CsOnlineTelephoneNumberType](Get-CsOnlineTelephoneNumberType.md)

[New-CsOnlineTelephoneNumberOrder](New-CsOnlineTelephoneNumberOrder.md)
[Get-CsOnlineTelephoneNumberOrder](Get-CsOnlineTelephoneNumberOrder.md)
[Complete-CsOnlineTelephoneNumberOrder](Complete-CsOnlineTelephoneNumberOrder.md)
[Clear-CsOnlineTelephoneNumberOrder](Clear-CsOnlineTelephoneNumberOrder.md)
