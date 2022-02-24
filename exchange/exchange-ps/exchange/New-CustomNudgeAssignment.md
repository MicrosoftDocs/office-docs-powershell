---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/new-customnudgeassignment
applicable: Exchange Online
title: New-CustomNudgeAssignment
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: shusun
---

# New-CustomNudgeAssignment

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

Use the New-CustomNudgeAssignment cmdlet to create assignments of custom nudges to users. Nudges are shown in the Briefing email.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-CustomNudgeAssignment -AssigneeId <String> -NudgeName <String>
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
New-CustomNudgeAssignment -NudgeName perfReviewNudge -AssigneeId roy@contoso.onmicrosoft.com -StartTime 2/2/2022 -EndTime 2/10/2022
```

This example assigns the nudge named perfReviewNudge to the user roy@contoso.onmicrosoft.com. If the custom nudge feature is enabled in the organization, and the current time is between the StartTime and EndTime values, the user will receive the perfReviewNudge nudge in their next Briefing email message.

## PARAMETERS

### -AssigneeId
The AssigneeId parameter specifies the email address of the user that you want to assign the nudge to.

Together, this parameter and the NudgeName parameter create the unique nudge assignment.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NudgeName
The NudgeName parameter specifies the name of the nudge that you want to assign to the user. If the value contains spaces, enclose the value in quotation marks (").

Together, this parameter and the AssigneeId parameter create the unique nudge assignment.

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

### -StartTime
The StartTime parameter specifies the date when the nudge is first shown to the user.

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

### -EndTime
The EndTime parameter specifies the date when the nudge is no longer shown to the user.

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

###  

## OUTPUTS

###  

## NOTES

## RELATED LINKS
