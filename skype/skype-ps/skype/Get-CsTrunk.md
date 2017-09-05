---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsTrunk

## SYNOPSIS
Returns information about the SIP trunks employed by your organization.
SIP trunks connect the Skype for Business Server Voice over IP phone network with the Public Switched Telephone Network.
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
In Skype for Business Server, trunks were used to route outbound calls from a Mediation Server to a PSTN gateway.
Each gateway was limited to a single trunk; among other things this made it difficult for administrators to provide resiliency for outbound calls.
However, because trunks and PSTN gateways were essentially identical, you could retrieve information about all your trunks by running this command:

Get-CsService -PstnGateway

In Skype for Business Server, multiple trunks can be assigned to a single PSTN gateway; this means that gateways and trunks are no longer essentially identical.
In turn, that means that, in Skype for Business Server, you cannot retrieve detailed information about individual trunks by using the Get-CsService cmdlet.
Instead, detailed information about individual trunks is returned by using the new Get-CsTrunk cmdlet.

Note that, as far as the Windows PowerShell command-line interface is concerned, trunk information is read-only: you cannot create, delete or modify trunks by using PowerShell.
Those operations can only be carried out by using Skype for Business Server Topology Builder.

The functions carried out by the Get-CsTrunk cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsTrunk
```

The command shown in Example 1 returns information for all the SIP trunks configured for use in your organization.

### -------------------------- Example 2 --------------------------
```
Get-CsTrunk -Identity "PstnGateway:192.168.0.240"
```

In Example 2, information is returned for a single SIP trunk: the trunk with the Identity PstnGateway:192.168.0.240.

### -------------------------- Example 3 --------------------------
```
Get-CsTrunk -PoolFqdn "atl-cs-001.litwareinc.com"
```

The command shown in Example 3 returns information for all the SIP trunks found on the pool atl-cs-001.litwareinc.com.

### -------------------------- Example 4 --------------------------
```
Get-CsTrunk | Where-Object {$_.Routable -eq $True}
```

Example 4 returns information for all the routable SIP trunks.
To do this, the command first calls the Get-CsTrunk cmdlet without any parameters in order to return a collection of all the available SIP trunks.
This collection is then piped to the Where-Object cmdlet, which picks out only those trunks where the Routable property is equal to (-eq) True ($True).


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
Unique identifier for the SIP trunk to be returned.
For example:

`-Identity "PstnGateway:192.168.0.240"`

Note that you cannot use wildcards when specifying an Identity.
If you need to use wildcards, then include the Filter parameter instead.

If this parameter is not specified, then Get-CsTrunk returns a collection of all the SIP trunks in use in the organization.

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

`-PoolFqdn "atl-trunk-001.litwareinc.com"`

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

### None


## OUTPUTS

### Microsoft.Rtc.Management.Xds.DisplayPstnGateway#Decorated


## NOTES


## RELATED LINKS

[Get-CsTrunkConfiguration]()