---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsPool
schema: 2.0.0
---

# Get-CsPool

## SYNOPSIS
Returns information about the pools used in your deployment of Skype for Business Server.
Pools are a collection of computers in a site that all run the same set of Skype for Business Server services.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsPool [[-Identity] <XdsGlobalRelativeIdentity>] [-Site <String>] [<CommonParameters>]
```

### Filter
```
Get-CsPool [-Filter <String>] [-Site <String>] [<CommonParameters>]
```

## DESCRIPTION
In Skype for Business Server, a pool is one or more computers in the same site that run the same set of services.
For example, if you have one server running the Mediation Server service in the Redmond site, then you would have a Mediation Server pool consisting of that one computer.
If you have two computers running Mediation Server in the Redmond site, then you would have a Mediation Server pool consisting of two computers.
The number of pools used in your organization depends on the number of servers you have and the different services run by those servers.

The Get-CsPool cmdlet enables you to retrieve information about each pool in use in your organization, including information about the services running on each of those pools.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPool
```

Example 1 returns all the pools found in your deployment of Skype for Business Server.

### -------------------------- Example 2 --------------------------
```
Get-CsPool | Select-Object -ExpandProperty Computers
```

Example 2 displays detailed information about the computers found in each of your pools.
This is done by calling the Get-CsPool cmdlet, and then piping the returned data to the Select-Object cmdlet.
The ExpandProperty parameter is then used to "expand" the value of the Computers property.
The Computers property is an array of objects representing each computer in the pool.
When you expand the Computers property you get back detailed information about each of these computers.

### -------------------------- Example 3 --------------------------
```
Get-CsPool -Identity atl-cs-001.litwareinc.com
```

In Example 3, the Identity parameter is used to restrict the returned data to the pool that has the Identity atl-cs-001.litwareinc.com.

### -------------------------- Example 4 --------------------------
```
Get-CsPool -Site "Redmond"
```

Example 4 returns all the pools found in the Redmond site.
To do this, the command uses the Site parameter; the parameter value "Redmond" limits the returned data to pools where the Site property is equal to Redmond.

### -------------------------- Example 5 --------------------------
```
Get-CsPool | Where-Object {$_.Services.Count -eq 0}
```

The command shown in Example 5 returns a collection of all the pools that do not have any Skype for Business Server services installed.
To carry out this task, the command first calls the Get-CsPool cmdlet without any parameters; that returns a collection of all the pools currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out all the pools where the Services.Count property is equal to 0.
If the Count equals 0, that means that there are no Skype for Business Server services configured for that pool.


## PARAMETERS

### -Identity
Fully qualified domain name (FQDN) of the pool to be returned.
For example:

`-Identity atl-cs-001.litwareinc.com`

If this parameter is not present, then all the pools in your organization will be returned.

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
Enables you to use wildcards when specifying the Identity of the pool (or pools) to be returned.
For example, this syntax returns all the pools that have an Identity that ends with the string value ".fabrikam.com":

`-Filter "*.fabrikam.com"`

Note that you cannot use both the Filter and the Identity parameters in the same command.

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

### -Site
Returns all the pools found on the specified site.
The site in question should be referenced using the site's DisplayName (for example, Redmond) rather than the site Identity (for example, site:Redmond).
For example:

`-Site "Redmond"`

You can retrieve the display names for your sites by running this command:

`Get-CsSite | Select-Object Identity, DisplayName`

```yaml
Type: String
Parameter Sets: (All)
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

### Microsoft.Rtc.Management.Deploy.Internal.Cluster


## NOTES


## RELATED LINKS

[Get-CsSite](Get-CsSite.md)

[Get-CsTopology](Get-CsTopology.md)

