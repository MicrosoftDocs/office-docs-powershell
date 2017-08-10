---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsNetworkConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Modifies the settings for a network configuration.
This cmdlet will most often be used to enable or disable call admission control (CAC).

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Modifies the settings for a network configuration.
This cmdlet will most often be used to enable or disable call admission control (CAC).
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Online

Set-CsNetworkConfiguration \[\[-Identity\] \<XdsIdentity\>\] \[-Tenant \<guid\>\] \[-MediaBypassSettings \<MediaBypassSettingsType\>\] \[-BWPolicyProfiles \<pslistmodifier\>\] \[-NetworkRegions \<pslistmodifier\>\] \[-NetworkRegionLinks \<pslistmodifier\>\] \[-InterNetworkRegionRoutes \<pslistmodifier\>\] \[-NetworkSites \<pslistmodifier\>\] \[-InterNetworkSitePolicies \<pslistmodifier\>\] \[-Subnets \<pslistmodifier\>\] \[-EnableBandwidthPolicyCheck \<bool\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]

Set-CsNetworkConfiguration \[-Tenant \<guid\>\] \[-MediaBypassSettings \<MediaBypassSettingsType\>\] \[-BWPolicyProfiles \<pslistmodifier\>\] \[-NetworkRegions \<pslistmodifier\>\] \[-NetworkRegionLinks \<pslistmodifier\>\] \[-InterNetworkRegionRoutes \<pslistmodifier\>\] \[-NetworkSites \<pslistmodifier\>\] \[-InterNetworkSitePolicies \<pslistmodifier\>\] \[-Subnets \<pslistmodifier\>\] \[-EnableBandwidthPolicyCheck \<bool\>\] \[-Instance \<psobject\>\] \[-BypassDualWrite \<bool\>\] \[-Force\] \[-WhatIf\] \[-Confirm\] \[\<CommonParameters\>\]



## SYNTAX

### Identity
```
Set-CsNetworkConfiguration [[-Identity] <XdsIdentity>] [-BWPolicyProfiles <PSListModifier>]
 [-EnableBandwidthPolicyCheck <Boolean>] [-InterNetworkRegionRoutes <PSListModifier>]
 [-InterNetworkSitePolicies <PSListModifier>] [-MediaBypassSettings <MediaBypassSettingsType>]
 [-NetworkRegionLinks <PSListModifier>] [-NetworkRegions <PSListModifier>] [-NetworkSites <PSListModifier>]
 [-Subnets <PSListModifier>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsNetworkConfiguration [-Instance <PSObject>] [-BWPolicyProfiles <PSListModifier>]
 [-EnableBandwidthPolicyCheck <Boolean>] [-InterNetworkRegionRoutes <PSListModifier>]
 [-InterNetworkSitePolicies <PSListModifier>] [-MediaBypassSettings <MediaBypassSettingsType>]
 [-NetworkRegionLinks <PSListModifier>] [-NetworkRegions <PSListModifier>] [-NetworkSites <PSListModifier>]
 [-Subnets <PSListModifier>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

###  (Default)
```
Set-CsNetworkConfiguration [[-Identity] <Object>] [-BWPolicyProfiles <Object>] [-BypassDualWrite <Object>]
 [-Confirm] [-EnableBandwidthPolicyCheck <Object>] [-Force] [-Instance <Object>]
 [-InterNetworkRegionRoutes <Object>] [-InterNetworkSitePolicies <Object>] [-MediaBypassSettings <Object>]
 [-NetworkRegionLinks <Object>] [-NetworkRegions <Object>] [-NetworkSites <Object>] [-Subnets <Object>]
 [-Tenant <Object>] [-WhatIf] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

The network configuration object contains all the settings for an entire CAC configuration within a Microsoft Lync Server 2010 deployment, plus media bypass settings.
You can use this cmdlet to modify any part of the CAC configuration, and you must use it if you need to change media bypass settings.
However, it's recommended that you use cmdlets specific to the object type when modifying most of the CAC configuration settings.
For example, to work with network regions, use the cmdlets ending with the noun CsNetworkRegion rather than manipulating the NetworkRegions parameter of this cmdlet.

The primary use of this cmdlet is to enable (and disable) CAC and apply media bypass settings.
After you've set up the various components required for your configuration (such as regions, sites, and subnets), you must enable the configuration before it will work.
To do this, simply set the EnableBandwidthPolicyCheck parameter to True.
Note that running this cmdlet with EnableBandwidthPolicyCheck set to True doesn't immediately enable CAC.
Before it can be enabled, a series of validation checks are made to ensure the setup is configured properly.
Any errors or discrepancies in the setup will prompt with warnings that ask if you want to continue to enable CAC even though there is a problem.
If you choose to continue (by pressing Enter or Y), the validation will continue and will prompt you again if another issue is discovered.

If you run through the entire validation, choosing to continue at each warning, EnableBandwidthPolicyCheck will be set to True and CAC will be enabled, but until the issues are resolved it probably won't work as expected.
If at any point in the validation you choose to stop validation (by typing N at a warning prompt), validation will end and EnableBandwidthPolicyCheck will remain set to False (the default).

If EnableBandwidthPolicyCheck is already set to True, you can call Set-CsNetworkConfiguration and pass a value of True to the parameter EnableBandwidthPolicyCheck to run the validation without modifying any settings.
In addition, when EnableBandwidthPolicyCheck is True, any changes you attempt to make by calling Set-CsNetworkConfiguration will again cause the validation check to run.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsNetworkConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsNetworkConfiguration"}

**Below Content Applies To:** Lync Server 2013

The network configuration object contains all the settings for an entire CAC configuration within a Lync Server deployment, plus media bypass settings.
You can use this cmdlet to modify any part of the CAC configuration, and you must use it if you need to change media bypass settings.
However, it's recommended that you use cmdlets specific to the object type when modifying most of the CAC configuration settings.
For example, to work with network regions, use the cmdlets ending with the noun CsNetworkRegion rather than manipulating the NetworkRegions parameter of this cmdlet.

The primary use of this cmdlet is to enable (and disable) CAC and apply media bypass settings.
After you've set up the various components required for your configuration (such as regions, sites, and subnets), you must enable the configuration before it will work.
To do this, simply set the EnableBandwidthPolicyCheck parameter to True.
Note that running this cmdlet with EnableBandwidthPolicyCheck set to True doesn't immediately enable CAC.
Before it can be enabled, a series of validation checks are made to ensure the setup is configured properly.
Any errors or discrepancies in the setup will prompt with warnings that ask if you want to continue to enable CAC even though there is a problem.
If you choose to continue (by pressing Enter or Y), the validation will continue and will prompt you again if another issue is discovered.

If you run through the entire validation, choosing to continue at each warning, EnableBandwidthPolicyCheck will be set to True and CAC will be enabled, but until the issues are resolved it probably won't work as expected.
If at any point in the validation you choose to stop validation (by typing N at a warning prompt), validation will end and EnableBandwidthPolicyCheck will remain set to False (the default).

If EnableBandwidthPolicyCheck is already set to True, you can call Set-CsNetworkConfiguration and pass a value of True to the parameter EnableBandwidthPolicyCheck to run the validation without modifying any settings.
In addition, when EnableBandwidthPolicyCheck is True, any changes you attempt to make by calling Set-CsNetworkConfiguration will again cause the validation check to run.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsNetworkConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsNetworkConfiguration"}

**Below Content Applies To:** Skype for Business Online

{{Fill in the Description}}

**Below Content Applies To:** Skype for Business Server 2015

The network configuration object contains all the settings for an entire CAC configuration within a Skype for Business Server 2015 deployment, plus media bypass settings.
You can use this cmdlet to modify any part of the CAC configuration, and you must use it if you need to change media bypass settings.
However, it's recommended that you use cmdlets specific to the object type when modifying most of the CAC configuration settings.
For example, to work with network regions, use the cmdlets ending with the noun CsNetworkRegion rather than manipulating the NetworkRegions parameter of this cmdlet.

The primary use of this cmdlet is to enable (and disable) CAC and apply media bypass settings.
After you've set up the various components required for your configuration (such as regions, sites, and subnets), you must enable the configuration before it will work.
To do this, simply set the EnableBandwidthPolicyCheck parameter to True.
Note that running this cmdlet with EnableBandwidthPolicyCheck set to True doesn't immediately enable CAC.
Before it can be enabled, a series of validation checks are made to ensure the setup is configured properly.
Any errors or discrepancies in the setup will prompt with warnings that ask if you want to continue to enable CAC even though there is a problem.
If you choose to continue (by pressing Enter or Y), the validation will continue and will prompt you again if another issue is discovered.

If you run through the entire validation, choosing to continue at each warning, EnableBandwidthPolicyCheck will be set to True and CAC will be enabled, but until the issues are resolved it probably won't work as expected.
If at any point in the validation you choose to stop validation (by typing N at a warning prompt), validation will end and EnableBandwidthPolicyCheck will remain set to False (the default).

If EnableBandwidthPolicyCheck is already set to True, you can call the Set-CsNetworkConfiguration cmdlet and pass a value of True to the parameter EnableBandwidthPolicyCheck to run the validation without modifying any settings.
In addition, when EnableBandwidthPolicyCheck is True, any changes you attempt to make by calling the Set-CsNetworkConfiguration cmdlet will again cause the validation check to run.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Set-CsNetworkConfiguration -EnableBandwidthPolicyCheck $True
```

The command in this example will run a validation check against the entire CAC configuration, and then (depending on your responses to any warning prompts that are returned) will enable CAC.
If CAC is already enabled (in other words, if the EnableBandwidthPolicyCheck property is True) and you run this command, it will simply run the validation check.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command in this example will run a validation check against the entire CAC configuration, and then (depending on your responses to any warning prompts that are returned) will enable CAC.
If CAC is already enabled (in other words, if the EnableBandwidthPolicyCheck property is True) and you run this command, it will simply run the validation check.

Set-CsNetworkConfiguration -EnableBandwidthPolicyCheck $True

### Example 1 (Skype for Business Online)
```
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command in this example will run a validation check against the entire CAC configuration, and then (depending on your responses to any warning prompts that are returned) will enable CAC.
If CAC is already enabled (in other words, if the EnableBandwidthPolicyCheck property is True) and you run this command, it will simply run the validation check.

Set-CsNetworkConfiguration -EnableBandwidthPolicyCheck $True

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

This value will always be Global.



**Below Content Applies To:** Skype for Business Online

{{Fill Identity Description}}



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A reference to a network configuration object.
This object must be of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkConfigurationSettings, which can be retrieved by calling the Get-CsNetworkConfiguration cmdlet.



**Below Content Applies To:** Skype for Business Online

{{Fill Instance Description}}



```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: PSObject
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -BWPolicyProfiles
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A collection of all the bandwidth policy profiles that can be assigned to sites, inter-site policies, and network region links.
Each bandwidth policy profile contains bandwidth limitations (overall limitations and session limitations) for audio and/or video connections.
A full list of bandwidth policy profiles can be retrieved by calling the Get-CsNetworkBandwidthPolicyProfile cmdlet.



**Below Content Applies To:** Skype for Business Online

{{Fill BWPolicyProfiles Description}}



```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableBandwidthPolicyCheck
**Below Content Applies To:** Lync Server 2010

Setting this parameter to True will run a validation check against the entire CAC configuration.
If all validation checks pass, or if you choose to ignore all warnings, CAC will be enabled.
If a validation check does not pass, you can choose to stop the validation and the value of EnableBandwidthPolicyCheck will not change.

Setting this value to False will disable CAC.

Default: False



**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Setting this parameter to True will run a validation check against the entire CAC configuration.
If all validation checks pass, or if you choose to ignore all warnings, CAC will be enabled.
If a validation check does not pass, you can choose to stop the validation and the value of EnableBandwidthPolicyCheck will not change.
You must have region routes defined between each pair of network regions before you running the validation check.

Setting this value to False will disable CAC.

Default: False



**Below Content Applies To:** Skype for Business Online

{{Fill EnableBandwidthPolicyCheck Description}}



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InterNetworkRegionRoutes
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A collection of all the network region routes defined within the CAC configuration.
You can retrieve all the members of this collection by calling the Get-CsNetworkInterRegionRoute cmdlet.



**Below Content Applies To:** Skype for Business Online

{{Fill InterNetworkRegionRoutes Description}}



```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InterNetworkSitePolicies
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A collection of network inter-site policies defined within the CAC configuration.
You can retrieve all the members of this collection by calling the Get-CsNetworkInterSitePolicy cmdlet.



**Below Content Applies To:** Skype for Business Online

{{Fill InterNetworkSitePolicies Description}}



```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MediaBypassSettings
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A reference to an object that defines the global media bypass settings for the CAC configuration.
Setting this value will overwrite all existing media bypass settings.
You obtain this object reference by calling the New-CsNetworkMediaBypassConfiguration cmdlet and assigning the new configuration settings to a variable.
Pass this variable to the MediaBypassSettings parameter to change the global media bypass settings.



**Below Content Applies To:** Skype for Business Online

{{Fill MediaBypassSettings Description}}



```yaml
Type: MediaBypassSettingsType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkRegionLinks
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A collection of network region links defined within the CAC configuration.
Each network region link defines a connection that exists between two regions and any bandwidth limitations that should be applied to connections between those regions.
You can retrieve all the members of this collection by calling the Get-CsNetworkRegionLink cmdlet.



**Below Content Applies To:** Skype for Business Online

{{Fill NetworkRegionLinks Description}}



```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkRegions
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A collection of network regions (each of which represents a hub or backbone within the network) defined within the CAC configuration.
You can retrieve all the members of this collection by calling the Get-CsNetworkRegion cmdlet.



**Below Content Applies To:** Skype for Business Online

{{Fill NetworkRegions Description}}



```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NetworkSites
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A collection of network sites (each of which represents an office or location within a region) defined within the CAC configuration.
You can retrieve all the members of this collection by calling the Get-CsNetworkSite cmdlet.



**Below Content Applies To:** Skype for Business Online

{{Fill NetworkSites Description}}



```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Subnets
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

A collection of network subnets (each of which associates an endpoint with a site) defined within the CAC configuration.
You can retrieve all the members of this collection by calling the Get-CsNetworkSubnet cmdlet.



**Below Content Applies To:** Skype for Business Online

{{Fill Subnets Description}}



```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

This parameter does not take a value.
If you include this parameter, any changes made to the configuration, including enabling the configuration, will take place with no warnings or validation checks.



**Below Content Applies To:** Skype for Business Online

{{Fill Force Description}}



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Describes what would happen if you executed the command without actually executing the command.



**Below Content Applies To:** Skype for Business Online

Shows what would happen if the cmdlet runs.
The cmdlet is not run.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
**Below Content Applies To:** Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Prompts you for confirmation before executing the command.



**Below Content Applies To:** Skype for Business Online

Prompts you for confirmation before running the cmdlet.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
{{Fill BypassDualWrite Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
{{Fill Tenant Description}}

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

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
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkConfigurationSettings object.
Accepts pipelined input of a network configuration object.

### System.Management.Automation.PSObject

## OUTPUTS

###  
Set-CsNetworkConfiguration does not return a value or object.
Instead, the cmdlet modifies instances of the Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkConfigurationSettings object.

### System.Object

###  
The Set-CsNetworkConfiguration cmdlet does not return a value or object.
Instead, the cmdlet modifies instances of the Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkConfigurationSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d54dc154-c092-4be9-8656-f7fec3fbd835(OCS.14).aspx)

[Remove-CsNetworkConfiguration]()

[Get-CsNetworkConfiguration]()

[Get-CsNetworkSite]()

[Get-CsNetworkRegionLink]()

[Get-CsNetworkInterSitePolicy]()

[Get-CsNetworkInterRegionRoute]()

[Get-CsNetworkRegion]()

[Get-CsNetworkSubnet]()

[Get-CsNetworkBandwidthPolicyProfile]()

[New-CsNetworkMediaBypassConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/d54dc154-c092-4be9-8656-f7fec3fbd835(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d54dc154-c092-4be9-8656-f7fec3fbd835(OCS.16).aspx)

