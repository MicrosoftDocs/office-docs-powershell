---
external help file: 
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsVideoTrunk

## SYNOPSIS
Use the Get-CsVideoTrunk to list properties about the video trunks in your organization.
Video trunks are Session Initiation Protocol (SIP) trunks between the Video Interop Server and a Video Gateway that are used to setup video calls between 3rd party video teleconferencing systems (VTCs) connected to the Video Gateway and Skype conferences or Skype endpoints.

## SYNTAX

### Filter
```
Get-CsVideoTrunk [-Filter <String>] [-PoolFqdn <String>] [<CommonParameters>]
```

### Identity
```
Get-CsVideoTrunk [[-Identity] <XdsGlobalRelativeIdentity>] [-PoolFqdn <String>] [<CommonParameters>]
```

## DESCRIPTION
Video trunks are SIP trunks between the Video Interop Server and a Video Gateway that are used to setup video calls between 3rd party video teleconferencing systems (VTCs) connected to the Video Gateway and Skype conferences or Skype endpoints.

Trunk information is read-only.
You cannot create, delete or modify trunks by using Windows PowerShell.
Those operations can only be carried out by using Skype for Business Server 2015 Topology Builder.

To return a list of all the role-based access control (RBAC) roles that can run this cmdlet (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt.

Get-CsAdminRole | Where-Object {$_.Cmdlets -Match "Get-CsVideoTrunk"}

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

This example returns information about all the video trunks configured for use in the organization.

Get-CsVideoTrunk

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

This example returns information for a single video trunk with the identity "VideoTrunk:192.168.0.240".

Get-CsVideoTrunk -Identity "VideoTrunk:192.168.0.240"

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

This example uses the Filter parameter to return all the video trunks located on the IP subnet 192.168.
The filter value "VideoTrunk:192.168*" limits the returned data to video trunks that having an Identity that begins with the string value "192.168".

Get-CsVideoTrunk -Filter "VideoTrunk:192.168*"

## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return a video trunk (or a collection of video trunks).

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
Unique identifier for the video trunk to be returned.
For example:

-Identity "VideoTrunk:192.168.0.240"

You cannot use wildcards when specifying an Identity.
Use the Filter parameter instead.

If this parameter is not specified, then all the video trunks in the organization are returned.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PoolFqdn
Fully qualified domain name of the trunk as defined in the topology.
For example:

-PoolFqdn "atl-trunk-001.litwareinc.com"

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
The Get-CsVideoTrunk cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsVideoTrunk cmdlet returns instances of the Microsoft.Rtc.Management.Xds.DisplayVideoGateway#Decorated object.

## NOTES

## RELATED LINKS

[Set-CsVideoGateway]()

[Online Version](http://technet.microsoft.com/EN-US/library/dbc9cdd6-28bb-430d-af9c-2bfa44ced167(OCS.16).aspx)

