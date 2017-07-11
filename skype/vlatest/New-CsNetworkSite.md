---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsNetworkSite

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Creates a new network site for use with call admission control (CAC) or Enhanced 9-1-1 (E9-1-1).

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Creates a new network site for use with call admission control (CAC) or Enhanced 9-1-1 (E9-1-1).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
New-CsNetworkSite [-Identity] <XdsGlobalRelativeIdentity> [-BWPolicyProfileID <String>] [-BypassID <String>]
 [-Description <String>] [-LocationPolicy <String>] -NetworkRegionID <String> [-Force] [-InMemory] [-WhatIf]
 [-Confirm] [-EnableLocationBasedRouting <Boolean>] [-VoiceRoutingPolicy <String>] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsNetworkSite -NetworkSiteID <String> [-BWPolicyProfileID <String>] [-BypassID <String>]
 [-Description <String>] [-LocationPolicy <String>] -NetworkRegionID <String> [-Force] [-InMemory] [-WhatIf]
 [-Confirm] [-EnableLocationBasedRouting <Boolean>] [-VoiceRoutingPolicy <String>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Network sites are the offices or locations configured within each region of a CAC or E9-1-1 deployment.
This cmdlet creates a new site and optionally associates it with a region.
For example, a network region for North America might be associated with networks sites such as Chicago, Redmond, and Vancouver.
A CAC network site must be created for every site within an organization, even if that site has no bandwidth limitations.

The only parameter required to create a network site is the Identity.
However, this simply creates an empty site with no associations to regions and will therefore be of no use until properties such as NetworkRegionID are supplied with values.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsNetworkSite cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsNetworkSite"}

**Below Content Applies To:** Lync Server 2013

Network sites are the offices or locations configured within each region of a CAC or E9-1-1 deployment.
This cmdlet creates a new site and optionally associates it with a region.
For example, a network region for North America might be associated with networks sites such as Chicago, Redmond, and Vancouver.
A CAC network site must be created for every site within an organization, even if that site has no bandwidth limitations.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsNetworkSite cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsNetworkSite"}

**Below Content Applies To:** Skype for Business Server 2015

Network sites are the offices or locations configured within each region of a CAC or E9-1-1 deployment.
This cmdlet creates a new site and optionally associates it with a region.
For example, a network region for North America might be associated with networks sites such as Chicago, Redmond, and Vancouver.
A CAC network site must be created for every site within an organization, even if that site has no bandwidth limitations.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
New-CsNetworkSite -Identity Vancouver -NetworkRegionID NorthAmerica
```

In this example a new network site named Vancouver is created.
The site name is specified as the value for the Identity parameter.
A value is also specified for the NetworkRegionID parameter, which associates the site with the region (in this example NorthAmerica).
A BypassID value will be automatically generated.
Manually setting a value for BypassID is not recommended.

Notice that the command in this example did not include the BWPolicyProfileID parameter.
Unless (or until) a value is added to this site later using Set-CsNetworkSite, it will have no bandwidth limitations for media connections.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In this example a new network site named Vancouver is created.
The site name is specified as the value for the Identity parameter.
A value is also specified for the NetworkRegionID parameter, which associates the site with the region (in this example NorthAmerica).
A BypassID value will be automatically generated.
Manually setting a value for BypassID is not recommended.

Notice that the command in this example did not include the BWPolicyProfileID parameter.
Unless (or until) a value is added to this site later using Set-CsNetworkSite, it will have no bandwidth limitations for media connections.

New-CsNetworkSite -Identity Vancouver -NetworkRegionID NorthAmerica

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In this example a new network site named Vancouver is created.
The site name is specified as the value for the Identity parameter.
A value is also specified for the NetworkRegionID parameter, which associates the site with the region (in this example NorthAmerica).
A BypassID value will be automatically generated.
Manually setting a value for BypassID is not recommended.

Notice that the command in this example did not include the BWPolicyProfileID parameter.
Unless (or until) a value is added to this site later using the Set-CsNetworkSite cmdlet, it will have no bandwidth limitations for media connections.

New-CsNetworkSite -Identity Vancouver -NetworkRegionID NorthAmerica

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
New-CsNetworkSite -Identity Paris -NetworkRegionID EMEA -BWPolicyProfileID LowBWLimits
```

In Example 2 we create a new network site named Paris.
The site name is specified as the value for the Identity parameter.
As in Example 1 we also specify a value for the NetworkRegionID, this time the region EMEA.
Once again we are following the recommended path by allowing the cmdlet to generate the BypassID.
Unlike Example 1, this example also specifies a value for the BWPolicyProfileID parameter: LowBWLimits.
The policies associated with that profile will be used for this site.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2 we create a new network site named Paris.
The site name is specified as the value for the Identity parameter.
As in Example 1 we also specify a value for the NetworkRegionID, this time the region EMEA.
Once again we are following the recommended path by allowing the cmdlet to generate the BypassID.
Unlike Example 1, this example also specifies a value for the BWPolicyProfileID parameter: LowBWLimits.
The policies associated with that profile will be used for this site.

New-CsNetworkSite -Identity Paris -NetworkRegionID EMEA -BWPolicyProfileID LowBWLimits

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2 we create a new network site named Paris.
The site name is specified as the value for the Identity parameter.
As in Example 1 we also specify a value for the NetworkRegionID, this time the region EMEA.
Once again we are following the recommended path by allowing the cmdlet to generate the BypassID.
Unlike Example 1, this example also specifies a value for the BWPolicyProfileID parameter: LowBWLimits.
The policies associated with that profile will be used for this site.

New-CsNetworkSite -Identity Paris -NetworkRegionID EMEA -BWPolicyProfileID LowBWLimits

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010

A unique identifier for the newly created network site.
Sites are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is unique among all network sites within the Microsoft Lync Server 2010 deployment.



**Below Content Applies To:** Lync Server 2013

A unique identifier for the newly created network site.
Sites are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is unique among all network sites within the Lync Server deployment.



**Below Content Applies To:** Skype for Business Server 2015

A unique identifier for the newly created network site.
Sites are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is unique among all network sites within the Skype for Business Server 2015 deployment.



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkSiteID
This value is the same as the Identity.
You cannot specify both an Identity and a NetworkSiteID; a value entered for one will be automatically used for both.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BWPolicyProfileID
The Identity of the bandwidth policy profile that will define the bandwidth limitations for this site.
You can retrieve a list of available profiles by calling the Get-CsNetworkBandwidthPolicyProfile cmdlet.

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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

A globally unique identifier (GUID).
This GUID is used to map network sites to media bypass settings within a CAC or E9-1-1 network configuration.
(Use this BypassID value in the call to New-CsNetworkMediaBypassConfiguration.)

If you do not specify a value for this parameter, a value will be automatically generated, but only if you supply a value for the NetworkRegionID parameter.
If you do not supply a NetworkRegionID parameter, no BypassID will be generated.
You also cannot explicitly supply a value for the BypassID parameter without also supplying a value for the NetworkRegionID parameter.

If you explicitly specify a value, it must be in the format of a GUID (for example, 3b24a047-dce6-48b2-9f20-9fbff17ed62a).
Auto-generation is recommended.
If you manually enter a value, you will receive a confirmation prompt to verify that you don't want to auto-generate the value.



**Below Content Applies To:** Skype for Business Server 2015

A globally unique identifier (GUID).
This GUID is used to map network sites to media bypass settings within a CAC or E9-1-1 network configuration.
(Use this BypassID value in the call to the New-CsNetworkMediaBypassConfiguration cmdlet.)

If you do not specify a value for this parameter, a value will be automatically generated, but only if you supply a value for the NetworkRegionID parameter.
If you do not supply a NetworkRegionID parameter, no BypassID will be generated.
You also cannot explicitly supply a value for the BypassID parameter without also supplying a value for the NetworkRegionID parameter.

If you explicitly specify a value, it must be in the format of a GUID (for example, 3b24a047-dce6-48b2-9f20-9fbff17ed62a).
Auto-generation is recommended.
If you manually enter a value, you will receive a confirmation prompt to verify that you don't want to auto-generate the value.



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
You can retrieve a list of location policies by calling the Get-CsLocationPolicy cmdlet.

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
You can retrieve the network configuration settings by calling the Get-CsNetworkConfiguration cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
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

### -InMemory
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.



**Below Content Applies To:** Skype for Business Server 2015

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set-\<cmdlet\>.



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

-VoiceRoutingPolicy "RedmondVoiceRouting"

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
None.

## OUTPUTS

###  
Create an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.DisplayNetworkSiteType.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/55134dd4-eb2b-483b-8b3d-e9e42ac1acc2(OCS.14).aspx)

[Remove-CsNetworkSite]()

[Set-CsNetworkSite]()

[Get-CsNetworkSite]()

[Get-CsNetworkBandwidthPolicyProfile]()

[New-CsNetworkMediaBypassConfiguration]()

[Get-CsLocationPolicy]()

[Get-CsNetworkConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/55134dd4-eb2b-483b-8b3d-e9e42ac1acc2(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/55134dd4-eb2b-483b-8b3d-e9e42ac1acc2(OCS.16).aspx)

