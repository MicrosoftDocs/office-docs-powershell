---
external help file: Microsoft.Exchange.RolesAndAccess-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-exoinformationbarrierpolicy
applicable: Exchange Online
title: Get-ExoInformationBarrierPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
---

# Get-ExoInformationBarrierPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ExoInformationBarrierPolicy cmdlet to view information barrier policies in your Exchange Online organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ExoInformationBarrierPolicy [[-Identity] <MailboxPolicyIdParameter>] [-ShowFriendlyValues] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ExoInformationBarrierPolicy -ShowFriendlyValues| Format-List Name,FriendlyRecipientFilter,InformationBarrierSegmentName
```

This example shows a summary list of all Exchange Online information barrier policies in the organization.

### Example 2
```powershell
Get-ExoInformationBarrierPolicy -Identity bf542929-a8c4-4167-88fb-3e5ef68a1dca -ShowFriendlyValues
```

This example shows detailed information for the specified Exchange Online information barrier policy.

## PARAMETERS

### -Identity
The Identity parameter specifies the Exchange Online information barrier policy that you want to view. You can use any value that uniquely identifies the policy. For example:

- Name
- Display name
- Distinguished name (DN)
- GUID

```yaml
Type: MailboxPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -ShowFriendlyValues
The ShowFriendlyValues switch specifies whether to show friendly values in the output of the command. You don't need to specify a value with this switch.

When you use this switch, the following property values are shown:

- FriendlyRecipientFilter
- InformationBarrierSegmentName

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

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
