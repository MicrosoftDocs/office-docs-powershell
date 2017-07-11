---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsPushNotificationConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Creates a new collection of push notification configuration settings at the site scope.
The push notification service (Apple Push Notification Service and Microsoft Push Notification Service) provides a way to send notifications about events such as new instant messages or new voice mail to mobile devices such as iPhones and Windows Phones, even if the Lync application on those devices is currently suspended or running in the background.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.

Below Content Applies To: Skype for Business Server 2015

Creates a new collection of push notification configuration settings at the site scope.
The push notification service (Apple Push Notification Service and Microsoft Push Notification Service) provides a way to send notifications about events such as new instant messages or new voice mail to mobile devices such as iPhones and Windows Phones, even if the Skype for Business application on those devices is currently suspended or running in the background.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.



## SYNTAX

```
New-CsPushNotificationConfiguration [-Identity] <XdsIdentity> [-Confirm]
 [-EnableApplePushNotificationService <Boolean>] [-EnableMicrosoftPushNotificationService <Boolean>] [-Force]
 [-InMemory] [-Tenant <Guid>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

The Apple Push Notification Service and the Microsoft Push Notification Service enable users running Lync on their Apple iPhone or Windows Phone to receive notifications about Lync events even when Lync is suspended or running in the background.
For example, users can receive notice for events such as these:

- Invitations to a new instant messaging session or conference
- New instant messages
- New voice mail

Without the push notification service, users would receive these notices only when Lync was in the foreground and serving as the active application.

Administrators have the ability to enable or disable push notifications for iPhone users and/or Windows Phone users.
(By default, push notifications are disabled for both iPhone users and Windows Phone users.) Administrators can enable or disable push notifications at the global scope by using the Set-CsPushNotificationConfiguration cmdlet.
They can also create custom push notification settings at the site scope by using the New-CsPushNotificationConfiguration cmdlet.
That gives Administrators the ability to provide push notifications to users in some sites (for example, Redmond) while restricting the use of these notifications in other sites.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsPushNotificationConfiguration cmdlet locally: RTCUniversalServerAdmins.

Below Content Applies To: Skype for Business Server 2015

The Apple Push Notification Service and the Microsoft Push Notification Service enable users running Skype for Business on their Apple iPhone or Windows Phone to receive notifications about Skype for Business Server 2015 events even when Skype for Business is suspended or running in the background.
For example, users can receive notice for events such as these:

- Invitations to a new instant messaging session or conference
- New instant messages
- New voice mail

Without the push notification service, users would receive these notices only when Skype for Business was in the foreground and serving as the active application.

Administrators have the ability to enable or disable push notifications for iPhone users and/or Windows Phone users.
(By default, push notifications are disabled for both iPhone users and Windows Phone users.) Administrators can enable or disable push notifications at the global scope by using the Set-CsPushNotificationConfiguration cmdlet.
They can also create custom push notification settings at the site scope by using the New-CsPushNotificationConfiguration cmdlet.
That gives Administrators the ability to provide push notifications to users in some sites (for example, Redmond) while restricting the use of these notifications in other sites.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new collection of push notification settings for the Redmond site, and enables push notifications from both the Apple Push Notification Service and the Microsoft Push Notification Service.
The latter is done by setting both the EnableApplePushNotificationService and the EnableMicrosoftPushNotificationService properties to True.

New-CsPushNotificationConfiguration -Identity "site:Redmond" -EnableApplePushNotificationService $True -EnableMicrosoftPushNotificationService -$True

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new collection of push notification settings for the Redmond site, and enables push notifications from both the Apple Push Notification Service and the Microsoft Push Notification Service.
The latter is done by setting both the EnableApplePushNotificationService and the EnableMicrosoftPushNotificationService properties to True.

New-CsPushNotificationConfiguration -Identity "site:Redmond" -EnableApplePushNotificationService $True -EnableMicrosoftPushNotificationService -$True

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 shows how you can create a set of push configuration settings for each of your Lync Server sites.
To do this, the command first uses Get-CsSite to return a collection of all your Lync Server sites.
That collection is then piped to the ForEach-Object cmdlet, which takes each site in the collection, calls New-CsPushNotificationConfiguration, and creates a new set of push notification configuration settings for that site.
Note that this command will fail for any site that already hosts a collection of push notification configuration settings.

Get-CsSite | ForEach-Object {New-CsPushConfigurationNotification -Identity $_.Identity}

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 shows how you can create a set of push configuration settings for each of your Skype for Business Server 2015 sites.
To do this, the command first uses the Get-CsSite cmdlet to return a collection of all your Skype for Business Server 2015 sites.
That collection is then piped to the ForEach-Object cmdlet, which takes each site in the collection, calls the New-CsPushNotificationConfiguration cmdlet, and creates a new set of push notification configuration settings for that site.
Note that this command will fail for any site that already hosts a collection of push notification configuration settings.

Get-CsSite | ForEach-Object {New-CsPushNotificationConfiguration -Identity $_.Identity}

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 demonstrates the use of the InMemory parameter to create a collection of push notification configuration settings that initially exist only in memory.
To do this, the example creates a new collection of settings (with the Identity site:Redmond) and stores this collection in a variable named $x.
Note that, after this first command executes, the collection exists only in memory; if you run the command Get-CsPushNotificationConfiguration you will not see an entry for site:Redmond.

In the next two commands, both the EnableApplePushNotificationService and the EnableMicrosoftPushNotificationService properties for this virtual collection of settings are set to True, which enables push notifications from both the Apple Push Notification Service and the Microsoft Push Notification Service.
Finally, the last command uses Set-CsPushNotificationConfiguration to transform the virtual push notification settings into an actual collection of settings applied to the Redmond site.
If you do not call Set-CsPushNotificationConfiguration, these settings will remain in memory only and will disappear when your Windows PowerShell session is terminated or the variable $x is deleted.

$x = New-CsPushNotificationConfiguration -Identity "site:Redmond" -InMemory

$x.EnableApplePushNotificationService = $True

$x.EnableMicrosoftPushNotificationService = $True

Set-CsPushNotificationConfiguration -Instance $x

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 demonstrates the use of the InMemory parameter to create a collection of push notification configuration settings that initially exist only in memory.
To do this, the example creates a new collection of settings (with the Identity site:Redmond) and stores this collection in a variable named $x.
Note that, after this first command executes, the collection exists only in memory; if you run the Get-CsPushNotificationConfiguration cmdlet, you will not see an entry for site:Redmond.

In the next two commands, both the EnableApplePushNotificationService and the EnableMicrosoftPushNotificationService properties for this virtual collection of settings are set to True, which enables push notifications from both the Apple Push Notification Service and the Microsoft Push Notification Service.
Finally, the last command uses the Set-CsPushNotificationConfiguration cmdlet to transform the virtual push notification settings into an actual collection of settings applied to the Redmond site.
If you do not call the Set-CsPushNotificationConfiguration cmdlet, these settings will remain in memory only and will disappear when your Windows PowerShell session is terminated or the variable $x is deleted.

$x = New-CsPushNotificationConfiguration -Identity "site:Redmond" -InMemory

$x.EnableApplePushNotificationService = $True

$x.EnableMicrosoftPushNotificationService = $True

Set-CsPushNotificationConfiguration -Instance $x

## PARAMETERS

### -Identity
Push notification settings can only be created at the site scope.
To specify a new collection of settings for a site, use syntax similar to this:

-Identity "site:Redmond"

Note that this command will fail if the Redmond site already hosts a collection of push notification settings.

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

### -EnableApplePushNotificationService
When set to True, iPhone users will receive push notifications from the Apple Push Notification Service.
When set to False, iPhone users will not receive these notifications.

The default value is False.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableMicrosoftPushNotificationService
When set to True, Windows Phone users will receive push notifications from the Microsoft Push Notification Service.
When set to False, Windows Phone users will not receive these notifications.

The default value is False.

```yaml
Type: Boolean
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

### -Tenant
Below Content Applies To: Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account for which the new push notification configuration settings are being created.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



Below Content Applies To: Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the new push notification configuration settings are being created.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Guid
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
New-CsPushNotificationConfiguration does not accept pipelined input.

###  
None.
The New-CsPushNotificationConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
New-CsPushNotificationConfiguration creates new instances of the Microsoft.Rtc.Management.WriteableConfig.Settings.PushNotificationConfiguration.PushNotificationConfiguration object.

###  
The New-CsPushNotificationConfiguration cmdlet creates new instances of the Microsoft.Rtc.Management.WriteableConfig.Settings.PushNotificationConfiguration.PushNotificationConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/8bf61c72-7902-4075-9388-47a7dd4e649c(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/8bf61c72-7902-4075-9388-47a7dd4e649c(OCS.16).aspx)

