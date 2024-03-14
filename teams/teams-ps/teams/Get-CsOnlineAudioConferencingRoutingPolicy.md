---
external help file: MicrosoftTeams-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/get-csonlineaudioconferencingroutingpolicy
Module Name: MicrosoftTeams
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
Gets the audio conferencing routing policy settings in your organization. Make sure you are following the guidance here to set up properly: [Manage On-network Conferencing for Audio Conferencing](https://learn.microsoft.com/en-us/microsoftteams/audio-conferencing-on-network).

## SYNTAX

### Identity (Default)
```
Get-CsOnlineAudioConferencingRoutingPolicy [[-Identity] <String>] [<CommonParameters>]
```

### Filter
```
Get-CsOnlineAudioConferencingRoutingPolicy [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
Gets the audio conferencing routing policy settings in your organization.

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

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.

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
Unique identifier of the policy to be returned. To refer to the global policy, use this syntax: -Identity global. To refer to a per-user policy, use syntax similar to this: -Identity SalesDepartmentPolicy.
If this parameter is omitted, then all the meeting policies configured for use in your organization will be returned.

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

### System.Object
## NOTES

## RELATED LINKS
