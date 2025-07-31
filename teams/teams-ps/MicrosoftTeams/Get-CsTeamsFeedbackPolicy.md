---
applicable: Microsoft Teams
author: tomkau
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: bulenteg
Module Name: MicrosoftTeams
ms.author: tomkau
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsfeedbackpolicy
schema: 2.0.0
title: Get-CsTeamsFeedbackPolicy
---

# Get-CsTeamsFeedbackPolicy

## SYNOPSIS

Use this cmdlet to retrieve the current Teams Feedback policies (the ability to send feedback about Teams to Microsoft and whether they receive the survey) in the organization.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsFeedbackPolicy [[-Identity] <String>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsFeedbackPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
Retrieves the current Teams Feedback policies (the ability to send feedback about Teams to Microsoft and whether they receive the survey) in the organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsFeedbackPolicy
```

In this example, we retrieve all the existing Teams feedback policies in the organization.

## PARAMETERS

### -Filter
Internal Microsoft use

```yaml
Type: String
Parameter Sets: Filter
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
The unique identifier of the policy.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
