---
applicable: Microsoft Teams
author: pavellatif
external help file: Microsoft.Teams.ConfigAPI.Cmdlets-help.xml
Locale: en-US
manager: roykuntz
Module Name: MicrosoftTeams
ms.author: pavellatif
ms.reviewer: pavellatif
online version: https://learn.microsoft.com/powershell/module/teams/new-csphonenumberbulkupdatedrnumberacquiredcapabilitiesorder
schema: 2.0.0
title: New-CsPhoneNumberBulkUpdateDrNumberAcquiredCapabilitiesOrder
---

# New-CsPhoneNumberBulkUpdateDrNumberAcquiredCapabilitiesOrder

## SYNOPSIS
This cmdlet allows the admin to update AcquiredCapabilities for one or multiple Direct Routing phone numbers at once.

## SYNTAX

```
New-CsPhoneNumberBulkUpdateDrNumberAcquiredCapabilitiesOrder [-AcquiredCapabilitiesToAdd <String>]
 [-AcquiredCapabilitiesToRemove <String>] [-PhoneNumbers <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet lets the admin add new, update existing or remove the AcquiredCapabilities for multiple Direct Routing (DR) phone numbers at once. There can be maximum of 1000 phone numbers updated in a single command.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsPhoneNumberBulkUpdateDrNumberAcquiredCapabilitiesOrder -PhoneNumbers "12056788888,12056789999" -AcquiredCapabilitiesToAdd "UserAssignment"
```

```output
Id                                    OrderType
--                                    ---------
0a000a0a-aa0a-0a0a-aa0a-a0aa0aa       NumberUpdate
```

This example shows how to add UserAssignment acquired capability for two numbers.

### Example 2
```powershell
PS C:\> New-CsPhoneNumberBulkUpdateDrNumberAcquiredCapabilitiesOrder -PhoneNumbers "12056788888,12056789999" -AcquiredCapabilitiesToRemove "UserAssignment"
```

```output
Id                                    OrderType
--                                    ---------
0a000a0a-aa0a-0a0a-aa0a-a0aa0aa       NumberUpdate
```

This example shows how to remove UserAssignment acquired capability from two numbers.

### Example 3
```powershell
PS C:\> New-CsPhoneNumberBulkUpdateDrNumberAcquiredCapabilitiesOrder -PhoneNumbers "12056788888,12056789999" -AcquiredCapabilitiesToAdd "UserAssignment", -AcquiredCapabilitiesToRemove "FirstPartyAppAssignment"
```

```output
Id                                    OrderType
--                                    ---------
0a000a0a-aa0a-0a0a-aa0a-a0aa0aa       NumberUpdate
```

This example shows how to add UserAssignment as acquired capability while removing FirstPartyAppAssignment from the acquired capabilities list for two numbers.

## PARAMETERS

### -AcquiredCapabilitiesToAdd
The acquired capabilities to be added to the phone number. You can specify one or more capabilities delimited by a comma. Supported capabilities are ConferenceAssignment, VoiceApplicationAssignment, UserAssignment, and SharedCalling.

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

### -AcquiredCapabilitiesToRemove
The acquired capabilities to be removed from the phone number. You can specify one or more capabilities delimited by a comma. Supported capabilities are ConferenceAssignment, VoiceApplicationAssignment, UserAssignment, and SharedCalling.

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
Indicates the phone numbers for which acquired capabilities are being updated.

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
