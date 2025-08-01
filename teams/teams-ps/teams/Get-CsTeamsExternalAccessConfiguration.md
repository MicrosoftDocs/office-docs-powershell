---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsexternalaccessconfiguration
title: Get-CsTeamsExternalAccessConfiguration
schema: 2.0.0
---

# Get-CsTeamsExternalAccessConfiguration

## SYNOPSIS
The TeamsExternalAccessConfiguration contains all configurations that can be used to enhance the security of the entire organization, such as managing blocked users. This cmdlet returns the current settings of your organization.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsExternalAccessConfiguration [[-Identity] <XdsIdentity>] [<CommonParameters>]
```

### Filter
```
Get-CsTeamsExternalAccessConfiguration [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
Retrieves the current Teams External Access Configuration in the organization.

## EXAMPLES

### Example 1
```powershell
PS C:\> Get-CsTeamsExternalAccessConfiguration
```

In this example, we retrieve the Teams External Access Configuration in the organization.

## PARAMETERS

### -Filter
Internal Microsoft use.

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
The only value accepted is Global

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### TeamsExternalAccessConfiguration.Cmdlets.TeamsExternalAccessConfiguration

## NOTES

## RELATED LINKS
