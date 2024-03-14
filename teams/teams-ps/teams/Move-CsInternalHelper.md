---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
---

# Move-CsInternalHelper

## SYNOPSIS
{{ Fill in the Synopsis }}

## SYNTAX

### Rehome (Default)
```
Move-CsInternalHelper -ActionType <String> -UserSipUri <String> [-MoveToCloud] [-TeamDataCheckCpc]
 [-TeamDataCheckEnterpriseVoice] [-TeamDataMoveToTeam] [-ProgressAction <ActionPreference>]
 [<CommonParameters>]
```

### Validate
```
Move-CsInternalHelper -ActionType <String> -UserSipUri <String> -CmdletVersion <String>
 -LocalDeploymentInfoMajorVersion <String> -LocalDeploymentInfoPresenceFqdn <String>
 -LocalDeploymentInfoRegistrarFqdn <String> [-MoveToCloud] [-Force] [-TeamDataCheckCpc]
 [-TeamDataCheckEnterpriseVoice] [-TeamDataMoveToTeam] [-LocalDeploymentInfoHostingProviderFqdn <String>]
 [-ProgressAction <ActionPreference>] [<CommonParameters>]
```

### MoveResourcedata
```
Move-CsInternalHelper -ActionType <String> -UserSipUri <String> [-TeamDataCheckCpc]
 [-TeamDataCheckEnterpriseVoice] [-TeamDataMoveToTeam] -ResourceData <String> -MajorVersion <String>
 [-ProgressAction <ActionPreference>] [<CommonParameters>]
```

### BeginAndCompleteMove
```
Move-CsInternalHelper -ActionType <String> -UserSipUri <String> -MajorVersion <String>
 [-ProgressAction <ActionPreference>] [<CommonParameters>]
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

### -ActionType
{{ Fill ActionType Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CmdletVersion
{{ Fill CmdletVersion Description }}

```yaml
Type: String
Parameter Sets: Validate
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
{{ Fill Force Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Validate
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalDeploymentInfoHostingProviderFqdn
{{ Fill LocalDeploymentInfoHostingProviderFqdn Description }}

```yaml
Type: String
Parameter Sets: Validate
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalDeploymentInfoMajorVersion
{{ Fill LocalDeploymentInfoMajorVersion Description }}

```yaml
Type: String
Parameter Sets: Validate
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalDeploymentInfoPresenceFqdn
{{ Fill LocalDeploymentInfoPresenceFqdn Description }}

```yaml
Type: String
Parameter Sets: Validate
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalDeploymentInfoRegistrarFqdn
{{ Fill LocalDeploymentInfoRegistrarFqdn Description }}

```yaml
Type: String
Parameter Sets: Validate
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MajorVersion
{{ Fill MajorVersion Description }}

```yaml
Type: String
Parameter Sets: MoveResourcedata, BeginAndCompleteMove
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MoveToCloud
{{ Fill MoveToCloud Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Rehome, Validate
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResourceData
{{ Fill ResourceData Description }}

```yaml
Type: String
Parameter Sets: MoveResourcedata
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamDataCheckCpc
{{ Fill TeamDataCheckCpc Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Rehome, Validate, MoveResourcedata
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamDataCheckEnterpriseVoice
{{ Fill TeamDataCheckEnterpriseVoice Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Rehome, Validate, MoveResourcedata
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TeamDataMoveToTeam
{{ Fill TeamDataMoveToTeam Description }}

```yaml
Type: SwitchParameter
Parameter Sets: Rehome, Validate, MoveResourcedata
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserSipUri
{{ Fill UserSipUri Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProgressAction
{{ Fill ProgressAction Description }}

```yaml
Type: ActionPreference
Parameter Sets: (All)
Aliases: proga

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

### System.Management.Automation.PSObject

## NOTES

## RELATED LINKS
