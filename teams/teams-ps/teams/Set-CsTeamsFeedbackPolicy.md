---
external help file: Microsoft.Rtc.Management.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsfeedbackpolicy
applicable: Microsoft Teams
title: Set-CsTeamsFeedbackPolicy
schema: 2.0.0
---

# Set-CsTeamsFeedbackPolicy

## SYNOPSIS

Use this cmdlet to modify a Teams feedback policy (the ability to send feedback about Teams to Microsoft and whether they receive the survey).

## SYNTAX

```
Set-CsTeamsFeedbackPolicy [[-Identity] <String>]
 [-AllowEmailCollection <Boolean>]
 [-AllowLogCollection <Boolean>]
 [-AllowScreenshotCollection <Boolean>]
 [-Confirm]
 [-EnableFeatureSuggestions <Boolean>]
 [-Force]
 [-Instance <Object>]
 [-ReceiveSurveysMode <String>]
 [-Tenant <Object>]
 [-UserInitiatedMode <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Modifies a Teams feedback policy (the ability to send feedback about Teams to Microsoft and whether they receive the survey).

## EXAMPLES

### Example 1
```powershell
PS C:\> Set-CsTeamsFeedbackPolicy -identity "New Hire Feedback Policy" -userInitiatedMode enabled -receiveSurveysMode disabled
```

In this example, the policy "New Hire Feedback Policy" is modified, sets the userInitiatedMode parameter to enabled and the receiveSurveysMode parameter to disabled.

## PARAMETERS

### -Identity
The unique identifier of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
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

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes and suppresses the display of any non-fatal error message that might arise when running the command.

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

### -Instance
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

### -ReceiveSurveysMode
Set the receiveSurveysMode parameter to enabled to allow users who are assigned the policy to receive the survey.
Set it to EnabledUserOverride to have users receive the survey and allow them to opt out.

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

### -EnableFeatureSuggestions
This setting will enable Tenant Admins to hide or show the Teams menu item "Help | Suggest a Feature".
Possible Values: True, False

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

### System.Management.Automation.PSObject

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
