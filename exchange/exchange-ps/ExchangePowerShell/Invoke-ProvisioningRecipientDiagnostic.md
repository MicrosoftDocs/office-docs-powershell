---
applicable: Exchange Online
external help file:
Locale: en-US
Module Name: ExchangePowerShell
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/invoke-provisioningrecipientdiagnostic
schema: 2.0.0
title: Invoke-ProvisioningRecipientDiagnostic
---

# Invoke-ProvisioningRecipientDiagnostic

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Invoke-ProvisioningRecipientDiagnostic cmdlet to identify and repair recipient provisioning failures in cloud-based organizations. Recipients include mailboxes, mail contacts, mail users, and groups.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Invoke-ProvisioningRecipientDiagnostic [-Recipients] <String[]>
 [-Confirm]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Invoke-Provisioning\*Diagnostic cmdlets are intended for targeted troubleshooting, not bulk diagnostics. To protect service service health, these cmdlets are currently limited 100 diagnostic calls per hour per organization.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Invoke-ProvisioningRecipientDiagnostic -Recipients lukas@contoso.onmicrosoft.com
```

This example checks the specified mailboxes for provisioning errors, and repairs common issues by resubmitting or correcting the recipient object.

For sample output, see [Sample output of Invoke-ProvisioningRecipientDiagnostic](https://learn.microsoft.com/exchange/monitoring/diagnostic-cmdlets/organization-diagnostic-cmdlets#sample-output-of-invoke-provisioningrecipientdiagnostic).

## PARAMETERS

### -Confirm

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Recipients

> Applicable: Exchange Online

The Recipients parameter specifies the email address of the mailbox, mail contact, mail user, or group you want to check.

**Note**: This parameter supports only one value.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Online

This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
