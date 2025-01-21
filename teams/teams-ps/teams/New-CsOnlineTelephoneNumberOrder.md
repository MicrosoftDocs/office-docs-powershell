---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/new-csonlinetelephonenumberorder
Module Name: MicrosoftTeams
title: New-CsOnlineTelephoneNumberOrder
schema: 2.0.0
manager: mreddy
author: TristanChen-msft
ms.author: jiaych
ms.reviewer: julienp
---

# New-CsOnlineTelephoneNumberOrder

## SYNOPSIS
Use the `New-CsOnlineTelephoneNumberOrder` cmdlet to create a telephone number search order. The telephone numbers can then be used to set up calling features for users and services in your organization.

## SYNTAX

```
New-CsOnlineTelephoneNumberOrder [-Name] <orderName> [-Description] <orderDescription> [-Country] <countryCode> [-NumberType] <numberType> [-Quantity] <quantity> [-CivicAddressId] <civicAddressId> [-NumberPrefix] <numberPrefix> [-AreaCode] <areaCode> [<CommonParameters>]
```

## DESCRIPTION

Use the `New-CsOnlineTelephoneNumberOrder` cmdlet to create a telephone number search order. The telephone numbers can then be used to set up calling features for users and services in your organization. Use the `Get-CsOnlineTelephoneNumberType` cmdlet to find out the supported types of searches for each NumberType and construct the search request demonstrated below:

Telephone numbers can be created with 3 ways:

- **Civic Address Search**: A telephone number search order can be created base on a given civic address ID. The service will look up the address and fulfill the search order using available telephone numbers local to the given address. For civic address based search, the parameter `CivicAddressId` is required.

- **Number Prefix Search**: A telephone number search order can be created base on a given number prefix. The number prefix search allow the tenant to acquire telephone numbers with a fixed number prefix. For number prefix based search, the parameter `NumberPrefix` is required.

- **Area Code Selection Search**: A telephone number search order can be created base on a give area code. Certain service numbers are only offered with a dedicated set of area codes.  With area code selection search, the tenant can acquire the desired telephone numbers by area code. For area code selection based search, the parameter `AreaCode` is required.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> $orderId = New-CsOnlineTelephoneNumberOrder -Name "Example 1" -Description "Civic address search example" -Country "US" -NumberType "UserSubscriber" -Quantity 1 -CivicAddressId 3b175352-4131-431e-970c-273226b8fb46
PS C:\> $order = Get-CsOnlineTelephoneNumberOrder -OrderId $orderId

AreaCode              :
CivicAddressId        : 3b175352-4131-431e-970c-273226b8fb46
CountryCode           : US
CreatedAt             : 8/23/2021 5:43:44 PM
Description           : Civic address search example
ErrorCode             : NoError
Id                    : 1efd85ca-dd46-41b3-80a0-2e4c5f87c912
InventoryType         : Subscriber
IsManual              : False
Name                  : Example 1
NumberPrefix          :
NumberType            : UserSubscriber
Quantity              : 1
ReservationExpiryDate : 8/23/2021 5:59:45 PM
SearchType            : CivicAddress
SendToServiceDesk     : False
Status                : Reserved
TelephoneNumber       : {Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.TelephoneNumberSearchResult}

PS C:\> $order.TelephoneNumber

Location      TelephoneNumber
--------      ---------------
New York City +17182000004
```

This example demonstrates a civic address based telephone number search. Telephone number +17182000004 is found to belong to the given address and is reserved for purchase.

### -------------------------- Example 2 --------------------------
```
PS C:\> $orderId = New-CsOnlineTelephoneNumberOrder -Name "Example 2" -Description "Number prefix search example" -Country "US" -NumberType "UserSubscriber" -Quantity 1 -NumberPrefix 1425
PS C:\> $order = Get-CsOnlineTelephoneNumberOrder -OrderId $orderId

AreaCode              :
CivicAddressId        :
CountryCode           : US
CreatedAt             : 8/23/2021 5:43:44 PM
Description           : Number prefix search example
ErrorCode             : NoError
Id                    : 1efd85ca-dd46-41b3-80a0-2e4c5f87c912
InventoryType         : Subscriber
IsManual              : False
Name                  : Example 2
NumberPrefix          :
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
Bellevue  +14252000004
```

This example demonstrates a number prefix based telephone number search. Telephone number +14252000004 is found to have the desired number prefix and is reserved for purchase.

### -------------------------- Example 3 --------------------------
```
PS C:\> $orderId = New-CsOnlineTelephoneNumberOrder -Name "Example 3" -Description "Area code selection search example" -Country "US" -NumberType "ConferenceTollFree" -Quantity 1 -AreaCode 800
PS C:\> $order = Get-CsOnlineTelephoneNumberOrder -OrderId $orderId

AreaCode              :
CivicAddressId        :
CountryCode           : US
CreatedAt             : 8/23/2021 5:43:44 PM
Description           : Area code selection search example
ErrorCode             : NoError
Id                    : 1efd85ca-dd46-41b3-80a0-2e4c5f87c912
InventoryType         : Service
IsManual              : False
Name                  : Example 3
NumberPrefix          :
NumberType            : ConferenceTollFree
Quantity              : 1
ReservationExpiryDate : 8/23/2021 5:59:45 PM
SearchType            : AreaCodeSelection
SendToServiceDesk     : False
Status                : Reserved
TelephoneNumber       : {Microsoft.Teams.ConfigAPI.Cmdlets.Generated.Models.TelephoneNumberSearchResult}

PS C:\> $order.TelephoneNumber

Location      TelephoneNumber
--------      ---------------
Toll Free  +18002000004
```

This example demonstrates an area code selection based telephone number search. Telephone number +18002000004 is found to have the desired area code and is reserved for purchase.

## PARAMETERS

### Name
Specifies the telephone number search order name.

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

### Description
Specifies the telephone number search order description.

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

### Country
Specifies the telephone number search order country/region. Use `Get-CsOnlineTelephoneNumberCountry` to find the supported countries/regions.

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

### NumberType
Specifies the telephone number search order number type. Use `Get-CsOnlineTelephoneNumberType` to find the supported number types.

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

### Quantity
Specifies the telephone number search order quantity. The number of allowed quantity is based on the tenant licenses.

```yaml
Type: Integer
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CivicAddressId
Specifies the telephone number search order civic address. CivicAddressId is required for civic address based search and when RequiresCivicAddress is true for a given NumberType.

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

### NumberPrefix
Specifies the telephone number search order number prefix. NumberPrefix is required for number prefix based search.

```yaml
Type: Integer
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### AreaCode
Specifies the telephone number search order number area code. AreaCode is required for area code selection based search.

```yaml
Type: Integer
Parameter Sets: (All)
Aliases:

Required: False
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
[Get-CsOnlineTelephoneNumberType](https://learn.microsoft.com/powershell/module/teams/get-csonlinetelephonenumbercountry)

[New-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/new-csonlinetelephonenumberorder)
[Get-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/new-csonlinetelephonenumberorder)
[Complete-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/new-csonlinetelephonenumberorder)
[Clear-CsOnlineTelephoneNumberOrder](https://learn.microsoft.com/powershell/module/teams/new-csonlinetelephonenumberorder)
