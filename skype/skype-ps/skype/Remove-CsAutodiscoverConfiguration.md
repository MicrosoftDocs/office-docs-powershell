---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsAutodiscoverConfiguration

## SYNOPSIS
Removes a collection of Autodiscover configuration settings.
The Autodiscover service provides a way for client applications to locate key resources such as a user's home pool or the URL for joining a dial-in conference.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.


## SYNTAX

```
Remove-CsAutodiscoverConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
For client applications to make the most effective use of Skype for Business Server those applications need to know the location of key Skype for Business Server components.
For example, authenticated users must be able to locate their home pool; after all, they can only be authenticated by that home pool.
Likewise, unauthenticated users must be able to do such things as locate the URL used for joining a conference.

If all your users logged on from behind the organization's firewall discovering these locations would be a relatively simple task.
However, this relatively simple task gets more and more complicated as users access the system from external locations.

This is especially true in split-domain scenarios, scenarios in which some of an organization's users have accounts on the on-premises version of Skype for Business Server while other users have accounts on Skype for Business Online.
In cases such as this, user accounts might be located in different Active Directory forests.
That can pose a problem: for example, if a US-based user logs on from Europe the system must be able to recognize his or her forest and then refer the logon request to the proper pool.

The Autodiscover service was introduced in the cumulative update for Lync Server: November 2011 in order to address these issues.
When a client application attempts to access Skype for Business Server, the Autodiscover service parses the client SIP address and then redirects that request to the appropriate pool.
Client applications connect to the Autodiscover service by sending an HTTP request to an Autodiscover URL; these URLs must be configured by administrators in order for the Autodiscover service to work.
(Note that, in addition to configuring URLs, administrators must also create DNS records that correspond to these URLs.)

Autodiscover URLs are assigned to Autodiscover configuration settings; in turn, these settings can be applied to the global scope or to the site scope.
If you later decide to remove settings assigned to the site scope you can do so by running the `Remove-CsAutoDiscoverConfiguration` cmdlet.
Note that this cmdlet can also be run against the global settings.
In that case, however, the global settings will not be removed; however, any Autodiscover URLs assigned to the global collection will be deleted.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsAutoDiscoverConfiguration -Identity "site:Redmond"
```

The command shown in Example 1 deletes the Autodiscover configuration settings for the Redmond site.


### -------------------------- Example 2 --------------------------
```
Get-CsAutoDiscoverConfiguration -Filter "site:*" | Remove-CsAutoDiscoverConfiguration
```

In Example 2, all the Autodiscover configurations settings assigned to the site scope are removed.
To do this, the command first uses the `Get-CsAutoDiscoverConfiguration` cmdlet and the Filter parameter to return a collection of configuration settings; the filter value "site:*" ensures that only settings that have an Identity that begins with the string value "site:" are returned.
That filtered collection is then piped to the `Remove-CsAutoDiscoverConfiguration` cmdlet, which deletes each item in the collection.


## PARAMETERS

### -Identity
Unique identifier for the Autodiscover settings to be removed.
Autodiscover settings can be configured at the global or the site scope.
To "remove" the global policy, use this syntax: `-Identity global`.
(Note that the global settings cannot actually be removed.
Instead, all the properties in the global settings will be reset to their default values.)

To remove settings configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

Note that wildcards are not allowed when specifying an Identity.

```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Microsoft.Rtc.Management.WriteableConfig.Settings.AutoDiscoverConfiguration.AutoDiscoverConfiguration.
The `Remove-CsAutoDiscoverConfiguration` cmdlet accepts pipelined input of AutoDiscoverConfiguration objects

## OUTPUTS

###  
None.
Instead, the cmdlet deletes instances of the Microsoft.Rtc.Management.WriteableConfig.Settings.AutoDiscoverConfiguration.AutoDiscoverConfiguration object.

## NOTES

## RELATED LINKS
