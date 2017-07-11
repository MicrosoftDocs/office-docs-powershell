---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsLisServiceProvider

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Removes an object containing information about the web service provided by the Enhanced 9-1-1 (E9-1-1) Network Routing Provider to verify locations.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Removes an object containing information about the web service provided by the Enhanced 9-1-1 (E9-1-1) Network Routing Provider to verify locations.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsLisServiceProvider [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

In an Enterprise Voice implementation with E9-1-1, emergency calls must first be routed through an E9-1-1 Network Routing Provider to ensure that the calls are routed to the appropriate Public Safety Answering Point (PSAP).
(A PSAP is the agency in the United States that directs the calls to the nearest emergency services, such as police, fire, and ambulance services.) In order to do this, the provider must have a list of locations from the organization that it can then match against the Master Street Address Guide to ensure all locations are valid.
This cmdlet removes an entry for a provider; after running this cmdlet there will be no web service access to the provider.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsLisServiceProvider cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsLisServiceProvider"}

Below Content Applies To: Skype for Business Server 2015

In an Enterprise Voice implementation with E9-1-1, emergency calls must first be routed through an E9-1-1 Network Routing Provider to ensure that the calls are routed to the appropriate Public Safety Answering Point (PSAP).
(A PSAP is the agency in the United States that directs the calls to the nearest emergency services, such as police, fire, and ambulance services.) In order to do this, the provider must have a list of locations from the organization that it can then match against the Master Street Address Guide to ensure all locations are valid.
This cmdlet removes an entry for a provider; after running this cmdlet there will be no web service access to the provider.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsLisServiceProvider
```

This example removes the service provider web service from the E9-1-1 implementation.
There will only be, at most, one service provider defined, which will be removed by this cmdlet.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example removes the service provider web service from the E9-1-1 implementation.
There will only be, at most, one service provider defined, which will be removed by this cmdlet.

Remove-CsLisServiceProvider

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example removes the service provider web service from the E9-1-1 implementation.
There will only be, at most, one service provider defined, which will be removed by this cmdlet.

Remove-CsLisServiceProvider

## PARAMETERS

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
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
Accepts pipelined input of a Location Information Server (LIS) service provider object.

## OUTPUTS

###  
This cmdlet does not return an object or a value.
It removes an object of type System.Management.Automation.PSCustomObject.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d26302bf-7794-4125-af80-ba7c92096b6d(OCS.14).aspx)

[Set-CsLisServiceProvider]()

[Get-CsLisServiceProvider]()

[Online Version](http://technet.microsoft.com/EN-US/library/d26302bf-7794-4125-af80-ba7c92096b6d(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d26302bf-7794-4125-af80-ba7c92096b6d(OCS.16).aspx)

