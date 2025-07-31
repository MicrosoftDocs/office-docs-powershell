---
applicable: Microsoft Teams
author: TristanChen-msft
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
Locale: en-US
manager: mreddy
Module Name: MicrosoftTeams
ms.author: jiaych
online version: https://learn.microsoft.com/powershell/module/teams/remove-csteamsnetworkroamingpolicy
schema: 2.0.0
title: Remove-CsTeamsNetworkRoamingPolicy
---

# Remove-CsTeamsNetworkRoamingPolicy

## SYNOPSIS

Remove-CsTeamsNetworkRoamingPolicy allows IT Admins to delete policies for Network Roaming and Bandwidth Control experiences in Microsoft Teams.

## SYNTAX

```
Remove-CsTeamsNetworkRoamingPolicy [[-Identity] <XdsIdentity>] [-Tenant <System.Guid>] [<CommonParameters>]
```

## DESCRIPTION
Deletes the Teams Network Roaming Policies configured for use in your organization.

The TeamsNetworkRoamingPolicy cmdlets enable administrators to provide specific settings from the TeamsMeetingPolicy to be rendered dynamically based upon the location of the Teams client.  The TeamsNetworkRoamingPolicy cannot be granted to a user but instead can be assigned to a network site.  The settings from the TeamsMeetingPolicy included are AllowIPVideo and MediaBitRateKb. When a Teams client is connected to a network site where a CsTeamRoamingPolicy is assigned, these two settings from the TeamsRoamingPolicy will be used instead of the settings from the TeamsMeetingPolicy.

More on the impact of bit rate setting on bandwidth can be found [here](https://learn.microsoft.com/microsoftteams/prepare-network).

## EXAMPLES

### Example 1
```
PS C:\> Remove-CsTeamsNetworkRoamingPolicy -Identity OfficePolicy
```

In Example 1, Remove-CsTeamsNetworkRoamingPolicy is used to delete the network roaming policy that has an Identity OfficePolicy.

## PARAMETERS

### -Identity
Unique identifier of the policy to be removed.

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

### -Tenant

```yaml
Type: Guid
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
