---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsTrunk

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns information about the SIP trunks employed by your organization.
SIP trunks connect Microsoft Lync Server 2013 Preview's Voice over IP phone network with the Public Switched Telephone Network.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about the SIP trunks employed by your organization.
SIP trunks connect the Skype for Business Server 2015 Voice over IP phone network with the Public Switched Telephone Network.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

### Filter
```
Get-CsTrunk [-Filter <String>] [-PoolFqdn <String>] [<CommonParameters>]
```

### Identity
```
Get-CsTrunk [[-Identity] <XdsGlobalRelativeIdentity>] [-PoolFqdn <String>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

In Microsoft Lync Server 2010, trunks were used to route outbound calls from a Mediation Server to a PSTN gateway.
Each gateway was limited to a single trunk; among other things this made it difficult for administrators to provide resiliency for outbound calls.
However, because trunks and PSTN gateways were essentially identical, you could retrieve information about all your trunks by running this command:

Get-CsService -PstnGateway

In Microsoft Lync Server 2013 Preview, multiple trunks can now be assigned to a single PSTN gateway; this means that gateways and trunks are no longer essentially identical.
In turn, that means that, in Lync Server 2013 Preview, you cannot retrieve detailed information about individual trunks by using the Get-CsService cmdlet.
Instead, detailed information about individual trunks is returned by using the new Get-CsTrunk configuration.

Note that, as far as Windows PowerShell is concerned, trunk information is read-only: you cannot create, delete or modify trunks by using PowerShell.
Those operations can only be carried out by using Lync Server Topology Builder.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsTrunk"}

Lync Server Control Panel: The functions carried out by the Get-CsTrunk cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

In Skype for Business Server 2015, trunks were used to route outbound calls from a Mediation Server to a PSTN gateway.
Each gateway was limited to a single trunk; among other things this made it difficult for administrators to provide resiliency for outbound calls.
However, because trunks and PSTN gateways were essentially identical, you could retrieve information about all your trunks by running this command:

Get-CsService -PstnGateway

In Skype for Business Server 2015, multiple trunks can be assigned to a single PSTN gateway; this means that gateways and trunks are no longer essentially identical.
In turn, that means that, in Skype for Business Server 2015, you cannot retrieve detailed information about individual trunks by using the Get-CsService cmdlet.
Instead, detailed information about individual trunks is returned by using the new Get-CsTrunk cmdlet.

Note that, as far as the Windows PowerShell command-line interface is concerned, trunk information is read-only: you cannot create, delete or modify trunks by using PowerShell.
Those operations can only be carried out by using Skype for Business Server 2015 Topology Builder.

Skype for Business Server Control Panel: The functions carried out by the Get-CsTrunk cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information for all the SIP trunks configured for use in your organization.

Get-CsTrunk

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information for all the SIP trunks configured for use in your organization.

Get-CsTrunk

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, information is returned for a single SIP trunk: the trunk with the Identity PstnGateway:192.168.0.240.

Get-CsTrunk -Identity "PstnGateway:192.168.0.240"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information is returned for a single SIP trunk: the trunk with the Identity PstnGateway:192.168.0.240.

Get-CsTrunk -Identity "PstnGateway:192.168.0.240"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 3 returns information for all the SIP trunks found on the pool atl-cs-001.litwareinc.com.

Get-CsTrunk -PoolFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 3 returns information for all the SIP trunks found on the pool atl-cs-001.litwareinc.com.

Get-CsTrunk -PoolFqdn "atl-cs-001.litwareinc.com"

### -------------------------- Example 4 -------------------------- (Lync Server 2013)
```

```

Example 4 returns information for all the routable SIP trunks.
To do this, the command first calls Get-CsTrunk without any parameters in order to return a collection of all the available SIP trunks.
This collection is then piped to the Where-Object cmdlet, which picks out only those trunks where the Routable property is equal to (-eq) True ($True).

Get-CsTrunk | Where-Object {$_.Routable -eq $True}

### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 returns information for all the routable SIP trunks.
To do this, the command first calls the Get-CsTrunk cmdlet without any parameters in order to return a collection of all the available SIP trunks.
This collection is then piped to the Where-Object cmdlet, which picks out only those trunks where the Routable property is equal to (-eq) True ($True).

Get-CsTrunk | Where-Object {$_.Routable -eq $True}

## PARAMETERS

### -Filter
Enables you to use wildcard characters in order to return a SIP trunk (or collection of SIP trunks).
For example, to return a collection of all the SIP trunks configured as part of the PSTN gateway service use this syntax:

-Filter "PstnGateway:*"

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique identifier for the SIP trunk to be returned.
For example:

-Identity "PstnGateway:192.168.0.240"

Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards, then include the Filter parameter instead.

If this parameter is not specified, then Get-CsTrunk returns a collection of all the SIP trunks in use in the organization.



**Below Content Applies To:** Skype for Business Server 2015

{{Fill Identity Description}}



```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PoolFqdn
Fully qualified domain name for the trunk or PSTN gateway as defined in the topology.
For example:

-PoolFqdn "atl-trunk-001.litwareinc.com"

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsTrunk does not accept pipelined input.

###  
None.
The Get-CsTrunk cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsTrunk returns instances of the Microsoft.Rtc.Management.Xds.DisplayPstnGateway#Decorated object.

###  
The Get-CsTrunk cmdlet returns instances of the Microsoft.Rtc.Management.Xds.DisplayPstnGateway#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsTrunkConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/c49407f2-2e03-4b8b-b51b-75b12ef87fd1(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/c49407f2-2e03-4b8b-b51b-75b12ef87fd1(OCS.16).aspx)

