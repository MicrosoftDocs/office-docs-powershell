---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/teams/new-csphonenumberbulkupdatereversenumberlookuporder
schema: 2.0.0
title: New-CsPhoneNumberBulkUpdateReverseNumberLookupOrder
---

# New-CsPhoneNumberBulkUpdateReverseNumberLookupOrder

## SYNOPSIS
This cmdlet allows the admin to update reverse number lookup attribute to one or multiple telephone numbers at once.

## SYNTAX

```
New-CsPhoneNumberBulkUpdateReverseNumberLookupOrder [-PhoneNumbers <String>]
 [-ReverseNumberLookupToAdd <String>] [-ReverseNumberLookupToRemove <String>] [<CommonParameters>]
```

## DESCRIPTION

This cmdlet lets the admin update the reverse number lookup option such as skipInternalVoip from multiple phone numbers at once. There can be maximum of 1000 phone numbers updated in a single command.

## EXAMPLES

### Example 1

```powershell
PS C:\> New-CsPhoneNumberBulkUpdateReverseNumberLookupOrder -PhoneNumbers "12056788888,12056789999" -ReverseNumberLookupToAdd "skipInternalVoip"
```

```output
Id                                    OrderType
--                                    ---------
0a000a0a-aa0a-0a0a-aa0a-a0aa0aa       NumberUpdate
```

This example adds skipInternalVoip option to two indicated phone numbers.

### Example 2

```powershell
PS C:\> New-CsPhoneNumberBulkUpdateReverseNumberLookupOrder -PhoneNumbers "12056788888,12056789999" -ReverseNumberLookupToRemove "skipInternalVoip"
```

```output
Id                                    OrderType
--                                    ---------
0a000a0a-aa0a-0a0a-aa0a-a0aa0aa       NumberUpdate
```

This example removes skipInternalVoip option from two indicated phone numbers.

## PARAMETERS

### -PhoneNumbers
The phone numbers to update ReverseNumberLookup option for.

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

### -ReverseNumberLookupToAdd
Indicates the ReverseNumberLookup option will be added to the numbers.

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

### -ReverseNumberLookupToRemove
Indicates the ReverseNumberLookup option will be removed from the numbers.

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
