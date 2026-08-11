---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsworkloadpolicy
schema: 2.0.0
title: Set-CsTeamsWorkLoadPolicy
---

# Set-CsTeamsWorkLoadPolicy

## SYNOPSIS

This cmdlet sets the Teams Workload Policy value for current tenant.

## SYNTAX

```powershell
Set-CsTeamsWorkLoadPolicy [-AllowCalling <Boolean>] [-AllowCallingPinned <Boolean>] [-AllowMeeting <Boolean>]
 [-AllowMeetingPinned <Boolean>] [-AllowMessaging <Boolean>] [-AllowMessagingPinned <Boolean>]
 [-Description <String>] [[-Identity] <String>] [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION

The TeamsWorkLoadPolicy determines the workloads like meeting, messaging, calling that are enabled and/or pinned for the user.

## EXAMPLES

### Example 1

```powershell
PS C:\> Set-CsTeamsWorkLoadPolicy -Identity Global -AllowCalling Disabled
```

This sets the Teams Workload Policy Global value of AllowCalling to disabled.

## PARAMETERS

### -AllowCalling

Determines if calling workload is enabled in the Teams App. Possible values are True and False.

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

### -AllowCallingPinned

Determines if calling workload is pinned to the teams navigation bar. Possible values are True and False.

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

### -AllowMeeting

Determines if meetings workload is enabled in the Teams App. Possible values are True and False.

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

### -AllowMeetingPinned

Determines if meetings workload is pinned to the teams navigation bar. Possible values are True and False.

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

### -AllowMessaging

Determines if messaging workload is enabled in the Teams App. Possible values are True and False.

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

### -AllowMessagingPinned

Determines if messaging workload is pinned to the teams navigation bar. Possible values are True and False.

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

### -Description

The description of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

The identity of the Teams Work Load Policy.

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

### -MsftInternalProcessingMode

For internal use only.

```yaml
Type: String
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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Remove-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/remove-csteamsworkloadpolicy)

[Get-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsworkloadpolicy)

[New-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsworkloadpolicy)

[Grant-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsworkloadpolicy)
