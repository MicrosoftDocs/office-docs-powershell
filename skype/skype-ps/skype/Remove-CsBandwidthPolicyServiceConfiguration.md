---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Remove-CsBandwidthPolicyServiceConfiguration
schema: 2.0.0
---

# Remove-CsBandwidthPolicyServiceConfiguration

## SYNOPSIS
Removes an existing bandwidth policy service configuration.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsBandwidthPolicyServiceConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
Call admission control (CAC) is a way of determining whether to allow real-time communications sessions, such as voice or video calls, to be established based on bandwidth constraints.
Within the Skype for Business Server implementation of CAC, regions, sites and subnets are defined within a network along with the relationships and links between those entities in order to place bandwidth constraints between them.
Bandwidth Policy service is the component that performs CAC functionality in the Skype for Business Server deployment, enabling the decision as to whether sufficient bandwidth exists for a call to be established.
This cmdlet removes a bandwidth policy service configuration defined at the site level.
You can also use the cmdlet to "remove" the global bandwidth policy service; however, the global service will not actually be removed, it will simply be reset to its default values.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-CsBandwidthPolicyServiceConfiguration -Identity site:Redmond
```

This example removes the bandwidth policy service configuration defined for the Redmond site (-Identity site:Redmond).


### -------------------------- Example 2 --------------------------
```
Get-CsBandwidthPolicyServiceConfiguration | Where-Object {$_.EnableLogging -eq $False} | Remove-CsBandwidthPolicyServiceConfiguration
```

Example 2 removes all bandwidth policy service configurations where logging is disabled.
To accomplish this, the example begins with a call to the `Get-CsBandwidthPolicyServiceConfiguration` cmdlet.
This will return a collection of all bandwidth policy service configurations in the Skype for Business Server deployment.
This collection is then piped to the `Where-Object` cmdlet, which narrows the collection down to only those configurations where the EnableLogging property is equal to (-eq) False ($False).
This leaves a collection of configurations that have logging disabled.
This collection is then piped to the `Remove-CsBandwidthPolicyServiceConfiguration` cmdlet, which removes every item in the collection.


## PARAMETERS

### -Identity
The unique identifier of the configuration you want to remove.
This identifier will consist of the scope (for the global configuration) or the scope and name (for a site-level configuration, such as site:Redmond).

```yaml
Type: XdsIdentity
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
Microsoft.Rtc.Management.WritableConfig.Settings.BandwidthPolicyServiceConfiguration.BandwidthPolicyServiceConfiguration object.
Accepts pipelined input of bandwidth policy service configuration objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.BandwidthPolicyServiceConfiguration.BandwidthPolicyServiceConfiguration.

## NOTES

## RELATED LINKS

[New-CsBandwidthPolicyServiceConfiguration]()

[Set-CsBandwidthPolicyServiceConfiguration]()

[Get-CsBandwidthPolicyServiceConfiguration]()
