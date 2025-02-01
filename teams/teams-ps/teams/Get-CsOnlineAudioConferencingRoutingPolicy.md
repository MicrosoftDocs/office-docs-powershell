---
external help file: MicrosoftTeams-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlineaudioconferencingroutingpolicy
applicable: Microsoft Teams
title: Get-CsOnlineAudioConferencingRoutingPolicy
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Get-CsOnlineAudioConferencingRoutingPolicy

## SYNOPSIS
Returns information about the the audio conferencing routing policies configured for use in your tenant. Make sure you are following the guidance here to set up properly: [Manage On-network Conferencing for Audio Conferencing](https://learn.microsoft.com/microsoftteams/audio-conferencing-on-network).

## SYNTAX

### Identity (Default)

```
Get-CsOnlineAudioConferencingRoutingPolicy [[-Identity] <String>]
 [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

### Filter

```
Get-CsOnlineAudioConferencingRoutingPolicy [-Filter <String>]
 [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Teams meeting dial-out calls are initiated from within a meeting in your organization to PSTN numbers, including call-me-at calls and calls to bring new participants to a meeting.

To enable Teams meeting dial-out routing through Direct Routing to on-network users, you need to create and assign an Audio Conferencing routing policy called "OnlineAudioConferencingRoutingPolicy."

The OnlineAudioConferencingRoutingPolicy policy is equivalent to the CsOnlineVoiceRoutingPolicy for 1:1 PSTN calls via Direct Routing.

Audio Conferencing voice routing policies determine the available routes for calls from meeting dial-out based on the destination number. Audio Conferencing voice routing policies link to PSTN usages, determining routes for meeting dial-out calls by associated organizers.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Get-CsOnlineAudioConferencingRoutingPolicy
```

In Example 1, Get-CsOnlineAudioConferencingRoutingPolicy is called without any additional parameters; this returns a collection of all the audio conferencing routing policies configured for use in your organization.

### -------------------------- Example 2 --------------------------
```powershell
Get-CsOnlineAudioConferencingRoutingPolicy -Identity SalesPolicy
```

In Example 2, Get-CsOnlineAudioConferencingRoutingPolicy is used to return the per-user meeting policy that has an Identity SalesPolicy.
Because identities are unique, this command will never return more than one item.

## PARAMETERS

### -Identity
The identity of the Online Audio Conferencing Routing Policy.

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

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned. To return a collection of all the per-user policies, use this syntax: `-Filter "tag:*"`.

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
[New-CsOnlineAudioConferencingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/new-csonlineaudioconferencingroutingpolicy)

[Remove-CsOnlineAudioConferencingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/remove-csonlineaudioconferencingroutingpolicy)

[Grant-CsOnlineAudioConferencingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/grant-csonlineaudioconferencingroutingpolicy)

[Set-CsOnlineAudioConferencingRoutingPolicy](https://learn.microsoft.com/powershell/module/teams/set-csonlineaudioconferencingroutingpolicy)
