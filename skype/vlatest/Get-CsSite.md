---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsSite

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about the sites created as part of your Microsoft Lync Server 2010 infrastructure.
Sites represent a collection of Lync Server 2010 pools and are typically designed around geographic regions.
Lync Server includes two types of sites: data center sites and remote sites (branch sites).

Below Content Applies To: Lync Server 2013

Returns information about the sites created as part of your Lync Server infrastructure.
Sites represent a collection of Lync Server pools and are typically designed around geographic regions.
Lync Server includes two types of sites: data center sites and remote sites (branch sites).
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Returns information about the sites created as part of your Skype for Business Server 2015 infrastructure.
Sites represent a collection of Skype for Business Server 2015 pools and are typically designed around geographic regions.
Skype for Business Server 2015 includes two types of sites: data center sites and remote sites (branch sites).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsSite [[-Identity] <XdsGlobalRelativeIdentity>] [<CommonParameters>]
```

### Filter
```
Get-CsSite [-Filter <String>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Lync Server 2010 introduces a new concept to the Lync Server topology: sites.
Sites (which should not be confused with Active Directory sites or Microsoft Exchange Server sites) are a collection of Lync Server pools and servers that are typically organized according to geography and network bandwidth.
For example, if all your computers in Redmond are located on the same local area network with high-speed, low-latency connections, you might designate a Redmond site that encompasses those computers.
If your computers in Dublin are located on their own local area network, and share high-speed, low-latency connections, then you might create a separate Dublin site as well.
Sites play a key role in Lync Server management: most policies and settings can be configured at the site scope, making it easy to do such things as apply one set of dial plans to users in Redmond and a completely different set of dial plans to users in Dublin.

The Get-CsSite cmdlet enables you to return information about all the sites in your organization, including information about the pools that make up each of those sites.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsSite cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsSite"}

Below Content Applies To: Lync Server 2013

Lync Server 2010 introduced a new concept to the Lync Server topology: sites.
Sites (which should not be confused with Active Directory sites or Microsoft Exchange Server sites) are a collection of Lync Server pools and servers that are typically organized according to geography and network bandwidth.
For example, if all your computers in Redmond are located on the same local area network with high-speed, low-latency connections, you might designate a Redmond site that encompasses those computers.
If your computers in Dublin are located on their own local area network, and share high-speed, low-latency connections, then you might create a separate Dublin site as well.
Sites play a key role in Lync Server management: most policies and settings can be configured at the site scope, making it easy to do such things as apply one set of dial plans to users in Redmond and a completely different set of dial plans to users in Dublin.

The Get-CsSite cmdlet enables you to return information about all the sites in your organization, including information about the pools that make up each of those sites.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsSite cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsSite"}

Below Content Applies To: Skype for Business Server 2015

Lync Server 2010 introduced a new concept to the topology: sites.
Sites (which should not be confused with Active Directory sites or Exchange sites) are a collection of Skype for Business Server 2015 pools and servers that are typically organized according to geography and network bandwidth.
For example, if all your computers in Redmond are located on the same local area network with high-speed, low-latency connections, you might designate a Redmond site that encompasses those computers.
If your computers in Dublin are located on their own local area network, and share high-speed, low-latency connections, then you might create a separate Dublin site as well.
Sites play a key role in Skype for Business Server 2015 management: most policies and settings can be configured at the site scope, making it easy to do such things as apply one set of dial plans to users in Redmond and a completely different set of dial plans to users in Dublin.

The Get-CsSite cmdlet enables you to return information about all the sites in your organization, including information about the pools that make up each of those sites.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsSite
```

Example 1 retrieves information for all your Lync Server sites.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 retrieves information for all your Lync Server sites.

Get-CsSite

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 retrieves information for all your Skype for Business Server 2015 sites.

Get-CsSite

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsSite -Identity "Redmond"
```

In Example 2, information is returned for a single site: the site with the Identity Redmond.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, information is returned for a single site: the site with the Identity Redmond.

Get-CsSite -Identity "Redmond"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information is returned for a single site: the site with the Identity Redmond.

Get-CsSite -Identity "Redmond"

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsSite | Where-Object {$_.SiteType -eq "CentralSite"}
```

The command shown in Example 3 returns information for your central site.
To carry out this task, the command first calls Get-CsSite in order to return a collection of all the sites configured for use in your organization.
This collection is then piped to the Where-Object, which picks out the one site where the SiteType property is equal to "CentralSite".

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 returns information for your central site.
To carry out this task, the command first calls Get-CsSite in order to return a collection of all the sites configured for use in your organization.
This collection is then piped to the Where-Object, which picks out the one site where the SiteType property is equal to "CentralSite".

Get-CsSite | Where-Object {$_.SiteType -eq "CentralSite"}

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 returns information for your central site.
To carry out this task, the command first calls the Get-CsSite cmdlet in order to return a collection of all the sites configured for use in your organization.
This collection is then piped to the Where-Object cmdlet, which picks out the one site where the SiteType property is equal to "CentralSite".

Get-CsSite | Where-Object {$_.SiteType -eq "CentralSite"}

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsSite -Identity "Redmond" | Select-Object -ExpandProperty Pools
```

The preceding command displays the list of pools found in the Redmond site.
To do this, the command first retrieves complete information for the Redmond site, and then pipes that data to the Select-Object cmdlet.
In turn, Select-Object uses the ExpandProperty parameter to "expand" the value of the Pools property.
Expanding a property value means that all the values stored in that property will be displayed on the screen in an easy-to-read format.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 displays the list of pools found in the Redmond site.
To do this, the command first retrieves complete information for the Redmond site, and then pipes that data to the Select-Object cmdlet.
In turn, Select-Object uses the ExpandProperty parameter to "expand" the value of the Pools property.
Expanding a property value means that all the values stored in that property will be displayed on the screen in an easy-to-read format.

Get-CsSite -Identity "Redmond" | Select-Object -ExpandProperty Pools

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 displays the list of pools found in the Redmond site.
To do this, the command first retrieves complete information for the Redmond site, and then pipes that data to the Select-Object cmdlet.
In turn, the Select-Object cmdlet uses the ExpandProperty parameter to "expand" the value of the Pools property.
Expanding a property value means that all the values stored in that property will be displayed on the screen in an easy-to-read format.

Get-CsSite -Identity "Redmond" | Select-Object -ExpandProperty Pools

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Name of the site to be returned.
Note that you should specify just the site name; for example: -Identity "Redmond".
Do not use the format "site:Redmond" when specifying the Identity.



Below Content Applies To: Skype for Business Server 2015

Name of the site to be returned.
Note that you should specify just the site name; for example:

-Identity "Redmond"

Do not use the format "site:Redmond" when specifying the Identity.



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Below Content Applies To: Lync Server 2010, Lync Server 2013

Enables you to use wildcards when specifying the Identity of the site (or sites) to be returned.
For example, this syntax returns all the pools that have an Identity that include the string value "Dublin": -Filter "*Dublin*".

Note that you cannot use both Filter and Identity in the same command.



Below Content Applies To: Skype for Business Server 2015

Enables you to use wildcards when specifying the Identity of the site (or sites) to be returned.
For example, this syntax returns all the pools that have an Identity that include the string value "Dublin":

-Filter "*Dublin*"

Note that you cannot use both Filter and Identity in the same command.



```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Get-CsSite does not accept pipelined input.

###  
None.
The Get-CsSite cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsSite returns instances of the Microsoft.Rtc.Management.Deploy.Internal.Site+CentralSite object.

###  
The Get-CsSite cmdlet returns instances of the Microsoft.Rtc.Management.Deploy.Internal.Site+CentralSite object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/0e5fd5b8-17aa-433d-9915-3b88281fa2c2(OCS.14).aspx)

[Set-CsSite]()

[Online Version](http://technet.microsoft.com/EN-US/library/0e5fd5b8-17aa-433d-9915-3b88281fa2c2(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/0e5fd5b8-17aa-433d-9915-3b88281fa2c2(OCS.16).aspx)

