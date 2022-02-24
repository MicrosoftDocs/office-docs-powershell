---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/get-customnudgeassignment
applicable: Exchange Online
title: Get-CustomNudgeAssignment
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: shusun
---

# Get-CustomNudgeAssignment

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

Use the Get-CustomNudgeAssignment to view assignments of custom nudges to users. Nudges are shown in the Briefing email.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Get-CustomNudgeAssignment -AssigneeId <String> -NudgeName <String>
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
Get-CustomNudgeAssignment -NudgeName perfReviewNudge
```

This example returns all nudge assignments that contain the nudge named perfReviewNudge.

### Example 2
```powershell
Get-CustomNudgeAssignment -AssigneeId roy@contoso.onmicrosoft.com
```

This example returns all nudge assignments that contain the user roy@contoso.onmicrosoft.com.

### Example 3
```powershell
Get-CustomNudgeAssignment -NudgeName perfReviewNudge -AssigneeId roy@contoso.onmicrosoft.com
```

This example returns the StartTime and EndTime values for the nudge assignment of the nudge named perfReviewNudge to the user roy@contoso.com .

## PARAMETERS

### -AssigneeId
The AssigneeId parameter specifies the email address of the user that you want to view.

If you use this parameter without the NudgeName parameter, all nudges that are assigned to the user are returned.

If you use this parameter with the NudgeName parameter, the StartDate and EndDate values of the nudge assignment are returned.

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

### -NudgeName
The NudgeName parameter specifies the name of the nudge that you want to view. If the value contains spaces, enclose the value in quotation marks (").

If you use this parameter without the AssigneeId parameter, all users who have the nudge assigned to them are returned.

If you use this parameter with the AssigneeId parameter, the StartDate and EndDate values of the nudge assignment are returned.

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
