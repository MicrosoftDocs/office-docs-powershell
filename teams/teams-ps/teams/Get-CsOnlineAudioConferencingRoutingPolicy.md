---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlineaudioconferencingroutingpolicy
title: Get-CsOnlineAudioConferencingRoutingPolicy
schema: 2.0.0
---

# Get-CsOnlineAudioConferencingRoutingPolicy

## SYNOPSIS

This cmdlet retrieves all online audio conferencing routing policies for the tenant.

## SYNTAX

### Identity (Default)

```powershell
Get-CsOnlineAudioConferencingRoutingPolicy [[-Identity] <String>] [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

### Filter

```powershell
Get-CsOnlineAudioConferencingRoutingPolicy [-MsftInternalProcessingMode <String>] [-Filter <String>]
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
PS C:\> Get-CsOnlineAudioConferencingRoutingPolicy 
```

Retrieves all Online Audio Conferencing Routing Policy instances

## PARAMETERS

### -Filter

Enables you to use wildcard characters when indicating the policy (or policies) to be returned. To return a collection of all the per-user policies, use this syntax: -Filter "tag:*".

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

### -Identity

The identity of the Online Audio Conferencing Routing Policy.

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

[New-CsOnlineAudioConferencingRoutingPolicy](New-CsOnlineAudioConferencingRoutingPolicy.md)
[Remove-CsOnlineAudioConferencingRoutingPolicy](Remove-CsOnlineAudioConferencingRoutingPolicy.md)
[Grant-CsOnlineAudioConferencingRoutingPolicy](Grant-CsOnlineAudioConferencingRoutingPolicy.md)
[Set-CsOnlineAudioConferencingRoutingPolicy](Set-CsOnlineAudioConferencingRoutingPolicy.md)
