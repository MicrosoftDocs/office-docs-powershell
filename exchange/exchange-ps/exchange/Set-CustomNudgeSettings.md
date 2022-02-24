---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/set-customnudgesettings
applicable: Exchange Online
title: Set-CustomNudgeSettings
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: shusun
---

# Set-CustomNudgeSettings

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

Use the Set-CustomNudgeSettings cmdlet to modify the organization settings for custom nudges. Nudges are shown in the Briefing email.

For information about the parameter Sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-CustomNudgeSettings -Enabled <Boolean> -Title <String>
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
Set-CustomNudgeSettings -Enabled $true -Title "Contoso HR"
```

This example turns on the custom nudge section and custom nudges in all Briefing email messages. The name of the custom nudge section is Contoso HR.

### Example 2
```powershell
Set-CustomNudgeSettings -Enabled $false
```

This example turns off the custom nudge section and custom nudges in all Briefing email messages.

## PARAMETERS

### -Enabled
The Enabled parameter enables or disables custom nudges in all Briefing email messages. Valid values are:

- $true: Custom nudges and the custom nudge section are available. You create custom nudges by using the New-CustomNudge cmdlet. You assign custom nudges to users by using the New-CustomNudgeAssignment cmdlet.
- $false: Custom nudges and the custom nudge section are not available in Briefing email messages.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Title
The Title parameter specifies the title of the custom nudge section in the Briefing email. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -Enabled
The Enabled parameter specifies whether or not custom nudges can be shown to users in the briefing email.

```yaml
Type: Boolean
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

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
