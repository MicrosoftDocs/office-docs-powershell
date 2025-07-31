---
applicable: Microsoft Teams
author: TristanChen-msft
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: mreddy
Module Name: MicrosoftTeams
ms.author: jiaych
online version: https://learn.microsoft.com/powershell/module/teams/get-csteamsnetworkroamingpolicy
schema: 2.0.0
title: Get-CsTeamsNetworkRoamingPolicy
---

# Get-CsTeamsNetworkRoamingPolicy

## SYNOPSIS

Get-CsTeamsNetworkRoamingPolicy allows IT Admins to view policies for the Network Roaming and Bandwidth Control experiences in Microsoft Teams.

## SYNTAX

### Identity (Default)
```
Get-CsTeamsNetworkRoamingPolicy [-Identity <String>]
 [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

### Filter
```
Get-CsTeamsNetworkRoamingPolicy [-Filter <String>]
 [-MsftInternalProcessingMode <String>]
 [<CommonParameters>]
```

## DESCRIPTION
Returns information about the Teams Network Roaming Policies configured for use in your organization.

The TeamsNetworkRoamingPolicy cmdlets enable administrators to provide specific settings from the TeamsMeetingPolicy to be rendered dynamically based upon the location of the Teams client.  The TeamsNetworkRoamingPolicy cannot be granted to a user but instead can be assigned to a network site.  The settings from the TeamsMeetingPolicy included are AllowIPVideo and MediaBitRateKb. When a Teams client is connected to a network site where a CsTeamRoamingPolicy is assigned, these two settings from the TeamsRoamingPolicy will be used instead of the settings from the TeamsMeetingPolicy.

More on the impact of bit rate setting on bandwidth can be found [here](https://learn.microsoft.com/microsoftteams/prepare-network).

To enable the network roaming policy for users who are not Enterprise Voice enabled, you must also enable the AllowNetworkConfigurationSettingsLookup setting in TeamsMeetingPolicy. This setting is off by default. See Set-TeamsMeetingPolicy for more information on how to enable AllowNetworkConfigurationSettingsLookup for users who are not Enterprise Voice enabled.

## EXAMPLES

### Example 1
```
PS C:\> Get-CsTeamsNetworkRoamingPolicy
```

In Example 1, Get-CsTeamsNetworkRoamingPolicy is called without any additional parameters; this returns a collection of all the teams network roaming policies configured for use in your organization.

### Example 2
```
PS C:\> Get-CsTeamsNetworkRoamingPolicy -Identity OfficePolicy
```

In Example 2, Get-CsTeamsNetworkRoamingPolicy is used to return the network roaming policy that has an Identity OfficePolicy.
Because identities are unique, this command will never return more than one item.

## PARAMETERS

### -Filter
Enables you to use wildcard characters when indicating the policy (or policies) to be returned.

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
Unique identifier of the policy to be returned.
If this parameter is omitted, then all the Teams Network Roaming Policies configured for use in your organization will be returned.

```yaml
Type: String
Parameter Sets: Identity
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MsftInternalProcessingMode
Internal Microsoft use only.

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
