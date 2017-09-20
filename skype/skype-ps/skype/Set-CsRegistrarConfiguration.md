---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsRegistrarConfiguration
schema: 2.0.0
---

# Set-CsRegistrarConfiguration

## SYNOPSIS
Modifies the property values in an existing collection of Registrar configuration settings.
Registrars are used to authenticate logon requests and to maintain information about user status and availability.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsRegistrarConfiguration [[-Identity] <XdsIdentity>] [-DefaultEndpointExpiration <Int32>]
 [-EnableDHCPServer <Boolean>] [-MaxEndpointExpiration <Int32>] [-MaxEndpointsPerUser <UInt16>]
 [-MinEndpointExpiration <Int32>] [-Force] [-WhatIf] [-Confirm] [-BackupStoreUnavailableThreshold <TimeSpan>]
 [-MaxUserCount <UInt64>] [-PoolState <PoolState>] [-EnableWinFabLogUpload <Boolean>]
 [-UserCertificateReplicationThreshold <UInt64>] [-WinFabMaxLogsSizeMb <Int32>] [<CommonParameters>]
```

### Instance
```
Set-CsRegistrarConfiguration [-Instance <PSObject>] [-DefaultEndpointExpiration <Int32>]
 [-EnableDHCPServer <Boolean>] [-MaxEndpointExpiration <Int32>] [-MaxEndpointsPerUser <UInt16>]
 [-MinEndpointExpiration <Int32>] [-Force] [-WhatIf] [-Confirm] [-BackupStoreUnavailableThreshold <TimeSpan>]
 [-MaxUserCount <UInt64>] [-PoolState <PoolState>] [-EnableWinFabLogUpload <Boolean>]
 [-UserCertificateReplicationThreshold <UInt64>] [-WinFabMaxLogsSizeMb <Int32>] [<CommonParameters>]
```

## DESCRIPTION
The Registrar is perhaps the most important component in Skype for Business Server; after all, without a Registrar, users would not be able to log on to the system and Skype for Business Server would not be able to keep track of users and their current status.
When a user logs on to Skype for Business Server, the endpoint the user is logging on from sends a REGISTER request to the Registrar; in turn, the server responds by challenging the client device for authentication credentials.
If the client passes the challenge (that is, if the client presents a valid set of credentials), then the user is authenticated and endpoint information such as IP address, port, and user name is logged in the registration database.
When a user logs off, this information is then removed from the database.
In between log on and log off, the Registrar keeps status information up-to-date and helps to route messages to and from the user.

Registrar configuration settings are used to help manage endpoints and endpoint subscriptions; these settings can be applied at the global, site, or service scope.
(Service scoped-settings are only used with the Registrar service.) The `Set-CsRegistrarConfiguration` cmdlet can be used to modify any (or all) of the Registrar configuration collections currently in use in your organization.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsRegistrarConfiguration -Identity site:Redmond -EnableDHCPServer $True
```

Example 1 modifies the Registrar configuration settings applied to the Redmond site (-Identity site:Redmond).
In this example, the value of the EnableDHCPServer property is set to True.


### -------------------------- Example 2 --------------------------
```
Get-CsRegistrarConfiguration | Where-Object {$_.MaxEndpointsPerUser -gt 8} | Set-CsRegistrarConfiguration -MaxEndpointsPerUser 8
```

In Example 2, any Registrar configuration settings that allow users more than 8 endpoints are modified.
To accomplish this, the command first calls the `Get-CsRegistrarConfiguration` cmdlet without any parameters; this returns a collection of all the Registrar configuration settings used in the organization.
This collection is then piped to the `Where-Object` cmdlet, which picks out only those settings where the MaxEndpointsPerUser property is greater than (-gt) 8.
Finally, the filtered collection is piped to the `Set-CsRegistrarConfiguration` cmdlet, which sets the maximum number of endpoints for each item in that collection to 8.


### -------------------------- Example 3 --------------------------
```
Get-CsRegistrarConfiguration -Filter "site:*"| Set-CsRegistrarConfiguration -EnableDHCPServer $False
```

The command shown in Example 3 disables client registration via DHCP for each site in the organization that hosts a collection of Registrar configuration settings.
To do this, the command calls the `Get-CsRegistrarConfiguration` cmdlet along with the Filter parameter; the parameter value "site:*" limits the returned data to settings that have been configured at the site scope.
This collection is then piped to the `Set-CsRegistrarConfiguration` cmdlet, which uses the EnableDHCPServer parameter and the parameter value $False to prevent clients from using a DHCP server to locate a Registrar.


## PARAMETERS

### -Identity
Unique identifier for the Registrar configuration settings to be modified.
To modify the global settings, use this syntax:

`-Identity global`

To modify settings configured at the site scope, use syntax similar to this:

`-Identity site:Redmond`

To modify settings at the service level, use syntax like this:

`-Identity service:Registrar:atl-cs-001.litwareinc.com`

Note that Registrar settings can only be applied to the Registrar service.
An error message will occur if you try to apply these settings to any other service.


```yaml
Type: XdsIdentity
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
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

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

### -DefaultEndpointExpiration
When endpoints log on they have the option of requesting an expiration timeout; this specifies the time interval that an endpoint can remain logged onto the system before it must contact the server and request an extension.
The DefaultEndpointExpiration property represents the expiration timeout interval for clients that do not request a specific timeout value.

The DefaultEndpointExpiration must be between 300 (5 minutes) and 900 (15 minutes).
The default value is 600 (10 minutes).

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableDHCPServer
Indicates whether endpoints can use DHCP servers to locate a Registrar.
If True, clients will send a DHCP Inform message when they first start; the DHCP server will respond by sending the fully qualified domain name (FQDN) of a Registrar that can be used to log on the user.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxEndpointExpiration
When endpoints log on they have the option of requesting an expiration timeout; this specifies the time interval that an endpoint can remain logged onto the system before it must contact the server and request an extension.
The MaxEndpointExpiration property represents the maximum amount of time that clients can be granted.
For example, if the maximum time is set to 600 seconds and a client requests a timeout interval of 800 seconds, the client will be given the maximum allowed expiration period: 600 seconds.

The MaxEndpointExpiration must be between 300 (5 minutes) and 900 (15 minutes).
The default value is 900.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxEndpointsPerUser
Indicates the maximum number of endpoints a user can simultaneously have connected to the system.
For example, a user who is logged on to Skype for Business Server with both a computer and a mobile phone would be using two endpoints.
MaxEndPointsPerUser must be set to a value between 1 and 64, inclusive.
The default value is 8.

Although it is possible to allow a user as many as 64 endpoints, it is recommended that the maximum number of endpoints not exceed 8.
Values of 9 or more are used for backwards compatibility and, in rare cases, when suggested by Microsoft support personnel.
For new deployments, the maximum number of endpoints should be no more than 8.

Note, too, that the maximum number of endpoints is intended to give individual users multiple points of presence.
As such, this setting is designed for individual users and not for groups of users (such as an entire department.)


```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MinEndpointExpiration
When endpoints log on they have the option of requesting an expiration timeout; this specifies the time interval that an endpoint can remain logged onto the system before it must contact the server and request an extension.
The MinEndpointExpiration property represents the minimum amount of time that clients can be granted.
For example, if the minimum time is set to 600 seconds and a client requests a timeout interval of 200 seconds, the client will be given the minimum allowed expiration period: 600 seconds.

The MinEndpointExpiration must be between 300 (5 minutes) and 900 (15 minutes).
The default value is 300.

```yaml
Type: Int32
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
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -BackupStoreUnavailableThreshold
Specifies the amount of time the system will wait before determining that the backup store is unavailable; at that point, users will be placed in survivability mode.
The default value is 30 minutes (00:30:00).

```yaml
Type: TimeSpan
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxUserCount
Indicates the maximum number of users that can simultaneously be logged on to a Registrar.
MaxUserCount can be set to any integer value between 2000 and 100000, inclusive.
The default value is 12000.


```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PoolState
Current state for the Registrar pool.
Allowed values are:

* Active
* FailedOver
* FailingOver
* FailedBack

The default value is Active.

```yaml
Type: PoolState
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableWinFabLogUpload
PARAMVALUE: $true | $false

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

### -UserCertificateReplicationThreshold
PARAMVALUE: UInt64

```yaml
Type: UInt64
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WinFabMaxLogsSizeMb
PARAMVALUE: Int32

```yaml
Type: Int32
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
Microsoft.Rtc.Management.WritableConfig.Settings.Registrar.RegistrarSettings object.
The `Set-CsRegistrarConfiguration` cmdlet accepts pipelined instances of the Registrar settings object.

## OUTPUTS

###  
The `Set-CsRegistrarConfiguration` cmdlet does not return a value or object.
Instead, the cmdlet configures instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Registrar.RegistrarSettings object.

## NOTES

## RELATED LINKS

[Get-CsRegistrarConfiguration]()

[New-CsRegistrarConfiguration]()

[Remove-CsRegistrarConfiguration]()
