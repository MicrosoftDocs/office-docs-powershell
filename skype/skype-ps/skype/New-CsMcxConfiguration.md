---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsMcxConfiguration

## SYNOPSIS

Creates a new collection of Skype for Business Server Mobility Service configuration settings at the site or the service scope.
The Mobility Service enables users of mobile phones such as iPhones and Windows Phones to do such things as exchange instant messages and presence information; store and retrieve voice mail internally instead of with their wireless provider; and take advantage of Skype for Business Server 2015 capabilities such as Call via Work and dial-out conferencing.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.



## SYNTAX

```
New-CsMcxConfiguration [-Identity] <XdsIdentity> [-Confirm] [-ExposedWebURL <ExposedWebURL>] [-Force]
 [-InMemory] [-PushNotificationProxyUri <String>] [-SessionExpirationInterval <UInt32>]
 [-SessionShortExpirationInterval <UInt32>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION

The Mobility Service extends many of the capabilities Skype for Business to mobile devices such as Apple iPhones, Windows Phone, Android phones, and Nokia phones.
Among other things, users can use these phones to exchange instant message and presence information, and to receive notifications of new voice mails.
Thanks to the push notification service (Apple Push Notification Service and Microsoft Push Notification Service), users with iPhones or Windows Phones can receive these notifications even if Skype for Business is running in the background.
The Mobility Service also provides the opportunity for organizations to enable Call via Work.
With Call via Work, users can make a call from their mobile phone and make it appear as though the call originated from their work phone; for example, Caller ID systems will display the user's work number instead of his or her mobile phone number.

The Mobility Service itself is managed by using Mobility Service configuration settings that can be applied to the global scope, the site scope, or the service scope (for the Web server service only).
These settings control such things as the maximum length of time for a Mobility Service session; whether or not the Skype for Business Server Autodiscovery Service (which directs Mobility Service users to the appropriate Registrar pool) is available to users who log on outside the organization's firewall); and the location of the push notification service provider.

When you install Skype for Business Server, a single collection of Mobility Service configuration settings is created at the global scope; however, administrators can use the New-CsMcxConfiguration cmdlet to create custom configuration settings at either the site or the service scope.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

New-CsMcxConfiguration -Identity "site:Redmond" -ExposedWebURL Internal -SessionShortExpirationInterval 7200
```

In Example 1, a new collection of Mobility Service configuration settings is created for (and automatically assigned to) the Redmond site.
In this example, two changes are made to the default Mobility Service configuration settings: the ExposedWebURL property is to Internal, and the SessionShortExpirationInterval property is set to 7200 seconds.


### -------------------------- EXAMPLE 2 -------------------------- 
```
Get-CsService -WebServer | ForEach-Object {New-CsMcxConfiguration -Identity $_.Identity -ExposedWebURL Internal -SessionShortExpirationInterval 7200}

```

In Example 2, an identical set of Mobility Service configuration settings is created for each Web server currently in use in an organization.
To perform this task, the Get-CsService cmdlet is used, along with the WebServer parameter, to return a collection of all the existing Web servers; this collection is then piped to the For-Each object cmdlet.
In turn, the ForEach-Object cmdlet takes each server in the collection and runs the New-CsMcxConfiguration cmdlet in order to create new Mobility Service configuration settings on that server.



### -------------------------- EXAMPLE 3 -------------------------- 
```
$x = New-CsMcxConfiguration -Identity "site:Redmond" -InMemory

$x.ExposedWebURL = "Internal"

$x.SessionShortExpirationInterval = 7200

Set-CsMcxConfiguration -Instance $x
```

Example 3 demonstrates how the InMemory parameter enables you to create a new collection of Mobility Service configuration settings in memory, modify the property values of that collection, and then save the collection Skype for Business Server.
To do this, the first command in the collection creates a new collection of Mobility Service configuration settings that have the Identity site:Redmond.
However, instead of being automatically created and assigned to the Redmond site, these settings are created in memory only (because of the InMemory parameter) and are then stored in a variable named $x.

Commands 2 and 3 in the example show how you can modify the property values of this virtual Mobility Service configuration collection.
After you have finished modifying the property values, you can then use the Set-CsMcxConfiguration cmdlet, and the Instance parameter, to turn the virtual settings into an actual collection of Mobility Service configuration settings assigned to the Redmond site.
Note that if you do not call the Set-CsMcxConfiguration cmdlet, no settings will ever be assigned to the Redmond site and your virtual collection will disappear as soon as you exit your Windows PowerShell session or delete the variable $x.



## PARAMETERS

### -Identity
Unique identifier of the collection of Mobility Service configuration settings to be created.
To create settings at the site scope, use the prefix "site:" followed by the site name.
For example:

`-Identity "site:Redmond"`

To create settings configured at the service scope, use syntax like this:

`-Identity service:WebServer:atl-cs-001.litwareinc.com`

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExposedWebURL
Indicates whether the URL used by the Autodiscovery Service is accessible to users both inside and outside the organization firewall (External) or only accessible to users inside the firewall (Internal).

Allowed values are: Internal or External.
The default value is External.

```yaml
Type: ExposedWebURL
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory
Creates an object reference without actually committing the object as a permanent change.
If you assign the output of a command called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

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

### -PushNotificationProxyUri
URI of a service provider that can forward push notification requests to the Apple Push Notification Service and the Microsoft Push Notification Service.
The PushNotificationProxyUri must be in the form of a SIP address; for example:

`-PushNotificationProxyUri "sip:push@push.lync.com"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SessionExpirationInterval

Length of time, in seconds, of a mobile session for iPhone or Widows Phone users.
If Skype for Business is running in the background on these phones, users will receive push notifications as long as the session expiration interval has not expired.

The mobile device must send a notice to the server indicating that the device is still active before the session timeout is reached.
If it does not, the device will be listed as inactive and the user will have to log back on to the system.

This property can be set to any integer value between 120 and 4294967295, inclusive.
The default value is 259200 seconds (3 days).
Note that the value of the SessionExpirationInterval property must be greater than the value of the SessionShortExpirationInterval property.



```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SessionShortExpirationInterval

Length of time, in seconds, of a mobile session for Android or Nokia phone users.

The mobile device must send a notice to the server indicating that the device is still active before the session timeout is reached.
If it does not, the device will be listed as inactive and the user will have to log back on to the system.

This property can be set to any integer value between 120 and 4294967295, inclusive.
The default value is 3600 seconds (1 hour).
Note that the value of the SessionExpirationInterval property must be greater than the value of the SessionShortExpirationInterval property.



```yaml
Type: UInt32
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
The New-CsMcxConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates new instances of the Microsoft.Rtc.Management.WriteableConfig.Settings.McxConfiguration.McxConfiguration object.

## NOTES

## RELATED LINKS

