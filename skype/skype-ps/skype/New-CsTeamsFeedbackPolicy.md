---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-csteamsfeedbackpolicy
applicable: Skype for Business Online
title: New-CsTeamsFeedbackPolicy
schema: 2.0.0
manager: bulenteg
ms.author: tomkau
author: tomkau
ms.reviewer:
---

# New-CsTeamsFeedbackPolicy

## SYNOPSIS
Use this cmdlet to control whether users in your organization can send feedback about Teams to Microsoft through Give feedback and whether they receive the survey.

## SYNTAX

```
New-CsTeamsFeedbackPolicy [-WhatIf] [-Confirm] [[-Identity] <Object>] [-Tenant <Object>] [-InMemory]
 [-UserInitiatedMode <Object>] [-ReceiveSurveysMode <Object>] [-Force]
```

## DESCRIPTION
Use this cmdlet to control whether users in your organization can send feedback about Teams to Microsoft through Give feedback and whether they receive the survey. By default, all users in your organization are automatically assigned the global (Org-wide default) policy and the Give feedback feature and survey are enabled in the policy. The exception is Teams for Education, where the features are enabled for teachers and disabled for students. For more information, visit [Manage feedback policies in Microsoft Teams](https://docs.microsoft.com/microsoftteams/manage-feedback-policies-in-teams).

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsFeedbackPolicy -identity "New Hire Feedback Policy" -userInitiatedMode disabled -receiveSurveysMode disabled
```

In this example, we create a feedback policy called New Hire Feedback Policy and we turn off the ability to give feedback through Give feedback and the survey.

## PARAMETERS

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppress all non-fatal errors.

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

### -Identity
A unique identifier.

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

### -InMemory
The InMemory parameter creates an object reference without actually committing the object as a permanent change.

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

### -ReceiveSurveysMode
Set the receiveSurveysMode parameter to enabled to allow users who are assigned the policy to receive the survey.

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

### -Tenant
Internal Microsoft use only.

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

### -UserInitiatedMode
 Set the userInitiatedMode parameter to enabled to allow users who are assigned the policy to give feedback.
 Setting the parameter to disabled turns off the feature and users who are assigned the policy don't have the option to give feedback.

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

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
