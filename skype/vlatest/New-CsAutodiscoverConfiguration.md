---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsAutodiscoverConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Creates a new collection of Autodiscover configuration settings at the site scope.
The Autodiscover service provides a way for client applications such as Lync Web Access or Microsoft Lync Mobile to locate key resources such as a user's home pool or the URL for joining a dial-in conference.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.

Below Content Applies To: Skype for Business Server 2015

Creates a new collection of Autodiscover configuration settings at the site scope.
The Autodiscover service provides a way for client applications such as Microsoft Lync Mobile to locate key resources such as a user's home pool or the URL for joining a dial-in conference.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.



## SYNTAX

```
New-CsAutodiscoverConfiguration [-Identity] <XdsIdentity> [-Confirm] [-ExternalSipClientAccessFqdn <String>]
 [-ExternalSipClientAccessPort <UInt32>] [-Force] [-InMemory] [-WebLinks <PSListModifier>] [-WhatIf]
 [-EnableCertificateProvisioningServiceUrl <Boolean>] [<CommonParameters>]
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
When you install Lync Server a global collection of settings will be created for you.
(However, no Autodiscover URLs will be assigned to that collection.) If a single collection of Autodiscover settings will not fill your needs, then you can use the New-CsAutoDiscoverConfiguration cmdlet to create additional configuration settings at the site scope.

Who can run this cmdlet: By default, members of the following groups are authorized to run the New-CsAutoDiscoverConfiguration cmdlet locally: RTCUniversalServerAdmins.

Below Content Applies To: Skype for Business Server 2015

For client applications to make the most effective use of Skype for Business Server 2015 those applications need to know the location of key Skype for Business Server 2015 components.
For example, authenticated users must be able to locate their home pool; after all, they can only be authenticated by that home pool.
Likewise, unauthenticated users must be able to do such things as locate the URL used for joining a conference.

If all your users logged on from behind the organization's firewall discovering these locations would be a relatively simple task.
However, this relatively simple task gets more and more complicated as users access the system from external locations using applications like Microsoft Lync Mobile.

This is especially true in split-domain scenarios, scenarios in which some of an organization's users have accounts on the on-premises version of Skype for Business Server 2015 while other users have accounts on Skype for Business Online.
In cases such as this, user accounts might be located in different Active Directory forests.
That can pose a problem: for example, if a US-based user logs on from Europe the system must be able to recognize his or her forest and then refer the logon request to the proper pool.

The Autodiscover service was introduced in the cumulative update for Lync Server: November 2011 in order to address these issues.
When a client application attempts to access Skype for Business Server 2015, the Autodiscover service parses the client SIP address and then redirects that request to the appropriate pool.
Client applications connect to the Autodiscover service by sending an HTTP request to an Autodiscover URL; these URLs must be configured by administrators in order for the Autodiscover service to work.
(Note that, in addition to configuring URLs, administrators must also create DNS records that correspond to these URLs.)

Autodiscover URLs are assigned to Autodiscover configuration settings; in turn, these settings can be applied to the global scope or to the site scope.
When you install Skype for Business Server 2015 a global collection of settings will be created for you.
(However, no Autodiscover URLs will be assigned to that collection.) If a single collection of Autodiscover settings will not fill your needs, then you can use the New-CsAutoDiscoverConfiguration cmdlet to create additional configuration settings at the site scope.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 creates a new collection of Autodiscover configuration settings for the Redmond site.
Because the WebLinks parameter was not included, these settings will not contain any Autodiscover URLs.

New-CsAutoDiscoverConfiguration -Identity "site:Redmond"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 creates a new collection of Autodiscover configuration settings for the Redmond site.
Because the WebLinks parameter was not included, these settings will not contain any Autodiscover URLs.

New-CsAutoDiscoverConfiguration -Identity "site:Redmond"

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 2 create a new collection of Autodiscover configuration settings for the Redmond site and assign those new settings a pair of Autodiscover URLs: http://LyncDisocver.fabrikam.com and http://LyncDiscoverInternal.fabrikam.com.
In order to carry out this task, the first two commands use the New-CsWebLink cmdlet to create the two Autodiscover URLs; the newly-created URLs are then stored in variables named $Link1 and $Link2.
After the two URLs are created, the third command uses New-CsAutoDiscoverConfiguration to create the new Autodiscover configuration settings.
In order to assign the two URLs to these settings, the WebLinks parameter is included along with the parameter value @{Add=$Link1,$Link2}.
That syntax causes the values stored in the variables $Link1 and $Link2 to be added to the WebLinks property.

$Link1 = New-CsWebLink -Token "Fabrikam" -Href "http://LyncDiscover.fabrikam.com"

$Link2 = New-CsWebLink -Token "Fabrikam" -Href "http://LyncDiscoverInternal.fabrikam.com"

New-CsAutoDiscoverConfiguration -Identity "site:Redmond" -WebLinks @{Add=$Link1,$Link2}

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 2 create a new collection of Autodiscover configuration settings for the Redmond site and assign those new settings a pair of Autodiscover URLs: http://LyncDiscover.fabrikam.com and http://LyncDiscoverInternal.fabrikam.com.
In order to carry out this task, the first two commands use the New-CsWebLink cmdlet to create the two Autodiscover URLs; the newly-created URLs are then stored in variables named $Link1 and $Link2.
After the two URLs are created, the third command uses the New-CsAutoDiscoverConfiguration cmdlet to create the new Autodiscover configuration settings.
In order to assign the two URLs to these settings, the WebLinks parameter is included along with the parameter value @{Add=$Link1,$Link2}.
That syntax causes the values stored in the variables $Link1 and $Link2 to be added to the WebLinks property.

$Link1 = New-CsWebLink -Token "Fabrikam" -Href "http://LyncDiscover.fabrikam.com"

$Link2 = New-CsWebLink -Token "Fabrikam" -Href "http://LyncDiscoverInternal.fabrikam.com"

New-CsAutoDiscoverConfiguration -Identity "site:Redmond" -WebLinks @{Add=$Link1,$Link2}

## PARAMETERS

### -Identity
Unique identifier for the collection of Autodiscover configuration settings to be modified.
To create a collection configured at the site scope, use syntax similar to this:

-Identity "site:Redmond"

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

### -ExternalSipClientAccessFqdn
Fully qualified domain name of the server used for external client access.

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

### -ExternalSipClientAccessPort
Port used for eternal client access.

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
If you assign the output of a command called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling the Set-CsAutoDiscoverConfiguration cmdlet.

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

### -WebLinks
Collection of Autodiscover URLs.
These URLs must be created by using the New-CsWebLink cmdlet.

```yaml
Type: PSListModifier
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

### -EnableCertificateProvisioningServiceUrl
When set to True (the default value), the Certificate Provisioning Service URL is included in Autodiscover Service responses.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
New-CsAutoDiscoverConfiguration does not accept pipelined input.

###  
The New-CsAutoDiscoverConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Creates new instances of the Microsoft.Rtc.Management.WriteableConfig.Settings.AutoDiscoverConfiguration.AutoDiscoverConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/6b878b0e-f0c0-46a2-99b8-fd2105250600(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6b878b0e-f0c0-46a2-99b8-fd2105250600(OCS.16).aspx)

