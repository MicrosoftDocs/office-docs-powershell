---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-quarantinepolicy
schema: 2.0.0
title: Get-QuarantinePolicy
---

# Get-QuarantinePolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-QuarantinePolicy cmdlet to view quarantine policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-QuarantinePolicy [[-Identity] <QuarantineTagIdParameter>]
 [-QuarantinePolicyType <QuarantinePolicyType>]
 [<CommonParameters>]
```

## DESCRIPTION
Quarantine policies define what users are allowed to do to quarantined messages based on why the message was quarantined (for supported features) and quarantine notification settings. For more information, see [Quarantine policies](https://learn.microsoft.com/defender-office-365/quarantine-policies).

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-QuarantinePolicy | Format-Table Name
```

This example returns as summary list of all quarantine policies.

### Example 2
```powershell
Get-QuarantinePolicy -Identity NoAccess
```

This example returns detailed information about the quarantine policy named NoAccess.

### Example 3
```powershell
Get-QuarantinePolicy -QuarantinePolicyType GlobalQuarantinePolicy
```

This example returns detailed information about the default quarantine policy named DefaultGlobalTag that controls the global quarantine notification (formerly known as end-user spam notification) settings.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the quarantine policy you want to view. You can use any value that uniquely identifies the quarantine policy. For example:

- Name
- Distinguished name (DN)
- GUID

```yaml
Type: QuarantineTagIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -QuarantinePolicyType

> Applicable: Exchange Online, Exchange Online Protection

The QuarantinePolicyType parameter filters the results by the specified quarantine policy type. Valid values are:

- QuarantinePolicy: This value is the default, and returns built-in and custom quarantine policies.
- GlobalQuarantinePolicy: This value is required to return the global settings (quarantine notification settings) in the quarantine policy named DefaultGlobalTag.

```yaml
Type: QuarantinePolicyType
Parameter Sets: (All)
Aliases:
Accepted values: QuarantinePolicy, GlobalQuarantinePolicy

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
