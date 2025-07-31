---
external help file: MicrosoftTeams-help.xml
Locale: en-US
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/set-csteamsshiftsapppolicy
schema: 2.0.0
title: Set-CsTeamsShiftsAppPolicy
---

# Set-CsTeamsShiftsAppPolicy

## SYNOPSIS

Allows you to set or update properties of a Teams Shifts App Policy instance.

## SYNTAX

```powershell
Set-CsTeamsShiftsAppPolicy [-AllowTimeClockLocationDetection <Boolean>] [[-Identity] <String>]
 [-MsftInternalProcessingMode <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

The Teams Shifts app is designed to help frontline workers and their managers manage schedules and communicate effectively.

## EXAMPLES

### Example 1

```powershell
PS C:\> Set-CsTeamsShiftsAppPolicy 'Default' -AllowTimeClockLocationDetection $False
```

Change Settings on a Teams Shift App Policy (only works on Global policy)

## PARAMETERS

### -AllowTimeClockLocationDetection

Turns on the location detection. The time report will indicate whether workers are "on location" when they clocked in and out. Workers are considered as "on location" if they clock in or out within a 200-meter radius of the set location.

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

### -Identity

Policy instance name.

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
