---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/teams/new-csphonenumberbulkupdatelocationidorder
schema: 2.0.0
title: New-CsPhoneNumberBulkUpdateLocationIdOrder
---

# New-CsPhoneNumberBulkUpdateLocationIdOrder

## SYNOPSIS
This cmdlet allows the admin to update LocationId for one or multiple telephone numbers at once.

## SYNTAX

```
New-CsPhoneNumberBulkUpdateLocationIdOrder [-LocationId <String>] [-PhoneNumbers <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet lets the admin update the LocationId for multiple phone numbers at once. There can be maximum of 1000 phone numbers updated in a single command.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsPhoneNumberBulkUpdateLocationIdOrder -PhoneNumbers "12056788888,12056789999" -LocationId "f84h3gs5-2a32-s5fd-1233-32sf84h3gs54"
```

```output
Id                                    OrderType
--                                    ---------
0a000a0a-aa0a-0a0a-aa0a-a0aa0aa       NumberUpdate
```

This example shows how to update LocationId for two numbers.

### Example 2
```powershell
PS C:\> New-CsPhoneNumberBulkUpdateLocationIdOrder -PhoneNumbers "12056788888,12056789999" -LocationId "null"
```

```output
Id                                    OrderType
--                                    ---------
0a000a0a-aa0a-0a0a-aa0a-a0aa0aa       NumberUpdate
```

This example shows how to remove LocationId for two numbers. Setting the LocationId to "null" will remove current LocationId for the number.

## PARAMETERS

### -LocationId
The LocationId of the location to assign to the specific user. You can get it using Get-CsOnlineLisLocation. You can set the location on both assigned and unassigned
phone numbers.

Removal of location from a phone number is supported for Direct Routing numbers and Operator Connect numbers that are not managed by the Service Desk.
If you want to remove the location, use the string value null for LocationId.

```yaml
Type: System.String
Parameter Sets: NewExpanded
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneNumbers
The phone numbers to update LocationId for.

```yaml
Type: System.String
Parameter Sets: NewExpanded
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
