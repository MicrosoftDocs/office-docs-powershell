---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsshiftsapppolicy
title: Get-CsTeamsShiftsAppPolicy
schema: 2.0.0
---

# Get-CsTeamsShiftsAppPolicy

## SYNOPSIS

Returns information about the Teams Shifts App policies that have been configured for use in your organization.

## SYNTAX

### Identity (Default)

```
Get-CsTeamsShiftsAppPolicy [[-Identity] <String>]
 [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

### Filter

```
Get-CsTeamsShiftsAppPolicy [-Filter <String>]
 [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

## DESCRIPTION

The Teams Shifts app is designed to help frontline workers and their managers manage schedules and communicate effectively.

## EXAMPLES

### Example 1

```powershell
PS C:\> Get-CsTeamsShiftsAppPolicy
```

Lists any available Teams Shifts Apps Policies.

## PARAMETERS

### -Identity

Unique Identity assigned to the policy when it was created.

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

### -Filter

This parameter accepts a wildcard string and returns all policies with identities matching that string. For example, a Filter value of `tag:*` will return all policies defined at the per-user level.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
