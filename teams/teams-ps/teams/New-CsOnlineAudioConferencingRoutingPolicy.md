---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csonlineaudioconferencingroutingpolicy
title: New-CsOnlineAudioConferencingRoutingPolicy
schema: 2.0.0
---

# New-CsOnlineAudioConferencingRoutingPolicy

## SYNOPSIS

This cmdlet creates a Online Audio Conferencing Routing Policy. Make sure you are following the guidance here to set up properly: [Manage On-network Conferencing for Audio Conferencing](https://learn.microsoft.com/microsoftteams/audio-conferencing-on-network).

## SYNTAX

```powershell
New-CsOnlineAudioConferencingRoutingPolicy [-Identity] <String>
 [-Confirm]
 [-Description <String>]
 [-MsftInternalProcessingMode <String>]
 [-OnlinePstnUsages <Object>]
 [-RouteType <String>]
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
New-CsOnlineAudioConferencingRoutingPolicy -Identity Test
```

Creates a new Online Audio Conferencing Routing Policy policy with an identity called "Test".

## PARAMETERS

### -Identity

Identity of the Online Audio Conferencing Routing Policy.

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

Enables administrators to provide explanatory text about the Online Audio Conferencing Routing policy. For example, the Description might indicate the users the policy should be assigned to.

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

### -OnlinePstnUsages

A list of online PSTN usages (such as Local or Long Distance) that can be applied to this online audio routing policy. The online PSTN usages must be existing usages (PSTN usages can be retrieved by calling the Get-CsOnlinePstnUsage cmdlet).  

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RouteType

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

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Remove-CsOnlineAudioConferencingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/Remove-csonlineaudioconferencingroutingpolicy)
[Grant-CsOnlineAudioConferencingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/Grant-csonlineaudioconferencingroutingpolicy)
[Set-CsOnlineAudioConferencingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/Set-csonlineaudioconferencingroutingpolicy)
[Get-CsOnlineAudioConferencingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/Get-csonlineaudioconferencingroutingpolicy)
