---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Remove-CsNetworkRegionLink
schema: 2.0.0
---

# Remove-CsNetworkRegionLink

## SYNOPSIS
Removes a link between two regions configured for call admission control (CAC).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsNetworkRegionLink [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Regions within a network are linked through physical WAN connectivity.
This cmdlet does not impact any physical connections, but it does remove the link from the CAC configuration.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsNetworkRegionLink -Identity NA_EMEA
```

This first example removes the network region link with the Identity NA_EMEA.


### -------------------------- Example 2 --------------------------
```
Get-CsNetworkRegionLink | Where-Object {$_.BWPolicyProfileID -eq "HighBWLimits"} | Remove-CsNetworkRegionLink
```

Example 2 removes all network region links that are using the bandwidth policy profile named HighBWLimits.
The first cmdlet called in the example is the `Get-CsNetworkRegionLink` cmdlet (with no parameters), which will retrieve all region links.
This collection of links is then piped to the `Where-Object` cmdlet.
The `Where-Object` cmdlet looks through each member of the collection one-by-one, checking the value of the BWPolicyProfileID property.
If this property is equal to (-eq) HighBWLimits, we pipe that member to the `Remove-CsNetworkRegionLink` cmdlet, which removes the link.


## PARAMETERS

### -Identity
The unique identifier of the network region link you want to remove.
Network region links are created only at the global scope, so this identifier does not need to specify a scope.
Instead, it contains a string that is a unique name that identifies that link.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
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
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionLinkType object.
Accepts pipelined input of network region link objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkRegionLinkType.

## NOTES

## RELATED LINKS

[New-CsNetworkRegionLink](New-CsNetworkRegionLink.md)

[Set-CsNetworkRegionLink](Set-CsNetworkRegionLink.md)

[Get-CsNetworkRegionLink](Get-CsNetworkRegionLink.md)
