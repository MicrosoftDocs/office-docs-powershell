---
external help file: Microsoft.Exchange.ServerStatus-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/get-externalinoutlook
applicable: Exchange Online, Exchange Online Protection
title: Get-ExternalInOutlook
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Get-ExternalInOutlook

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Get-ExternalInOutlook cmdlet to view the configuration of external sender identification that's available in Outlook, Outlook for Mac, Outlook on the web, and Outlook for iOS and Android.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-ExternalInOutlook [[-Identity] <OrganizationIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The important properties that are returned in the output of this cmdlet are:

- Enabled: True means the feature is enabled; False means the feature is disabled.
- AllowList: The list of exceptions. Messages received from the specified senders or senders in the specified domains don't receive the External icon in the area of subject line.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Get-ExternalInOutlook
```

This example returns the settings of the external sender identification feature for the organization.

## PARAMETERS

### -Identity
The Identity parameter specifies the GUID of the external sender identification object that you want to view. Although this parameter is available, you don't need to use it.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: 0
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
