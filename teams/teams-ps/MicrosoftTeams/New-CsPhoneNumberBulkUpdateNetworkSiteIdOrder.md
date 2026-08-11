---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/teams/new-csphonenumberbulkupdatenetworksiteidorder
schema: 2.0.0
title: New-CsPhoneNumberBulkUpdateNetworkSiteIdOrder
---

# New-CsPhoneNumberBulkUpdateNetworkSiteIdOrder

## SYNOPSIS
This cmdlet allows the admin to update NetworkSiteId for one or multiple telephone numbers at once.

## SYNTAX

```
New-CsPhoneNumberBulkUpdateNetworkSiteIdOrder [-NetworkSiteId <String>] [-PhoneNumbers <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet lets the admin update the NetworkSiteId for multiple phone numbers at once. There can be maximum of 1000 phone numbers updated in a single command.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsPhoneNumberBulkUpdateNetworkSiteIdOrder -PhoneNumbers "12056788888,12056789999" -NetworkSiteId "123534"
```

```output
Id                                    OrderType
--                                    ---------
0a000a0a-aa0a-0a0a-aa0a-a0aa0aa       NumberUpdate
```

This example shows how to update NetworkSiteId for two numbers.

## PARAMETERS

### -NetworkSiteId
ID of a network site. A network site represents a location where your organization has a physical venue, such as offices, a set of buildings, or a campus.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneNumbers
The phone numbers to update NetworkSiteId for.

```yaml
Type: System.String
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

### None

## OUTPUTS

### OrderId
Contains the OrderId for the operation. This will be needed to lookup order status using [Get-CsOnlineTelephoneNumberOrder](./Get-CsOnlineTelephoneNumberOrder.md).

### OrderType
Type of order submitted. This will be needed to lookup order status using [Get-CsOnlineTelephoneNumberOrder](./Get-CsOnlineTelephoneNumberOrder.md).

## NOTES

## RELATED LINKS
[Get-CsOnlineTelephoneNumberOrder](./Get-CsOnlineTelephoneNumberOrder.md)
