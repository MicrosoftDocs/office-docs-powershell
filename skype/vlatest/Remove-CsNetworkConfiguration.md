---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsNetworkConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Resets all the network configuration settings for a Microsoft Lync Server 2010 deployment to the default values.
This deletes an entire call admission control (CAC) deployment and related E9-1-1 configuration.

**Below Content Applies To:** Lync Server 2013

Resets all the network configuration settings for a Lync Server deployment to the default values.
This deletes an entire call admission control (CAC) deployment and related E9-1-1 configuration.
This cmdlet was introduced in Lync Server 2010.

**Below Content Applies To:** Skype for Business Server 2015

Resets all the network configuration settings for a Skype for Business Server 2015 deployment to the default values.
This deletes an entire call admission control (CAC) deployment and related E9-1-1 configuration.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Remove-CsNetworkConfiguration [-Identity] <XdsIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010, Lync Server 2013

WARNING: Running this cmdlet will delete an entire network configuration, including CAC, E9-1-1 regions and sites, and media bypass.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Remove-CsNetworkConfiguration cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsNetworkConfiguration"}

**Below Content Applies To:** Skype for Business Server 2015

WARNING: Running this cmdlet will delete an entire network configuration, including CAC, E9-1-1 regions and sites, and media bypass.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Remove-CsNetworkConfiguration -Identity Global -Confirm
```

This example removes all CAC, location, E9-1-1 network, and media bypass settings.
The Confirm parameter is used so you'll be prompted to verify you really want to do this before everything is deleted.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example removes all CAC, location, E9-1-1 network, and media bypass settings.
The Confirm parameter is used so you'll be prompted to verify you really want to do this before everything is deleted.

Remove-CsNetworkConfiguration -Identity Global -Confirm

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example removes all CAC, location, E9-1-1 network, and media bypass settings.
The Confirm parameter is used so you'll be prompted to verify you really want to do this before everything is deleted.

Remove-CsNetworkConfiguration -Identity Global -Confirm

## PARAMETERS

### -Identity
This will always be Global.

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
It is recommended that you always use this parameter with this cmdlet.

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
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkConfigurationSettings object.
Accepts pipelined input of a network configuration object.

## OUTPUTS

###  
This cmdlet does not return an object.
It removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.NetworkConfigurationSettings object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d6945015-67f7-4f04-87ae-7cb977650d96(OCS.14).aspx)

[Set-CsNetworkConfiguration]()

[Get-CsNetworkConfiguration]()

[Get-CsNetworkSite]()

[Get-CsNetworkRegionLink]()

[Get-CsNetworkInterSitePolicy]()

[Get-CsNetworkInterRegionRoute]()

[Get-CsNetworkRegion]()

[Get-CsNetworkSubnet]()

[Get-CsNetworkBandwidthPolicyProfile]()

[Online Version](http://technet.microsoft.com/EN-US/library/d6945015-67f7-4f04-87ae-7cb977650d96(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d6945015-67f7-4f04-87ae-7cb977650d96(OCS.16).aspx)

