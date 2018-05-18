---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsAutodiscoverConfiguration
schema: 2.0.0
---

# Get-CsAutodiscoverConfiguration

## SYNOPSIS
Returns information about the Autodiscover configuration settings currently in use in an organization.
The Autodiscover service provides a way for client applications to locate key resources such as a user's home pool or the URL for joining a dial-in conference.


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
For client applications to make the most effective use of Skype for Business Server those applications need to know the location of key Skype for Business Server components.
For example, authenticated users must be able to locate their home pool; after all, they can only be authenticated by that home pool.
Likewise, unauthenticated users must be able to do such things as locate the URL used for joining a conference.

If all your users logged on from behind the organization's firewall discovering these locations would be a relatively simple task.
However, this relatively simple task gets more and more complicated as users access the system from external.

This is especially true in split-domain scenarios, scenarios in which some of an organization's users have accounts on the on-premises version of Skype for Business Server while other users have accounts on Skype for Business Online.
In cases such as this, user accounts might be located in different Active Directory forests.
That can pose a problem: for example, if a US-based user logs on from Europe the system must be able to recognize his or her forest and then refer the logon request to the proper pool.

The Autodiscover service was introduced in order to address these issues.
When a client application attempts to access Skype for Business Server, the Autodiscover service parses the client SIP address and then redirects that request to the appropriate pool.
Client applications connect to the Autodiscover service by sending an HTTP request to an Autodiscover URL; these URLs must be configured by administrators in order for the Autodiscover service to work.
(Note that, in addition to configuring URLs, administrators must also create DNS records that correspond to these URLs.)

Autodiscover URLs are assigned to Autodiscover configuration settings; in turn, these settings can be applied to the global scope or to the site scope.
The Get-CsAutoDiscoverConfiguration cmdlet provides a way to return information about the Autodiscover settings (and Autodiscover URLs) currently in use in your organization.



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsAutoDiscoverConfiguration
```

The command shown in Example 1 returns all the Autodiscover configuration settings currently in use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsAutoDiscoverConfiguration -Identity "global"
```

In Example 2, only one collection of Autodiscover configuration settings are returned: the global collection.

### -------------------------- Example 3 --------------------------
```
Get-CsAutoDiscoverConfiguration -Filter "site:*"
```

The command shown in Example 3 returns all the Autodiscover configuration settings assigned to the site scope.
To do this, the Filter parameter is included, along with the filter value "site:*"; that filter value ensures that the only settings returned are those that have an Identity that begins with the string value "site:".
By definition, any settings with an Identity beginning with "site:" are settings configured at the site scope.

### -------------------------- Example 4 --------------------------
```
Get-CsAutoDiscoverConfiguration | Where-Object {$_.WebLinks -like "*fabrikam.com"}
```

The command shown in Example 4 returns all the Autodiscover configuration settings that include an Autodiscover URL for fabrikam.com.
To carry out this task, the command first uses the Get-CsAutoDiscoverConfiguration cmdlet to return a collection of all the Autodiscover settings currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which selects only those settings where the WebLinks property includes the string value "fabrikam.com"



## PARAMETERS

### -Filter
Enables you to use wildcards when specifying the Identity of the Autodiscover configuration settings to be returned.
For example, this syntax returns all the settings configured at the site scope:

`-Filter "site:*"`

Note that you cannot use both the Identity and the Filter parameters in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the collection of Autodiscover configuration settings to be retrieved.
To retrieve the global settings, use this syntax:

`-Identity "global"`

To retrieve settings configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

If this parameter is not included, then the Get-CsAutoDiscoverConfiguration cmdlet will return all the Autodiscover configuration settings currently in use in your organization.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WriteableConfig.Settings.AutoDiscoverConfiguration.AutoDiscoverConfiguration


## NOTES


## RELATED LINKS

