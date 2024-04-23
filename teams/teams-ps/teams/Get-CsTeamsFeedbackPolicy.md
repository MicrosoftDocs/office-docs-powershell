---
Module Name: MicrosoftTeams
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsfeedbackpolicy
applicable: Microsoft Teams
title: Get-CsTeamsFeedbackPolicy
schema: 2.0.0
manager: bulenteg
ms.author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsTeamsFeedbackPolicy

## SYNOPSIS

Use this cmdlet to retrieve the current Teams Feedback policies (the ability to send feedback about Teams to Microsoft and whether they receive the survey) in the organization.

## SYNTAX

```
Get-CsTeamsFeedbackPolicy [-LocalStore] [[-Identity] <Object>] [-Tenant <Object>] [-Filter <Object>]
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
Type: Object
Parameter Sets: (All)
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
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
