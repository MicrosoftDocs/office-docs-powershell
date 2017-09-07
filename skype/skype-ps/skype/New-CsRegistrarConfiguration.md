---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsRegistrarConfiguration

## SYNOPSIS

Creates a new collection of Registrar configuration settings.
Registrars are used to authenticate logon requests and to maintain information about user status and availability.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
New-CsRegistrarConfiguration [-Identity] <XdsIdentity> [-DefaultEndpointExpiration <Int32>]
 [-EnableDHCPServer <Boolean>] [-MaxEndpointExpiration <Int32>] [-MinEndpointExpiration <Int32>]
 [-MaxEndpointsPerUser <UInt16>] [-Force] [-InMemory] [-WhatIf] [-Confirm]
 [-BackupStoreUnavailableThreshold <TimeSpan>] [-MaxUserCount <UInt64>] [-PoolState <PoolState>]
 [-EnableWinFabLogUpload <Boolean>] [-UserCertificateReplicationThreshold <UInt64>]
 [-WinFabMaxLogsSizeMb <Int32>] [<CommonParameters>]
```

## DESCRIPTION

The Registrar is perhaps the most important component in Skype for Business Server; after all, without a Registrar, users would not be able to log on to the system, and Skype for Business Server would not be able to keep track of users and their current status.
When a user logs on to Skype for Business Server, the endpoint the user is logging on from sends a REGISTER request to the Registrar; in turn, the server responds by challenging the client device for authentication credentials.
If the client passes the challenge (that is, if the client presents a valid set of credentials), then the user is authenticated and endpoint information such as IP address, port, and user name is logged in the registration database.
When a user logs off, this information is then removed from the database.
In between log on and log off, the Registrar keeps status information up-to-date and helps to route messages to and from the user.

Registrar configuration settings are used to help manage endpoints and endpoint subscriptions; these settings can be applied at the global, site, or service scope.
(Service scoped-settings can only be used with the Registrar service.)

The New-CsRegistrarConfiguration cmdlet enables you to create new Registrar configuration settings at either the site or the service scope.
Note that a given site or service can only have, at most, one such settings collection; if you try to add a new collection to a site or service that already hosts a collection of Registrar configuration settings, your command will fail.
Your command will also fail if you try to create new settings at the global scope.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsRegistrarConfiguration -Identity site:Redmond -MaxEndpointsPerUser 4 -EnableDHCPServer $True
```

Example 1 creates a new collection of Registrar configuration settings for the Redmond site (-Identity site:Redmond).
In addition to specifying the Identity for the new settings, the command also sets the maximum endpoints per user to 4 (-MaxEndpointsPerUser 4) and enables the use of the DHCP server for client registration (-EnableDHCPServer $True).
Note that this command will fail if the Redmond site has already been assigned a collection of Registrar configuration settings.


### -------------------------- EXAMPLE 2 -------------------------- 
```

$x = New-CsRegistrarConfiguration -Identity site:Redmond -InMemory

$x.MaxEndpointsPerUser = 4

$x.EnableDHCPServer = $True

Set-CsRegistrarConfiguration -Instance $x
```

The commands shown in Example 2 also create a new collection of Registrar configuration settings for the Redmond site (-Identity site:Redmond).
In this example, however, the settings are initially created in memory only, and are later applied to the site itself.

To carry out this task, the first command uses the New-CsRegistrarConfiguration cmdlet to create a new collection of settings for site:Redmond; the InMemory parameter is added to the end of the command to ensure that these settings are created in memory only and are not immediately applied to the Redmond site.
Because these settings exist only in memory, they must be stored in a variable; in this example, that's a variable named $x.

In commands 2 and 3, two properties of these new virtual settings (MaxEndpointsPerUser and EnableDHCPServer) are modified.
The final command in the example then uses the Set-CsRegistrarConfiguration cmdlet to transform the virtual settings stored in $x into an actual set of Registrar configuration settings applied to the Redmond site.
If you do not call the Set-CsRegistrarConfiguration cmdlet, no new settings will be created for the Redmond site, and your virtual settings will disappear as soon as you end your Windows PowerShell session or delete the variable $x.


## PARAMETERS

### -Identity

Unique identifier for the Registrar configuration settings to be created.
To create settings configured at the site scope, use syntax similar to this:

`-Identity site:Redmond`

To create settings at the service level, use syntax like this:

`-Identity service:Registrar:atl-cs-001.litwareinc.com`

Note that a given site or service can only have, at most, a single collection of Registrar settings.
If you try to create a new collection with the Identity site:Redmond and the Redmond site already hosts a collection of Registrar settings, then your command will fail.

In addition, you cannot create new Registrar settings at the global scope.
If you want to change values at the global scope, use the Set-CsRegistrarConfiguration cmdlet.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
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
When endpoints log on, they have the option of requesting an expiration timeout; this specifies the time interval that an endpoint can remain logged onto the system before it must contact the server and request an extension.
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

### -MinEndpointExpiration
When endpoints log on, they have the option of requesting an expiration timeout; this specifies the time interval that an endpoint can remain logged onto the system before it must contact the server and request an extension.
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

### -MaxEndpointsPerUser

Indicates the maximum number of endpoints a user can simultaneously have connected to the system.
(For example, a user who is logged on to Skype for Business Server with both a computer and a mobile phone would be using two endpoints.) MaxEndpointsPerUser must be set to a value between 1 and 64, inclusive.
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

### -InMemory

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

Active

FailedOver

FailingOver

FailedBack

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
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The New-CsRegistrarConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
The New-CsRegistrarConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.Registrar.RegistrarSettings object.

## NOTES

## RELATED LINKS

[Get-CsRegistrarConfiguration]()

[Remove-CsRegistrarConfiguration]()

[Set-CsRegistrarConfiguration]()

