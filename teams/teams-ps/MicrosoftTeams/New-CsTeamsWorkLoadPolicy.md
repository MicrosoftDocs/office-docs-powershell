---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsworkloadpolicy
schema: 2.0.0
title: New-CsTeamsWorkLoadPolicy
---

# New-CsTeamsWorkLoadPolicy

## SYNOPSIS

This cmdlet creates a Teams Workload Policy instance for the tenant.

## SYNTAX

```powershell
New-CsTeamsWorkLoadPolicy [-Identity] <String> [-AllowCalling <Boolean>] [-AllowCallingPinned <Boolean>]
 [-AllowMeeting <Boolean>] [-AllowMeetingPinned <Boolean>] [-AllowMessaging <Boolean>]
 [-AllowMessagingPinned <Boolean>] [-Description <String>] [-MsftInternalProcessingMode <String>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The TeamsWorkLoadPolicy determines the workloads like meeting, messaging, calling that are enabled and/or pinned for the user.

## EXAMPLES

### Example 1

```powershell
PS C:\> New-CsTeamsWorkLoadPolicy -Identity Test
```

Creates a new Teams Workload Policy with the specified identity of "Test".

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

Enables administrators to provide explanatory text about the Teams Workload policy. For example, the Description might indicate the users the policy should be assigned to.

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

The identity of the Teams Workload Policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MsftInternalProcessingMode

For Microsoft Internal use only.

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

[Set-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsworkloadpolicy)

[Grant-CsTeamsWorkLoadPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsworkloadpolicy)
