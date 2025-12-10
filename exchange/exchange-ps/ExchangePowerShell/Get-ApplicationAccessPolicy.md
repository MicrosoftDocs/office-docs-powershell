---
applicable: Exchange Online, Exchange Online Protection
author: chrisda
external help file: Microsoft.Exchange.ServerStatus-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/get-applicationaccesspolicy
schema: 2.0.0
title: Get-ApplicationAccessPolicy
---

# Get-ApplicationAccessPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ApplicationAccessPolicy cmdlet to view the list of application access policies.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ApplicationAccessPolicy [[-Identity] <ApplicationAccessPolicyIdParameter>]
 [<CommonParameters>]
```

## DESCRIPTION
This feature applies only to apps connecting to the Microsoft Graph API for Outlook resources.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ApplicationAccessPolicy | Format-Table -Auto Description,ScopeName,AccessRight
```

This example returns a summary list of all application access policies in the organization.

### Example 2
```powershell
Get-ApplicationAccessPolicy -Identity "596ade3a-1abe-4c5b-b7d5-a169c4b05d4a\7a774f0c-7a6f-11e0-85ad-07fb4824019b:S-1-5-21-724521725-2336880675-2689004279-1821338;8b6ce428-cca2-459a-ac50-d38bcc932258"
```

This example returns detailed information for the specified application access policy.

## PARAMETERS

### -Identity

> Applicable: Exchange Online, Exchange Online Protection

The Identity parameter specifies the application access policy that you want to view. To find the Identity value for the policy, run the command Get-ApplicationAccessPolicy | Format-List Identity,Description,ScopeName,AccessRight,AppID.

**Caution**: The value $null or a non-existent value for the Identity parameter returns *all* objects as if you ran the Get- command without the Identity parameter. Verify any lists of values for the Identity parameter are accurate and don't contain non-existent $null values.

```yaml
Type: ApplicationAccessPolicyIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
