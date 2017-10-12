---
external help file: 
applicable: Skype for Business Server 2015
title: Remove-CsVideoInteropServerConfiguration
schema: 2.0.0
---

# Remove-CsVideoInteropServerConfiguration

## SYNOPSIS
Use the `Remove-CsVideoInteropServerConfiguration` cmdlet to remove an existing collection of Video Interop Server (VIS) configuration settings.
Video Interop Server configuration settings are scoped to appropriate Video Interop Server (VIS) instances and will govern the behavior of those instances.

## SYNTAX

```
Remove-CsVideoInteropServerConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Video Interop Server (VIS) enables you to incorporate 3rd party video teleconferencing systems (VTCs) into your Skype for Business infrastructure.
VIS is a Skype for Business service that runs on a standalone pool and cannot be co-located on an FE pool.

To enable the Video Interop Server (VIS) you must use Topology Builder to define at least one VIS instance.
Each VIS instance will typically be associated with one or more Video Gateways.
Video Gateways route traffic between internal and external video devices such as an internal Skype for Business endpoint receiving video from an external PBX supporting 3rd party video teleconferencing systems (VTCs).
The Video Gateway and a VIS use a Session Initiation Protocol (SIP) trunk to connect video calls between external VTCs and internal endpoints.

You can manage the Video Interop Server (VIS) by using VIS configuration settings and the CsVideoInteropServerConfiguration cmdlets.
These settings are used to enable or disable the enhanced video experience (in which a single video stream is converted to multiple streams in order to accommodate the needs of devices that use different frame rates or video resolutions).

By default, Skype for Business Server ships with a single, global collection of Video Interop Server configuration settings.
You can use the `New-CsVideoInteropServerConfiguration` cmdlet to create additional settings at the site or the service scope (for the VIS service only.) These custom settings can later be removed by using the `Remove-CsVideoInteropServerConfiguration` cmdlet.
This cmdlet can also be run against the global collection of VIS settings.
The global collection will not be removed, but all the properties in the global collection will be reset to their default values.
Skype for Business Server does not allow you to delete the global settings.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsVideoInteropServerConfiguration -Identity "site:Redmond"
```

This example deletes the VIS configuration settings assigned to the Redmond site.


### -------------------------- Example 2 --------------------------
```
Get-CsVideoInteropServerConfiguration -Filter "site:*" | Remove-CsVideoInteropServerConfiguration
```

This example deletes all the VIS settings that have been assigned to the site scope are deleted.
The command calls the `Get-CsVideoInteropServerConfiguration` and filters the configuration by using the Filter parameter value "site:*".
Those configuration objects are then piped to and deleted by, the `Remove-CsVideoInteropServerConfiguration` cmdlet.


### -------------------------- Example 3 --------------------------
```
Get-CsVideoInteropServerConfiguration | Where-Object {$_.EnableEnhancedVideoExperience -eq $True} | Remove-CsVideoInteropServerConfiguration
```

This example deletes all the VIS settings where the enhanced video experience has been enabled.
The command first calls `Get-CsVideoInteropServerConfiguration` to return a collection of all the VIS settings in use in the organization.
Those configuration objects then piped to the `Where-Object` cmdlet, which filters for VIS configuration objects in which EnableEnhancedVideoExperience property has been set to True ($True).
Those configuration objects are then piped to and deleted by the `Remove-CsVideoInteropServerConfiguration`.


## PARAMETERS

### -Identity
Unique identity assigned to the video interop service configuration settings when they were created.
Video interop settings can be assigned at the global, site, or service scope (for the VideoInteropServer service only).
For example, to remove settings configured at the site scope use the following syntax:

`-Identity "site:Redmond"`

Wildcard characters such as the asterisk (*) cannot be used with the Identity parameter.
The `Remove-CsVideoInteropServerConfiguration` cmdlet can be run against the global settings collection.
However, the global collection will not be deleted.
Instead, all the properties within the collection will be reset to their default values.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error messages and completes the cmdlet operation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

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
The `Remove-CsVideoInteropServerConfiguration` cmdlet accepts pipelined input of the Microsoft.Rtc.Management.WritableConfig.Settings.VideoInteropServer.VideoInteropServerConfiguration object.

## OUTPUTS

###  
None.
The `Remove-CsVideoInteropServerConfiguration` cmdlet deletes instances of the Microsoft.Rtc.Management.WritableConfig.Settings.VideoInteropServer.VideoInteropServerConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsVideoInteropServerConfiguration](Get-CsVideoInteropServerConfiguration.md)

[New-CsVideoInteropServerConfiguration](New-CsVideoInteropServerConfiguration.md)

[Set-CsVideoInteropServerConfiguration](Set-CsVideoInteropServerConfiguration.md)
