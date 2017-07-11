---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsComputer

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Returns information about the computers that perform service roles within your Microsoft Lync Server 2010 infrastructure.

Below Content Applies To: Lync Server 2013

Returns information about the computers that perform service roles within your Lync Server infrastructure.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Returns information about the computers that perform service roles within your Skype for Business Server 2015 infrastructure.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsComputer [[-Identity] <XdsGlobalRelativeIdentity>] [-Pool <String>] [-Local] [<CommonParameters>]
```

### Filter
```
Get-CsComputer [-Filter <String>] [-Pool <String>] [-Local] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

Get-CsComputer provides a way to quickly identify computers that are running Lync Server 2010 services or server roles.
Called without any parameters, Get-CsComputer returns a collection of all the computers that are running Lync Server 2010 services or server roles; this collection includes the Identity, pool name, and fully qualified domain name (FQDN) for each computer.
Alternatively, you can use optional parameters such as Identity, Filter, or Pool to limit the returned data to a single computer or set of computers.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsComputer cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.

Below Content Applies To: Lync Server 2013

Get-CsComputer provides a way to quickly identify computers that are running Lync Server services or server roles.
Called without any parameters, Get-CsComputer returns a collection of all the computers that are running Lync Server services or server roles; this collection includes the Identity, pool name, and fully qualified domain name (FQDN) for each computer.
Alternatively, you can use optional parameters such as Identity, Filter, or Pool to limit the returned data to a single computer or set of computers.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsComputer cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.

Below Content Applies To: Skype for Business Server 2015

The Get-CsComputer cmdlet provides a way to quickly identify computers that are running Skype for Business Server 2015 services or server roles.
Called without any parameters, the Get-CsComputer cmdlet returns a collection of all the computers that are running Skype for Business Server 2015 services or server roles; this collection includes the Identity, pool name, and fully qualified domain name (FQDN) for each computer.
Alternatively, you can use optional parameters such as Identity, Filter, or Pool to limit the returned data to a single computer or set of computers.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsComputer
```

In Example 1 the Get-CsComputer cmdlet is used to return information about all the computers that perform service roles within your Lync Server 2010 infrastructure.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1 the Get-CsComputer cmdlet is used to return information about all the computers that perform service roles within your Lync Server infrastructure.

Get-CsComputer

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1 the Get-CsComputer cmdlet is used to return information about all the computers that perform service roles within your Skype for Business Server 2015 infrastructure.

Get-CsComputer

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsComputer -Filter "*.litwareinc.com"
```

The command shown in Example 2 uses the Filter parameter to return only those service role computers that are part of the litwareinc.com domain.
The wildcard string *.litwareinc.com restricts the returned information to computers that have an FQDN that ends with the string value ".litwareinc.com".

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 2 uses the Filter parameter to return only those service role computers that are part of the litwareinc.com domain.
The wildcard string *.litwareinc.com restricts the returned information to computers that have an FQDN that ends with the string value ".litwareinc.com".

Get-CsComputer -Filter "*.litwareinc.com"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 2 uses the Filter parameter to return only those service role computers that are part of the litwareinc.com domain.
The wildcard string *.litwareinc.com restricts the returned information to computers that have an FQDN that ends with the string value ".litwareinc.com".

Get-CsComputer -Filter "*.litwareinc.com"

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsComputer -Identity "atl-cs-001.litwareinc.com"
```

In the preceding example, the Identity parameter is used to limit the returned data to the one computer that has the FQDN atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, the Identity parameter is used to limit the returned data to the one computer that has the FQDN atl-cs-001.litwareinc.com.

Get-CsComputer -Identity "atl-cs-001.litwareinc.com"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the Identity parameter is used to limit the returned data to the one computer that has the FQDN atl-cs-001.litwareinc.com.

Get-CsComputer -Identity "atl-cs-001.litwareinc.com"

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsComputer -Pool "atl-cs-001.litwareinc.com"
```

In Example 4, the Pool parameter is used to return information about all the computers found in the pool atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, the Pool parameter is used to return information about all the computers found in the pool atl-cs-001.litwareinc.com.

Get-CsComputer -Pool "atl-cs-001.litwareinc.com"

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, the Pool parameter is used to return information about all the computers found in the pool atl-cs-001.litwareinc.com.

Get-CsComputer -Pool "atl-cs-001.litwareinc.com"

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010

FQDN of the computer to be returned.
For example: -Identity "atl-cs-001.litwareinc.com".

If this parameter is not specified, all of the computers running Lync Server 2010 will be returned.



Below Content Applies To: Lync Server 2013

FQDN of the computer to be returned.
For example: -Identity "atl-cs-001.litwareinc.com".

If this parameter is not specified, all of the computers running Lync Server will be returned.



Below Content Applies To: Skype for Business Server 2015

FQDN of the computer to be returned.
For example: -Identity "atl-cs-001.litwareinc.com".

If this parameter is not specified, all of the computers running Skype for Business Server 2015 will be returned.



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
Enables you to use wildcard characters when specifying the Identity of the computer (or computers) to be returned.
For example, this command returns information about all the computers that have an Identity that begins with the string value "atl-": -Filter "atl-*".

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

### -Pool
Below Content Applies To: Lync Server 2010

FQDN of a Lync Server 2010 pool.
When you use this parameter, information about all the computers in the specified pool will be returned.



Below Content Applies To: Lync Server 2013

FQDN of a Lync Server pool.
When you use this parameter, information about all the computers in the specified pool will be returned.



Below Content Applies To: Skype for Business Server 2015

FQDN of a Skype for Business Server 2015 pool.
When you use this parameter, information about all the computers in the specified pool will be returned.



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

### -Local
When present, returns information only for the local computer.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsComputer does not accept pipelined input.

###  
None.
The Get-CsComputer cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsComputer returns instances of the Microsoft.Rtc.Management.Deploy.Internal.Machine object.

###  
The Get-CsComputer cmdlet returns instances of the Microsoft.Rtc.Management.Deploy.Internal.Machine object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/493931a9-1670-4a76-abba-7d3c7723d2e1(OCS.14).aspx)

[Disable-CsComputer]()

[Enable-CsComputer]()

[Test-CsComputer]()

[Online Version](http://technet.microsoft.com/EN-US/library/493931a9-1670-4a76-abba-7d3c7723d2e1(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/493931a9-1670-4a76-abba-7d3c7723d2e1(OCS.16).aspx)

