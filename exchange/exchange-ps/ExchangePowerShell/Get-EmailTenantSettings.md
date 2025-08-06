---
applicable: Exchange Online
author: chrisda
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-emailtenantsettings
schema: 2.0.0
title: Get-EmailTenantSettings
---

# Get-EmailTenantSettings

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-EmailTenantSettings cmdlet to view whether priority account protection is enabled or disabled in your Microsoft Defender for Office 365 organization. For more information about priority accounts, see [Manage and monitor priority accounts](https://learn.microsoft.com/microsoft-365/admin/setup/priority-accounts).

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-EmailTenantSettings [[-Identity] <EmailTenantSettingsIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-EmailTenantSettings | Format-List Identity,EnablePriorityAccountProtection
```

This example shows whether priority account protection is enabled or disabled in the organization.

## PARAMETERS

### -Identity

> Applicable: Exchange Online

The Identity parameter specifies the settings object that you want to view. The only settings object in the organization is named Default.

```yaml
Type: EmailTenantSettingsIdParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
