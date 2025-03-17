---
external help file: Microsoft.TeamsCmdlets.PowerShell.Custom.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-teamsshiftspolicy
title: Get-CsTeamsShiftsPolicy
schema: 2.0.0
---

# Get-CsTeamsShiftsPolicy

## SYNOPSIS

This cmdlet allows you to get properties of a TeamsShiftPolicy instance, including user's Teams off shift warning message-specific settings.

## SYNTAX

### Identity (Default)
```powershell
Get-CsTeamsShiftsPolicy [[-Identity] <XdsIdentity>] [<CommonParameters>]
```

### Filter
```powershell
Get-CsTeamsShiftsPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows you to get properties of a TeamsShiftPolicy instance. Use this to get the policy name and Teams off shift warning message-specific settings (ShiftNoticeMessageType, ShiftNoticeMessageCustom, ShiftNoticeFrequency, AccessGracePeriodMinutes).

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsShiftsPolicy
```

Gets the properties of all instances of the TeamsShiftPolicy.

### Example 2
```powershell
PS C:\> Get-CsTeamsShiftsPolicy -Identity OffShiftAccessMessage1Always
```

Gets the properties of the OffShiftAccessMessage1Always instance of the TeamsShiftPolicy.

## PARAMETERS

### -Identity
Policy instance name. Optional.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases:
Applicable: Microsoft Teams
Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned. To return a collection of all the policies, use this syntax: -Filter "tag:*".

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Set-CsTeamsShiftsPolicy](https://learn.microsoft.com/powershell/module/teams/set-csteamsshiftspolicy)

[New-CsTeamsShiftsPolicy](https://learn.microsoft.com/powershell/module/teams/new-csteamsshiftspolicy)

[Remove-CsTeamsShiftsPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csteamsshiftspolicy)

[Grant-CsTeamsShiftsPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csteamsshiftspolicy)
