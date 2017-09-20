---
external help file: 
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsVideoInteropServerConfiguration

## SYNOPSIS
Use the `Set-CsVideoInteropServerConfiguration` cmdlet to modify an existing collection of Video Interop Server (VIS) configuration settings.
VIS settings are scoped to appropriate VIS instances, and will govern the behavior of those instances.
The Video Interop Server (VIS) enables you to incorporate 3rd party video teleconferencing systems (VTCs) into your Skype for Business infrastructure.
VIS is a Skype for Business service that runs on a standalone pool and cannot be co-located on an FE pool.

## SYNTAX

### Identity
```
Set-CsVideoInteropServerConfiguration [[-Identity] <XdsIdentity>] [-Confirm]
 [-EnableEnhancedVideoExperience <Boolean>] [-Force] [-WhatIf] [<CommonParameters>]
```

### Instance
```
Set-CsVideoInteropServerConfiguration [-Confirm] [-EnableEnhancedVideoExperience <Boolean>] [-Force]
 [-Instance <PSObject>] [-WhatIf] [<CommonParameters>]
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

By default, Skype for Business Server ships with a single, global collection of video interop configuration settings.
However, administrators can use the `New-CsVideoInteropServerConfiguration` cmdlet to create additional settings at the site or the service scope (for the Video Interop server service only.) Both the global collection of settings and any custom settings that you create can be modified by using the `Set-CsVideoInteropServerConfiguration` cmdlet.

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

`Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}`

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsVideoInteropServerConfiguration -Identity "site:Redmond" -EnableEnhancedVideoExperience $False
```

This example disables enhanced video experience for the collection of VIS settings assigned to the Redmond site.


### -------------------------- Example 2 --------------------------
```
Get-CsVideoInteropServerConfiguration | Set-CsVideoInteropServerConfiguration -EnableEnhancedVideoExperience $False
```

This example disables all enhanced video experience settings in the organization.
The command uses the `Get-CsVideoInteropServerConfiguration` cmdlet to return a collection of all the available VIS settings.
That collection is piped to the `Set-CsVideoInteropServerConfiguration` cmdlet, which disables the enhanced video experience for each item in the collection.


## PARAMETERS

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

### -EnableEnhancedVideoExperience
When set to True ($True) the single video stream coming from a third party video system will be converted to multiple streams in order to meet the needs of devices using different video resolutions or frame rates. The default value is True ($True).

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

### -Identity
Unique identifier for the video server configuration settings to be modified.
To modify the global settings, use this syntax:

`-Identity "global"`

To manage settings at the site scope use syntax like the following:

`-Identity "site:Redmond"`

To modify settings configured at the service scope, use syntax similar to this:

`-Identity "service:VideoInteropServer:atl-edge-001.litwareinc.com"`

If this parameter is not included, the `Set-CsVideoInteropServerConfiguration` cmdlet will automatically modify the global settings.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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
The `Set-CsVideoInteropServerConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.VideoInteropServer.VideoInteropServerConfiguration object.

## OUTPUTS

###  
None.
The `Set-CsVideoInteropServerConfiguration` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.VideoInteropServer.VideoInteropServerConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsVideoInteropServerConfiguration]()

[New-CsVideoInteropServerConfiguration]()

[Remove-CsVideoInteropServerConfiguration]()
