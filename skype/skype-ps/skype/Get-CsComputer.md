---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsComputer
schema: 2.0.0
---

# Get-CsComputer

## SYNOPSIS
Returns information about the computers that perform service roles within your Skype for Business Server infrastructure.
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
The Get-CsComputer cmdlet provides a way to quickly identify computers that are running Skype for Business Server services or server roles.
Called without any parameters, the Get-CsComputer cmdlet returns a collection of all the computers that are running Skype for Business Server services or server roles; this collection includes the Identity, pool name, and fully qualified domain name (FQDN) for each computer.
Alternatively, you can use optional parameters such as Identity, Filter, or Pool to limit the returned data to a single computer or set of computers.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsComputer
```

In Example 1 the Get-CsComputer cmdlet is used to return information about all the computers that perform service roles within your Skype for Business Server 2015 infrastructure.

### -------------------------- Example 2 --------------------------
```
Get-CsComputer -Filter "*.litwareinc.com"
```

The command shown in Example 2 uses the Filter parameter to return only those service role computers that are part of the litwareinc.com domain.
The wildcard string *.litwareinc.com restricts the returned information to computers that have an FQDN that ends with the string value ".litwareinc.com".

### -------------------------- Example 3 --------------------------
```
Get-CsComputer -Identity "atl-cs-001.litwareinc.com"
```

In Example 3, the Identity parameter is used to limit the returned data to the one computer that has the FQDN atl-cs-001.litwareinc.com.

### -------------------------- Example 4 --------------------------
```
Get-CsComputer -Pool "atl-cs-001.litwareinc.com"
```

In Example 4, the Pool parameter is used to return information about all the computers found in the pool atl-cs-001.litwareinc.com.


## PARAMETERS

### -Identity
FQDN of the computer to be returned.
For example: 

`-Identity "atl-cs-001.litwareinc.com".`

If this parameter is not specified, all of the computers running Skype for Business Server will be returned.

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
Enables you to use wildcard characters when specifying the Identity of the computer (or computers) to be returned.
For example, this command returns information about all the computers that have an Identity that begins with the string value "atl-": -Filter "atl-*".

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

### -Pool
FQDN of a Skype for Business Server pool.
When you use this parameter, information about all the computers in the specified pool will be returned.

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

### -Local
When present, returns information only for the local computer.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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

### Microsoft.Rtc.Management.Deploy.Internal.Machine


## NOTES


## RELATED LINKS

[Disable-CsComputer](Disable-CsComputer.md)

[Enable-CsComputer](Enable-CsComputer.md)

[Test-CsComputer](Test-CsComputer.md)

