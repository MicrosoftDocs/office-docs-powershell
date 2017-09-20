---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsAutodiscoverConfiguration

## SYNOPSIS
Modifies an existing collection of Autodiscover Service configuration settings.
The Autodiscover Service provides a way for client applications such as Lync Web App or Lync Mobile to locate key resources such as a user's home pool or the URL for joining a dial-in conference.
This cmdlet was introduced in the cumulative update for Lync Server 2010: November 2011.


## SYNTAX

### Identity
```
Set-CsAutodiscoverConfiguration [[-Identity] <XdsIdentity>] [-Confirm] [-ExternalSipClientAccessFqdn <String>]
 [-ExternalSipClientAccessPort <UInt32>] [-Force] [-WebLinks <PSListModifier>] [-WhatIf]
 [-EnableCertificateProvisioningServiceUrl <Boolean>] [<CommonParameters>]
```

### Instance
```
Set-CsAutodiscoverConfiguration [-Confirm] [-ExternalSipClientAccessFqdn <String>]
 [-ExternalSipClientAccessPort <UInt32>] [-Force] [-Instance <PSObject>] [-WebLinks <PSListModifier>] [-WhatIf]
 [-EnableCertificateProvisioningServiceUrl <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
For client applications to make the most effective use of Skype for Business Server those applications need to know the location of key Skype for Business Server components.
For example, authenticated users must be able to locate their home pool; after all, they can only be authenticated by that home pool.
Likewise, unauthenticated users must be able to do such things as locate the URL used for joining a conference.

If all your users logged on from behind the organization's firewall discovering these locations would be a relatively simple task.
However, this relatively simple task gets more and more complicated as users access the system from external locations using Lync Mobile.

This is especially true in split-domain scenarios, scenarios in which some of an organization's users have accounts on the on-premises version of Skype for Business Server while other users have accounts on Skype for Business Online.
In cases such as this, user accounts might be located in different Active Directory forests.
That can pose a problem: for example, if a US-based user logs on from Europe the system must be able to recognize his or her forest and then refer the logon request to the proper pool.

The Autodiscover Service was introduced in the cumulative update for Lync Server: November 2011 in order to address these issues.
When a client application attempts to access Skype for Business Server, the Autodiscover service parses the client SIP address and then redirects that request to the appropriate pool.
Client applications connect to the Autodiscover service by sending an HTTP request to an Autodiscover URL; these URLs must be configured by administrators in order for the Autodiscover service to work.
(Note that, in addition to configuring URLs, administrators must also create DNS records that correspond to these URLs.)

Autodiscover URLs are assigned to Autodiscover Service configuration settings.
In turn, these settings can be applied to the global scope or to the site scope.
When you install Skype for Business Server a global collection of settings will be created for you.
(However, no Autodiscover URLs will be assigned to that collection.) If a single collection of Autodiscover settings will not fill your needs, then you can use the `New-CsAutoDiscoverConfiguration` cmdlet to create additional configuration settings at the site scope.
From there, you can use the `Set-CsAutoDiscoverConfiguration` cmdlet to add or remove Autodiscover URLs from the global collection or from any site-scoped collection.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$Link1 = New-CsWebLink -Token "Fabrikam" -Href "http://LyncDiscover.fabrikam.com"

Set-CsAutoDiscoverConfiguration -Identity "site:Redmond" -WebLinks @{Add=$Link1}
```

The commands shown in Example 1 add a new Autodiscover URL (http://LyncDiscover.fabrikam.com) to the Autodiscover configuration settings assigned to the Redmond site.
To do this, the first command in the example uses the `New-CsWebLink` cmdlet to create a new Autodiscover URL; that URL is stored in a variable named $Link1.
In the second command, the `Set-CsAutoDiscoverConfiguration` cmdlet is used to add the new URL to any URLs already assigned to these settings.
This is done by using the WebLinks parameter and the parameter value @{Add=$Link1}.


### -------------------------- Example 2 --------------------------
```
$Link1 = Get-CsAutoDiscoverConfiguration -Identity "site:Redmond" | Select-Object -ExpandProperty WebLinks | Where-Object {$_.Token -eq "Fabrikam"}

Set-CsAutoDiscoverConfiguration -Identity "site:Redmond" -WebLinks @{Remove=$Link1}
```

The commands shown in Example 2 demonstrate how you can remove a URL from a collection of Autodiscover Service configuration settings.
In order to do this, the first command in the collection retrieves an object reference to the URL to be deleted (a URL that has a Token equal to "Fabrikam").
This is done by first calling the `Get-CsAutoDiscoverConfiguration` cmdlet in order to retrieve the Autodiscover Service settings for the Redmond site.
That collection in then piped to the `Select-Object` cmdlet, which uses the ExpandProperty parameter to "expand" the WebLinks property.
(When a property is expanded, that provides the `Get-CsAutoDiscoverConfiguration` cmdlet access to the individual objects stored in that property.) These WebLinks objects are then piped to the `Where-Object` cmdlet, which selects the one object where the Token property is equal to "Fabrikam".
That WebLinks object is then stored in a variable named $Link1.

After that the second command in the example uses the `Set-CsAutoDiscoverConfiguration` cmdlet to remove the object stored in $Link1.
To do this, the command uses the WebLinks parameter and the parameter value @{Remove=$Link1}.


### -------------------------- Example 3 --------------------------
```
$Link2 = New-CsWebLink -Token "Contoso" -Href "http://LyncDiscover.contoso.com"

Set-CsAutoDiscoverConfiguration -Identity "site:Redmond" -WebLinks @{Replace=$Link2}
```

Example 3 shows how you can replace an existing collection of Autodiscover URLs with, in this case, a single URL.
To carry out this task, the first command in the example uses the `New-CsWebLink` cmdlet to create a new Autodiscover URL for http://LyncDiscover.contoso.com; the resulting URL is stored in a variable named $Link2.
The second command then uses the `Set-CsAutoDiscoverConfiguration` cmdlet and the WebLinks parameter to remove any URLs previously assigned to the Redmond site and replace them with the URL for http://LyncDiscover.contoso.com.
To do this, the command uses the Replace method instead of the Add or Remove method.


### -------------------------- Example 4 --------------------------
```
Set-CsAutoDiscoverConfiguration -Identity "site:Redmond" -WebLinks $Null
```

The command shown in Example 4 removes all the Autodiscover URLs that have been assigned to the Redmond site.
To do this, the command sets the WebLinks property to a null value.
In turn, that deletes any URLs previously assigned to that property.


## PARAMETERS

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
Fully qualified domain name (FQDN) of the server that is used for external client access.


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

### -Identity
Unique identifier for the collection of Autodiscover configuration settings to be modified.
To modify to the global collection, use this syntax:

`-Identity "global"`

To modify a collection configured at the site scope, use syntax similar to this:

`-Identity "site:Redmond"`

If this parameter is not specified, then the `Set-CsAutoDiscoverConfiguration` cmdlet will automatically modify the global settings.


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

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WebLinks
Collection of Autodiscover URLs.
These URLs must be created by using the `New-CsWebLink` cmdlet.

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
The `Set-CsAutoDiscoverConfiguration` cmdlet accepts pipelined input of the Microsoft.Rtc.Management.WriteableConfig.Settings.AutoDiscoverConfiguration.AutoDiscoverConfiguration object.

## OUTPUTS

###  
None.
The `Set-CsAutoDiscoverConfiguration` cmdlet modifies instances of the Microsoft.Rtc.Management.WriteableConfig.Settings.AutoDiscoverConfiguration.AutoDiscoverConfiguration object.

## NOTES

## RELATED LINKS
