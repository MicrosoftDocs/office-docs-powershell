---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015
title: Get-CsNetworkConfiguration
schema: 2.0.0
---

# Get-CsNetworkConfiguration

## SYNOPSIS
Retrieves global settings for call admission control (CAC), Enhanced 9-1-1 (E9-1-1), and media bypass.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsNetworkConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsNetworkConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

###  (Default)
```
Get-CsNetworkConfiguration [[-Identity] <Object>] [-BypassDualWrite <Object>] [-Filter <Object>] [-LocalStore]
 [-Tenant <Object>] [-AsJob] [<CommonParameters>]
```

## DESCRIPTION
The network configuration object contains all the global settings for media bypass and for an entire CAC configuration within a Skype for Business Server deployment, including whether or not that configuration has been enabled.
You can use this cmdlet to retrieve these configurations and settings.
However, other than EnableBandwidthPolicyCheck and MediaBypassSettings, it's recommended that you use cmdlets specific to the object type for retrieving the CAC configuration settings.
For example, to retrieve the network regions, it will usually be easier to call the Get-CsNetworkRegion cmdlet than to call the Get-CsNetworkConfiguration cmdlet and then retrieve the NetworkRegions property of that configuration.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsNetworkConfiguration
```

This example retrieves the network configuration settings.
These settings are defined only at the global scope, so only one item will be returned.

### -------------------------- Example 2 --------------------------
```
(Get-CsNetworkConfiguration).MediaBypassSettings
```

Only one set of media bypass settings exists, which is applied globally.
These settings are stored as part of the overall network configuration.
This command first retrieves that configuration by calling the Get-CsNetworkConfiguration cmdlet, and then retrieves the MediaBypassSettings property of the configuration.


## PARAMETERS

### -Identity
This will always be Global.

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

### -Filter
Because there will only ever be one network configuration, you do not need this parameter for this cmdlet.

```yaml
Type: String
Parameter Sets: Filter, (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Online, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the network configuration from the local replica of the Central Management store, rather than the Central Management store itself.

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

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkConfigurationSettings


## NOTES


## RELATED LINKS

[Remove-CsNetworkConfiguration](Remove-CsNetworkConfiguration.md)

[Set-CsNetworkConfiguration](Set-CsNetworkConfiguration.md)

[Get-CsNetworkSite](Get-CsNetworkSite.md)

[Get-CsNetworkRegionLink](Get-CsNetworkRegionLink.md)

[Get-CsNetworkInterSitePolicy](Get-CsNetworkInterSitePolicy.md)

[Get-CsNetworkInterRegionRoute](Get-CsNetworkInterRegionRoute.md)

[Get-CsNetworkRegion](Get-CsNetworkRegion.md)

[Get-CsNetworkSubnet](Get-CsNetworkSubnet.md)

[Get-CsNetworkBandwidthPolicyProfile](Get-CsNetworkBandwidthPolicyProfile.md)
