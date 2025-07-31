---
applicable: Microsoft Teams
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsfeedbackpolicy
schema: 2.0.0
title: New-CsTeamsFeedbackPolicy
---

# New-CsTeamsFeedbackPolicy

## SYNOPSIS
Use this cmdlet to control whether users in your organization can send feedback about Teams to Microsoft through Give feedback and whether they receive the survey.

## SYNTAX

```powershell
New-CsTeamsFeedbackPolicy [-WhatIf] [-Confirm] [[-Identity] <Object>] [-Tenant <Object>] [-InMemory]
[-AllowEmailCollection <Boolean>] [-AllowLogCollection <Boolean>] [-AllowScreenshotCollection <Boolean>] [-EnableFeatureSuggestions <Boolean>]
 [-UserInitiatedMode <String>] [-ReceiveSurveysMode <String>] [-Force] [<CommonParameters>]
```

## DESCRIPTION
Use this cmdlet to control whether users in your organization can send feedback about Teams to Microsoft through Give feedback and whether they receive the survey. By default, all users in your organization are automatically assigned the global (Org-wide default) policy and the Give feedback feature and survey are enabled in the policy. The exception is Teams for Education, where the features are enabled for teachers and disabled for students. For more information, visit [Manage feedback policies in Microsoft Teams](https://learn.microsoft.com/microsoftteams/manage-feedback-policies-in-teams).

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsFeedbackPolicy -identity "New Hire Feedback Policy" -userInitiatedMode disabled -receiveSurveysMode disabled
```

In this example, we create a feedback policy called New Hire Feedback Policy and we turn off the ability to give feedback through Give feedback and the survey.

## PARAMETERS

### -AllowEmailCollection
Set this to TRUE to enable Email collection.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowLogCollection
Set this to TRUE to enable log collection.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowScreenshotCollection
Set this to TRUE to enable Screenshot collection.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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

### -EnableFeatureSuggestions
 This setting will enable Tenant Admins to hide or show the Teams menu item “Help | Suggest a Feature”.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

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

Possible values:
 - Enabled
 - Disabled
 - EnabledUserOverride

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
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

 Possible values:
 - Enabled
 - Disabled

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Enabled
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
