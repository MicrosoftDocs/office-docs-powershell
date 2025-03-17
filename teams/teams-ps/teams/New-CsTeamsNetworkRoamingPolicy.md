---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Module Name: MicrosoftTeams
online version: https://learn.microsoft.com/powershell/module/teams/new-csteamsnetworkroamingpolicy
applicable: Microsoft Teams
title: New-CsTeamsNetworkRoamingPolicy
author: TristanChen-msft
ms.author: jiaych
ms.reviewer:
manager: mreddy
schema: 2.0.0
---

# New-CsTeamsNetworkRoamingPolicy

## SYNOPSIS

New-CsTeamsNetworkRoamingPolicy allows IT Admins to create policies for Network Roaming and Bandwidth Control experiences in Microsoft Teams.

## SYNTAX

```
New-CsTeamsNetworkRoamingPolicy [-Tenant <System.Guid>] [-Identity <XdsIdentity>] [-AllowIPVideo <Boolean>] [-MediaBitRateKb <Integer>] [-Description <String>] [<CommonParameters>]
```

## DESCRIPTION
Creates new Teams Network Roaming Policies configured for use in your organization.

The TeamsNetworkRoamingPolicy cmdlets enable administrators to provide specific settings from the TeamsMeetingPolicy to be rendered dynamically based upon the location of the Teams client. The TeamsNetworkRoamingPolicy cannot be granted to a user but instead can be assigned to a network site.  The settings from the TeamsMeetingPolicy included are AllowIPVideo and MediaBitRateKb. When a Teams client is connected to a network site where a CsTeamRoamingPolicy is assigned, these two settings from the TeamsRoamingPolicy will be used instead of the settings from the TeamsMeetingPolicy.

More on the impact of bit rate setting on bandwidth can be found [here](https://learn.microsoft.com/microsoftteams/prepare-network).

To enable the network roaming policy for users who are not Enterprise Voice enabled, you must also enable the AllowNetworkConfigurationSettingsLookup setting in TeamsMeetingPolicy. This setting is off by default. See Set-TeamsMeetingPolicy for more information on how to enable AllowNetworkConfigurationSettingsLookup for users who are not Enterprise Voice enabled.

## EXAMPLES

### Example 1
```powershell
PS C:\> New-CsTeamsNetworkRoamingPolicy -Identity "RedmondRoaming" -AllowIPVideo $true -MediaBitRateKb 2000 -Description "Redmond campus roaming policy"
```

The command shown in  Example 1 creates a new teams network roaming policy with Identity "RedmondRoaming" with IP Video feature enabled, and the maximum media bit rate is capped at 2000 Kbps.

### Example 2
```powershell
PS C:\> New-CsTeamsNetworkRoamingPolicy -Identity "RemoteRoaming"
```

The command shown in  Example 2 creates a new teams network roaming policy with Identity "RemoteRoaming" with IP Video feature enabled, and the maximum media bit rate is capped at 50000 Kbps by default.

## PARAMETERS

### -Identity
Unique identifier of the policy to be created.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowIPVideo
Determines whether video is enabled in a user's meetings or calls.
Set this to TRUE to allow the user to share their video. Set this to FALSE to prohibit the user from sharing their video.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: True
Accept pipeline input: False
Accept wildcard characters: False
```

### -MediaBitRateKb
Determines the media bit rate for audio/video/app sharing transmissions in meetings.

```yaml
Type: Integer
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: 50000
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
Description of the new policy to be created.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
