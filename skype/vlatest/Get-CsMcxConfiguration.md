---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsMcxConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Retrieves information about the Lync Server Mobility Service configuration settings currently in use in your organization.
The Mobility Service enables users of mobile phones such as iPhones and Windows Phones to do such things as exchange instant messages and presence information; store and retrieve voice mail internally instead of with their wireless provider; and take advantage of Lync Server capabilities such as Call via Work and dial-out conferencing.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.

**Below Content Applies To:** Skype for Business Server 2015

Retrieves information about the Skype for Business Server 2015 Mobility Service configuration settings currently in use in your organization.
The Mobility Service enables users of mobile phones such as iPhones and Windows Phones to do such things as exchange instant messages and presence information; store and retrieve voice mail internally instead of with their wireless provider; and take advantage of Skype for Business Server 2015 capabilities such as Call via Work and dial-out conferencing.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.



## SYNTAX

### Filter
```
Get-CsMcxConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsMcxConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

Lync Server Mobility Service extends many of the capabilities of Lync Server to mobile devices such as Apple iPhones, Windows Phone, Android phones, and Nokia phones.
Among other things, users can use these phones to exchange instant message and presence information, and to receive notifications of new voice mails.
Thanks to the push notification service (Apple Push Notification Service and Microsoft Push Notification Service), users with iPhones or Windows Phones can receive these notifications even if Lync is running in the background.
The Mobility Service also provides the opportunity for organizations to enable Call via Work.
With Call via Work, users can make a call from their mobile phone and make it appear as though the call originated from their work phone; for example, Caller ID systems will see the user's work number instead of his or her mobile phone number.

The Mobility Service itself is managed by using Mobility Service configuration settings that can be applied to the global scope, the site scope, or the service scope (for the Web server service only).
These settings control such things as the maximum length of time for a Mobility Service session; whether or not the Lync Server Autodiscovery Service (which directs Mobility Service users to the appropriate Registrar pool) is available to users who log on outside the organization's firewall; and the location of the push notification service provider.
The Get-CsMcxConfiguration cmdlet provides a way for administrators to retrieve information about all the Mobility Service configuration settings currently in use in their organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsMcxConfiguration cmdlet locally: RTCUniversalServerAdmins.

**Below Content Applies To:** Skype for Business Server 2015

Skype for Business Server 2015 Mobility Service extends many of the capabilities of Skype for Business Server 2015 to mobile devices such as Apple iPhones, Windows Phone, Android phones, and Nokia phones.
Among other things, users can use these phones to exchange instant message and presence information, and to receive notifications of new voice mails.
Thanks to the push notification service (Apple Push Notification Service and Microsoft Push Notification Service), users with iPhones or Windows Phones can receive these notifications even if Skype for Business is running in the background.
The Mobility Service also provides the opportunity for organizations to enable Call via Work.
With Call via Work, users can make a call from their mobile phone and make it appear as though the call originated from their work phone; for example, Caller ID systems will see the user's work number instead of his or her mobile phone number.

The Mobility Service itself is managed by using Mobility Service configuration settings that can be applied to the global scope, the site scope, or the service scope (for the Web server service only).
These settings control such things as the maximum length of time for a Mobility Service session; whether or not the Skype for Business Server 2015 Autodiscovery Service (which directs Mobility Service users to the appropriate Registrar pool) is available to users who log on outside the organization's firewall; and the location of the push notification service provider.
The Get-CsMcxConfiguration cmdlet provides a way for administrators to retrieve information about all the Mobility Service configuration settings currently in use in their organization.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the Mobility Service configuration settings currently in use in your organization.

Get-CsMcxConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the Mobility Service configuration settings currently in use in your organization.

Get-CsMcxConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, information is returned only for the global collection of Mobility Service configuration settings.

Get-CsMcxConfiguration -Identity "global"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information is returned only for the global collection of Mobility Service configuration settings.

Get-CsMcxConfiguration -Identity "global"

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 returns information about all the Mobility Service configuration settings assigned to the service scope.
To do this, the Filter parameter is included along with the string value "service:*".
That filter value returns all the Mobility Service configuration settings that have an Identity that begins with the string value "service:".

Get-CsMcxConfiguration -Filter "service:*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 returns information about all the Mobility Service configuration settings assigned to the service scope.
To do this, the Filter parameter is included along with the string value "service:*".
That filter value returns all the Mobility Service configuration settings that have an Identity that begins with the string value "service:".

Get-CsMcxConfiguration -Filter "service:*"

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, the only Mobility Service configuration settings returned are those where the ExposedWebURL property is equal to External.
To do this, the command first calls Get-CsMcxConfiguration without any parameters in order to return a collection of all the Mobility Service configuration settings currently in use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the ExposedWebURL property is equal to (-eq) External.

Get-CsMcxConfiguration | Where-Object {$_.ExposedWebURL -eq "External"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, the only Mobility Service configuration settings returned are those where the ExposedWebURL property is equal to External.
To do this, the command first calls the Get-CsMcxConfiguration cmdlet without any parameters in order to return a collection of all the Mobility Service configuration settings currently in use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the ExposedWebURL property is equal to (-eq) External.

Get-CsMcxConfiguration | Where-Object {$_.ExposedWebURL -eq "External"}

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

Example 5 returns any and all of the Mobility Service configuration settings where the SessionExpirationInterval property is set to a value less than the default value of 259200 seconds (72 hours).
This is done by first using Get-CsMcxConfiguration to return a collection of all the existing Mobility Service configuration settings.
That collection is then piped to the Where-Object cmdlet, which, in turn, selects only those settings where the SessionExpirationInterval property is less than 259200.

Get-CsMcxConfiguration | Where-Object {$_.SessionExpirationInterval -lt 259200}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

Example 5 returns any and all of the Mobility Service configuration settings where the SessionExpirationInterval property is set to a value less than the default value of 259200 seconds (72 hours).
This is done by first using the Get-CsMcxConfiguration cmdlet to return a collection of all the existing Mobility Service configuration settings.
That collection is then piped to the Where-Object cmdlet, which, in turn, selects only those settings where the SessionExpirationInterval property is less than 259200.

Get-CsMcxConfiguration | Where-Object {$_.SessionExpirationInterval -lt 259200}

## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return a collection of Mobility Service configuration settings.
For example, to return a collection of all the settings configured at the site scope, use this syntax:

-Filter site:*

To return a collection of all the settings configured at the service scope, use this syntax:

-Filter service:*

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
**Below Content Applies To:** Lync Server 2013

Indicates the unique identifier for the collection of Mobility Service configuration settings you want to return.
To refer to the global settings, use this syntax:

-Identity global

To refer to a collection configured at the site scope, use syntax similar to this:

-Identity site:Redmond

To refer to a collection configured at the service scope, use syntax like this:

-Identity service:WebServer:atl-cs-001.litwareinc.com

Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards then use the Filter parameter instead.

If this parameter is not specified, then Get-CsMcxConfiguration returns a collection of all the Mobility Service configuration settings in use in the organization.



**Below Content Applies To:** Skype for Business Server 2015

Indicates the unique identifier for the collection of Mobility Service configuration settings you want to return.
To refer to the global settings, use this syntax:

-Identity global

To refer to a collection configured at the site scope, use syntax similar to this:

-Identity site:Redmond

To refer to a collection configured at the service scope, use syntax like this:

-Identity service:WebServer:atl-cs-001.litwareinc.com

Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards then use the Filter parameter instead.

If this parameter is not specified, then the Get-CsMcxConfiguration cmdlet returns a collection of all the Mobility Service configuration settings in use in the organization.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the Mobility Service configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Get-CsMcxConfiguration does not accept pipelined input.

###  
The Get-CsMcxConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsMcxConfiguration returns instances of the Microsoft.Rtc.Management.WriteableConfig.Settings.McxConfiguration.McxConfiguration object.

###  
The Get-CsMcxConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WriteableConfig.Settings.McxConfiguration.McxConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/a09c0d49-5377-4a22-89e6-2751030ccf20(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/a09c0d49-5377-4a22-89e6-2751030ccf20(OCS.16).aspx)

