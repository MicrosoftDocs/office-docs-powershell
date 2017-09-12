---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsNetworkInterSitePolicy

## SYNOPSIS

Modifies an existing network inter-site policy that defines bandwidth limitations between sites that are directly linked within a call admission control (CAC) configuration.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsNetworkInterSitePolicy [[-Identity] <XdsGlobalRelativeIdentity>] [-BWPolicyProfileID <String>]
 [-NetworkSiteID1 <String>] [-NetworkSiteID2 <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsNetworkInterSitePolicy [-Instance <PSObject>] [-BWPolicyProfileID <String>] [-NetworkSiteID1 <String>]
 [-NetworkSiteID2 <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
When network sites share a direct link, bandwidth limitations for audio and video connections can be defined between those two sites.
This cmdlet modifies a network inter-site policy that associates a bandwidth limitation policy with two directly connected sites.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsNetworkInterSitePolicy -Identity Reno_Portland -BWPolicyProfileID HighBWLimits
```

This example modifies the network site policy with the Identity Reno_Portland.
We use the BWPolicyProfileID parameter to change the bandwidth policy profile associated with this network site policy to HighBWLimits.


## PARAMETERS

### -Identity
The unique identifier of the network site policy you want to modify.
Network site policies are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is a unique name that identifies that site policy.

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

### -Instance
An object reference to a site policy that has been modified in memory.
This object must be of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.InterNetworkSitePolicyType and can be retrieved by calling the `Get-CsNetworkInterSitePolicy` cmdlet.


```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -BWPolicyProfileID
The Identity of the bandwidth policy profile that will define the limitations for this site policy.
You can retrieve a list of available profiles by calling the `Get-CsNetworkBandwidthPolicyProfile` cmdlet.

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

### -NetworkSiteID1
The Identity (NetworkSiteID) of one of the two sites associated with this policy.
The combination of NetworkSiteID1 and NetworkSiteID2 must be unique (for example, you can't have two site policies defined that connect Reno and Portland).

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

### -NetworkSiteID2
The Identity (NetworkSiteID) of one of the two sites associated with this policy.
The combination of NetworkSiteID1 and NetworkSiteID2 must be unique (for example, you can't have two site policies defined that connect Reno and Portland).

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

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

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
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.InterNetworkSitePolicyType object.
Accepts pipelined input of network inter-site policy objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.InterNetworkSitePolicyType.

## NOTES

## RELATED LINKS

[New-CsNetworkInterSitePolicy]()

[Remove-CsNetworkInterSitePolicy]()

[Get-CsNetworkInterSitePolicy]()
