---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-exoinformationbarriersegment
schema: 2.0.0
title: Get-ExoInformationBarrierSegment
---

# Get-ExoInformationBarrierSegment

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ExoInformationBarrierSegment to view information barrier segments in your Exchange Online organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ExoInformationBarrierSegment [[-Identity] <InformationBarrierSegmentIdParameter>] [-ShowFriendlyValues] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ExoInformationBarrierSegment -ShowFriendlyValues| Format-List DisplayName,Name,FriendlyRecipientFilter,AssociatedPolicy
```

This example shows a summary list of all Exchange Online information barrier segments in the organization.

### Example 2
```powershell
Get-ExoInformationBarrierSegment -Identity "Investment Banking" -ShowFriendlyValues
```

This example shows detailed information for the specified Exchange Online information barrier segment.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the Exchange Online information barrier segment that you want to view. You can use any value that uniquely identifies the segment. For example:

- Name
- Display name
- Distinguished name (DN)
- GUID

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: InformationBarrierSegmentIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ShowFriendlyValues

> Applicable: Exchange Online

The ShowFriendlyValues switch specifies whether to show friendly values in the output of the command. You don't need to specify a value with this switch.

When you use this switch, the FriendlyMembershipFilter property value is shown.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
