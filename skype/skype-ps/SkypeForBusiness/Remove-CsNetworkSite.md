---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/remove-csnetworksite
schema: 2.0.0
title: Remove-CsNetworkSite
---

# Remove-CsNetworkSite

## SYNOPSIS
Removes a network site that has been defined for call admission control (CAC) or Enhanced 9-1-1 (E9-1-1).
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Remove-CsNetworkSite [-Identity] <XdsGlobalRelativeIdentity> [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Network sites are the offices or locations configured within each region of a CAC or E9-1-1 deployment.
This cmdlet removes a site from the CAC or E9-1-1 configuration.


## EXAMPLES

### Example 1
```
Remove-CsNetworkSite -Identity Vancouver
```

This example removes the site with the Identity Vancouver from the CAC or E9-1-1 configuration.


### Example 2
```
Get-CsNetworkSite | Where-Object {$_.BWPolicyProfileID -eq "LowBWProfile"} | Remove-CsNetworkSite
```

Example 2 removes all sites that are using the bandwidth policy profile named LowBWProfile from the CAC or E9-1-1 configuration.
The example first calls the `Get-CsNetworkSite` cmdlet to retrieve all network sites.
This collection of sites is piped to the `Where-Object` cmdlet, which narrows the collection to only those sites that have a BWPolicyProfileID equal to (-eq) LowBWProfile.
This new collection is then piped to the `Remove-CsNetworkSite` cmdlet to remove those sites.


## PARAMETERS

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The unique identifier of the network site you want to remove.
Sites are created only at the global scope, so you do not need to specify a scope.
Instead, you need to specify only the site ID.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.DisplayNetworkSiteType

Accepts pipelined input of network site objects.

## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.DisplayNetworkSiteType
This cmdlet does not return a value.
It removes an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.DisplayNetworkSiteType.

## NOTES

## RELATED LINKS

[New-CsNetworkSite](New-CsNetworkSite.md)

[Set-CsNetworkSite](Set-CsNetworkSite.md)

[Get-CsNetworkSite](Get-CsNetworkSite.md)
