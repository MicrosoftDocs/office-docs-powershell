---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsNetworkInterface
schema: 2.0.0
---

# Get-CsNetworkInterface

## SYNOPSIS
Returns information about the network interfaces in use on computers running Skype for Business Server services or server roles.
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
In order for information to be transmitted from one computer to another, computers need network interfaces: connections between a computer and the network.
Computers running Skype for Business Server services or server roles must have at least one network interface; otherwise they will not be able to communicate with other computers.
However, these computers can also have multiple network interfaces; for example, an Edge Server might have one interface for connecting to the internal network and a second interface for connecting to the Internet.
The Get-CsNetworkInterface cmdlet provides a way for administrators to return information about the network interfaces currently in use on computers running Skype for Business Server services or server roles.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsNetworkInterface
```

Example 1 returns information for all the network interfaces configured for use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsNetworkInterface -Identity atl-cs-001.litwareinc.com/Primary/1
```

The command shown in Example 2 returns information about a single network interface: the interface that has the Identity atl-cs-001.litwareinc.com.com/Primary/1.

### -------------------------- Example 3 --------------------------
```
Get-CsNetworkInterface -Filter "*.litwareinc.com*"
```

In Example 3, information is returned for all the network interfaces in the domain litwareinc.com.
To do this, the Filter parameter is included, along with the filter value "*.litwareinc.com*".
This filter value limits the returned data to interfaces that have an Identity that includes the string value "litwareinc.com".

### -------------------------- Example 4 --------------------------
```
Get-CsNetworkInterface | Where-Object {$_.IPAddress -eq "192.168.0.240"}
```

Example 4 returns information about all the network interfaces configured for the IP address 192.168.0.240.
To do this, the command first calls the Get-CsNetworkInterface cmdlet without any parameters; this returns a collection of all the network interfaces configured for use in the organization.
That collection is then piped to the Where-Object cmdlet, which picks out only those interfaces where the IPAddress property is equal to 192.168.0.240.

### -------------------------- Example 5 --------------------------
```
Get-CsNetworkInterface | Where-Object {$_.IPAddress -like "192.168.0.*"}
```

The command shown in Example 5 is a variation of the command shown in Example 4; in this case, however, information is returned for all the network interfaces configured for the subnet "192.168.0.*".
This is done by retrieving a collection of all the network interfaces, piping that collection to the Where-Object cmdlet, and then picking out only those interfaces where IPAddress starts with the string value "192.168.0.".

### -------------------------- Example 6 --------------------------
```
Get-CsNetworkInterface | Where-Object {$_.Interface -eq "External"}
```

Example 6 returns all the network interfaces that have been configured for external access.
To do this, the Get-CsNetworkInterface cmdlet is first called without any parameters; this returns a collection of all the network interfaces currently in use.
This collection is then piped to the Where-Object cmdlet, which selects only those items where the Interface property is equal to External.


## PARAMETERS

### -Identity
Unique identifier for the network interface to be returned.
A network interface Identity consists of three parts:

- The fully qualified domain name (FQDN) of the computer itself (for example, atl-cs-001.litwareinc.com).
- The network interface "side" (Primary; Internal; External; public switched telephone network).
- The side indicates the type of traffic the port is used for.

The network interface number for that particular side.

For example:

`-Identity "atl-cs-001.litwareinc.com/Primary/1"`

The Identity, ComputerFqdn, and Filter parameters must be used separately; for example, you cannot run a command that uses both ComputerFqdn and Identity.
In addition, you cannot use wildcard characters when specifying the Identity.
To employ wildcards, use the Filter parameter.

If neither the Identity, ComputerFqdn, nor Filter parameters are used, then the Get-CsNetworkInterface cmdlet returns information about all the network interfaces currently in use on your computers running a Skype for Business Server service or server role.

```yaml
Type: NetworkInterfaceIdentity
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
Enables you to use wildcards when specifying the network interface (or interfaces) to be returned.
For example, this syntax returns information about the Primary network interface used on all of your computers running a Skype for Business Server service or server role:

`-Filter "*/Primary/*"`

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

### -ComputerFqdn
FQDN of the computer for which network interface information is to be returned.
For example, to return network interface information for the computer atl-cs-001.litwareinc.com (and only for that computer) use this syntax:

`-ComputerFqdn atl-cs-001.litwareinc.com`

```yaml
Type: Fqdn
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

### Microsoft.Rtc.Management.Xds.DisplayNetworkInterface


## NOTES


## RELATED LINKS

[Get-CsComputer](Get-CsComputer.md)

