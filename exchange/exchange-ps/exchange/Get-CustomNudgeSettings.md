---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/get-customnudgesettings
applicable: Exchange Online
title: Get-CustomNudgeSettings
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: shusun
---

# Get-CustomNudgeSettings

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell module v2.0.6-Preview5 or later. For more information, see [About the Exchange Online PowerShell module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

**Note**: The features that are associated with this cmdlet are currently in Preview, are not available in all organizations, and are subject to change. Access to the cmdlet does not guarantee access to the feature.

Use the Get-CustomNudgeSettings cmdlet to view the organization settings for Custom Nudges. Custom Nudges are shown in the Briefing email.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-CustomNudgeSettings
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet requires the .NET Framework 4.7.2 or later. To run this cmdlet, you need to be a member of one of the following roles in Azure Active Directory:

- Global Administrator
- Exchange Administrator
- Insights Administrator

To learn more about administrator role permissions in Azure Active Directory, see [Azure AD built-in roles](https://docs.microsoft.com/azure/active-directory/roles/permissions-reference).

## EXAMPLES

### Example 1
```powershell
Get-CustomNudgeSettings
```

This example returns the Custom Nudge settings for the organization.

### -ResultSize
This parameter is reserved for internal Microsoft use.

```yaml
Type: Unlimited
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
