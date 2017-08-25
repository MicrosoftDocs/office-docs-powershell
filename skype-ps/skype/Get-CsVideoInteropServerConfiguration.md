---
external help file: 
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsVideoInteropServerConfiguration

## SYNOPSIS
Use the Get-CsVideoInteropServerConfiguration cmdlet to return information about Video Interop Server (VIS) configuration settings.
VIS configuration settings are scoped to appropriate VIS instances, and will govern the behavior of those instances.
The Video Interop Server (VIS) enables you to incorporate 3rd party video teleconferencing systems (VTCs) into your Skype for Business infrastructure.
VIS is a Skype for Business service that runs on a standalone pool and cannot be co-located on an FE pool.

## SYNTAX

### Filter
```
Get-CsVideoInteropServerConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsVideoInteropServerConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
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
You can use the New-CsVideoInteropServerConfiguration cmdlet to create additional settings at the site or the service scope (for the VIS service only.)

To return a list of all the Role-Based Access Control (RBAC) roles a cmdlet has been assigned to (including any custom RBAC roles you have created), run the following command from the Windows PowerShell prompt.

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "\<DesiredCmdletName\>"}

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

This example returns information about all the VIS configuration settings in the organization.

Get-CsVideoInteropServerConfiguration

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

This example returns information for the collection of VIS configurations that are scoped to the Redmond site.

Get-CsVideoInteropServerConfiguration -Identity "site:Redmond"

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

This example returns all the VIS collections configured at the site scope by including the Filter value "site:*".

Get-CsVideoInteropServerConfiguration -Filter "site:*"

### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```

```

This example returns information about all the VIS configurations where the enhanced video experience has been enabled.
First, all the VIS configurations are returned by using Get-CsVideoInteropServerConfiguration to return a collection of all the available settings.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnableEnhancedVideoExperience value is equal to True ($True).

Get-CsVideoInteropServerConfiguration | Where-Object {$_.EnableEnhancedVideoExperience -eq $True}

## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return one or more collections of VIS configuration settings.
For example, to return all the settings that have been configured at the site scope use the following syntax:

-Filter "site:*"

The Filter and the Identity parameters are mutually exclusive.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identity assigned to the VIS configuration when it was created.
VIS settings can be configured at the global, site, or service scope (for the VideoInteropServer service only).
To refer to the global instance, use this syntax:

-Identity "global"

Use this syntax to refer to a collection at the site scope:

-Identity "site:Redmond"

Wildcard characters such as the asterisk (*) cannot be used with the Identity parameter.
To do a wildcard search for policies, use the Filter parameter instead.

If neither the Identity nor the Filter parameter is specified, then the Get-CsVideoInteropServerConfiguration cmdlet returns all the VIS configurations in your organization.

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

### -LocalStore
Retrieves the VIS configuration from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The Get-CsVideoInteropServerConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsVideoInteropServerConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.VideoInteropServer.VideoInteropServerConfiguration object.

## NOTES

## RELATED LINKS

[New-CsVideoInteropServerConfiguration]()

[Remove-CsVideoInteropServerConfiguration]()

[Set-CsVideoInteropServerConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/72cdb754-76cb-4738-bae2-245d1619ef30(OCS.16).aspx)

