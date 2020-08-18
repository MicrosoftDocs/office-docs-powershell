---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://docs.microsoft.com/powershell/module/skype/new-cstenantnetworksite
applicable: Skype for Business Online
title: New-CsTenantNetworkSite
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# New-CsTenantNetworkSite

## SYNOPSIS
As an Admin, you can use the Windows PowerShell command, New-CsTenantNetworkSite to define network sites. Network sites are defined as a collection of IP subnets. Each network site must be associated with a network region. Tenant network site is used for Location Based Routing.

## SYNTAX

### Identity (Default)
```
New-CsTenantNetworkSite [-Tenant <System.Guid>] [-Description <String>] [-NetworkRegionID <String>]
 [-LocationPolicy <String>] [-EnableLocationBasedRouting <Boolean>] [-EmergencyCallRoutingPolicy <String>] [-EmergencyCallingPolicy <String>] [-OnlineVoiceRoutingPolicy <String>]
 [-SiteAddress <String>] [-Identity] <XdsGlobalRelativeIdentity> [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsTenantNetworkSite [-Tenant <System.Guid>] -NetworkSiteID <String> [-Description <String>]
 [-NetworkRegionID <String>] [-LocationPolicy <String>] [-EnableLocationBasedRouting <Boolean>]
 [-EmergencyCallRoutingPolicy <Object>] [-EmergencyCallingPolicy <Object>] [-OnlineVoiceRoutingPolicy <String>] [-SiteAddress <String>] [-InMemory] [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
A network site represents a location where your organization has a physical venue, such as offices, a set of buildings, or a campus. Network sites are defined as a collection of IP subnets. Each network site must be associated with a network region.

A best practice for Location Based Routing (LBR) is to create a separate site for each location which has unique PSTN connectivity. Sites may be created as LBR or non-LBR enabled. A non-LBR enabled site may be created to allow LBR enabled users to make PSTN calls when they roam to that site. Note that network sites may also be used for emergency calling enablement and configuration.

## EXAMPLES

###-------------------------- Example 1 --------------------------
```powershell
PS C:\> New-CsTenantNetworkSite -NetworkSiteID "MicrosoftSite1" -NetworkRegionID "RegionRedmond"
```

The command shown in Example 1 created the network site 'MicrosoftSite1' with no description. Identity will be set identical with NetworkSiteID.

The network region 'RegionRedmond' is created beforehand and 'MicrosoftSite1' will be associated with 'RegionRedmond'.

NetworkSites can exist without all parameters excepts NetworkSiteID. NetworkRegionID can be left blank.

###-------------------------- Example 2 --------------------------
```powershell
PS C:\> New-CsTenantNetworkSite -NetworkSiteID "site2" -Description "site 2" -NetworkRegionID "RedmondRegion" -LocationPolicy "TestLocationPolicy" -EnableLocationBasedRouting $true -SiteAddress "One Microsoft way" -OnlineVoiceRoutingPolicy "OVRP1"
```

The command shown in Example 2 created the network site 'site2' with description 'site 2'. This site is enabled for LBR, and associates with network region 'RedmondRegion', with location policy 'TestLocationPolicy', and with OnlineVoiceRoutingPolicy "OVRP1"

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

### -Description
Provide a description of the network site to identify purpose of creating it.

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

### -EnableLocationBasedRouting
This parameter determines whether the current site is enabled for location based routing.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmergencyCallRoutingPolicy
This parameter is used to assign a custom emergency call routing policy to a network site. For more information see [Assign a custom emergency call routing policy to a network site](https://docs.microsoft.com/microsoftteams/manage-emergency-call-routing-policies#assign-a-custom-emergency-call-routing-policy-to-a-network-site).

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

### -EmergencyCallingPolicy
This parameter is used to assign a custom emergency calling policy to a network site. For more information see [Assign a custom emergency calling policy to a network site](https://docs.microsoft.com/microsoftteams/manage-emergency-calling-policies#assign-a-custom-emergency-calling-policy-to-a-network-site).

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

### -Force
The Force switch specifies whether to suppress warning and confirmation messages. It can be useful in scripting to suppress interactive prompts. If the Force switch isn't provided in the command, you're prompted for administrative input if required.

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
Unique identifier for the network site to be created.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
PARAMVALUE: SwitchParameter

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

### -LocationPolicy
LocationPolicy is the identifier for the location policy which the current network site is associating to.

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

### -NetworkRegionID
NetworkRegionID is the identifier for the network region which the current network site is associating to.

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

### -NetworkSiteID
The name of the network site. This must be a string that is unique. You cannot specify an NetworkSiteID and an Identity at the same time.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnlineVoiceRoutingPolicy
This parameter determines the unique name of existing OnlineVoiceRoutingPolicy that the current network site associates to.

OnlineVoiceRoutingPolicy is used to associate a user with the appropriate PSTN usages.

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

### -SiteAddress
The address of current network site.

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

### -Tenant
Globally unique identifier (GUID) of the tenant account whose network sites are being created. For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return your tenant ID by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID

```yaml
Type: System.Guid
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object
## NOTES

## RELATED LINKS
