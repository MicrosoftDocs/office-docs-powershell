---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/remove-csonlineaudioconferencingroutingpolicy
title: Remove-CsOnlineAudioConferencingRoutingPolicy
schema: 2.0.0
---

# Remove-CsOnlineAudioConferencingRoutingPolicy

## SYNOPSIS

This cmdlet deletes an instance of the Online Audio Conferencing Routing Policy.

## SYNTAX

```powershell
Remove-CsOnlineAudioConferencingRoutingPolicy [-Identity] <String>
 [-Confirm]
 [-MsftInternalProcessingMode <String>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION

Teams meeting dial-out calls are initiated from within a meeting in your organization to PSTN numbers, including call-me-at calls and calls to bring new participants to a meeting.

To enable Teams meeting dial-out routing through Direct Routing to on-network users, you need to create and assign an Audio Conferencing routing policy called "OnlineAudioConferencingRoutingPolicy."

The OnlineAudioConferencingRoutingPolicy policy is equivalent to the CsOnlineVoiceRoutingPolicy for 1:1 PSTN calls via Direct Routing.

Audio Conferencing voice routing policies determine the available routes for calls from meeting dial-out based on the destination number. Audio Conferencing voice routing policies link to PSTN usages, determining routes for meeting dial-out calls by associated organizers.

## EXAMPLES

### Example 1

```powershell
PS C:\> Remove-CsOnlineAudioConferencingRoutingPolicy -Identity "Test"
```

Deletes an Online Audio Conferencing Routing policy instance with the identity "Test".

## PARAMETERS

### -Identity

The identity of the policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
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

### System.String

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[New-CsOnlineAudioConferencingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csonlineaudioconferencingroutingpolicy)
[Grant-CsOnlineAudioConferencingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csonlineaudioconferencingroutingpolicy)
[Set-CsOnlineAudioConferencingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csonlineaudioconferencingroutingpolicy)
[Get-CsOnlineAudioConferencingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/getw-csonlineaudioconferencingroutingpolicy)
