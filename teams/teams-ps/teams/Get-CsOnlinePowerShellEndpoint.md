---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/skype/get-csonlineliswirelessaccesspoint
schema: 2.0.0
---

# Get-CsOnlinePowerShellEndpoint

## SYNOPSIS
{{ Fill in the Synopsis }}

## SYNTAX

### OverrideDiscoveryUri (Default)
```
Get-CsOnlinePowerShellEndpoint -TargetDomain <Fqdn> [-OverrideDiscoveryUri <Uri>]
 [-OverrideDesiredLink <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### TeamsEnvironmentName
```
Get-CsOnlinePowerShellEndpoint -TargetDomain <Fqdn> [-OverrideDesiredLink <String>]
 [-TeamsEnvironmentName <TeamsEnvironment>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
{{ Fill in the Description }}

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -OverrideDesiredLink
{{ Fill OverrideDesiredLink Description }}

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

### -OverrideDiscoveryUri
{{ Fill OverrideDiscoveryUri Description }}

```yaml
Type: Uri
Parameter Sets: OverrideDiscoveryUri
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetDomain
{{ Fill TargetDomain Description }}

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamsEnvironmentName
{{ Fill TeamsEnvironmentName Description }}

```yaml
Type: TeamsEnvironment
Parameter Sets: TeamsEnvironmentName
Aliases:
Accepted values: TeamsCloud, TeamsGCCH, TeamsDOD, TeamsChina

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
