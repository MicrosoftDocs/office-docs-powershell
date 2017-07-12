---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsPool

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns information about the pools used in your deployment of Microsoft Lync Server 2010.
Pools are a collection of computers in a site that all run the same set of Lync Server 2010 services.

**Below Content Applies To:** Lync Server 2013

Returns information about the pools used in your deployment of Lync Server.
Pools are a collection of computers in a site that all run the same set of Lync Server services.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the pools used in your deployment of Skype for Business Server 2015.
Pools are a collection of computers in a site that all run the same set of Skype for Business Server 2015 services.
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
**Below Content Applies To:** Lync Server 2010

In Lync Server 2010, a pool is one or more computers in the same site that run the same set of services.
For example, if you have one server running the Mediation Server service in the Redmond site, then you would have a Mediation Server pool consisting of that one computer.
If you have two computers running Mediation Server in the Redmond site, then you would have a Mediation Server pool consisting of two computers.
The number of pools used in your organization depends on the number of servers you have and the different services run by those servers.

The Get-CsPool cmdlet enables you to retrieve information about each pool in use in your organization, including information about the services running on each of those pools.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsPool cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsPool"}

**Below Content Applies To:** Lync Server 2013

In Lync Server, a pool is one or more computers in the same site that run the same set of services.
For example, if you have one server running the Mediation Server service in the Redmond site, then you would have a Mediation Server pool consisting of that one computer.
If you have two computers running Mediation Server in the Redmond site, then you would have a Mediation Server pool consisting of two computers.
The number of pools used in your organization depends on the number of servers you have and the different services run by those servers.

The Get-CsPool cmdlet enables you to retrieve information about each pool in use in your organization, including information about the services running on each of those pools.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsPool cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsPool"}

**Below Content Applies To:** Skype for Business Server 2015

In Skype for Business Server 2015, a pool is one or more computers in the same site that run the same set of services.
For example, if you have one server running the Mediation Server service in the Redmond site, then you would have a Mediation Server pool consisting of that one computer.
If you have two computers running Mediation Server in the Redmond site, then you would have a Mediation Server pool consisting of two computers.
The number of pools used in your organization depends on the number of servers you have and the different services run by those servers.

The Get-CsPool cmdlet enables you to retrieve information about each pool in use in your organization, including information about the services running on each of those pools.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsPool
```

The preceding command returns all the pools found in your deployment of Lync Server.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns all the pools found in your deployment of Lync Server.

Get-CsPool

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns all the pools found in your deployment of Skype for Business Server 2015.

Get-CsPool

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsPool | Select-Object -ExpandProperty Computers
```

Example 2 displays detailed information about the computers found in each of your pools.
This is done by calling Get-CsPool, and then piping the returned data to the Select-Object cmdlet.
Select-Object's ExpandProperty parameter is then used to "expand" the value of the Computers property.
The Computers property is an array of objects representing each computer in the pool.
When you expand the Computers property you get back detailed information about each of these computers.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 displays detailed information about the computers found in each of your pools.
This is done by calling Get-CsPool, and then piping the returned data to the Select-Object cmdlet.
Select-Object's ExpandProperty parameter is then used to "expand" the value of the Computers property.
The Computers property is an array of objects representing each computer in the pool.
When you expand the Computers property you get back detailed information about each of these computers.

Get-CsPool | Select-Object -ExpandProperty Computers

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 displays detailed information about the computers found in each of your pools.
This is done by calling the Get-CsPool cmdlet, and then piping the returned data to the Select-Object cmdlet.
The ExpandProperty parameter is then used to "expand" the value of the Computers property.
The Computers property is an array of objects representing each computer in the pool.
When you expand the Computers property you get back detailed information about each of these computers.

Get-CsPool | Select-Object -ExpandProperty Computers

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsPool -Identity atl-cs-001.litwareinc.com
```

In the preceding example, the Identity parameter is used to restrict the returned data to the pool that has the Identity atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, the Identity parameter is used to restrict the returned data to the pool that has the Identity atl-cs-001.litwareinc.com.

Get-CsPool -Identity atl-cs-001.litwareinc.com

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the Identity parameter is used to restrict the returned data to the pool that has the Identity atl-cs-001.litwareinc.com.

Get-CsPool -Identity atl-cs-001.litwareinc.com

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsPool -Site "Redmond"
```

Example 4 returns all the pools found in the Redmond site.
To do this, the command uses the Site parameter; the parameter value "Redmond" limits the returned data to pools where the Site property is equal to Redmond.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns all the pools found in the Redmond site.
To do this, the command uses the Site parameter; the parameter value "Redmond" limits the returned data to pools where the Site property is equal to Redmond.

Get-CsPool -Site "Redmond"

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns all the pools found in the Redmond site.
To do this, the command uses the Site parameter; the parameter value "Redmond" limits the returned data to pools where the Site property is equal to Redmond.

Get-CsPool -Site "Redmond"

### -------------------------- Example 5 -------------------------- (Lync Server 2010)
```
Get-CsPool | Where-Object {$_.Services.Count -eq 0}
```

The command shown in Example 5 returns a collection of all the pools that do not have any Lync Server services installed.
To carry out this task, the command first calls Get-CsPool without any parameters; that returns a collection of all the pools currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out all the pools where the Services.Count property is equal to 0.
If the Count equals 0, that means that there are no Lync Server  services configured for that pool.

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 5 returns a collection of all the pools that do not have any Lync Server services installed.
To carry out this task, the command first calls Get-CsPool without any parameters; that returns a collection of all the pools currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out all the pools where the Services.Count property is equal to 0.
If the Count equals 0, that means that there are no Lync Server services configured for that pool.

Get-CsPool | Where-Object {$_.Services.Count -eq 0}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 5 returns a collection of all the pools that do not have any Skype for Business Server 2015 services installed.
To carry out this task, the command first calls the Get-CsPool cmdlet without any parameters; that returns a collection of all the pools currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out all the pools where the Services.Count property is equal to 0.
If the Count equals 0, that means that there are no Skype for Business Server 2015 services configured for that pool.

Get-CsPool | Where-Object {$_.Services.Count -eq 0}

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Fully qualified domain name (FQDN) of the pool to be returned.
For example: -Identity atl-cs-001.litwareinc.com.

If this parameter is not present, then all the pools in your organization will be returned.



**Below Content Applies To:** Skype for Business Server 2015

Fully qualified domain name (FQDN) of the pool to be returned.
For example:

-Identity atl-cs-001.litwareinc.com

If this parameter is not present, then all the pools in your organization will be returned.



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
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Enables you to use wildcards when specifying the Identity of the pool (or pools) to be returned.
For example, this syntax returns all the pools that have an Identity that ends with the string value ".fabrikam.com": -Filter "*.fabrikam.com".

Note that you cannot use both the Filter and the Identity parameters in the same command.



**Below Content Applies To:** Skype for Business Server 2015

Enables you to use wildcards when specifying the Identity of the pool (or pools) to be returned.
For example, this syntax returns all the pools that have an Identity that ends with the string value ".fabrikam.com":

-Filter "*.fabrikam.com"

Note that you cannot use both the Filter and the Identity parameters in the same command.



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

### -Site
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

Returns all the pools found on the specified site.
The site in question should be referenced using the site's DisplayName (for example, Redmond) rather than the site Identity (for example, site:Redmond).
For example: -Site "Redmond".
You can retrieve the display names for your sites by running this command:

Get-CsSite | Select-Object Identity, DisplayName



**Below Content Applies To:** Skype for Business Server 2015

Returns all the pools found on the specified site.
The site in question should be referenced using the site's DisplayName (for example, Redmond) rather than the site Identity (for example, site:Redmond).
For example:

-Site "Redmond"

You can retrieve the display names for your sites by running this command:

Get-CsSite | Select-Object Identity, DisplayName



```yaml
Type: String
Parameter Sets: (All)
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
Get-CsPool does not accept pipelined input.

###  
None.
The Get-CsPool cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsPool returns instances of the Microsoft.Rtc.Management.Deploy.Internal.Cluster object.

###  
The Get-CsPool cmdlet returns instances of the Microsoft.Rtc.Management.Deploy.Internal.Cluster object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/e0911c68-9a0a-461a-88d6-c610c6cd996c(OCS.14).aspx)

[Get-CsSite]()

[Get-CsTopology]()

[Online Version](http://technet.microsoft.com/EN-US/library/e0911c68-9a0a-461a-88d6-c610c6cd996c(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/e0911c68-9a0a-461a-88d6-c610c6cd996c(OCS.16).aspx)

