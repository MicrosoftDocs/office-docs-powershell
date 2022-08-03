---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/new-customnudge
applicable: Exchange Online
title: New-CustomNudge
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: shusun
---

# New-CustomNudge

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module v2.0.6-Preview5 or later. For more information, see [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

**Note**: The features that are associated with this cmdlet are currently in Preview, are not available in all organizations, and are subject to change. Access to the cmdlet does not guarantee access to the feature.

Use the New-CustomNudge cmdlet to create Custom Nudges that are displayed in user Briefing email messages.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-CustomNudge -Name <String> -From <String> -Title <String> -Content <String>
 [-ResultSize <Unlimited>]
 [<CommonParameters>]
```

## DESCRIPTION
Custom Nudges that are assigned to users appear their Briefing email messages. Users can mark these Custom Nudges as complete after they finish the task.

This cmdlet requires the .NET Framework 4.7.2 or later. To run this cmdlet, you need to be a member of one of the following roles in Azure Active Directory:

- Global Administrator
- Exchange Administrator
- Insights Administrator

To learn more about administrator role permissions in Azure Active Directory, see [Azure AD built-in roles](https://docs.microsoft.com/azure/active-directory/roles/permissions-reference).

## EXAMPLES

### Example 1
```powershell
New-CustomNudge -Name perfReviewNudge -From "Microsoft HR" -Title "Please complete your performance reviews" -Content "They are very important to help your colleagues grow professionally."
```

This example creates a new Custom Nudge that can later be assigned to specific users to show in their Briefing email.

## PARAMETERS

### -Name
The Name parameter specifies a unique name for the Custom Nudge. The maximum length is 512 characters. If the value contains spaces, enclose the value in quotation marks (").

This value is not shown to users.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -From
The From parameter specifies the creator of the Custom Nudge. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").

Typically, this value is the name of the company or department that's responsible for the Custom Nudge.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Title
The Title parameter specifies the bold title of the Custom Nudge that's displayed in the Briefing email. The maximum length is 128 characters. If the value contains spaces, enclose the value in quotation marks (").

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Content
The Content parameter specifies the text that appears below the Custom Nudge title in the Briefing email. The maximum length is 512 characters. If the value contains spaces, enclose the value in quotation marks (").

To include hyperlinks, use the markdown format. For example, `[Contoso](https://www.contoso.com)`.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
