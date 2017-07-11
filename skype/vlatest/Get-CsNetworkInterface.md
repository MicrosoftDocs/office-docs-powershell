---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsNetworkInterface

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about the network interfaces in use on computers running Microsoft Lync Server 2010 services or server roles.

Below Content Applies To: Lync Server 2013

Returns information about the network interfaces in use on computers running Lync Server services or server roles.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Returns information about the network interfaces in use on computers running Skype for Business Server 2015 services or server roles.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsNetworkInterface [[-Identity] <NetworkInterfaceIdentity>] [-ComputerFqdn <Fqdn>] [<CommonParameters>]
```

### Filter
```
Get-CsNetworkInterface [-Filter <String>] [-ComputerFqdn <Fqdn>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

In order for information to be transmitted from one computer to another, computers need network interfaces: connections between a computer and the network.
Computers running Lync Server 2010 services or server roles must have at least one network interface; otherwise they will not be able to communicate with other computers.
However, these computers can also have multiple network interfaces; for example, an Edge Server might have one interface for connecting to the internal network and a second interface for connecting to the Internet.
The Get-CsNetworkInterface cmdlet provides a way for administrators to return information about the network interfaces currently in use on computers running Lync Server services or server roles.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsNetworkInterface cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsNetworkInterface"}

Below Content Applies To: Lync Server 2013

In order for information to be transmitted from one computer to another, computers need network interfaces: connections between a computer and the network.
Computers running Lync Server services or server roles must have at least one network interface; otherwise they will not be able to communicate with other computers.
However, these computers can also have multiple network interfaces; for example, an Edge Server might have one interface for connecting to the internal network and a second interface for connecting to the Internet.
The Get-CsNetworkInterface cmdlet provides a way for administrators to return information about the network interfaces currently in use on computers running Lync Server services or server roles.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsNetworkInterface cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsNetworkInterface"}

Below Content Applies To: Skype for Business Server 2015

In order for information to be transmitted from one computer to another, computers need network interfaces: connections between a computer and the network.
Computers running Skype for Business Server 2015 services or server roles must have at least one network interface; otherwise they will not be able to communicate with other computers.
However, these computers can also have multiple network interfaces; for example, an Edge Server might have one interface for connecting to the internal network and a second interface for connecting to the Internet.
The Get-CsNetworkInterface cmdlet provides a way for administrators to return information about the network interfaces currently in use on computers running Skype for Business Server 2015 services or server roles.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsNetworkInterface
```

The preceding command returns information for all the network interfaces configured for use in the organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns information for all the network interfaces configured for use in the organization.

Get-CsNetworkInterface

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns information for all the network interfaces configured for use in the organization.

Get-CsNetworkInterface

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsNetworkInterface -Identity atl-cs-001.litwareinc.com/Primary/1
```

The command shown in Example 2 returns information about a single network interface: the interface that has the Identity atl-cs-001.litwareinc.com.com/Primary/1.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 returns information about a single network interface: the interface that has the Identity atl-cs-001.litwareinc.com.com/Primary/1.

Get-CsNetworkInterface -Identity atl-cs-001.litwareinc.com/Primary/1

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 returns information about a single network interface: the interface that has the Identity atl-cs-001.litwareinc.com.com/Primary/1.

Get-CsNetworkInterface -Identity atl-cs-001.litwareinc.com/Primary/1

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsNetworkInterface -Filter "*.litwareinc.com*"
```

In Example 3, information is returned for all the network interfaces in the domain litwareinc.com.
To do this, the Filter parameter is included, along with the filter value "*.litwareinc.com*".
This filter value limits the returned data to interfaces that have an Identity that includes the string value "litwareinc.com".

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, information is returned for all the network interfaces in the domain litwareinc.com.
To do this, the Filter parameter is included, along with the filter value "*.litwareinc.com*".
This filter value limits the returned data to interfaces that have an Identity that includes the string value "litwareinc.com".

Get-CsNetworkInterface -Filter "*.litwareinc.com*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, information is returned for all the network interfaces in the domain litwareinc.com.
To do this, the Filter parameter is included, along with the filter value "*.litwareinc.com*".
This filter value limits the returned data to interfaces that have an Identity that includes the string value "litwareinc.com".

Get-CsNetworkInterface -Filter "*.litwareinc.com*"

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsNetworkInterface | Where-Object {$_.IPAddress -eq "192.168.0.240"}
```

Example 4 returns information about all the network interfaces configured for the IP address 192.168.0.240.
To do this, the command first calls Get-CsNetworkInterface without any parameters; this returns a collection of all the network interfaces configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those interfaces where the IPAddress property is equal to 192.168.0.240.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns information about all the network interfaces configured for the IP address 192.168.0.240.
To do this, the command first calls Get-CsNetworkInterface without any parameters; this returns a collection of all the network interfaces configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those interfaces where the IPAddress property is equal to 192.168.0.240.

Get-CsNetworkInterface | Where-Object {$_.IPAddress -eq "192.168.0.240"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns information about all the network interfaces configured for the IP address 192.168.0.240.
To do this, the command first calls the Get-CsNetworkInterface cmdlet without any parameters; this returns a collection of all the network interfaces configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those interfaces where the IPAddress property is equal to 192.168.0.240.

Get-CsNetworkInterface | Where-Object {$_.IPAddress -eq "192.168.0.240"}

### -------------------------- Example 5 ------------------------ (Lync Server 2010)
```
Get-CsNetworkInterface | Where-Object {$_.IPAddress -like "192.168.0.*"}
```

The command shown in Example 5 is a variation of the command shown in Example 4; in this case, however, information is returned for all the network interfaces configured for the subnet "192.168.0.*".
This is done by retrieving a collection of all the network interfaces, piping that collection to Where-Object, and then picking out only those interfaces where IPAddress starts with the string value "192.168.0.".

### -------------------------- EXAMPLE 5 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 5 is a variation of the command shown in Example 4; in this case, however, information is returned for all the network interfaces configured for the subnet "192.168.0.*".
This is done by retrieving a collection of all the network interfaces, piping that collection to Where-Object, and then picking out only those interfaces where IPAddress starts with the string value "192.168.0.".

Get-CsNetworkInterface | Where-Object {$_.IPAddress -like "192.168.0.*"}

### -------------------------- EXAMPLE 5 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 5 is a variation of the command shown in Example 4; in this case, however, information is returned for all the network interfaces configured for the subnet "192.168.0.*".
This is done by retrieving a collection of all the network interfaces, piping that collection to the Where-Object cmdlet, and then picking out only those interfaces where IPAddress starts with the string value "192.168.0.".

Get-CsNetworkInterface | Where-Object {$_.IPAddress -like "192.168.0.*"}

### -------------------------- Example 6 ------------------------ (Lync Server 2010)
```
Get-CsNetworkInterface | Where-Object {$_.Interface -eq "External"}
```

The preceding command returns all the network interfaces that have been configured for external access.
To do this, Get-CsNetworkInterface is first called without any parameters; this returns a collection of all the network interfaces currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those items where the Interface property is equal to External.

### -------------------------- EXAMPLE 6 -------------------------- (Lync Server 2013)
```

```

Example 6 returns all the network interfaces that have been configured for external access.
To do this, Get-CsNetworkInterface is first called without any parameters; this returns a collection of all the network interfaces currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those items where the Interface property is equal to External.

Get-CsNetworkInterface | Where-Object {$_.Interface -eq "External"}

### -------------------------- EXAMPLE 6 -------------------------- (Skype for Business Server 2015)
```

```

Example 6 returns all the network interfaces that have been configured for external access.
To do this, the Get-CsNetworkInterface cmdlet is first called without any parameters; this returns a collection of all the network interfaces currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those items where the Interface property is equal to External.

Get-CsNetworkInterface | Where-Object {$_.Interface -eq "External"}

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010

Unique identifier for the network interface to be returned. 
A network interface Identity consists of three parts:

The fully qualified domain name (FQDN) of the computer itself (for example, atl-cs-001.litwareinc.com).

The network interface "side" (Primary; Internal; External; public switched telephone network).
The side indicates the type of traffic the port is used for.

The network interface number for that particular side.

For example: -Identity "atl-cs-001.litwareinc.com/Primary/1".

The Identity, ComputerFqdn, and Filter parameters must be used separately; for example, you cannot run a command that uses both ComputerFqdn and Identity.
In addition, you cannot use wildcard characters when specifying the Identity.
To employ wildcards, use the Filter parameter.

If neither the Identity, ComputerFqdn, nor Filter parameters are used, then Get-CsNetworkInterface returns information about all the network interfaces currently in use on your computers running a Lync Server service or server role.



Below Content Applies To: Lync Server 2013

Unique identifier for the network interface to be returned.
A network interface Identity consists of three parts:

The fully qualified domain name (FQDN) of the computer itself (for example, atl-cs-001.litwareinc.com).

The network interface "side" (Primary; Internal; External; public switched telephone network).
The side indicates the type of traffic the port is used for.

The network interface number for that particular side.

For example: -Identity "atl-cs-001.litwareinc.com/Primary/1".

The Identity, ComputerFqdn, and Filter parameters must be used separately; for example, you cannot run a command that uses both ComputerFqdn and Identity.
In addition, you cannot use wildcard characters when specifying the Identity.
To employ wildcards, use the Filter parameter.

If neither the Identity, ComputerFqdn, nor Filter parameters are used, then Get-CsNetworkInterface returns information about all the network interfaces currently in use on your computers running a Lync Server service or server role.



Below Content Applies To: Skype for Business Server 2015

Unique identifier for the network interface to be returned.
A network interface Identity consists of three parts:

The fully qualified domain name (FQDN) of the computer itself (for example, atl-cs-001.litwareinc.com).

The network interface "side" (Primary; Internal; External; public switched telephone network).
The side indicates the type of traffic the port is used for.

The network interface number for that particular side.

For example:

-Identity "atl-cs-001.litwareinc.com/Primary/1"

The Identity, ComputerFqdn, and Filter parameters must be used separately; for example, you cannot run a command that uses both ComputerFqdn and Identity.
In addition, you cannot use wildcard characters when specifying the Identity.
To employ wildcards, use the Filter parameter.

If neither the Identity, ComputerFqdn, nor Filter parameters are used, then the Get-CsNetworkInterface cmdlet returns information about all the network interfaces currently in use on your computers running a Skype for Business Server 2015 service or server role.



```yaml
Type: NetworkInterfaceIdentity
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

Enables you to use wildcards when specifying the network interface (or interfaces) to be returned.
For example, this syntax returns information about the Primary network interface used on all of your computers running a Lync Server service or server role: -Filter "*/Primary/*".



Below Content Applies To: Skype for Business Server 2015

Enables you to use wildcards when specifying the network interface (or interfaces) to be returned.
For example, this syntax returns information about the Primary network interface used on all of your computers running a Skype for Business Server 2015 service or server role:

-Filter "*/Primary/*"



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

### -ComputerFqdn
Below Content Applies To: Lync Server 2010, Lync Server 2013

FQDN of the computer for which network interface information is to be returned.
For example, to return network interface information for the computer atl-cs-001.litwareinc.com (and only for that computer) use this syntax: -ComputerFqdn atl-cs-001.litwareinc.com.



Below Content Applies To: Skype for Business Server 2015

FQDN of the computer for which network interface information is to be returned.
For example, to return network interface information for the computer atl-cs-001.litwareinc.com (and only for that computer) use this syntax:

-ComputerFqdn atl-cs-001.litwareinc.com



```yaml
Type: Fqdn
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
Get-CsNetworkInterface does not accept pipelined input.

###  
None.
The Get-CsNetworkInterface cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsNetworkInterface returns an instance of the Microsoft.Rtc.Management.Xds.DisplayNetworkInterface object.

###  
The Get-CsNetworkInterface cmdlet returns an instance of the Microsoft.Rtc.Management.Xds.DisplayNetworkInterface object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/06a5fedf-d87e-4469-9bd6-ad16c1f9a801(OCS.14).aspx)

[Get-CsComputer]()

[Online Version](http://technet.microsoft.com/EN-US/library/06a5fedf-d87e-4469-9bd6-ad16c1f9a801(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/06a5fedf-d87e-4469-9bd6-ad16c1f9a801(OCS.16).aspx)

