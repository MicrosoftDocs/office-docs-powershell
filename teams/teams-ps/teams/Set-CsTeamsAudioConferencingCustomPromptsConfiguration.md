---
external help file: Microsoft.Teams.Policy.Administration.Cmdlets.Core.dll-Help.xml
Module Name: MicrosoftTeams
online version:
schema: 2.0.0
---

# Set-CsTeamsAudioConferencingCustomPromptsConfiguration

## SYNOPSIS
Sets configuration which controls tenant level settings for on-line dial-in conferencing prompts

## SYNTAX

```
Set-CsTeamsAudioConferencingCustomPromptsConfiguration
 [-Prompts <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.CustomPrompt]>]
 [-Packages <System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.CustomPromptPackage]>]
 [-Identity] <String> [<CommonParameters>]
```

## DESCRIPTION
Sets configuration which controls tenant level settings for on-line dial-in conferencing prompts

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

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
{{ Fill Force Description }}

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
{{ Fill Identity Description }}

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

### -Packages
Packages of prompts with mappings to various events.

```yaml
Type: System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.CustomPromptPackage]
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Prompts
Custom prompt messages to play on recording or other events.

```yaml
Type: System.Management.Automation.PSListModifier`1[Microsoft.Teams.Policy.Administration.Cmdlets.Core.CustomPrompt]
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

### System.Void

## NOTES

## RELATED LINKS
