---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsNetworkSite
schema: 2.0.0
---

# Set-CsNetworkSite

## SYNOPSIS
Modifies an existing network site that has been defined for call admission control (CAC) or Enhanced 9-1-1 (E9-1-1).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsNetworkSite [[-Identity] <XdsGlobalRelativeIdentity>] [-BWPolicyProfileID <String>] [-BypassID <String>]
 [-Description <String>] [-LocationPolicy <String>] [-NetworkRegionID <String>] [-Force] [-WhatIf] [-Confirm]
 [-EnableLocationBasedRouting <Boolean>] [-VoiceRoutingPolicy <String>] [<CommonParameters>]
```

### Instance
```
Set-CsNetworkSite [-Instance <PSObject>] [-BWPolicyProfileID <String>] [-BypassID <String>]
 [-Description <String>] [-LocationPolicy <String>] [-NetworkRegionID <String>] [-Force] [-WhatIf] [-Confirm]
 [-EnableLocationBasedRouting <Boolean>] [-VoiceRoutingPolicy <String>] [<CommonParameters>]
```

## DESCRIPTION
Network sites are the offices or locations configured within each region of a CAC or E9-1-1 deployment.
This cmdlet modifies the settings on an existing site.
This can include such things as the region with which the site is associated, the description of the site, and the associated bandwidth policy profile.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsNetworkSite -Identity Vancouver -NetworkRegionID Canada
```

In this example the network site named Vancouver is modified.
The name of the site being modified is specified as the value for the Identity parameter.
The Vancouver site is being moved to a new region, which requires that the NetworkRegionID parameter be changed, in this case to the region named Canada.
Because a NetworkRegionID has been supplied but no value has been specified for BypassID, a BypassID value will be automatically generated.
Any previously-existing bypass ID will be overwritten.


### -------------------------- Example 2 --------------------------
```
Set-CsNetworkSite -Identity Vancouver - BWPolicyProfileID LowBWLimits
```

Example 2 simply modifies the bandwidth policy profile associated with the Vancouver site.
The site name is specified as the value for the Identity parameter.
Then we specify a value for the BWPolicyProfileID parameter: LowBWLimits.
The policies associated with that profile will be used for this site.


## PARAMETERS

### -Identity
The unique identifier of the network site you want to modify.
Sites are created only at the global scope, so you do not need to specify a scope.
Instead, you need to specify only the network site ID.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
A reference to a network site object (an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.DisplayNetworkSiteType).
This object can be retrieved by calling the `Get-CsNetworkSite` cmdlet.


```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -BWPolicyProfileID
The Identity of the bandwidth policy profile that will define the limitations for this site.
You can retrieve a list of available profiles by calling the `Get-CsNetworkBandwidthPolicyProfile` cmdlet.

If you specify a value for this parameter, you must also specify a value for the NetworkRegionID parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassID
A globally unique identifier (GUID).
This GUID is used to map network sites to media bypass settings within a CAC or E9-1-1 network configuration.
(Use this BypassID value in the call to the `New-CsNetworkMediaBypassConfiguration` cmdlet.)

If you specify a value for this parameter you must also specify a value for the NetworkRegionID parameter.
If you do not specify a value for this parameter but you do specify a NetworkRegionID, a BypassID will be automatically generated.

If you explicitly specify a value, it must be in the format of a GUID (for example, 3b24a047-dce6-48b2-9f20-9fbff17ed62a).
We recommend that you supply a value for NetworkRegionID and allow the BypassID value to be auto-generated.
If you manually enter a value, you will receive a confirmation prompt to verify that you don't want the value to be auto-generated.


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
A string that describes the site.
This parameter can be used to provide a more descriptive explanation of what the site is for or where it is than can be expressed by the Identity alone.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationPolicy
The name of the location policy associated with this site.
The location policy assigns specific E9-1-1 settings to the site.
To retrieve a list of location policies, call the `Get-CsLocationPolicy` cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkRegionID
The Identity of the network region that this site is associated with.
This parameter must contain a value if you want to provide a BypassID (either through auto-generation or manually), or if the EnableBandwidthPolicyCheck property of the network configuration is True.
You can retrieve the network configuration settings by calling the `Get-CsNetworkConfiguration` cmdlet.

If a BypassID exists on this site already and you don't specify a value for the BypassID parameter, the existing BypassID will be overwritten by an auto-generated BypassID.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableLocationBasedRouting
When set to True, voice routing will be managed by taking into account the location of both the user placing the call and the user receiving the call.
The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoiceRoutingPolicy
Per-user voice routing policy to be assigned to the site.
For example:

`-VoiceRoutingPolicy "RedmondVoiceRouting"`

Note that you must specify a per-user policy; global and/or site policies cannot be assigned to a site using the VoiceRoutingPolicy parameter.

This parameter was introduced in the February, 2013 release of Lync Server 2013.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.DisplayNetworkSiteType object.
Accepts pipelined input of network site objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.DisplayNetworkSiteType.

## NOTES

## RELATED LINKS

[New-CsNetworkSite](New-CsNetworkSite.md)

[Remove-CsNetworkSite](Remove-CsNetworkSite.md)

[Get-CsNetworkSite](Get-CsNetworkSite.md)

[Get-CsNetworkBandwidthPolicyProfile](Get-CsNetworkBandwidthPolicyProfile.md)

[New-CsNetworkMediaBypassConfiguration](New-CsNetworkMediaBypassConfiguration.md)

[Get-CsLocationPolicy](Get-CsLocationPolicy.md)

[Get-CsNetworkConfiguration](Get-CsNetworkConfiguration.md)
