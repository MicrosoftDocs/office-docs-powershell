---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsSite
schema: 2.0.0
---

# Get-CsSite

## SYNOPSIS
Returns information about the sites created as part of your Skype for Business Server infrastructure.
Sites represent a collection of Skype for Business Server 2015 pools and are typically designed around geographic regions.
Skype for Business Server includes two types of sites: data center sites and remote sites (branch sites).
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
Lync Server 2010 introduced a new concept to the topology: sites.
Sites (which should not be confused with Active Directory sites or Exchange sites) are a collection of Skype for Business Server pools and servers that are typically organized according to geography and network bandwidth.
For example, if all your computers in Redmond are located on the same local area network with high-speed, low-latency connections, you might designate a Redmond site that encompasses those computers.
If your computers in Dublin are located on their own local area network, and share high-speed, low-latency connections, then you might create a separate Dublin site as well.
Sites play a key role in Skype for Business Server management: most policies and settings can be configured at the site scope, making it easy to do such things as apply one set of dial plans to users in Redmond and a completely different set of dial plans to users in Dublin.

The Get-CsSite cmdlet enables you to return information about all the sites in your organization, including information about the pools that make up each of those sites.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsSite
```

Example 1 retrieves information for all your Skype for Business Server sites.

### -------------------------- Example 2 --------------------------
```
Get-CsSite -Identity "Redmond"
```

In Example 2, information is returned for a single site: the site with the Identity Redmond.

### -------------------------- Example 3 --------------------------
```
Get-CsSite | Where-Object {$_.SiteType -eq "CentralSite"}
```

The command shown in Example 3 returns information for your central site.
To carry out this task, the command first calls the Get-CsSite cmdlet in order to return a collection of all the sites configured for use in your organization.
This collection is then piped to the Where-Object cmdlet, which picks out the one site where the SiteType property is equal to "CentralSite".

### -------------------------- Example 4 --------------------------
```
Get-CsSite -Identity "Redmond" | Select-Object -ExpandProperty Pools
```

Example 4 displays the list of pools found in the Redmond site.
To do this, the command first retrieves complete information for the Redmond site, and then pipes that data to the Select-Object cmdlet.
In turn, the Select-Object cmdlet uses the ExpandProperty parameter to "expand" the value of the Pools property.
Expanding a property value means that all the values stored in that property will be displayed on the screen in an easy-to-read format.


## PARAMETERS

### -Identity
Name of the site to be returned.
Note that you should specify just the site name; for example:

`-Identity "Redmond"`

Do not use the format "site:Redmond" when specifying the Identity.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to use wildcards when specifying the Identity of the site (or sites) to be returned.
For example, this syntax returns all the pools that have an Identity that include the string value "Dublin":

`-Filter "*Dublin*"`

Note that you cannot use both Filter and Identity in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

### Microsoft.Rtc.Management.Deploy.Internal.Site+CentralSite


## NOTES


## RELATED LINKS

[Set-CsSite](Set-CsSite.md)

