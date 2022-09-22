---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumberorder
Module Name: MicrosoftTeams
title: Get-CsOnlineTelephoneNumberOrder
schema: 2.0.0
manager: mreddy
author: TristanChen-msft
ms.author: jiaych
ms.reviewer: julienp
---

# Get-CsOnlineTelephoneNumberOrder

## SYNOPSIS
Use the `Get-CsOnlineTelephoneNumberOrder` cmdlet to get the order report of a specific telephone number search order. The telephone numbers can then be used to set up calling features for users and services in your organization.

## SYNTAX

```
Get-CsOnlineTelephoneNumberOrder [-OrderId] <OrderId> [<CommonParameters>]
```

## DESCRIPTION

Use the `Get-CsOnlineTelephoneNumberOrder` cmdlet to get the order report of a specific telephone number search order. The telephone numbers can then be used to set up calling features for users and services in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> $order = Get-CsOnlineTelephoneNumberOrder -OrderId 1efd85ca-dd46-41b3-80a0-2e4c5f87c912

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
Status                : Reserved
TelephoneNumber       : {Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.TelephoneNumberSearchResult}

PS C:\> $order.TelephoneNumber

Location      TelephoneNumber
--------      ---------------
New York City +17182000004
```

This example returns a successful telephone number search and the telephone number +17182000004 is reserved for purchase.

### -------------------------- Example 2 --------------------------
```
PS C:\> $order = Get-CsOnlineTelephoneNumberOrder -OrderId 8d23e073-bc98-4f73-8e05-7517655d7042

AreaCode              :
CivicAddressId        :
CountryCode           : US
CreatedAt             : 8/23/2021 6:53:12 PM
Description           : test
ErrorCode             : OutOfStock
Id                    : 8d23e073-bc98-4f73-8e05-7517655d7042
InventoryType         : Subscriber
IsManual              : False
Name                  : test
NumberPrefix          : 1425
NumberType            : UserSubscriber
Quantity              : 1
ReservationExpiryDate :
SearchType            : Prefix
SendToServiceDesk     : False
Status                : Error
TelephoneNumber       : {}
```

This example returns a failed telephone number search and the `ErrorCode` is showing that telephone numbers with `NumberPrefix: 1425` is `OutOfStock`.


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
