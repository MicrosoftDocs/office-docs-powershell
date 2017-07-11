---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsAutodiscoverConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Returns information about the Autodiscover configuration settings currently in use in an organization.
The Autodiscover service provides a way for client applications such as Lync Web Access or Microsoft Lync Mobile to locate key resources such as a user's home pool or the URL for joining a dial-in conference.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.

Below Content Applies To: Skype for Business Server 2015

Returns information about the Autodiscover configuration settings currently in use in an organization.
The Autodiscover service provides a way for client applications to locate key resources such as a user's home pool or the URL for joining a dial-in conference.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.



## SYNTAX

### Filter
```
Get-CsAutodiscoverConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

### Identity
```
Get-CsAutodiscoverConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

For client applications to make the most effective use of Lync Server those applications need to know the location of key Lync Server components.
For example, authenticated users must be able to locate their home pool; after all, they can only be authenticated by that home pool.
Likewise, unauthenticated users must be able to do such things as locate the URL used for joining a conference.

If all your users logged on from behind the organization's firewall discovering these locations would be a relatively simple task.
However, this relatively simple task gets more and more complicated as users access the system from external locations using Microsoft Lync Mobile or Lync Web Access.

This is especially true in split-domain scenarios, scenarios in which some of an organization's users have accounts on the on-premises version of Lync Server while other users have accounts on Microsoft Office 365.
In cases such as this, user accounts might be located in different Active Directory forests.
That can pose a problem: for example, if a US-based user logs on from Europe the system must be able to recognize his or her forest and then refer the logon request to the proper pool.

The Autodiscover service was introduced in the cumulative update for Lync Server: November 2011 in order to address these issues.
When a client application attempts to access Lync Server, the Autodiscover service parses the client SIP address and then redirects that request to the appropriate pool.
Client applications connect to the Autodiscover service by sending an HTTP request to an Autodiscover URL; these URLs must be configured by administrators in order for the Autodiscover service to work.
(Note that, in addition to configuring URLs, administrators must also create DNS records that correspond to these URLs.)

Autodiscover URLs are assigned to Autodiscover configuration settings; in turn, these settings can be applied to the global scope or to the site scope.
The Get-CsAutoDiscoverConfiguration cmdlet provides a way to return information about the Autodiscover settings (and Autodiscover URLs) currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsAutoDiscoverConfiguration cmdlet locally: RTCUniversalServerAdmins.

Below Content Applies To: Skype for Business Server 2015

For client applications to make the most effective use of Skype for Business Server 2015 those applications need to know the location of key Skype for Business Server 2015 components.
For example, authenticated users must be able to locate their home pool; after all, they can only be authenticated by that home pool.
Likewise, unauthenticated users must be able to do such things as locate the URL used for joining a conference.

If all your users logged on from behind the organization's firewall discovering these locations would be a relatively simple task.
However, this relatively simple task gets more and more complicated as users access the system from external.

This is especially true in split-domain scenarios, scenarios in which some of an organization's users have accounts on the on-premises version of Skype for Business Server 2015 while other users have accounts on Skype for Business Online.
In cases such as this, user accounts might be located in different Active Directory forests.
That can pose a problem: for example, if a US-based user logs on from Europe the system must be able to recognize his or her forest and then refer the logon request to the proper pool.

The Autodiscover service was introduced in the cumulative update for Lync Server: November 2011 in order to address these issues.
When a client application attempts to access Skype for Business Server 2015, the Autodiscover service parses the client SIP address and then redirects that request to the appropriate pool.
Client applications connect to the Autodiscover service by sending an HTTP request to an Autodiscover URL; these URLs must be configured by administrators in order for the Autodiscover service to work.
(Note that, in addition to configuring URLs, administrators must also create DNS records that correspond to these URLs.)

Autodiscover URLs are assigned to Autodiscover configuration settings; in turn, these settings can be applied to the global scope or to the site scope.
The Get-CsAutoDiscoverConfiguration cmdlet provides a way to return information about the Autodiscover settings (and Autodiscover URLs) currently in use in your organization.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns all the Autodiscover configuration settings currently in use in the organization.

Get-CsAutoDiscoverConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns all the Autodiscover configuration settings currently in use in the organization.

Get-CsAutoDiscoverConfiguration

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, only one collection of Autodiscover configuration settings are returned: the global collection.

Get-CsAutoDiscoverConfiguration -Identity "global"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, only one collection of Autodiscover configuration settings are returned: the global collection.

Get-CsAutoDiscoverConfiguration -Identity "global"

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 returns all the Autodiscover configuration settings assigned to the site scope.
To do this, the Filter parameter is included, along with the filter value "site:*"; that filter value ensures that the only settings returned are those that have an Identity that begins with the string value "site:".
By definition, any settings with an Identity beginning with "site:" are settings configured at the site scope.

Get-CsAutoDiscoverConfiguration -Filter "site:*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 returns all the Autodiscover configuration settings assigned to the site scope.
To do this, the Filter parameter is included, along with the filter value "site:*"; that filter value ensures that the only settings returned are those that have an Identity that begins with the string value "site:".
By definition, any settings with an Identity beginning with "site:" are settings configured at the site scope.

Get-CsAutoDiscoverConfiguration -Filter "site:*"

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 4 returns all the Autodiscover configuration settings that include an Autodiscover URL for fabrikam.com.
To carry out this task, the command first uses Get-CsAutoDiscoverConfiguration to return a collection of all the Autodiscover settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the WebLinks property includes the string value "fabrikam.com"

Get-CsAutoDiscoverConfiguration | Where-Object {$_.WebLinks -like "*fabrikam.com"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 4 returns all the Autodiscover configuration settings that include an Autodiscover URL for fabrikam.com.
To carry out this task, the command first uses the Get-CsAutoDiscoverConfiguration cmdlet to return a collection of all the Autodiscover settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the WebLinks property includes the string value "fabrikam.com"

Get-CsAutoDiscoverConfiguration | Where-Object {$_.WebLinks -like "*fabrikam.com"}

## PARAMETERS

### -Filter
Enables you to use wildcards when specifying the Identity of the Autodiscover configuration settings to be returned.
For example, this syntax returns all the settings configured at the site scope:

-Filter "site:*"

Note that you cannot use both the Identity and the Filter parameters in the same command.

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
Below Content Applies To: Lync Server 2013

Unique identifier for the collection of Autodiscover configuration settings to be retrieved.
To retrieve the global settings, use this syntax:

-Identity "global"

To retrieve settings configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

If this parameter is not included, then Get-CsAutoDiscoverConfiguration will return all the Autodiscover configuration settings currently in use in your organization.



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the collection of Autodiscover configuration settings to be retrieved.
To retrieve the global settings, use this syntax:

-Identity "global"

To retrieve settings configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

If this parameter is not included, then the Get-CsAutoDiscoverConfiguration cmdlet will return all the Autodiscover configuration settings currently in use in your organization.



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
Retrieves the Autodiscover configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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
Get-CsAutoDiscoverConfiguration does not accept pipelined input.

###  
The Get-CsAutoDiscoverConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsAutoDiscoverConfiguration returns instances of the Microsoft.Rtc.Management.WriteableConfig.Settings.AutoDiscoverConfiguration.AutoDiscoverConfiguration object.

###  
The Get-CsAutoDiscoverConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WriteableConfig.Settings.AutoDiscoverConfiguration.AutoDiscoverConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/221d26d6-0f77-4873-8872-d600913eb98b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/221d26d6-0f77-4873-8872-d600913eb98b(OCS.16).aspx)

