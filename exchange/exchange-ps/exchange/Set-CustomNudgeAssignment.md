---
external help file: Microsoft.Exchange.Management.RestApiClient.dll-Help.xml
Module Name: ExchangeOnlineManagement
online version: https://docs.microsoft.com/powershell/module/exchange/set-customnudgeassignment
applicable: Exchange Online
title: Set-CustomNudgeAssignment
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer: shusun
---

# Set-CustomNudgeAssignment

## SYNOPSIS
This cmdlet is available only in the Exchange Online PowerShell V2 module. For more information, see [About the Exchange Online PowerShell V2 module](https://docs.microsoft.com/powershell/exchange/exchange-online-powershell-v2).

Use the Set-CustomNudgeAssignment cmdlet to modify the date range of custom nudge assignments. Nudges are shown in the Briefing email.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-CustomNudgeAssignment -AssigneeId <String> -NudgeName <String> -StartTime <String> -EndTime <String>
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
Set-CustomNudgeAssignment -NudgeName perfReviewNudge -AssigneeId roy@contoso.onmicrosoft.com -StartTime 2/9/2022 -EndTime 2/11/2022
```

This example updates the assignment to have the new start and end times.
This means roy@contoso.onmicrosoft.com will only receive the perfReviewNudge if the current time is between 2/9/2022 and 2/11/2022

## PARAMETERS

### -AssigneeId
The AssigneeId parameter specifies the email address of the user that you want to modify.

Together, this parameter and the AssigneeId parameter uniquely identify the nudge assignment that you want to modify.

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
The NudgeName parameter specifies the name of the nudge that you want to modify.

Together, this parameter and the NudgeName parameter uniquely identify the nudge assignment that you want to modify.

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
